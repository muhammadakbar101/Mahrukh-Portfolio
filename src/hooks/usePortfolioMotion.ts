import { useEffect } from 'react';

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function animateCount(el: HTMLElement) {
  if (el.dataset.counted) return;
  el.dataset.counted = '1';
  const raw = el.textContent || '';
  const parts = raw.split(/(\d[\d,]*)/);
  const nums = parts.map((p) => (/^\d[\d,]*$/.test(p) ? Number(p.replace(/,/g, '')) : null));
  if (!nums.some((n) => n !== null)) return;

  const fmt = (val: number, orig: string) =>
    orig.includes(',') || val >= 1000 ? Math.round(val).toLocaleString('en-US') : String(Math.round(val));
  const start = performance.now();
  el.style.minWidth = `${el.offsetWidth}px`;

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / 1100);
    const ease = 1 - (1 - t) ** 3;
    el.textContent = parts.map((p, idx) => (nums[idx] === null ? p : fmt(nums[idx]! * ease, p))).join('');
    if (t < 1) requestAnimationFrame(step);
    else el.textContent = raw;
  };
  requestAnimationFrame(step);
}

export function usePortfolioMotion(routeKey: string) {
  useEffect(() => {
    const docEl = document.documentElement;
    const motion = docEl.classList.contains('motion');
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

    // 1. Copy email buttons
    const copyCleanups: (() => void)[] = [];
    document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
      const handler = async () => {
        const val = btn.dataset.copy || '';
        try {
          await navigator.clipboard.writeText(val);
          btn.textContent = 'Copied';
        } catch {
          btn.textContent = val;
        }
        window.setTimeout(() => {
          btn.textContent = 'Copy email';
        }, 2000);
      };
      btn.addEventListener('click', handler);
      copyCleanups.push(() => btn.removeEventListener('click', handler));
    });

    // 2. Back to top button
    const toTop = document.querySelector<HTMLAnchorElement>('.to-top');
    let onScrollTop: (() => void) | null = null;
    let onClickTop: ((e: Event) => void) | null = null;
    if (toTop) {
      onScrollTop = () => toTop.classList.toggle('is-shown', window.scrollY > window.innerHeight * 0.8);
      window.addEventListener('scroll', onScrollTop, { passive: true });
      onScrollTop();
      onClickTop = (e: Event) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: motion ? 'smooth' : 'auto' });
        window.history.replaceState(null, '', window.location.pathname);
      };
      toTop.addEventListener('click', onClickTop);
    }

    // 3. Scroll-synced beats & process phone
    const cleanups: (() => void)[] = [];
    const beats = [...document.querySelectorAll<HTMLElement>('.beat')];
    if (beats.length) {
      const setBeat = (idx: number) => beats.forEach((b, j) => b.classList.toggle('is-active', j === idx));
      setBeat(0);
      const beatObs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setBeat(Number((entry.target as HTMLElement).dataset.beat));
          }
        },
        { rootMargin: '-40% 0px -40% 0px' }
      );
      beats.forEach((b) => beatObs.observe(b));
      cleanups.push(() => beatObs.disconnect());
    }

    const steps = [...document.querySelectorAll<HTMLElement>('.process__step')];
    const screens = [...document.querySelectorAll<HTMLElement>('.phone__screen')];
    if (steps.length) {
      const setStep = (idx: number) => {
        steps.forEach((s, j) => s.classList.toggle('is-active', j === idx));
        screens.forEach((s, j) => s.classList.toggle('is-on', j === idx));
      };
      setStep(0);
      const stepObs = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setStep(Number((entry.target as HTMLElement).dataset.step));
          }
        },
        { rootMargin: '-45% 0px -45% 0px' }
      );
      steps.forEach((s) => stepObs.observe(s));
      cleanups.push(() => stepObs.disconnect());
    }

    // 4. Contextual Buddy Speech Bubbles
    const buddySay = document.querySelector<HTMLElement>('.buddy__say');
    if (buddySay) {
      const defaultMsg = buddySay.textContent || 'Say hello';
      const sections: [Element, string][] = (
        [
          ['.about', 'That’s me, by the sea in Karachi'],
          [
            '.services',
            matchMedia('(max-width: 760px)').matches ? 'Here’s what I can do for you' : 'Scroll, they slide sideways',
          ],
          ['.work', 'Pick one, I’ll show you how'],
          ['.ceos', 'I write as all three of them'],
          ['.own', 'This one’s my own post'],
          ['.process', 'This is how I run Fomo’s account'],
          ['.contact', 'Say hello!'],
        ] as const
      )
        .map(([sel, msg]) => [document.querySelector(sel), msg] as [Element | null, string])
        .filter((pair): pair is [Element, string] => Boolean(pair[0]));

      let activeMsg: string | null = null;
      let speechTimer = 0;

      const updateSay = () => {
        const mid = window.innerHeight / 2;
        const found = sections.find(([el]) => {
          const r = el.getBoundingClientRect();
          return r.top < mid && r.bottom > mid;
        });
        const msg = found ? found[1] : defaultMsg;
        if (msg !== activeMsg) {
          activeMsg = msg;
          buddySay.classList.remove('is-talking');
          void buddySay.offsetWidth;
          buddySay.textContent = msg;
          buddySay.classList.toggle('is-talking', Boolean(found));
          window.clearTimeout(speechTimer);
          if (found) {
            speechTimer = window.setTimeout(() => buddySay.classList.remove('is-talking'), 3500);
          }
        }
      };

      const buddyObs = new IntersectionObserver(updateSay, { threshold: [0, 0.25, 0.5, 0.75, 1] });
      sections.forEach(([el]) => buddyObs.observe(el));
      const onPageShow = (e: PageTransitionEvent) => {
        if (e.persisted) {
          activeMsg = null;
          updateSay();
        }
      };
      window.addEventListener('pageshow', onPageShow);
      cleanups.push(() => {
        buddyObs.disconnect();
        window.clearTimeout(speechTimer);
        window.removeEventListener('pageshow', onPageShow);
      });
    }

    if (!motion) {
      return () => {
        copyCleanups.forEach((fn) => fn());
        if (toTop && onScrollTop && onClickTop) {
          window.removeEventListener('scroll', onScrollTop);
          toTop.removeEventListener('click', onClickTop);
        }
        cleanups.forEach((fn) => fn());
      };
    }

    // 5. Word splits + Staggered reveals + Counters
    document.querySelectorAll<HTMLElement>('.display').forEach((el) => {
      if (el.dataset.reveal === 'words') return;
      const text = el.textContent?.trim() || '';
      const words = text.split(/\s+/);
      el.setAttribute('aria-label', text);
      el.innerHTML = words
        .map((w, i) => `<span class="word" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`)
        .join(' ');
      el.dataset.reveal = 'words';
    });

    document
      .querySelectorAll<HTMLElement>(
        [
          '.own__post',
          '.own__text',
          '.case__profile',
          '.about__photo',
          '.about__text p',
          '.facts',
          '.contact__email',
          '.socials',
          '.case__body',
          '.inside__post',
          '.strip',
          '.chapter__text',
          '.chapter__charts > *',
          '.deck',
          '.case__cta',
          '.case__next',
        ].join(',')
      )
      .forEach((el) => {
        el.dataset.reveal ??= 'up';
      });

    document
      .querySelectorAll<HTMLElement>(['.projects', '.services__list', '.case__results', '.stats__list', '.ceos__list'].join(','))
      .forEach((list) => {
        [...list.children].forEach((child, idx) => {
          const el = child as HTMLElement;
          el.dataset.reveal = 'up';
          el.style.setProperty('--i', String(Math.min(idx, 8)));
        });
      });

    const revealEl = (el: HTMLElement) => {
      el.classList.add('in');
      el.querySelectorAll<HTMLElement>('[data-count]').forEach(animateCount);
      if (el.matches('[data-count]')) animateCount(el);
    };

    const revealObs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            revealEl(entry.target as HTMLElement);
            revealObs.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85 && r.bottom > 0) {
        requestAnimationFrame(() => revealEl(el));
      } else {
        revealObs.observe(el);
      }
    });
    cleanups.push(() => revealObs.disconnect());

    // 6. Scroll & pointer motion loop (variable font, magnets, 3D tilt, marquee, pinned services, clip-path about)
    const ptr = { x: -9999, y: -9999, active: false };
    let scrollYVal = window.scrollY;
    let scrollXVal = window.scrollX;
    const rectCache = new Map<
      Element,
      { left: number; top: number; width: number; height: number; fixed: boolean; mx?: number; my?: number }
    >();
    let cacheTs = 0;
    const fixedEls = new WeakSet<Element>();

    const getCachedRect = (el: Element) => {
      const now = performance.now();
      if (now - cacheTs > 3000) {
        rectCache.clear();
        cacheTs = now;
      }
      let entry = rectCache.get(el);
      if (!entry) {
        const r = el.getBoundingClientRect();
        const fixed = fixedEls.has(el);
        entry = { left: r.left, top: r.top + (fixed ? 0 : scrollYVal), width: r.width, height: r.height, fixed };
        rectCache.set(el, entry);
      }
      const top = entry.fixed ? entry.top : entry.top - scrollYVal;
      return { left: entry.left, top, width: entry.width, height: entry.height, bottom: top + entry.height, raw: entry };
    };

    const clearCache = () => rectCache.clear();
    window.addEventListener('resize', clearCache);
    document.fonts?.ready.then(clearCache);
    const onTransitionEnd = (e: Event) => {
      if ((e.target as HTMLElement)?.closest?.('[data-reveal]')) clearCache();
    };
    document.addEventListener('transitionend', onTransitionEnd);

    let lastActivity = performance.now();
    const markActive = () => {
      lastActivity = performance.now();
    };
    const onPtrMove = (e: PointerEvent) => {
      ptr.x = e.clientX;
      ptr.y = e.clientY;
      ptr.active = true;
      markActive();
    };
    const onPtrLeave = () => {
      ptr.active = false;
    };
    window.addEventListener('pointermove', onPtrMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPtrLeave);
    window.addEventListener('scroll', markActive, { passive: true });

    // Variable font glyph morphing
    const initVarFont = () => {
      const targets = [...document.querySelectorAll<HTMLElement>('.hero__name, .display, .contact__email')];
      if (!targets.length) return null;
      const glyphs: {
        el: HTMLSpanElement;
        wght: number;
        w: number;
        wd: number;
        cx: number;
        cy: number;
        h: number;
        qw?: number;
        qd?: number;
      }[] = [];

      for (const target of targets) {
        const baseWeight = Number(getComputedStyle(target).fontWeight) || 700;
        const label = target.getAttribute('aria-label') || target.textContent?.trim() || '';
        if (!target.matches('.contact__email')) target.setAttribute('aria-label', label);
        const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
        const textNodes: Text[] = [];
        while (walker.nextNode()) {
          if (walker.currentNode.textContent?.trim()) textNodes.push(walker.currentNode as Text);
        }
        for (const tn of textNodes) {
          const frag = document.createDocumentFragment();
          for (const ch of tn.textContent || '') {
            if (ch === ' ') {
              frag.append(' ');
              continue;
            }
            const span = document.createElement('span');
            span.className = 'ch';
            span.setAttribute('aria-hidden', 'true');
            span.textContent = ch;
            frag.append(span);
            glyphs.push({ el: span, wght: baseWeight, w: baseWeight, wd: 75, cx: 0, cy: 0, h: 0 });
          }
          tn.replaceWith(frag);
        }
        if (target.matches('.contact__email')) target.setAttribute('aria-label', label);
      }

      let lastMeasure = -1e9;
      const measureGlyphs = () => {
        for (const g of glyphs) {
          const r = g.el.getBoundingClientRect();
          g.cx = r.left + r.width / 2 + scrollXVal;
          g.cy = r.top + r.height / 2 + scrollYVal;
          g.h = r.height;
        }
      };
      const invalidateGlyphs = () => {
        lastMeasure = -1e9;
      };
      window.addEventListener('resize', invalidateGlyphs);
      document.fonts?.ready.then(invalidateGlyphs);
      document.addEventListener('transitionend', (e) => {
        if ((e.target as HTMLElement)?.closest?.('[data-reveal]')) invalidateGlyphs();
      });
      cleanups.push(() => window.removeEventListener('resize', invalidateGlyphs));

      return (now: number) => {
        if (now - lastMeasure > 4000) {
          measureGlyphs();
          lastMeasure = now;
        }
        for (const g of glyphs) {
          const vy = g.cy - scrollYVal;
          if (vy < -g.h || vy > window.innerHeight + g.h) continue;
          const dist = ptr.active ? Math.hypot(ptr.x - (g.cx - scrollXVal), ptr.y - vy) : 1e9;
          const t = clamp(1 - dist / Math.max(240, g.h * 1.3), 0, 1) ** 1.4;
          const tw = lerp(g.wght, 250, t);
          const twd = lerp(75, 100, t);
          g.w = lerp(g.w, tw, 0.2);
          g.wd = lerp(g.wd, twd, 0.2);
          const qw = Math.round(g.w / 2) * 2;
          const qd = Math.round(g.wd * 2) / 2;
          if (qw !== g.qw || qd !== g.qd) {
            g.qw = qw;
            g.qd = qd;
            g.el.style.fontVariationSettings = `"wght" ${qw}, "wdth" ${qd}`;
          }
        }
      };
    };

    // Magnetic elements
    const initMagnets = () => {
      const items = [...document.querySelectorAll<HTMLElement>('.buddy canvas, .socials a, .bar nav a')].map((el) => ({
        el,
        x: 0,
        y: 0,
      }));
      items.forEach((item) => {
        if (item.el.closest('.buddy')) fixedEls.add(item.el);
      });
      return () => {
        for (const item of items) {
          const r = getCachedRect(item.el);
          if (r.raw.mx === undefined) {
            r.raw.mx = item.x;
            r.raw.my = item.y;
          }
          const dx = ptr.x - (r.left + r.width / 2 - (r.raw.mx ?? 0));
          const dy = ptr.y - (r.top + r.height / 2 - (r.raw.my ?? 0));
          const radius = Math.max(r.width, r.height) * 0.5 + 60;
          const inside = ptr.active && Math.hypot(dx, dy) < radius;
          const nx = lerp(item.x, inside ? dx * 0.3 : 0, 0.2);
          const ny = lerp(item.y, inside ? dy * 0.3 : 0, 0.2);
          if (Math.abs(nx - item.x) >= 0.05 || Math.abs(ny - item.y) >= 0.05) {
            item.x = nx;
            item.y = ny;
            item.el.style.translate = `${nx.toFixed(1)}px ${ny.toFixed(1)}px`;
          }
        }
      };
    };

    // 3D perspective tilt on about photo
    const initPhotoTilt = () => {
      const photo = document.querySelector<HTMLElement>('.about__photo');
      if (!photo) return null;
      let rx = 0;
      let ry = 0;
      return () => {
        const r = getCachedRect(photo);
        if (r.bottom < 0 || r.top > window.innerHeight) return;
        const tx = clamp((ptr.x - (r.left + r.width / 2)) / (r.width * 1.5), -1, 1);
        const ty = clamp((ptr.y - (r.top + r.height / 2)) / (r.height * 1.5), -1, 1);
        rx = lerp(rx, ptr.active ? -ty * 8 : 0, 0.1);
        ry = lerp(ry, ptr.active ? tx * 10 : 0, 0.1);
        const tf = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
        if (tf !== photo.style.transform) {
          photo.style.rotate = 'none';
          if (photo.parentElement) photo.parentElement.style.perspective = '900px';
          photo.style.transform = tf;
        }
      };
    };

    // Velocity-skewing marquee
    const initMarquee = () => {
      const track = document.querySelector<HTMLElement>('.clients__track');
      if (!track) return null;
      track.style.animation = 'none';
      let offset = 0;
      let dir = -1;
      let boost = 0;
      let prevScroll = scrollYVal;
      let prevTime = 0;
      let halfWidth = track.scrollWidth / 2;

      const recalc = () => {
        halfWidth = track.scrollWidth / 2;
      };
      window.addEventListener('resize', recalc);
      document.fonts?.ready.then(recalc);
      cleanups.push(() => window.removeEventListener('resize', recalc));

      return (now: number) => {
        const dt = prevTime ? Math.min(now - prevTime, 50) : 16;
        prevTime = now;
        const dy = scrollYVal - prevScroll;
        prevScroll = scrollYVal;
        if (dy) dir = dy > 0 ? -1 : 1;
        boost = lerp(boost, Math.min(Math.abs(dy) * 0.6, 40), 0.1);
        offset += dir * (0.04 * dt + boost);
        if (halfWidth > 0) {
          if (offset <= -halfWidth) offset += halfWidth;
          if (offset > 0) offset -= halfWidth;
        }
        track.style.transform = `translateX(${offset.toFixed(1)}px) skewX(${(-dir * boost * 0.4).toFixed(2)}deg)`;
      };
    };

    // Pinned horizontal services track
    const initPinnedServices = () => {
      const section = document.querySelector<HTMLElement>('.services');
      const list = section?.querySelector<HTMLElement>('.services__list');
      if (!section || !list || window.innerWidth < 760) return null;
      section.classList.add('is-pinned');
      let maxScroll = 0;

      const recalc = () => {
        maxScroll = Math.max(list.scrollWidth - window.innerWidth, 0);
        section.style.height = `${window.innerHeight + maxScroll}px`;
        clearCache();
      };
      recalc();
      window.addEventListener('resize', recalc);
      document.fonts?.ready.then(recalc);

      const onWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
        const rect = section.getBoundingClientRect();
        const pinned = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
        const p = -rect.top / Math.max(rect.height - window.innerHeight, 1);
        if (!pinned || (e.deltaX < 0 && p <= 0) || (e.deltaX > 0 && p >= 1)) return;
        e.preventDefault();
        window.scrollBy(0, e.deltaX);
      };
      window.addEventListener('wheel', onWheel, { passive: false });
      cleanups.push(() => {
        window.removeEventListener('resize', recalc);
        window.removeEventListener('wheel', onWheel);
      });

      const bg = section.querySelector<HTMLElement>('.services__bg');
      let lastP = -1;
      return () => {
        const r = getCachedRect(section);
        const p = clamp(-r.top / Math.max(r.height - window.innerHeight, 1), 0, 1);
        if (Math.abs(p - lastP) < 5e-4) return;
        lastP = p;
        list.style.transform = `translateX(${(-p * maxScroll).toFixed(1)}px)`;
        section.style.setProperty('--p', p.toFixed(3));
        if (bg) bg.style.transform = `translateX(${(p * 30 - 5).toFixed(2)}%)`;
      };
    };

    // About clip-path reveal
    const initAboutClip = () => {
      const about = document.querySelector<HTMLElement>('.about');
      if (!about) return null;
      let lastP = -1;
      return () => {
        const r = getCachedRect(about);
        const p = clamp((window.innerHeight - r.top) / (window.innerHeight * 0.7), 0, 1);
        if (Math.abs(p - lastP) < 0.001) return;
        lastP = p;
        const inset = (1 - p) * 4;
        about.style.clipPath = `inset(0 ${inset.toFixed(2)}% round ${((1 - p) * 48).toFixed(1)}px)`;
      };
    };

    const alwaysRun = [initMarquee()].filter(Boolean) as ((now: number) => void)[];
    const activeRun = [initPinnedServices(), initAboutClip(), ...(finePointer ? [initVarFont(), initMagnets(), initPhotoTilt()] : [])].filter(
      Boolean
    ) as ((now: number) => void)[];

    let rafId = 0;
    const tick = (now: number) => {
      scrollYVal = window.scrollY;
      scrollXVal = window.scrollX;
      for (const fn of alwaysRun) fn(now);
      if (now - lastActivity < 900) {
        for (const fn of activeRun) fn(now);
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      copyCleanups.forEach((fn) => fn());
      if (toTop && onScrollTop && onClickTop) {
        window.removeEventListener('scroll', onScrollTop);
        toTop.removeEventListener('click', onClickTop);
      }
      window.removeEventListener('resize', clearCache);
      document.removeEventListener('transitionend', onTransitionEnd);
      window.removeEventListener('pointermove', onPtrMove);
      document.documentElement.removeEventListener('pointerleave', onPtrLeave);
      window.removeEventListener('scroll', markActive);
      cleanups.forEach((fn) => fn());
    };
  }, [routeKey]);
}

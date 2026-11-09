import { useEffect } from 'react';
import { asset } from '../data/portfolioData';

export const AVATAR_IMAGE_SRC = '/mahrukh.png';

const FACE_CFG = {
  width: 648,
  height: 720,
  miniWidth: 192,
  miniHeight: 192,
};

const TAU = 140;
const RECENTER_MS = 3500;

interface FaceHandle {
  lookAt: (v: number) => void;
  lookAtPoint: (x: number) => void;
  loadAll: () => void;
  destroy: () => void;
}

function attachSeekCanvas(
  canvas: HTMLCanvasElement,
  opts: { set: 'hd' | '1x' | 'mini'; eager?: boolean; step?: number; headBottom?: number },
  registry: FaceHandle[]
): FaceHandle {
  const ctx = canvas.getContext('2d')!;
  const headBottom = opts.headBottom ?? 1;

  let targetLook = 0;
  let visible = true;
  let lastLook = -999;
  let currentLook = 0;
  let animRunning = false;
  let lastTime = 0;
  let destroyed = false;
  let centerX: number | null = null;
  let centerTs = 0;
  let rafId = 0;

  const isMini = opts.set === 'mini';
  const targetW = isMini ? FACE_CFG.miniWidth : FACE_CFG.width;
  const targetH = isMini ? FACE_CFG.miniHeight : FACE_CFG.height;

  canvas.width = targetW;
  canvas.height = targetH;

  const avatarImg = new Image();
  avatarImg.crossOrigin = 'anonymous';
  avatarImg.decoding = 'async';
  avatarImg.src = asset(AVATAR_IMAGE_SRC);

  let imgReady = false;

  const render = (force = false) => {
    if (destroyed || !imgReady) return;
    if (!force && (!visible || Math.abs(currentLook - lastLook) < 0.003)) return;

    lastLook = currentLook;
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Dynamic head tilt, horizontal shift, and perspective scaling based on look direction
    const maxShiftX = w * (isMini ? 0.06 : 0.04);
    const maxShiftY = h * (isMini ? 0.02 : 0.015);
    const shiftX = currentLook * maxShiftX;
    const shiftY = Math.abs(currentLook) * maxShiftY;
    const rotAngle = currentLook * (isMini ? 0.06 : 0.045);
    const scaleX = 1 - Math.abs(currentLook) * 0.035;

    ctx.save();
    ctx.translate(w / 2 + shiftX, h / 2 + shiftY);
    ctx.rotate(rotAngle);
    ctx.scale(scaleX, 1);

    // Draw avatar maintaining aspect ratio centered in canvas
    const imgAspect = avatarImg.naturalWidth / avatarImg.naturalHeight;
    const canvasAspect = w / h;
    let drawW = w;
    let drawH = h;
    if (imgAspect > canvasAspect) {
      drawH = h;
      drawW = h * imgAspect;
    } else {
      drawW = w;
      drawH = w / imgAspect;
    }

    ctx.drawImage(avatarImg, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();
  };

  const tick = (now: number) => {
    if (destroyed) return;
    const dt = lastTime ? Math.min(now - lastTime, 50) : 16;
    lastTime = now;
    currentLook += (targetLook - currentLook) * (1 - Math.exp(-dt / TAU));
    render();
    if (Math.abs(targetLook - currentLook) > 0.001) {
      rafId = requestAnimationFrame(tick);
    } else {
      animRunning = false;
    }
  };

  const lookAt = (v: number) => {
    targetLook = Math.max(-1, Math.min(1, v));
    if (!animRunning) {
      animRunning = true;
      lastTime = 0;
      rafId = requestAnimationFrame(tick);
    }
  };

  const lookAtPoint = (clientX: number) => {
    const now = performance.now();
    if (centerX === null || now - centerTs > 3000) {
      const rect = canvas.getBoundingClientRect();
      centerX = rect.width ? rect.left + rect.width / 2 : null;
      centerTs = now;
    }
    if (centerX === null) return;
    const cx = centerX;
    lookAt(clientX < cx ? (clientX - cx) / Math.max(cx, 1) : (clientX - cx) / Math.max(window.innerWidth - cx, 1));
  };

  const loadAll = () => {
    // Single image setup is ready once decoded
  };

  const onResize = () => {
    centerX = null;
  };
  window.addEventListener('resize', onResize);

  const io = new IntersectionObserver(
    ([entry]) => {
      const rect = entry.boundingClientRect;
      const wasVisible = visible;
      visible = entry.isIntersecting && rect.top + rect.height * headBottom > 0;
      if (visible && !wasVisible) render(true);
    },
    { threshold: Array.from({ length: 21 }, (_, idx) => idx / 20) }
  );

  avatarImg
    .decode()
    .then(() => {
      if (destroyed) return;
      imgReady = true;
      render(true);
      canvas.classList.add('is-ready');
      io.observe(canvas);
    })
    .catch(() => {
      // Fallback in case decode isn't supported or image loads via onload
      avatarImg.onload = () => {
        if (destroyed) return;
        imgReady = true;
        render(true);
        canvas.classList.add('is-ready');
        io.observe(canvas);
      };
    });

  const handle: FaceHandle = {
    lookAt,
    lookAtPoint,
    loadAll,
    destroy: () => {
      destroyed = true;
      cancelAnimationFrame(rafId);
      io.disconnect();
      window.removeEventListener('resize', onResize);
    },
  };
  registry.push(handle);
  return handle;
}

export function useFaceAndBuddy(routeKey: string) {
  useEffect(() => {
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const registry: FaceHandle[] = [];

    const heroCanvas = document.querySelector<HTMLCanvasElement>('.face');
    if (heroCanvas) {
      const isHd =
        heroCanvas.getBoundingClientRect().height * (window.devicePixelRatio || 1) > FACE_CFG.height * 1.1;
      const isMobile = window.innerWidth <= 760;
      attachSeekCanvas(
        heroCanvas,
        {
          set: isHd && !isMobile ? 'hd' : '1x',
          step: isMobile ? 3 : 1,
          headBottom: 0.55,
        },
        registry
      );
    }

    const buddyEl = document.querySelector<HTMLElement>('.buddy');
    const buddyCanvas = buddyEl?.querySelector<HTMLCanvasElement>('canvas');
    let buddyObserver: IntersectionObserver | null = null;
    if (buddyEl && buddyCanvas) {
      const buddyHandle = attachSeekCanvas(
        buddyCanvas,
        {
          set: 'mini',
          eager: !heroCanvas,
          step: 2,
        },
        registry
      );
      if (heroCanvas) {
        buddyObserver = new IntersectionObserver(
          ([entry]) => {
            const shown = !entry.isIntersecting;
            buddyEl.classList.toggle('is-shown', shown);
            if (shown) buddyHandle.loadAll();
          },
          { threshold: 0.15 }
        );
        buddyObserver.observe(heroCanvas);
      } else {
        buddyEl.classList.add('is-shown');
      }
    }

    let idleTimer: number | undefined;
    const pointAll = (clientX: number) => {
      for (const h of registry) h.lookAtPoint(clientX);
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        registry.forEach((h) => h.lookAt(0));
      }, RECENTER_MS);
    };

    const onPointer = (e: PointerEvent) => pointAll(e.clientX);
    const onLeave = () => registry.forEach((h) => h.lookAt(0));
    const onFocusIn = (e: FocusEvent) => {
      const rect = (e.target as HTMLElement)?.getBoundingClientRect?.();
      if (rect && rect.bottom > 0 && rect.top < window.innerHeight) {
        pointAll(rect.left + rect.width / 2);
      }
    };

    if (finePointer) {
      window.addEventListener('pointermove', onPointer, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);
    } else {
      window.addEventListener('pointerdown', onPointer, { passive: true });
      window.addEventListener('pointermove', onPointer, { passive: true });
    }
    window.addEventListener('focusin', onFocusIn);

    let touchLoopId: number | undefined;
    if (!finePointer && !reducedMotion) {
      const seq = [-0.6, 0, 0.6, 0, 0.4, 0];
      let stepIdx = 0;
      touchLoopId = window.setInterval(() => {
        if (!document.hidden) {
          registry.forEach((h) => h.lookAt(seq[stepIdx % seq.length]));
          stepIdx++;
        }
      }, 2400);
    }

    return () => {
      buddyObserver?.disconnect();
      window.clearTimeout(idleTimer);
      window.clearInterval(touchLoopId);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('pointerdown', onPointer);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('focusin', onFocusIn);
      registry.forEach((h) => h.destroy());
    };
  }, [routeKey]);
}
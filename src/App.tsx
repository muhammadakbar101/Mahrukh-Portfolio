import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  asset,
  CASES_BY_SLUG,
  CaseSlug,
  CEOS,
  CLIENT_TICKER,
  DMWITHMAHRUKHH_DATA,
  PROCESS_STEPS,
  PROJECTS,
  SERVICES,
  WORK_TOTALS,
} from './data/portfolioData';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CloseIcon,
  InstagramBadge,
  LinkedInBadge,
  PlatformBadges,
} from './components/Icons';
import { TopoCanvas } from './components/TopoCanvas';
import { useFaceAndBuddy } from './components/FaceSeekEngine';
import { usePortfolioMotion } from './hooks/usePortfolioMotion';
import { ContactForm } from './components/ContactForm';
import { CaseStudyView } from './components/CaseStudyView';
import { FomoCaseView } from './components/FomoCaseView';

function parseCaseSlug(pathname: string): CaseSlug | null {
  const m = pathname.match(/^\/work\/([^/]+)\/?$/);
  if (!m) return null;
  const slug = m[1] as CaseSlug;
  if (slug === 'dmwithmahrukhh' || slug in CASES_BY_SLUG) return slug;
  return null;
}

export function App() {
  const [pathname, setPathname] = useState<string>(() => window.location.pathname || '/');
  const [contactContext, setContactContext] = useState<string>('');
  const [zoomState, setZoomState] = useState<{ src: string; alt: string } | null>(null);

  const contactDialogRef = useRef<HTMLDialogElement | null>(null);
  const contactNameRef = useRef<HTMLInputElement | null>(null);
  const zoomDialogRef = useRef<HTMLDialogElement | null>(null);

  const activeCaseSlug = parseCaseSlug(pathname);
  const isHome = activeCaseSlug === null;
  const routeKey = activeCaseSlug ? `case:${activeCaseSlug}` : 'home';

  useEffect(() => {
    const onPopState = () => {
      setPathname(window.location.pathname || '/');
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (activeCaseSlug === 'dmwithmahrukhh') {
      document.title = DMWITHMAHRUKHH_DATA.pageTitle;
    } else if (activeCaseSlug) {
      document.title = CASES_BY_SLUG[activeCaseSlug].pageTitle;
    } else {
      document.title = 'Mahrukh Khan — Digital Marketing Manager | Content Strategist | Social Media Manager';
    }
  }, [activeCaseSlug]);

  const navigate = useCallback((href: string) => {
    const [rawPath, rawHash] = href.split('#');
    const targetPath = rawPath || '/';
    const fullUrl = rawHash ? `${targetPath}#${rawHash}` : targetPath;

    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', fullUrl);
      setPathname(targetPath);
      window.setTimeout(() => {
        if (rawHash) {
          const target = document.getElementById(rawHash);
          if (target) {
            target.scrollIntoView({ behavior: document.documentElement.classList.contains('motion') ? 'smooth' : 'auto' });
            return;
          }
        }
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 40);
    } else {
      window.history.pushState(null, '', fullUrl);
      if (rawHash) {
        if (rawHash === 'top') {
          window.scrollTo({ top: 0, behavior: document.documentElement.classList.contains('motion') ? 'smooth' : 'auto' });
        } else {
          document.getElementById(rawHash)?.scrollIntoView({
            behavior: document.documentElement.classList.contains('motion') ? 'smooth' : 'auto',
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: document.documentElement.classList.contains('motion') ? 'smooth' : 'auto' });
      }
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  const openContact = useCallback((ctx: string) => {
    setContactContext(ctx);
    const dlg = contactDialogRef.current;
    if (dlg && !dlg.open) {
      dlg.showModal();
      contactNameRef.current?.focus();
    }
  }, []);

  const openZoom = useCallback((src: string, alt: string) => {
    setZoomState({ src, alt });
    const dlg = zoomDialogRef.current;
    if (dlg && !dlg.open) {
      dlg.showModal();
    }
  }, []);

  useFaceAndBuddy(routeKey);
  usePortfolioMotion(routeKey);

  return (
    <>
      <TopoCanvas />
      <a className="skip" href="#content">
        Skip to content
      </a>

      <header className={isHome ? 'bar bar--overlay' : 'bar'}>
        <a className="wordmark" href="/" onClick={(e) => handleNavClick(e, '/')}>
          Mahrukh Khan
        </a>
        <nav aria-label="Main">
          <a className="underline-link" href="/#work" onClick={(e) => handleNavClick(e, '/#work')}>
            Work
          </a>
          <a className="underline-link" href="/#about" onClick={(e) => handleNavClick(e, '/#about')}>
            About
          </a>
          <a className="underline-link" href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')}>
            Contact
          </a>
        </nav>
      </header>

      <main id="content" key={routeKey}>
        {isHome ? (
          <>
            <section className="hero" aria-labelledby="hero-name">
              <h1 className="hero__name" id="hero-name">
                Mahrukh
              </h1>
              <div className="hero__stage">
                <canvas
                  className="face"
                  width={648}
                  height={720}
                  role="img"
                  aria-label="Portrait of Mahrukh Khan, turning to look at your cursor"
                />
              </div>
              <p className="hero__intro">
                Digital Marketing Manager in Karachi. <strong>I turn quiet social pages into brands people notice, follow, and message.</strong> Combining creative storytelling, strategic content, and performance-driven marketing across Pakistan, Australia, Dubai, USA, and Sri Lanka.
              </p>
              <a className="hero__scroll" href="#services" onClick={(e) => handleNavClick(e, '/#services')}>
                <span>Scroll to explore my work</span>
                <ArrowDownIcon size={18} />
              </a>
            </section>

            <section className="services" id="services" aria-labelledby="services-title">
              <div className="services__pin">
                <p className="services__bg" aria-hidden="true">
                  Strategy · Content · Meta Ads · Growth · Strategy · Content · Meta Ads · Growth
                </p>
                <div className="wrap services__head">
                  <h2 className="display" id="services-title">
                    What I do
                  </h2>
                  <p className="services__hint" aria-hidden="true">
                    Keep scrolling <span>→</span>
                  </p>
                </div>
                <ul className="services__list">
                  {SERVICES.map((svc) => (
                    <li key={svc.title}>
                      <a
                        className="service"
                        href={svc.href}
                        onClick={(e) => handleNavClick(e, svc.href)}
                      >
                        <span className="service__pic">
                          <img
                            src={asset(svc.img)}
                            alt=""
                            loading="lazy"
                            style={svc.objectPosition ? { objectPosition: svc.objectPosition } : undefined}
                          />
                        </span>
                        <span className="service__stat">{svc.stat}</span>
                        <span className="service__go">
                          See the work <ArrowRightIcon />
                        </span>
                        <h3>{svc.title}</h3>
                        <p>{svc.description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="services__progress" aria-hidden="true">
                  <span />
                </div>
              </div>
            </section>

            <section className="clients" aria-label="Companies and professional roles">
              <div className="clients__track">
                <ul>
                  {CLIENT_TICKER.map((c) => (
                    <li key={c.name}>
                      {c.name} <small>{c.role}</small>
                    </li>
                  ))}
                </ul>
                <ul aria-hidden="true">
                  {CLIENT_TICKER.map((c) => (
                    <li key={`${c.name}-dup`}>
                      {c.name} <small>{c.role}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="work" id="work" aria-labelledby="work-title">
              <div className="wrap">
                <h2 className="display" id="work-title">
                  Selected work
                </h2>
                <ul className="stats__list" aria-label="Key campaign achievements">
                  {WORK_TOTALS.map((st) => (
                    <li key={st.label}>
                      <strong data-count>{st.count}</strong>
                      <span>{st.label}</span>
                    </li>
                  ))}
                </ul>
                <p className="stats__asof">Verified campaign results across multi-market education, local hospitality, and commercial brand accounts.</p>
                <ul className="projects">
                  {PROJECTS.map((proj) => (
                    <li key={proj.client}>
                      <a href={proj.href} onClick={(e) => handleNavClick(e, proj.href)}>
                        <span className="projects__client">{proj.client}</span>
                        <span className="projects__what">
                          {proj.what}
                          <small>
                            <PlatformBadges platforms={proj.platforms} size={16} />
                          </small>
                        </span>
                        <span className="projects__result">
                          <strong data-count>{proj.result}</strong>
                          <span>{proj.unit}</span>
                          <small className="projects__asof">{proj.asOf}</small>
                        </span>
                        <span className="projects__go">
                          <span>Read the case</span>
                          <ArrowRightIcon />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="ceos" aria-labelledby="ceos-title">
              <div className="wrap">
                <h2 className="display" id="ceos-title">
                  Featured Client Campaigns
                </h2>
                <ul className="ceos__list">
                  {CEOS.map((ceo) => (
                    <li key={ceo.name}>
                      <a className="ceo" href={ceo.href} onClick={(e) => handleNavClick(e, ceo.href)}>
                        <span className="ceo__banner">
                          <img src={asset(ceo.banner)} alt="" loading="lazy" width={840} height={309} />
                        </span>
                        <img
                          className="ceo__photo"
                          src={asset(ceo.photo)}
                          alt={ceo.name}
                          loading="lazy"
                          width={240}
                          height={240}
                        />
                        <span className="ceo__name">{ceo.name}</span>
                        <span className="ceo__role">{ceo.role}</span>
                        <span className="ceo__stats">
                          <span>
                            <strong>{ceo.followers}</strong>
                          </span>
                          <span>
                            <strong>{ceo.impressions}</strong>
                          </span>
                        </span>
                        <span className="ceo__go">
                          See campaign details <ArrowRightIcon />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="own" aria-labelledby="own-title">
              <div className="wrap own__grid">
                <a
                  className="own__post"
                  href="/work/posh-education/"
                  onClick={(e) => handleNavClick(e, '/work/posh-education/')}
                >
                  <img
                    src={asset('/projects/posh-spotlight.svg')}
                    alt="Posh Education lead generation performance spotlight: 71 leads generated in 6 days on PKR 4,711 ad spend"
                    width={1088}
                    height={1327}
                    loading="lazy"
                  />
                </a>
                <div className="own__text">
                  <div className="own__who">
                    <img src={asset('/mahrukh.png')} alt="Mahrukh Khan" width={192} height={192} style={{ objectFit: 'cover' }} />
                    <p>
                      <strong>Mahrukh Khan</strong>
                      <span>Featured Campaign Spotlight</span>
                    </p>
                  </div>
                  <h2 className="display" id="own-title">
                    Small Budget. Strategic Execution. 71 Leads.
                  </h2>
                  <p className="own__hook">“PKR 66.35 cost per lead across a 6-day campaign.”</p>
                  <p>
                    A lead-generation campaign for Posh Education &amp; Migration Services promoting the January 2027 UK study intake. Rather than relying on heavy ad spend, the emphasis was on audience precision, creative split-testing, and conversion copy.
                  </p>
                  <dl className="own__stats">
                    <div>
                      <dd data-count>71</dd>
                      <dt>leads generated</dt>
                    </div>
                    <div>
                      <dd data-count>4,711</dd>
                      <dt>PKR total ad spend</dt>
                    </div>
                    <div>
                      <dd data-count>68,796</dd>
                      <dt>ad views</dt>
                    </div>
                  </dl>
                  <a
                    className="button"
                    href="/work/posh-education/"
                    onClick={(e) => handleNavClick(e, '/work/posh-education/')}
                  >
                    Read the case study
                  </a>
                </div>
              </div>
            </section>

            <section className="process" aria-labelledby="process-title">
              <div className="wrap process__grid">
                <div className="process__steps">
                  <h2 className="display" id="process-title">
                    How I Work
                  </h2>
                  <ol>
                    {PROCESS_STEPS.map((st) => (
                      <li key={st.step} className="process__step" data-step={st.step}>
                        <span className="process__num">{st.num}</span>
                        <h3>{st.title}</h3>
                        <p>{st.description}</p>
                        <img
                          className="process__shot"
                          src={asset(st.img)}
                          alt={st.alt}
                          width={738}
                          height={1600}
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="process__phone" aria-hidden="true">
                  <div className="phone">
                    {PROCESS_STEPS.map((st, idx) => (
                      <img
                        key={st.step}
                        className={`phone__screen${idx === 0 ? ' is-on' : ''}`}
                        src={asset(st.img)}
                        alt=""
                        width={738}
                        height={1600}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="about" id="about" aria-labelledby="about-title">
              <div className="wrap about__grid">
                <img
                  className="about__photo"
                  src={asset('/mahrukh.png')}
                  width={1200}
                  height={1600}
                  alt="Mahrukh Khan, Digital Marketing Manager and Content Strategist"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
                <div className="about__text">
                  <h2 className="display" id="about-title">
                    Who’s behind the strategy
                  </h2>
                  <p>
                    I’m Mahrukh Khan, a digital marketing manager, content strategist, and creative professional based in Karachi, Pakistan. My professional journey began with graphic design and gradually expanded into social media management, digital marketing, content strategy, and performance advertising.
                  </p>
                  <p>
                    Over the years, I’ve worked with businesses across education, hospitality, home services, and wellness, helping them build stronger digital identities and connect with their audiences. My experience includes managing multi-market marketing activities across Pakistan, Australia, and Sri Lanka, as well as developing organic content strategies and paid lead-generation campaigns.
                  </p>
                  <p>
                    I believe effective marketing is a combination of creativity, strategy, and understanding the numbers behind the results. Whether I’m designing a visual, developing a content strategy, or managing an advertising campaign, I focus on creating work that has a clear purpose and delivers measurable value.
                  </p>
                  <p>
                    I enjoy turning ideas into meaningful digital experiences and helping businesses transform their online presence into something people notice, trust, and engage with.
                  </p>
                  <dl className="facts">
                    <div>
                      <dt>Based in</dt>
                      <dd>Karachi, Pakistan</dd>
                    </div>
                    <div>
                      <dt>Experience</dt>
                      <dd>4+ years in design, digital marketing &amp; social media</dd>
                    </div>
                    <div>
                      <dt>Currently</dt>
                      <dd>Marketing Manager at Posh Education &amp; Migration Services</dd>
                    </div>
                    <div>
                      <dt>Markets</dt>
                      <dd>Pakistan, Australia, Sri Lanka, Dubai, USA</dd>
                    </div>
                    <div>
                      <dt>Specialties</dt>
                      <dd>Meta Ads, Lead Gen, Content Strategy, Brand Design, SEO</dd>
                    </div>
                    <div>
                      <dt>Platforms</dt>
                      <dd className="facts__platforms">
                        <LinkedInBadge size={18} />
                        <InstagramBadge size={18} />
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            <section className="contact" id="contact" aria-labelledby="contact-title">
              <div className="wrap">
                <h2 className="display" id="contact-title">
                  Let’s turn your digital presence into measurable growth
                </h2>
                <div className="contact__grid">
                  <ContactForm idPrefix="contact" context="home contact section" />
                  <div className="contact__side">
                    <div className="contact__me">
                      <img src={asset('/mahrukh.png')} alt="Mahrukh Khan" width={192} height={192} style={{ objectFit: 'cover' }} />
                      <p>
                        <strong>Mahrukh Khan</strong>
                        <span>Usually replies within 24 hours</span>
                      </p>
                    </div>
                    <p className="contact__label">Or email directly</p>
                    <p className="contact__email">mk9049854@gmail.com</p>
                    <button className="contact__copy" type="button" data-copy="mk9049854@gmail.com">
                      Copy email
                    </button>
                  </div>
                </div>
                <ul className="socials">
                  <li>
                    <a
                      className="social"
                      href="https://www.linkedin.com/in/mahrukh-khan-967671333/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Mahrukh Khan on LinkedIn"
                    >
                      <LinkedInBadge size={28} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="social"
                      href="https://www.instagram.com/dmwithmahrukhh/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Mahrukh Khan on Instagram"
                    >
                      <InstagramBadge size={28} />
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </>
        ) : activeCaseSlug === 'dmwithmahrukhh' ? (
          <FomoCaseView onNavigate={navigate} onZoom={openZoom} onOpenContact={openContact} />
        ) : (
          <CaseStudyView
            slug={activeCaseSlug}
            onNavigate={navigate}
            onZoom={openZoom}
            onOpenContact={openContact}
          />
        )}
      </main>

      <footer className="foot">
        <div className="wrap foot__row">
          <span>© 2026 Mahrukh Khan. All Rights Reserved.</span>
          <span className="foot__credit">
            Digital Marketing Manager &amp; Content Strategist
          </span>
        </div>
      </footer>

      <a
        className="buddy"
        href="/#contact"
        aria-label="Get in touch with Mahrukh"
        onClick={(e) => handleNavClick(e, '/#contact')}
      >
        <canvas width={192} height={192} aria-hidden="true" />
        <span className="buddy__say">Say hello</span>
      </a>

      <dialog
        ref={contactDialogRef}
        className="cdialog"
        aria-labelledby="cdialog-title"
        onClick={(e) => {
          if (e.target === contactDialogRef.current) contactDialogRef.current.close();
        }}
      >
        <div className="cdialog__in">
          <button
            className="cdialog__close"
            type="button"
            aria-label="Close"
            onClick={() => contactDialogRef.current?.close()}
          >
            <CloseIcon size={22} />
          </button>
          <div className="cdialog__head">
            <img src={asset('/mahrukh.png')} alt="Mahrukh Khan" width={192} height={192} style={{ objectFit: 'cover', borderRadius: '50%' }} />
            <div>
              <h2 id="cdialog-title">Send me a message</h2>
              <p>I’ll reply by email, usually within 24 hours.</p>
            </div>
          </div>
          <ContactForm idPrefix="dlg" context={contactContext} nameInputRef={contactNameRef} />
        </div>
      </dialog>

      <dialog
        ref={zoomDialogRef}
        className="zoom"
        aria-label="Enlarged image"
        onClick={(e) => {
          const img = zoomDialogRef.current?.querySelector('.zoom__img');
          if (e.target !== img) zoomDialogRef.current?.close();
        }}
      >
        <button
          type="button"
          className="zoom__close"
          aria-label="Close"
          onClick={() => zoomDialogRef.current?.close()}
        >
          <CloseIcon size={22} />
        </button>
        <img className="zoom__img" src={zoomState?.src || undefined} alt={zoomState?.alt || ''} />
      </dialog>

      <a className="to-top" href="#top" aria-label="Back to top">
        <ArrowUpIcon size={22} />
        <span>Top</span>
      </a>
    </>
  );
}

export default App;

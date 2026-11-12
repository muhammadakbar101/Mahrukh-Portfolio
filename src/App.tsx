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
  FacebookBadge,
  InstagramBadge,
  LinkedInBadge,
  PlatformBadges,
  TikTokBadge,
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
                  title="Yes, I'm following your cursor. No, it's not creepy. Probably."
                />
              </div>
              <div className="hero__intro">
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    marginBottom: '0.3rem',
                    color: 'var(--olive)',
                  }}
                >
                  HEY, I'M MAHRUKH. 👋
                </span>
                <strong style={{ fontSize: '1.25rem', lineHeight: 1.25, display: 'block' }}>
                  I make brands hard to scroll past.
                </strong>
                <p style={{ margin: '0.4rem 0 0', fontSize: '0.96rem', lineHeight: 1.4 }}>
                  Digital Marketing Manager · Content Strategist · Social Media Manager. Part creative brain, part strategy nerd, and plot twist? I'm also a medical technology student. 🩺
                </p>
                <small style={{ display: 'block', marginTop: '0.35rem', color: 'var(--olive-deep)', fontSize: '0.85rem' }}>
                  Based in Karachi, Pakistan. Creating for brands beyond borders.
                </small>
              </div>
              <div className="hero__actions">
                <a className="button" href="#work" onClick={(e) => handleNavClick(e, '/#work')}>
                  See the work 👀
                </a>
                <a
                  className="button button--quiet"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '/#contact')}
                >
                  Let’s make something happen ↗
                </a>
              </div>
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
                  <div>
                    <h2 className="display" id="services-title">
                      One brain. Too many creative tabs open.
                    </h2>
                    <p style={{ color: 'var(--olive-deep)', margin: '0.4rem 0 0', fontSize: '1.05rem', maxWidth: '48ch' }}>
                      From the first brainstorm to the final performance report, here's what I bring to the table.
                    </p>
                  </div>
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
                      {c.logo && (
                        <img
                          src={asset(c.logo)}
                          alt={c.name}
                          className="client-logo"
                          loading="lazy"
                        />
                      )}
                      <span>{c.name}</span> <small>{c.role}</small>
                    </li>
                  ))}
                </ul>
                <ul aria-hidden="true">
                  {CLIENT_TICKER.map((c) => (
                    <li key={`${c.name}-dup`}>
                      {c.logo && (
                        <img
                          src={asset(c.logo)}
                          alt={c.name}
                          className="client-logo"
                          loading="lazy"
                        />
                      )}
                      <span>{c.name}</span> <small>{c.role}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="work" id="work" aria-labelledby="work-title">
              <div className="wrap">
                <h2 className="display" id="work-title">
                  Proof I don’t just yap about marketing.
                </h2>
                <p style={{ color: 'var(--olive-deep)', margin: '0.5rem 0 1.5rem', fontSize: '1.2rem', maxWidth: '44ch' }}>
                  The ideas, the execution, the creative experiments, and the results. Welcome to my camera roll, but make it professional.
                </p>
                <ul className="stats__list" aria-label="Key campaign achievements">
                  {WORK_TOTALS.map((st) => (
                    <li key={st.label}>
                      <strong data-count>{st.count}</strong>
                      <span>{st.label}</span>
                    </li>
                  ))}
                </ul>
                <p className="stats__asof">Different projects. Different wins. All real receipts.</p>
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
                          <span>See campaign details</span>
                          <ArrowRightIcon />
                        </span>
                        {ceo.socialLinks && (
                          <div className="ceo__socials" onClick={(e) => e.stopPropagation()}>
                            {ceo.socialLinks.instagram && (
                              <a
                                href={ceo.socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ceo__social-btn"
                                aria-label={`${ceo.name} Instagram`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <InstagramBadge size={13} />
                              </a>
                            )}
                            {ceo.socialLinks.facebook && (
                              <a
                                href={ceo.socialLinks.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ceo__social-btn"
                                aria-label={`${ceo.name} Facebook`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FacebookBadge size={13} />
                              </a>
                            )}
                          </div>
                        )}
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
                    src={asset('/work/meta-insights/page_3.jpg')}
                    alt="Posh Education lead generation performance spotlight: 500+ leads generated and 107K+ views in one month"
                    width={1190}
                    height={1684}
                    loading="lazy"
                  />
                </a>
                <div className="own__text">
                  <div className="own__who">
                    <img src={asset('/mahrukh.png')} alt="Mahrukh Khan" width={192} height={192} style={{ objectFit: 'cover' }} />
                    <p>
                      <strong>Mahrukh Khan</strong>
                      <span style={{ color: 'var(--pink-deep)', fontWeight: 700 }}>THE RECEIPTS ARE RECEIPTING. 📈</span>
                    </p>
                  </div>
                  <h2 className="display" id="own-title">
                    Strategic Execution. 500+ Leads.
                  </h2>
                  <p className="own__hook">“107K+ ad views in one month across international markets.”</p>
                  <p>
                    For the UK study intake and international admissions at Posh Education &amp; Migration Services, I developed high-converting campaigns built on precise audience targeting, creative testing, and message refinement. The campaigns generated over 500+ verified leads and over 107K+ ad views in a single month.
                  </p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--olive)', fontStyle: 'italic', margin: '0.5rem 0 1rem' }}>
                    Not magic. Just strategy, creative thinking and a whole lot of watching the numbers.
                  </p>
                  <dl className="own__stats">
                    <div>
                      <dd data-count>500+</dd>
                      <dt>leads generated</dt>
                    </div>
                    <div>
                      <dd data-count>107K+</dd>
                      <dt>views in 1 month</dt>
                    </div>
                    <div>
                      <dd data-count>102K+</dd>
                      <dt>viewers reached</dt>
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
                    There’s a method to the madness.
                  </h2>
                  <p style={{ color: 'var(--olive-deep)', margin: '0.5rem 0 1rem', fontSize: '1.15rem' }}>
                    And yes, there are approximately 37 tabs open somewhere.
                  </p>
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
                  <h2 className="display" id="about-title" style={{ color: '#ffffff' }}>
                    So, who’s the girl behind all these tabs?
                  </h2>
                  <p style={{ color: '#e5f2e3' }}>
                    Hey again. I’m Mahrukh. Digital marketer. Creative strategist. Designer. And, in a slightly unexpected plot twist, a medical technology student. 🩺
                  </p>
                  <p style={{ color: '#e5f2e3' }}>
                    My creative journey started with graphic design and grew into social media management, content strategy, digital marketing and performance advertising. Somewhere along the way, I realized I didn't just enjoy making things look good. I wanted to understand why people notice certain content, what makes them engage and how creative ideas translate into business results.
                  </p>
                  <p style={{ color: '#e5f2e3' }}>
                    I've worked across education, hospitality, home services, aesthetics, wellness and entertainment, collaborating with brands in different markets and learning how to adapt ideas to very different audiences.
                  </p>
                  <p style={{ color: '#e5f2e3' }}>
                    I love bringing a concept to life from start to finish — planning it, scripting it, designing it, creating it and understanding its performance afterward. And when I'm not buried in marketing dashboards and editing timelines? There's a pretty good chance I'm studying anatomy or physiology. Basically, I love figuring out how things work. Whether it's the human body or an Instagram algorithm.
                  </p>

                  <div style={{ marginTop: '2rem', padding: '1.35rem', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '1rem', border: '1px solid rgba(244, 182, 194, 0.3)' }}>
                    <strong style={{ fontSize: '1.15rem', color: '#ffffff', display: 'block', marginBottom: '0.65rem' }}>
                      Currently Juggling:
                    </strong>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.8, color: '#f0f8ef' }}>
                      <li>🩺 Medical sciences textbooks</li>
                      <li>🎨 Creative projects</li>
                      <li>🎬 Reels and editing timelines</li>
                      <li>📊 Ad campaigns and analytics</li>
                      <li>☕ An entirely reasonable amount of caffeine. Probably.</li>
                    </ul>
                  </div>

                  <dl className="facts" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
                    <div>
                      <dt style={{ color: 'var(--pink)' }}>Based in</dt>
                      <dd style={{ color: '#ffffff' }}>Karachi, Pakistan</dd>
                    </div>
                    <div>
                      <dt style={{ color: 'var(--pink)' }}>Experience</dt>
                      <dd style={{ color: '#ffffff' }}>4+ years in design, digital marketing &amp; social media</dd>
                    </div>
                    <div>
                      <dt style={{ color: 'var(--pink)' }}>Currently</dt>
                      <dd style={{ color: '#ffffff' }}>Marketing Manager at Posh Education &amp; Migration Services</dd>
                    </div>
                    <div>
                      <dt style={{ color: 'var(--pink)' }}>Markets</dt>
                      <dd style={{ color: '#ffffff' }}>Pakistan, Australia, Sri Lanka, Dubai, USA</dd>
                    </div>
                    <div>
                      <dt style={{ color: 'var(--pink)' }}>Specialties</dt>
                      <dd style={{ color: '#ffffff' }}>Meta Ads, Lead Gen, Content Strategy, Brand Design, SEO</dd>
                    </div>
                    <div>
                      <dt style={{ color: 'var(--pink)' }}>Platforms</dt>
                      <dd className="facts__platforms">
                        <LinkedInBadge size={18} />
                        <InstagramBadge size={18} />
                        <FacebookBadge size={18} />
                        <TikTokBadge size={18} />
                      </dd>
                    </div>
                  </dl>

                  <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '1.5rem' }}>
                    <strong style={{ fontSize: '1.15rem', color: '#ffffff', display: 'block', marginBottom: '1rem' }}>
                      Additional Experience
                    </strong>
                    <div style={{ display: 'grid', gap: '0.9rem', fontSize: '1rem', color: '#e5f2e3' }}>
                      <div>
                        <strong style={{ color: 'var(--pink)' }}>Happy Palace Group of Schools</strong> — <span style={{ color: '#ffffff' }}>First Youngest Female Gen Z, Social Media &amp; Visual Designing Intern (2-Month Internship)</span>
                        <p style={{ margin: '0.35rem 0 0', fontSize: '0.95rem', color: '#e5f2e3', lineHeight: 1.5 }}>
                          Delivered hooky, scroll-stopping mockups, mood boards, posts, and visuals. Awarded an official Certificate of Appreciation by Managing Directors Ather Khan and Faizan Khan.
                        </p>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--pink)' }}>Fusion TV Network</strong> — <span style={{ color: '#ffffff' }}>Social Media Manager (October 2025 – June 2026)</span>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--pink)' }}>Jaroder Walla’s School</strong> — <span style={{ color: '#ffffff' }}>Social Media Marketing Manager (August 2024 – October 2025)</span>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--pink)' }}>Freelance Graphic Designer</strong> — <span style={{ color: '#ffffff' }}>November 2022 – Present</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="contact" id="contact" aria-labelledby="contact-title">
              <div className="wrap">
                <h2 className="display" id="contact-title">
                  Got a brand? I’ve got ideas.
                </h2>
                <p style={{ color: 'var(--olive-deep)', margin: '0.5rem 0 1.5rem', fontSize: '1.2rem', maxWidth: '52ch' }}>
                  Whether you're hiring, launching something exciting, looking for a freelancer or just need someone who understands both the aesthetic and the analytics — I'd love to hear about it. Let’s make your brand someone’s favorite thing to scroll past.
                </p>
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
            Creating things worth stopping the scroll for.
          </span>
        </div>
      </footer>

      <a
        className="buddy"
        href="#contact"
        onClick={(e) => handleNavClick(e, '/#contact')}
        aria-label="Ask Mahrukh Khan about marketing or design projects"
      >
        <canvas
          width={192}
          height={192}
          role="img"
          aria-label="Miniature animated portrait of Mahrukh Khan tracking your cursor"
        />
        <span className="buddy__say">Got a project? Say hello!</span>
      </a>

      <a
        className="to-top"
        href="#top"
        onClick={(e) => handleNavClick(e, '/#top')}
        aria-label="Back to top"
      >
        <ArrowUpIcon size={18} />
        <span>Top</span>
      </a>

      <dialog ref={contactDialogRef} className="cdialog" aria-labelledby="cdialog-title">
        <div className="cdialog__in">
          <button
            type="button"
            className="cdialog__close"
            aria-label="Close contact dialog"
            onClick={() => contactDialogRef.current?.close()}
          >
            <CloseIcon size={20} />
          </button>
          <div className="cdialog__head">
            <img src={asset('/mahrukh.png')} alt="Mahrukh Khan" width={192} height={192} style={{ objectFit: 'cover' }} />
            <div>
              <h2 id="cdialog-title">Got a brand? I’ve got ideas.</h2>
              <p>Let’s build campaigns and content that actually get results.</p>
            </div>
          </div>
          <ContactForm idPrefix="dialog" context={contactContext || 'popup dialog'} />
        </div>
      </dialog>

      <dialog
        ref={zoomDialogRef}
        className="zoom"
        aria-label="Enlarged image view"
        onClick={(e) => {
          if (e.target === zoomDialogRef.current) {
            zoomDialogRef.current?.close();
          }
        }}
      >
        {zoomState && (
          <>
            <button
              type="button"
              className="zoom__close"
              aria-label="Close enlarged view"
              onClick={() => zoomDialogRef.current?.close()}
            >
              <CloseIcon size={20} />
            </button>
            <img className="zoom__img" src={zoomState.src} alt={zoomState.alt} />
          </>
        )}
      </dialog>
    </>
  );
}
export default App;

import React, { useRef } from 'react';
import { asset, CASES_BY_SLUG, CaseSlug } from '../data/portfolioData';
import { ArrowLeftIcon, ArrowRightIcon, PlatformBadges, ZoomExpandIcon } from './Icons';

interface CaseStudyViewProps {
  slug: Exclude<CaseSlug, 'dmwithmahrukhh'>;
  onNavigate: (href: string) => void;
  onZoom: (src: string, alt: string) => void;
  onOpenContact: (context: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  slug,
  onNavigate,
  onZoom,
  onOpenContact,
}) => {
  const data = CASES_BY_SLUG[slug];
  const stripTrackRef = useRef<HTMLUListElement | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  const scrollStrip = (dir: number) => {
    const track = stripTrackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <article className="case">
      <header className="case__hero has-banner">
        <img className="case__hero-bg" src={asset(data.banner)} alt="" />
        <div className="wrap case__hero-in">
          <a className="case__back underline-link" href="/#work" onClick={(e) => handleLinkClick(e, '/#work')}>
            All work
          </a>
          <div className="case__who">
            {data.photo && (
              <img
                className="case__photo"
                src={asset(data.photo)}
                alt={data.photoAlt || data.client}
                width={240}
                height={240}
              />
            )}
            <p className="case__client">
              <strong>{data.client}</strong>
              <span>{data.role}</span>
            </p>
          </div>
          <h1 className="display">{data.title}</h1>
          {data.headlineQuote && <p className="case__headline">{data.headlineQuote}</p>}
          <div className="case__links">
            <span className="case__platform">
              <PlatformBadges platforms={data.platforms} size={20} />
            </span>
          </div>
        </div>
      </header>

      <div className="wrap">
        <dl className="case__results">
          {data.results.map((r) => (
            <div key={r.dt}>
              <dt>{r.dt}</dt>
              <dd data-count>{r.dd}</dd>
            </div>
          ))}
        </dl>

        <p className="case__context">
          {data.context.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </p>

        <div className="case__body prose">
          <p>{data.introParagraph}</p>
          <h2 id="what-i-did">What I did</h2>
          {data.whatIDid.map((block, idx) =>
            typeof block === 'string' ? (
              <p key={idx}>{block}</p>
            ) : (
              <ul key={idx}>
                {block.bullets.map((b) => (
                  <li key={b.bold}>
                    <strong>{b.bold}</strong> {b.text}
                  </li>
                ))}
              </ul>
            )
          )}
          <h2 id="what-happened">What happened</h2>
          {data.whatHappened.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          {data.extraSection && (
            <>
              <h2 id={data.extraSection.id}>{data.extraSection.heading}</h2>
              {data.extraSection.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </>
          )}
        </div>

        {data.inside && (
          <section className="inside" aria-labelledby="inside-title">
            <h2 className="display" id="inside-title">
              Inside the post
            </h2>
            <div className="inside__grid">
              <figure className="inside__post">
                <button
                  type="button"
                  className="inside__zoom"
                  aria-label="Enlarge the post"
                  onClick={() => onZoom(asset(data.inside!.img), data.inside!.alt)}
                >
                  <img
                    src={asset(data.inside.img)}
                    alt={data.inside.alt}
                    width={data.inside.width}
                    height={data.inside.height}
                  />
                  <span className="inside__hint">
                    <ZoomExpandIcon size={16} />
                    <span className="hint-mouse">Click to enlarge</span>
                    <span className="hint-touch">Tap to enlarge</span>
                  </span>
                </button>
              </figure>
              <ol className="inside__beats">
                {data.inside.beats.map((beat, idx) => (
                  <li key={beat.label} className="beat" data-beat={idx}>
                    <span className="beat__label">{beat.label}</span>
                    <blockquote>{beat.quote}</blockquote>
                    <p>{beat.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {data.strip && (
          <section className="strip" aria-labelledby="strip-title">
            <div className="strip__head">
              <h2 className="display" id="strip-title">
                More from this work
              </h2>
              {data.strip.showNav && (
                <div className="strip__nav">
                  <button
                    type="button"
                    className="strip__btn"
                    aria-label="Previous"
                    onClick={() => scrollStrip(-1)}
                  >
                    <ArrowLeftIcon size={20} />
                  </button>
                  <button type="button" className="strip__btn" aria-label="Next" onClick={() => scrollStrip(1)}>
                    <ArrowRightIcon className="" size={20} />
                  </button>
                </div>
              )}
            </div>
            <ul ref={stripTrackRef} className="strip__track">
              {data.strip.items.map((item) => (
                <li key={item.zoom}>
                  <button
                    type="button"
                    className="strip__item"
                    aria-label={`Enlarge: ${item.alt}`}
                    onClick={() => onZoom(asset(item.zoom), item.alt)}
                  >
                    <span className="strip__frame">
                      <img
                        src={asset(item.zoom)}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        loading="lazy"
                      />
                    </span>
                    <span className="strip__cap">{item.cap}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

        <aside className="case__cta" aria-label="Work with Mahrukh">
          <h2>{data.ctaHeading}</h2>
          <p>Tell me a little about you or your brand, and I’ll reply with how I’d approach it.</p>
          <div className="case__cta-actions">
            <button className="button" type="button" onClick={() => onOpenContact(data.ctaContext)}>
              Send me a message
            </button>
          </div>
        </aside>

        <a
          className="case__next"
          href={data.next.href}
          onClick={(e) => handleLinkClick(e, data.next.href)}
        >
          <span className="case__next-cover">
            <img src={asset(data.next.cover)} alt="" loading="lazy" />
          </span>
          <span className="case__next-text">
            <span>{data.next.label}</span>
            <strong>{data.next.title}</strong>
          </span>
        </a>
      </div>
    </article>
  );
};

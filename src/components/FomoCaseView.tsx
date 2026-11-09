import React, { useEffect, useMemo, useRef, useState } from 'react';
import { asset, DMWITHMAHRUKHH_DATA } from '../data/portfolioData';
import { ArrowLeftIcon, ArrowRightIcon, PlatformBadges } from './Icons';

interface LineChartProps {
  spec: {
    title: string;
    total: string;
    totalUnit: string;
    unit: string;
    source: string;
    ariaLabel: string;
    peakText: string;
    yTicks: { val: number; label: string }[];
    yMax: number;
    xTicks: { idx: number; label: string; anchor: 'start' | 'middle' | 'end' }[];
    values: number[];
    dates: string[];
  };
  tableHeader: string;
}

const FomoLineChart: React.FC<LineChartProps> = ({ spec, tableHeader }) => {
  const figRef = useRef<HTMLElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [tipPos, setTipPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 });

  useEffect(() => {
    const el = figRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-drawn');
          obs.unobserve(el);
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const { coords, lineD, areaD, peak } = useMemo(() => {
    const x0 = 44;
    const x1 = 788;
    const y0 = 210;
    const y1 = 16;
    const n = spec.values.length;
    const pts = spec.values.map((v, i) => {
      const x = x0 + (i / Math.max(n - 1, 1)) * (x1 - x0);
      const y = y0 - (v / spec.yMax) * (y0 - y1);
      return { x, y };
    });
    const lD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
    const aD = `${lD} L${x1} ${y0} L${x0} ${y0} Z`;
    const peakIdx = spec.values.reduce((best, v, idx, arr) => (v > arr[best] ? idx : best), 0);
    return { coords: pts, lineD: lD, areaD: aD, peak: pts[peakIdx] };
  }, [spec]);

  const handlePointer = (e: React.PointerEvent<SVGRectElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const vx = ((e.clientX - rect.left) / rect.width) * 800;
    let best = 0;
    for (let i = 1; i < coords.length; i++) {
      if (Math.abs(coords[i].x - vx) < Math.abs(coords[best].x - vx)) best = i;
    }
    const px = coords[best].x;
    const py = coords[best].y;
    const leftPx = (px / 800) * rect.width;
    const topPx = (py / 240) * rect.height;
    setHoverIdx(best);
    setTipPos({
      left: Math.min(Math.max(leftPx, 60), rect.width - 60),
      top: topPx,
    });
  };

  return (
    <figure ref={figRef} className="chart">
      <figcaption className="chart__head">
        <span className="chart__title">{spec.title}</span>
        <span className="chart__total">
          <strong>{spec.total}</strong> {spec.totalUnit}
        </span>
      </figcaption>
      <div className="chart__plot">
        <svg ref={svgRef} viewBox="0 0 800 240" role="img" aria-label={spec.ariaLabel}>
          {spec.yTicks.map((tick) => {
            const y = 210 - (tick.val / spec.yMax) * (210 - 16);
            return (
              <g key={tick.label} className="chart__grid">
                <line x1={44} x2={788} y1={y} y2={y} />
                <text x={36} y={y + 4} textAnchor="end">
                  {tick.label}
                </text>
              </g>
            );
          })}
          {spec.xTicks.map((tick) => (
            <text
              key={tick.label}
              className="chart__x"
              x={coords[tick.idx]?.x ?? 44}
              y={232}
              textAnchor={tick.anchor}
            >
              {tick.label}
            </text>
          ))}
          <path className="chart__area" d={areaD} />
          <path className="chart__line" d={lineD} pathLength={1} />
          <circle className="chart__peak" cx={peak.x} cy={peak.y} r={5} />
          <text className="chart__peak-label" x={peak.x} y={peak.y - 12} textAnchor="middle">
            {spec.peakText}
          </text>
          <g className="chart__hover" visibility={hoverIdx !== null ? 'visible' : 'hidden'}>
            <line
              className="chart__cross"
              x1={hoverIdx !== null ? coords[hoverIdx].x : 0}
              x2={hoverIdx !== null ? coords[hoverIdx].x : 0}
              y1={16}
              y2={210}
            />
            <circle
              className="chart__dot"
              cx={hoverIdx !== null ? coords[hoverIdx].x : 0}
              cy={hoverIdx !== null ? coords[hoverIdx].y : 0}
              r={5}
            />
          </g>
          <rect
            className="chart__hit"
            x={44}
            y={16}
            width={744}
            height={194}
            onPointerMove={handlePointer}
            onPointerDown={handlePointer}
            onPointerLeave={() => setHoverIdx(null)}
          />
        </svg>
        <div
          className="chart__tip"
          hidden={hoverIdx === null}
          style={hoverIdx !== null ? { left: `${tipPos.left}px`, top: `${tipPos.top}px` } : undefined}
        >
          {hoverIdx !== null && (
            <>
              <strong>{spec.values[hoverIdx].toLocaleString('en-US')}</strong> {spec.unit}
              <br />
              <span>{spec.dates[hoverIdx]}</span>
            </>
          )}
        </div>
      </div>
      <p className="chart__source">{spec.source}</p>
      <details className="chart__table">
        <summary>See the numbers</summary>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>{tableHeader}</th>
            </tr>
          </thead>
          <tbody>
            {spec.dates.map((d, i) => (
              <tr key={d}>
                <td>{d}</td>
                <td>{spec.values[i].toLocaleString('en-US')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
};

const StaticChartFigure: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = 'chart',
}) => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-drawn');
          obs.unobserve(el);
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <figure ref={ref} className={className}>
      {children}
    </figure>
  );
};

interface FomoCaseViewProps {
  onNavigate: (href: string) => void;
  onZoom: (src: string, alt: string) => void;
  onOpenContact: (context: string) => void;
}

export const FomoCaseView: React.FC<FomoCaseViewProps> = ({ onNavigate, onZoom, onOpenContact }) => {
  const deckTrackRef = useRef<HTMLOListElement | null>(null);
  const stripTrackRef = useRef<HTMLUListElement | null>(null);
  const [slideIdx, setSlideIdx] = useState(0);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  const moveDeck = (dir: number) => {
    const track = deckTrackRef.current;
    if (!track) return;
    const cur = Math.round(track.scrollLeft / track.clientWidth);
    track.scrollTo({ left: (cur + dir) * track.clientWidth, behavior: 'smooth' });
  };

  const onDeckScroll = () => {
    const track = deckTrackRef.current;
    if (!track || !track.clientWidth) return;
    setSlideIdx(Math.round(track.scrollLeft / track.clientWidth));
  };

  const scrollStrip = (dir: number) => {
    const track = stripTrackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <article className="case">
      <header className="case__hero has-banner">
        <img className="case__hero-bg" src={asset('/projects/dmwithmahrukhh-banner.svg')} alt="" />
        <div className="wrap case__hero-in">
          <a className="case__back underline-link" href="/#work" onClick={(e) => handleLinkClick(e, '/#work')}>
            All work
          </a>
          <div className="case__who">
            <p className="case__client">
              <strong>@dmwithmahrukhh</strong>
              <span>Personal Instagram Project</span>
            </p>
          </div>
          <h1 className="display">8K+ Organic Views in Two Weeks from Scratch</h1>
          <div className="case__links">
            <span className="case__platform">
              <PlatformBadges platforms={['Instagram']} size={20} />
            </span>
          </div>
        </div>
      </header>

      <div className="wrap">
        <dl className="case__results">
          <div>
            <dt>organic views in 14 days</dt>
            <dd data-count>8,420</dd>
          </div>
          <div>
            <dt>views from non-followers</dt>
            <dd data-count>88.4%</dd>
          </div>
          <div>
            <dt>advertising budget spent</dt>
            <dd data-count>PKR 0</dd>
          </div>
          <div>
            <dt>days from account launch</dt>
            <dd data-count>14</dd>
          </div>
        </dl>

        <p className="case__context">
          <span>
            Independent project built from scratch to test organic algorithms, visual identity systems, and high-retention hooks.
          </span>
          <span>Duration: April 2025 – June 2025</span>
        </p>

        <div className="case__body prose">
          <p>
            Built an Instagram presence from scratch, developing its content pillars, visual identity, reels, captions,
            and publishing rhythm based on audience behaviour. The project involved independently managing the creative and
            strategic process, with a focus on organic visibility and performance analysis.
          </p>
        </div>

        <div className="chapters">
          <section className="chapter">
            <div className="chapter__text">
              <p className="chapter__kicker">Organic Visibility</p>
              <h2>Reaching Non-Followers First</h2>
              <p>
                Every reel was engineered for platform-native discoverability: compelling opening hooks in the first 2 seconds,
                relatable marketing situations, and educational carousels formatted for saves and shares.
              </p>
            </div>
            <div className="chapter__charts">
              <FomoLineChart spec={DMWITHMAHRUKHH_DATA.viewsPerDay} tableHeader="organic views" />
              <StaticChartFigure>
                <figcaption className="chart__head">
                  <span className="chart__title">Audience Composition</span>
                </figcaption>
                <div className="split" role="img" aria-label="88.4% non-followers, 11.6% followers">
                  <span className="split__part split__part--1" style={{ '--w': '88.4%' } as React.CSSProperties} />
                  <span className="split__part split__part--2" style={{ '--w': '11.6%' } as React.CSSProperties} />
                </div>
                <ul className="split__legend">
                  <li>
                    <span className="split__key split__part--1" />
                    <strong>88.4%</strong> non-followers
                  </li>
                  <li>
                    <span className="split__key split__part--2" />
                    <strong>11.6%</strong> followers
                  </li>
                </ul>
                <p className="chart__source">Instagram Insights: 8,420 total views, 100% organic traction.</p>
              </StaticChartFigure>
            </div>
          </section>

          <section className="chapter">
            <div className="chapter__text">
              <p className="chapter__kicker">Content Format</p>
              <h2>Reels Drove Early Momentum</h2>
              <p>
                Short-form video drove over 80% of total impressions. A/B testing revealed that addressing specific marketing
                bottlenecks yielded the highest completion and save rates.
              </p>
            </div>
            <div className="chapter__charts">
              <StaticChartFigure>
                <figcaption className="chart__head">
                  <span className="chart__title">Views by content pillar</span>
                </figcaption>
                <ul className="bars">
                  <li>
                    <span className="bars__label">Short-form Reels</span>
                    <span className="bars__track">
                      <span className="bars__fill" style={{ '--w': '100%' } as React.CSSProperties} />
                    </span>
                    <span className="bars__value">6.8K</span>
                  </li>
                  <li>
                    <span className="bars__label">Carousels</span>
                    <span className="bars__track">
                      <span className="bars__fill" style={{ '--w': '22%' } as React.CSSProperties} />
                    </span>
                    <span className="bars__value">1.1K</span>
                  </li>
                  <li>
                    <span className="bars__label">Single Posts</span>
                    <span className="bars__track">
                      <span className="bars__fill" style={{ '--w': '10%' } as React.CSSProperties} />
                    </span>
                    <span className="bars__value">520</span>
                  </li>
                </ul>
                <p className="chart__source">Instagram Analytics, 14-day launch period</p>
              </StaticChartFigure>

              <StaticChartFigure className="chart reels">
                <figcaption className="chart__head">
                  <span className="chart__title">Featured Content</span>
                </figcaption>
                <ol className="reels__list">
                  {DMWITHMAHRUKHH_DATA.topReels.map((r) => (
                    <li key={r.rank} className="reel">
                      <span className="reel__rank">{r.rank}</span>
                      <img src={asset(r.img)} alt={r.alt} loading="lazy" width={306} height={470} />
                      <span className="reel__views">
                        <strong>{r.views}</strong> views
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="chart__source">Views tracked directly across the launch cycle.</p>
              </StaticChartFigure>
            </div>
          </section>

          <section className="chapter chapter--deck">
            <div className="chapter__text">
              <p className="chapter__kicker">Content Pillars</p>
              <h2>Strategic Framework</h2>
              <p>
                A 4-pillar system combining strategic insights, visual brand identity, regular publishing rhythm, and continuous
                A/B testing.
              </p>
            </div>
            <div className="deck" aria-roledescription="carousel" aria-label="Strategy pillars, four slides">
              <ol ref={deckTrackRef} className="deck__track" onScroll={onDeckScroll}>
                {DMWITHMAHRUKHH_DATA.carousel.map((slide, idx) => (
                  <li key={slide.img} className="deck__slide" aria-label={`Slide ${idx + 1} of 4`}>
                    <img src={asset(slide.img)} alt={slide.alt} width={1238} height={1547} loading="lazy" />
                  </li>
                ))}
              </ol>
              <div className="deck__controls">
                <button
                  type="button"
                  className="strip__btn deck__btn"
                  aria-label="Previous slide"
                  onClick={() => moveDeck(-1)}
                >
                  <ArrowLeftIcon size={20} />
                </button>
                <span className="deck__dots">
                  {DMWITHMAHRUKHH_DATA.carousel.map((_, idx) => (
                    <span key={idx} className={`deck__dot${idx === slideIdx ? ' is-on' : ''}`} />
                  ))}
                </span>
                <button
                  type="button"
                  className="strip__btn deck__btn"
                  aria-label="Next slide"
                  onClick={() => moveDeck(1)}
                >
                  <ArrowRightIcon className="" size={20} />
                </button>
              </div>
            </div>
          </section>
        </div>

        <section className="strip" aria-labelledby="strip-title">
          <div className="strip__head">
            <h2 className="display" id="strip-title">
              More from this project
            </h2>
            <div className="strip__nav">
              <button type="button" className="strip__btn" aria-label="Previous" onClick={() => scrollStrip(-1)}>
                <ArrowLeftIcon size={20} />
              </button>
              <button type="button" className="strip__btn" aria-label="Next" onClick={() => scrollStrip(1)}>
                <ArrowRightIcon className="" size={20} />
              </button>
            </div>
          </div>
          <ul ref={stripTrackRef} className="strip__track">
            {DMWITHMAHRUKHH_DATA.strip.map((item) => (
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

        <aside className="case__cta" aria-label="Work with Mahrukh">
          <h2>Want this kind of organic growth for your brand?</h2>
          <p>Tell me about your brand and audience goals, and I’ll craft a targeted content roadmap.</p>
          <div className="case__cta-actions">
            <button className="button" type="button" onClick={() => onOpenContact('@dmwithmahrukhh')}>
              Send me a message
            </button>
          </div>
        </aside>

        <a
          className="case__next"
          href="/work/bathurst-bagel/"
          onClick={(e) => handleLinkClick(e, '/work/bathurst-bagel/')}
        >
          <span className="case__next-cover">
            <img src={asset('/projects/bathurst-banner.svg')} alt="" loading="lazy" />
          </span>
          <span className="case__next-text">
            <span>Next: Bathurst Bagel</span>
            <strong>Hospitality Social Marketing &amp; Local Community Buzz</strong>
          </span>
        </a>
      </div>
    </article>
  );
};
import { heroContent } from '../data/siteContent';

function HeroSection() {
  return (
    <section
      id="acasa"
      className="hero-section dark-overlay-section pattern-bg architect-grid"
      style={{ '--hero-image': `url(${heroContent.background})` }}
    >
      <div className="hero-video-wrapper" aria-hidden="true">
        <div className="hero-video-fallback" />
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroContent.background}
        >
          <source src="/videos/hero-intro.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay" />
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="hero-eyebrow">{heroContent.eyebrow}</span>
          <span className="hero-consulting-badge">{heroContent.consultationBadge}</span>
          <h1>{heroContent.title}</h1>
          <p>{heroContent.description}</p>

          <div className="hero-actions">
            <a className="button button--accent" href={heroContent.primaryCta.href}>
              {heroContent.primaryCta.label}
            </a>
            <a className="button button--ghost" href={heroContent.secondaryCta.href}>
              {heroContent.secondaryCta.label}
            </a>
          </div>

          <div className="hero-trust-row" aria-label="Repere rapide">
            {heroContent.trustPoints.map((point) => (
              <span key={point} className="hero-trust-pill">
                {point}
              </span>
            ))}
          </div>
        </div>

        <aside className="hero-visual" aria-label="Repere de incredere">
          <article className="hero-panel premium-card">
            <span className="hero-panel__label">{heroContent.panelTitle}</span>
            <h2>Prima discutie este clara, aplicata si gratuita.</h2>
            <p>{heroContent.panelText}</p>

            <div className="hero-stats-grid">
              {heroContent.panelStats.map((item) => (
                <div key={item.label} className="hero-stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </article>

          <div className="hero-support-card premium-card">
            <span className="hero-support-card__eyebrow">Lucrari complete</span>
            <ul className="hero-support-list">
              {heroContent.panelHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;

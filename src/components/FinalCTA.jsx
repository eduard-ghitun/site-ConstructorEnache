import { finalCtaContent } from '../data/siteContent';

function FinalCTA() {
  return (
    <section className="section section--tight pattern-bg">
      <div className="container">
        <div className="final-cta">
          <div>
            <span className="section-eyebrow">{finalCtaContent.eyebrow}</span>
            <h2>{finalCtaContent.title}</h2>
            <p>{finalCtaContent.description}</p>
          </div>
          <a className="button button--accent glow-accent" href="#contact">
            {finalCtaContent.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;

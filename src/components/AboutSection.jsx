import SectionHeader from './SectionHeader';
import { aboutContent } from '../data/siteContent';

function AboutSection() {
  return (
    <section id="despre" className="section pattern-bg">
      <div className="container about-grid">
        <div>
          <SectionHeader
            eyebrow="Despre noi"
            title={aboutContent.title}
            description={aboutContent.paragraphs[0]}
          />
          <p className="section-paragraph">{aboutContent.paragraphs[1]}</p>

          <div className="about-metrics">
            {aboutContent.metrics.map((item) => (
              <article key={item.label} className="about-metric-card premium-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="about-card">
          <div className="about-checklist">
            {aboutContent.highlights.map((item) => (
              <div key={item} className="about-checklist__item">
                <span className="check-bullet" aria-hidden="true">
                  +
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="about-spotlight">
            <span>Executie completa</span>
            <h3>{aboutContent.spotlight.title}</h3>
            <p>{aboutContent.spotlight.text}</p>
          </div>

          <div className="about-experience">
            <span>{aboutContent.experienceCard.eyebrow}</span>
            <h3>{aboutContent.experienceCard.title}</h3>
            <p>{aboutContent.experienceCard.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

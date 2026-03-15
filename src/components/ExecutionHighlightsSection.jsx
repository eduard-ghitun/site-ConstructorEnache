import SectionHeader from './SectionHeader';
import { executionHighlights } from '../data/siteContent';
import { iconMap } from './icons';

function ExecutionHighlightsSection() {
  return (
    <section className="section pattern-bg">
      <div className="container">
        <SectionHeader
          eyebrow="Ce executam pentru clientii nostri"
          title="Preluam lucrari complete si lucrari individuale, structurate clar pentru nevoile reale din santier."
          description="Fie ca este vorba despre o casa noua, o etapa de structura, un pachet de finisaje sau instalatii integrate, lucram astfel incat executia sa ramana clara si usor de coordonat."
        />

        <div className="execution-grid">
          {executionHighlights.map((item) => (
            <article key={item.title} className="execution-card premium-card">
              <div className="icon-chip icon-chip--soft">{iconMap[item.icon]}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="execution-tags">
                {item.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExecutionHighlightsSection;

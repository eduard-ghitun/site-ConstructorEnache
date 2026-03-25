import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { localAreaCards } from '../data/sitePagesContent';

function LocalAreasSection({
  eyebrow = 'Acoperire locala',
  title = 'Suntem vizibili si usor de gasit pentru proiecte din Suceava si Botosani.',
  description = 'Am creat pagini locale dedicate pentru a raspunde mai clar cautarilor din zona si pentru a directiona rapid fiecare client catre informatia relevanta.',
}) {
  return (
    <section className="section pattern-bg">
      <div className="container">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <div className="local-area-grid">
          {localAreaCards.map((area) => (
            <article key={area.slug} className="local-area-card premium-card">
              <span className="service-accent">{area.title}</span>
              <p>{area.description}</p>
              <ul className="service-list" aria-label={`Zone acoperite pentru ${area.title}`}>
                {area.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className="button button--ghost" to={`/${area.slug}`}>
                {area.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocalAreasSection;

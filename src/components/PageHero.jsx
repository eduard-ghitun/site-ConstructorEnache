import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

function renderAction(action, className) {
  if (!action) {
    return null;
  }

  if (action.href.startsWith('http') || action.href.startsWith('tel:') || action.href.startsWith('mailto:')) {
    return (
      <a className={className} href={action.href}>
        {action.label}
      </a>
    );
  }

  if (action.href.startsWith('#')) {
    return (
      <a className={className} href={action.href}>
        {action.label}
      </a>
    );
  }

  return (
    <Link className={className} to={action.href}>
      {action.label}
    </Link>
  );
}

function PageHero({ eyebrow, title, description, primaryCta, secondaryCta, stats, breadcrumbs }) {
  return (
    <section className="page-hero dark-overlay-section pattern-bg architect-grid">
      <div className="container page-hero__layout">
        <div className="page-hero__copy">
          <Breadcrumbs items={breadcrumbs} />
          {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
          <h1>{title}</h1>
          <p>{description}</p>

          <div className="page-hero__actions">
            {renderAction(primaryCta, 'button button--accent')}
            {renderAction(secondaryCta, 'button button--ghost')}
          </div>
        </div>

        <aside className="page-hero__panel premium-card" aria-label="Repere rapide">
          <span className="service-accent">Lucrari premium, fara complicatii inutile</span>
          <div className="page-hero__stats">
            {stats?.map((item) => (
              <article key={item.label} className="page-hero__stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default PageHero;

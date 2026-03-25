import { Link } from 'react-router-dom';
import FaqSection from '../components/FaqSection';
import LocalAreasSection from '../components/LocalAreasSection';
import PageHero from '../components/PageHero';
import SectionHeader from '../components/SectionHeader';
import { localPagesContent } from '../data/sitePagesContent';

function LocalLandingPage({ cityKey }) {
  const page = localPagesContent[cityKey];

  if (!page) {
    return null;
  }

  return (
    <>
      <PageHero
        {...page.hero}
        breadcrumbs={[
          { label: 'Acasa', href: '/' },
          { label: page.city },
        ]}
      />

      <section className="section pattern-bg">
        <div className="container page-grid">
          <div className="page-stack">
            <SectionHeader
              eyebrow={`Servicii in ${page.city}`}
              title={`Lucram pentru clienti din ${page.city} si din ${page.county} cu o abordare clara, premium si usor de urmarit.`}
              description={page.introParagraphs[0]}
            />
            <p className="page-lead">{page.introParagraphs[1]}</p>
          </div>

          <aside className="page-side-card premium-card">
            <h2>Zone apropiate unde putem interveni</h2>
            <ul className="service-list" aria-label={`Localitati apropiate de ${page.city}`}>
              {page.nearbyAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <Link className="button button--accent" to="/contact">
              {page.cta.buttonLabel}
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section--alt pattern-bg architect-grid">
        <div className="container">
          <SectionHeader
            eyebrow={`Servicii ${page.city}`}
            title={`Ce servicii putem executa pentru clientii din ${page.city}`}
            description={`Fiecare bloc de mai jos este scris special pentru pagina ${page.city}, astfel incat continutul sa ramana natural si relevant local.`}
          />

          <div className="page-card-grid page-card-grid--two">
            {page.serviceHighlights.map((item) => (
              <article key={item.title} className="page-info-card premium-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pattern-bg">
        <div className="container">
          <SectionHeader
            eyebrow={`De ce ${page.city}`}
            title={`De ce ne aleg clientii din ${page.city}`}
            description={`Ne intereseaza sa fim relevanti pentru cautarile locale din ${page.city}, dar fara texte artificiale sau supraoptimizate.`}
          />

          <div className="page-card-grid page-card-grid--three">
            {page.whyChoose.map((item) => (
              <article key={item.title} className="page-info-card premium-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="page-cta-card premium-card">
            <div>
              <h2>{page.cta.title}</h2>
              <p>{page.cta.description}</p>
            </div>
            <div className="page-cta-card__actions">
              <Link className="button button--accent" to="/contact">
                {page.cta.buttonLabel}
              </Link>
              <Link className="button button--ghost" to="/servicii">
                Vezi toate serviciile
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow={`FAQ ${page.city}`}
        title={`Intrebari frecvente despre lucrari in ${page.city}`}
        description={`Raspunsuri utile pentru clientii care cauta servicii de constructii in ${page.city} sau in zone apropiate.`}
        items={page.faqs}
      />

      <LocalAreasSection
        title="Optimizarea locala este construita pe pagini dedicate, nu pe texte duplicate."
        description="Fiecare oras are propria pagina, propria meta descriere, propriul H1 si propriile blocuri de continut local."
      />
    </>
  );
}

export default LocalLandingPage;

import DeliveryStagesSection from '../components/DeliveryStagesSection';
import ExecutionHighlightsSection from '../components/ExecutionHighlightsSection';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import LocalAreasSection from '../components/LocalAreasSection';
import PageHero from '../components/PageHero';
import ServicesSection from '../components/ServicesSection';
import { servicesPageContent } from '../data/sitePagesContent';

function ServicesPage() {
  return (
    <>
      <PageHero
        {...servicesPageContent.hero}
        breadcrumbs={[
          { label: 'Acasa', href: '/' },
          { label: 'Servicii' },
        ]}
      />

      <section className="section pattern-bg">
        <div className="container page-card-grid page-card-grid--three">
          {servicesPageContent.reasons.map((item) => (
            <article key={item.title} className="page-info-card premium-card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ServicesSection />
      <ExecutionHighlightsSection />
      <DeliveryStagesSection />
      <LocalAreasSection
        title="Am organizat si pagini locale pentru serviciile cautate frecvent in Suceava si Botosani."
        description="Asta sustine atat SEO-ul local, cat si orientarea rapida a clientilor catre zona relevanta pentru proiectul lor."
      />
      <FaqSection
        title="Intrebari frecvente despre serviciile noastre de constructii"
        description="Raspunsuri scurte pentru lucrarile pe care clientii ni le cer cel mai des in Suceava si Botosani."
        items={servicesPageContent.serviceFaqs}
      />
      <FinalCTA />
    </>
  );
}

export default ServicesPage;

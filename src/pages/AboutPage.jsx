import AboutSection from '../components/AboutSection';
import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';
import StatsSection from '../components/StatsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import { aboutPageContent } from '../data/sitePagesContent';

function AboutPage() {
  return (
    <>
      <PageHero
        {...aboutPageContent.hero}
        breadcrumbs={[
          { label: 'Acasa', href: '/' },
          { label: 'Despre' },
        ]}
      />

      <section className="section pattern-bg">
        <div className="container page-grid">
          <div className="page-stack">
            {aboutPageContent.areaNotes.map((item) => (
              <p key={item} className="page-lead">
                {item}
              </p>
            ))}
          </div>

          <div className="page-card-grid">
            {aboutPageContent.principles.map((item) => (
              <article key={item.title} className="page-info-card premium-card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <StatsSection />
      <WhyChooseUsSection />
      <FinalCTA />
    </>
  );
}

export default AboutPage;

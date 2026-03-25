import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';
import PageHero from '../components/PageHero';
import { contactPageContent } from '../data/sitePagesContent';

function ContactPage() {
  return (
    <>
      <PageHero
        {...contactPageContent.hero}
        breadcrumbs={[
          { label: 'Acasa', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="section pattern-bg">
        <div className="container page-card-grid page-card-grid--three">
          {contactPageContent.supportCards.map((item) => (
            <article key={item.title} className="page-info-card premium-card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactSection />
      <FaqSection
        title="Intrebari frecvente despre contact si oferta"
        description="Cateva raspunsuri utile pentru prima discutie despre lucrare."
        items={contactPageContent.faqs}
      />
    </>
  );
}

export default ContactPage;

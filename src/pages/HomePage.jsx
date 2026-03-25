import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import DeliveryStagesSection from '../components/DeliveryStagesSection';
import ExecutionHighlightsSection from '../components/ExecutionHighlightsSection';
import FaqSection from '../components/FaqSection';
import FinalCTA from '../components/FinalCTA';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import { homeFaqs } from '../data/sitePagesContent';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExecutionHighlightsSection />
      <DeliveryStagesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <FaqSection
        title="Intrebari frecvente despre serviciile noastre in Suceava si Botosani"
        description="Cateva raspunsuri rapide pentru clientii care cauta local o firma de constructii serioasa, usor de contactat si capabila sa lucreze etapizat."
        items={homeFaqs}
      />
      <FinalCTA />
      <ContactSection />
    </>
  );
}

export default HomePage;

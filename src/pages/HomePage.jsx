import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import DeliveryStagesSection from '../components/DeliveryStagesSection';
import ExecutionHighlightsSection from '../components/ExecutionHighlightsSection';
import FinalCTA from '../components/FinalCTA';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';

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
      <FinalCTA />
      <ContactSection />
    </>
  );
}

export default HomePage;

import BenefitCard from './BenefitCard';
import SectionHeader from './SectionHeader';
import { benefits } from '../data/siteContent';

function WhyChooseUsSection() {
  return (
    <section className="section pattern-bg">
      <div className="container">
        <SectionHeader
          eyebrow="De ce sa ne alegi"
          title="Clientii ne aleg pentru experienta reala din santier, consultanta gratuita si executie bine organizata de la inceput pana la final."
          description="Experienta acumulata in Italia si continuata in Romania ne ajuta sa oferim recomandari mai clare, lucrari mai bine coordonate si o abordare serioasa pentru proiecte complete sau etape separate."
        />

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;

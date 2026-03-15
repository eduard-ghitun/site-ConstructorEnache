import SectionHeader from './SectionHeader';
import { deliveryStages } from '../data/siteContent';
import { iconMap } from './icons';

function DeliveryStagesSection() {
  return (
    <section className="section section--alt pattern-bg architect-grid">
      <div className="container">
        <SectionHeader
          eyebrow="Lucram complet, de la structura la finisaj"
          title="Putem prelua proiectul in functie de stadiul in care se afla: de la fundatie, la rosu, la gri sau direct la cheie."
          description="Acest mod de lucru ofera flexibilitate: unii clienti au nevoie de executie completa, altii doar de o etapa precisa care trebuie facuta corect si curat."
          align="center"
        />

        <div className="delivery-grid">
          {deliveryStages.map((item) => (
            <article key={item.title} className="delivery-card premium-card">
              <span className="delivery-stage">{item.stage}</span>
              <div className="icon-chip">{iconMap[item.icon]}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeliveryStagesSection;

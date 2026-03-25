import SectionHeader from './SectionHeader';
import ServiceCategoryCard from './ServiceCategoryCard';
import { serviceCategories } from '../data/siteContent';

function ServicesSection() {
  return (
    <section id="servicii" className="section section--alt pattern-bg architect-grid">
      <div className="container">
        <SectionHeader
          eyebrow="Servicii"
          title="Serviciile sunt organizate clar, pe categorii reale de executie, ca sa vezi rapid ce putem prelua."
          description="Am structurat oferta astfel incat sa fie usor de parcurs: constructii la rosu, finisaje, instalatii si lucrari premium, fie ca vrei executie completa, fie doar o etapa separata, pentru proiecte din Suceava si Botosani."
        />

        <div className="service-category-grid">
          {serviceCategories.map((category) => (
            <ServiceCategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

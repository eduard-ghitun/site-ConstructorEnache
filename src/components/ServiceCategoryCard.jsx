import { iconMap } from './icons';

function ServiceCategoryCard({ category }) {
  const visibleServices = category.services.slice(0, 5);
  const hiddenServicesCount = Math.max(category.services.length - visibleServices.length, 0);

  return (
    <article className="service-category-card premium-card">
      <div className="service-category-card__top">
        <div className="icon-chip service-category-card__icon">{iconMap[category.icon]}</div>
        <span className="service-accent">{category.accent}</span>
      </div>

      <div className="service-category-card__body">
        <h3>{category.title}</h3>
        <p>{category.description}</p>
      </div>

      <ul className="service-list" aria-label={`Subservicii pentru ${category.title}`}>
        {visibleServices.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {hiddenServicesCount > 0 ? <li className="service-list__more">+ alte servicii</li> : null}
      </ul>
    </article>
  );
}

export default ServiceCategoryCard;

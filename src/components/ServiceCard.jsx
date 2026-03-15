import { iconMap } from './icons';

function ServiceCard({ service }) {
  return (
    <article className="info-card service-card">
      <div className="icon-chip">{iconMap[service.icon]}</div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}

export default ServiceCard;

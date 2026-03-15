import { iconMap } from './icons';

function BenefitCard({ benefit }) {
  return (
    <article className="benefit-card">
      <div className="icon-chip icon-chip--soft">{iconMap[benefit.icon]}</div>
      <h3>{benefit.title}</h3>
      <p>{benefit.description}</p>
    </article>
  );
}

export default BenefitCard;

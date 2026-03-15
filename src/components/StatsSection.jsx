import { stats } from '../data/siteContent';

function StatsSection() {
  return (
    <section className="section section--tight pattern-bg architect-grid">
      <div className="container stats-wrap">
        {stats.map((item) => (
          <article key={item.label} className="stat-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;

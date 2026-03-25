import SectionHeader from './SectionHeader';

function FaqSection({ eyebrow = 'Intrebari frecvente', title, description, items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <section className="section section--alt pattern-bg architect-grid">
      <div className="container">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />

        <div className="faq-grid">
          {items.map((item) => (
            <article key={item.question} className="faq-card premium-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;

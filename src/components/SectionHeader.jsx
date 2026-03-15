function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      <span className="section-heading__divider" aria-hidden="true" />
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default SectionHeader;

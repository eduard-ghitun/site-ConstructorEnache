function SectionHeader({ eyebrow, title, description, align = 'left', headingLevel = 2 }) {
  const HeadingTag = `h${headingLevel}`;

  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <span className="section-eyebrow">{eyebrow}</span> : null}
      <HeadingTag>{title}</HeadingTag>
      <span className="section-heading__divider" aria-hidden="true" />
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default SectionHeader;

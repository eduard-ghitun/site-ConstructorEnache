function ProjectGalleryCard({ project, onOpen }) {
  const fallbackImage =
    project.category === 'exterior'
      ? '/images/proiecte/exterior/exterior-placeholder.svg'
      : project.category === 'santier'
        ? '/images/proiecte/santier/santier-placeholder.svg'
        : '/images/proiecte/interior/interior-placeholder.svg';

  return (
    <article className="project-card premium-card">
      <button type="button" className="project-card__trigger" onClick={() => onOpen(project)}>
        <div className="project-card-image">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = fallbackImage;
            }}
          />
        </div>
      </button>
    </article>
  );
}

export default ProjectGalleryCard;

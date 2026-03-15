function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-content">
        <span className="project-tag">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </article>
  );
}

export default ProjectCard;

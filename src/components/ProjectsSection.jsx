import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';
import { projects } from '../data/siteContent';

function ProjectsSection() {
  return (
    <section id="proiecte" className="section section--alt pattern-bg">
      <div className="container">
        <SectionHeader
          eyebrow="Proiecte finalizate"
          title="Tipuri de lucrari pe care le putem executa, de la structura si instalatii pana la detalii decorative."
          description="Exemplele de mai jos ilustreaza directia de lucru a firmei: proiecte complete, etape separate si finisaje care pot fi integrate natural in acelasi santier."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={`${project.title}-${project.category}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

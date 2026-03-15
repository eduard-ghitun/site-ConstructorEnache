import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectGalleryCard from '../components/ProjectGalleryCard';
import SectionHeader from '../components/SectionHeader';
import { projectCategories, projectsGallery } from '../data/projectsGallery';

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0].slug);
  const [activeProject, setActiveProject] = useState(null);
  const activeProjectFallback =
    activeProject?.category === 'exterior'
      ? '/images/proiecte/exterior/exterior-placeholder.svg'
      : activeProject?.category === 'santier'
        ? '/images/proiecte/santier/santier-placeholder.svg'
        : '/images/proiecte/interior/interior-placeholder.svg';

  const activeCategoryData = useMemo(
    () => projectCategories.find((category) => category.slug === activeCategory) ?? projectCategories[0],
    [activeCategory],
  );

  const filteredProjects = useMemo(
    () => projectsGallery.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section className="projects-page pattern-bg architect-grid">
      <div className="container">
        <header className="projects-page__hero premium-card">
          <div className="projects-page__copy">
            <span className="projects-page__breadcrumb">
              <Link to="/">Acasa</Link>
              <strong>/</strong>
              <span>Proiecte</span>
            </span>
            <SectionHeader
              eyebrow="Portofoliu"
              title="Proiectele noastre"
              description="Descopera o selectie de lucrari realizate de echipa noastra, organizate clar pe categorii pentru a evidentia etapele si rezultatele finale. Vei gasi imagini din proiecte de interior, lucrari exterioare si santiere aflate in executie, astfel incat sa poti vedea mai usor stilul nostru de lucru, atentia la detalii si modul in care ducem fiecare lucrare de la executie pana la finalizare."
            />
          </div>

          <div className="project-card projects-page__visual premium-card">
            <div className="project-image-wrapper">
              <img
                src="/images/proiecte/cover-proiecte.jpg"
                alt="Proiect reprezentativ Deko Construct"
                loading="eager"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = '/images/proiecte/exterior/exterior-1.svg';
                }}
              />
            </div>
          </div>
        </header>

        <section className="projects-gallery">
          <div className="projects-gallery__filters" role="tablist" aria-label="Categorii proiecte">
            {projectCategories.map((category) => (
              <button
                key={category.slug}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.slug}
                className={activeCategory === category.slug ? 'is-active' : ''}
                onClick={() => setActiveCategory(category.slug)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="projects-gallery__intro premium-card">
            <h2>{activeCategoryData.label}</h2>
            <p>{activeCategoryData.description}</p>
          </div>

          <div className="projects-gallery__grid">
            {filteredProjects.map((project) => (
              <ProjectGalleryCard key={project.id} project={project} onOpen={setActiveProject} />
            ))}
          </div>
        </section>
      </div>

      {activeProject ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeProject.title}>
          <button type="button" className="lightbox__backdrop" onClick={() => setActiveProject(null)} />
          <div className="lightbox__content premium-card">
            <button type="button" className="lightbox__close" onClick={() => setActiveProject(null)}>
              Inchide
            </button>
            <div className="lightbox__media">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = activeProjectFallback;
                }}
              />
            </div>
            <div className="lightbox__copy">
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default ProjectsPage;

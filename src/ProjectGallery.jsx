import React, { useCallback, useEffect, useRef, useState } from 'react';
import { projects } from './projects.js';

function ProjectCard({ project, mode, onOpen }) {
  const tags = mode === 'developer'
    ? project.tags.length > 0 ? project.tags : ['Stack details to add']
    : [project.category];

  return (
    <button
      className={`project-card${project.id === 'aeroops-ai' ? ' project-card--featured' : ''}`}
      type="button"
      onClick={(event) => onOpen(project, event.currentTarget)}
      aria-label={`Open ${project.title} project details`}
    >
      <span className="project-card__visual" aria-hidden="true">
        <span className="project-card__visual-grid" />
        <span className={`project-card__glyph project-card__glyph--${project.id}`}>
          {project.id === 'aeroops-ai' ? 'AO' : project.id === 'recoverai' ? 'R' : project.id === 'ipis' ? 'IP' : 'NM'}
        </span>
        {project.id === 'aeroops-ai' && (
          <span className="project-card__status">LOCAL DEMO</span>
        )}
      </span>
      <span className="project-card__body">
        <span className="project-card__eyebrow">{project.category}</span>
        <span className="project-card__title">{project.title}</span>
        <span className="project-card__summary">{project.cardDetail}</span>
        <span className="project-card__tags">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </span>
        <span className="project-card__action">VIEW PROJECT DETAILS <span aria-hidden="true">↗</span></span>
      </span>
    </button>
  );
}

function FeaturedProject({ onOpen }) {
  const project = projects[0];
  return (
    <button
      className="featured-project"
      id="featured-project"
      type="button"
      onClick={(event) => onOpen(project, event.currentTarget)}
      aria-label="Open AeroOps AI featured project details"
    >
      <span className="featured-project__copy">
        <span className="eyebrow">FEATURED PROJECT / LOCAL DEMONSTRATION</span>
        <span className="featured-project__title">AeroOps AI</span>
        <span className="featured-project__summary">
          Explainable disruption-recovery decision support built around historical
          public flight data and clearly labelled synthetic operations.
        </span>
        <span className="featured-project__action">EXPLORE PROJECT <span aria-hidden="true">↗</span></span>
      </span>
      <span className="featured-project__art" aria-hidden="true">
        <span className="featured-project__orbit featured-project__orbit--one" />
        <span className="featured-project__orbit featured-project__orbit--two" />
        <span className="featured-project__monogram">AO</span>
        <span className="featured-project__route">HISTORICAL DATA <b>→</b> SYNTHETIC DEMO</span>
      </span>
    </button>
  );
}

function ProjectRow({ title, description, items, mode, onOpen, rowId }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const updateScrollState = () => {
      const maximum = track.scrollWidth - track.clientWidth;
      setCanScrollLeft(track.scrollLeft > 2);
      setCanScrollRight(maximum - track.scrollLeft > 2);
    };

    updateScrollState();
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(track);
    track.addEventListener('scroll', updateScrollState, { passive: true });

    return () => {
      resizeObserver.disconnect();
      track.removeEventListener('scroll', updateScrollState);
    };
  }, [items.length]);

  function scroll(direction) {
    const track = trackRef.current;
    if (!track) return;
    const distance = Math.max(track.clientWidth * 0.78, 260);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({ left: direction * distance, behavior: reduceMotion ? 'instant' : 'smooth' });
  }

  return (
    <section className="project-row" aria-labelledby={`${rowId}-heading`}>
      <div className="project-row__heading">
        <div>
          <p className="eyebrow">{description}</p>
          <h2 id={`${rowId}-heading`}>{title}</h2>
        </div>
        <div className="project-row__controls">
          <span className="project-row__hint" aria-live="polite">
            {canScrollRight ? 'Scroll for more projects' : `${items.length} PROJECTS`}
          </span>
          <button
            className="row-control"
            type="button"
            aria-label={`Scroll ${title} row left`}
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            className="row-control"
            type="button"
            aria-label={`Scroll ${title} row right`}
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div
        className="project-row__track"
        ref={trackRef}
        role="region"
        tabIndex="0"
        aria-label={`${title} project cards`}
      >
        {items.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            mode={mode}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectScreenshot({ screenshot }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="project-screenshot__placeholder">
        <span>Screenshot unavailable</span>
        <small>Open the AeroOps AI repository for verified project captures.</small>
      </div>
    );
  }

  return (
    <a
      className="project-screenshot"
      href={screenshot.src}
      target="_blank"
      rel="noreferrer"
    >
      <img src={screenshot.src} alt={screenshot.alt} onError={() => setFailed(true)} />
      <span>{screenshot.caption} <span aria-hidden="true">↗</span></span>
    </a>
  );
}

function DetailLinks({ project }) {
  return (
    <div className="project-detail__links">
      {project.repository ? (
        <a href={project.repository} target="_blank" rel="noopener noreferrer">
          {project.repositoryAction || 'View GitHub repository'} <span aria-hidden="true">↗</span>
        </a>
      ) : (
        <span className="project-link-placeholder">
          GitHub repository <small>Link not provided</small>
        </span>
      )}
      {project.liveDemo ? (
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
          Open live demo <span aria-hidden="true">↗</span>
        </a>
      ) : null}
    </div>
  );
}

function ProjectDetailDialog({ project, onClose, closeButtonRef }) {
  const dialogRef = useRef(null);
  const hasScreenshots = project.screenshots.length > 0;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    function handleCancel(event) {
      event.preventDefault();
      onClose();
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape' && !event.isComposing) {
        event.preventDefault();
        onClose();
      }
    }

    dialog.showModal();
    closeButtonRef.current?.focus();
    document.body.classList.add('project-dialog-open');
    dialog.addEventListener('cancel', handleCancel);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      dialog.removeEventListener('cancel', handleCancel);
      document.removeEventListener('keydown', handleKeyDown);
      if (dialog.open) dialog.close();
      document.body.classList.remove('project-dialog-open');
    };
  }, [closeButtonRef, onClose]);

  return (
    <dialog
      className="project-dialog"
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="project-dialog__header">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h2 id="project-dialog-title">{project.title}</h2>
        </div>
        <button
          className="project-dialog__close"
          type="button"
          ref={closeButtonRef}
          onClick={onClose}
          aria-label={`Close ${project.title} details`}
        >
          <span aria-hidden="true">×</span>
          <span className="project-dialog__close-label">Close</span>
        </button>
      </div>

      <p className="project-dialog__summary">{project.summary}</p>

      <div className="project-detail__grid">
        <section>
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </section>
        <section>
          <h3>My contribution</h3>
          <p>{project.contribution}</p>
        </section>
        <section>
          <h3>Verified features</h3>
          {project.features.length > 0 ? (
            <ul>
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          ) : (
            <p className="project-detail__placeholder">Feature details not provided yet.</p>
          )}
        </section>
        <section>
          <h3>Technology stack</h3>
          {project.stack.length > 0 ? (
            <div className="project-detail__tags">
              {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          ) : (
            <p className="project-detail__placeholder">Stack details not provided yet.</p>
          )}
        </section>
      </div>

      <section className="project-detail__screenshots">
        <h3>Screenshots</h3>
        {hasScreenshots ? (
          <div className="project-detail__gallery">
            {project.screenshots.map((screenshot) => (
              <ProjectScreenshot key={screenshot.src} screenshot={screenshot} />
            ))}
          </div>
        ) : (
          <div className="project-screenshot__placeholder">
            <span>Screenshot placeholder</span>
            <small>No verified project screenshots have been provided for this project.</small>
          </div>
        )}
      </section>

      <section className="project-detail__limitations">
        <h3>Limitations and scope</h3>
        <ul>
          {project.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}
        </ul>
      </section>

      <section className="project-detail__link-section">
        <h3>Links</h3>
        <DetailLinks project={project} />
      </section>
    </dialog>
  );
}

export default function ProjectGallery({ mode }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const openerRef = useRef(null);
  const closeButtonRef = useRef(null);

  function openProject(project, opener) {
    openerRef.current = opener;
    setSelectedProject(project);
  }

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  const rows = mode === 'developer'
    ? [
      { id: 'featured-builds', title: 'Implementation notes', description: 'VERIFIED STACK & WORKFLOW', items: projects.slice(0, 2) },
      { id: 'other-projects', title: 'Other projects', description: 'MORE TO EXPLORE', items: projects.slice(2) },
    ]
    : [
      { id: 'selected-work', title: 'Selected projects', description: 'A FEW THINGS I’VE BUILT', items: projects },
    ];

  return (
    <>
      <div className={`project-gallery project-gallery--${mode}`}>
        {mode === 'recruiter' && <FeaturedProject onOpen={openProject} />}
        {rows.map((row) => (
          <ProjectRow
            key={row.id}
            {...row}
            rowId={row.id}
            mode={mode}
            onOpen={openProject}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectDetailDialog
          project={selectedProject}
          onClose={closeProject}
          closeButtonRef={closeButtonRef}
        />
      )}
    </>
  );
}

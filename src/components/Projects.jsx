import { useState } from 'react';
import { projects, otherProjects } from '../data';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.35-3.87-1.35-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.71 5.39-5.29 5.68.42.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        d="M14 5h5v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 5l-9 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13v5a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({ project, reverse = false }) {
  const ref = useReveal();

  const hasGithub = project.github && project.github !== '#';
  const hasLive = project.live && project.live !== '#';

  const projectUrl = hasLive ? project.live : hasGithub ? project.github : null;

  return (
    <article ref={ref} className="reveal mb-28 lg:mb-36">
      {/* ================= DESKTOP PROJECT ================= */}
      <div
        className={`hidden md:flex items-center w-full relative ${
          reverse ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        {/* ================= IMAGE ================= */}
        <div className="relative z-10 w-[62%] shrink-0">
          {project.image && projectUrl ? (
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
              className="group relative block overflow-hidden rounded bg-green"
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="block w-full aspect-[16/9] object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-green opacity-60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="border border-white text-white bg-navy/60 backdrop-blur-sm px-4 py-2 rounded font-mono text-xs">
                  View Project ↗
                </span>
              </div>
            </a>
          ) : (
            <div className="w-full aspect-[16/9] rounded bg-light-navy" />
          )}
        </div>

        {/* ================= DETAILS ================= */}
        <div
          className={`relative z-30 w-[50%] shrink-0 ${
            reverse ? 'mr-[-12%]' : 'ml-[-12%]'
          }`}
        >
          <div className={reverse ? 'text-left' : 'text-right'}>
            <p className="text-green font-mono text-sm mb-2">Featured Project</p>

            <h3 className="text-lightest-slate text-2xl sm:text-3xl font-bold mb-5">
              {project.title}
            </h3>

            <div className="relative z-40 bg-light-navy rounded shadow-2xl px-6 py-6 sm:px-7 sm:py-7 text-slate text-sm sm:text-base leading-relaxed">
              {project.description}
            </div>

            <ul
              className={`flex flex-wrap gap-x-5 gap-y-2 mt-5 font-mono text-xs text-light-slate ${
                reverse ? 'justify-start' : 'justify-end'
              }`}
            >
              {project.tech?.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <div
              className={`flex items-center gap-5 mt-5 ${
                reverse ? 'justify-start' : 'justify-end'
              }`}
            >
              {hasGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  aria-label={`View ${project.title} on GitHub`}
                  className="text-light-slate hover:text-green transition-colors duration-200"
                >
                  <GithubIcon />
                </a>
              )}

              {hasLive && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  title="Live Demo"
                  aria-label={`View ${project.title} live`}
                  className="text-light-slate hover:text-green transition-colors duration-200"
                >
                  <ExternalIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden">
        {project.image && projectUrl && (
          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="group relative block overflow-hidden rounded bg-green mb-7"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
              className="w-full aspect-[16/9] object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-green opacity-60 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="border border-white text-white bg-navy/60 px-4 py-2 rounded font-mono text-xs">
                View Project ↗
              </span>
            </div>
          </a>
        )}

        <div className="text-left">
          <p className="text-green font-mono text-sm mb-2">Featured Project</p>

          <h3 className="text-lightest-slate text-2xl font-bold mb-4">
            {project.title}
          </h3>

          <div className="bg-light-navy rounded shadow-xl px-5 py-5 text-slate text-sm leading-relaxed">
            {project.description}
          </div>

          <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-5 font-mono text-xs text-light-slate">
            {project.tech?.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <div className="flex items-center gap-5 mt-5">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="text-light-slate hover:text-green transition"
              >
                <GithubIcon />
              </a>
            )}

            {hasLive && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                title="Live Demo"
                className="text-light-slate hover:text-green transition"
              >
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ArchiveCard({ project }) {
  const ref = useReveal();
  const hasGithub = project.github && project.github !== '#';
  const hasLive = project.live && project.live !== '#';

  return (
    <div
      ref={ref}
      className="reveal bg-light-navy rounded p-6 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="flex justify-between items-start mb-8">
        <span className="text-green text-2xl">📂</span>
        <div className="flex items-center gap-4">
          {hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label={`View ${project.title} on GitHub`}
              className="text-light-slate hover:text-green transition-colors duration-200"
            >
              <GithubIcon />
            </a>
          )}
          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              title="Live Demo"
              aria-label={`View ${project.title} live`}
              className="text-light-slate hover:text-green transition-colors duration-200"
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <h4 className="text-lightest-slate font-semibold text-lg mb-2">
        {project.title}
      </h4>

      <p className="text-slate text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-light-slate">
        {project.tech?.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const [showMore, setShowMore] = useState(false);

  const headingRef = useReveal();

  /*
    First 3 projects
  */
  const visibleProjects = projects.slice(0, 3);

  /*
    All remaining projects
  */
  const remainingProjects = [...projects.slice(3), ...otherProjects];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 sm:px-10 py-28">
      {/* Section Heading */}
      <div ref={headingRef} className="reveal">
        <SectionHeading num="03" title="Things I've Built" />
      </div>

      {/* ================= FIRST 3 ================= */}
      <div className="mt-14">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} reverse={index === 1} />
        ))}
      </div>

      {/* ================= MORE PROJECTS ================= */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          showMore ? 'max-h-[10000px] opacity-100 mt-14' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {remainingProjects.map((project) => (
            <ArchiveCard key={project.title} project={project} />
          ))}
        </div>
      </div>

      {/* ================= MORE BUTTON ================= */}
      {remainingProjects.length > 0 && (
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={() => setShowMore((prev) => !prev)}
            className="inline-flex items-center gap-3 border border-green text-green font-mono text-sm px-7 py-3.5 rounded transition-all duration-200 hover:bg-green/10 hover:-translate-y-0.5"
          >
            <span>{showMore ? 'Show Less' : 'More Projects'}</span>
            <span
              className={`transition-transform duration-300 ${
                showMore ? 'rotate-180' : ''
              }`}
            >
              ↓
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
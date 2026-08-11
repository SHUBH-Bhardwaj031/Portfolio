import { projects } from '../data';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';

function ProjectCard({ project }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal bg-light-navy rounded-lg p-8 hover:-translate-y-1 transition-transform duration-300 shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <span className="text-green text-3xl">📁</span>
        <div className="flex gap-4 text-light-slate">
          <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-green transition text-sm font-mono">
            Code
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-green transition text-sm font-mono">
            Live
          </a>
        </div>
      </div>
      <h3 className="text-lightest-slate text-xl font-semibold mb-3">{project.title}</h3>
      <p className="text-slate leading-relaxed mb-6">{project.description}</p>
      <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  const headingRef = useReveal();
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 sm:px-10 py-24"
    >
      <div ref={headingRef} className="reveal max-w-4xl">
        <SectionHeading num="03" title="Things I've Built" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

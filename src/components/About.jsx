import { about } from '../data';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="reveal max-w-4xl mx-auto px-6 sm:px-10 py-24"
    >
      <SectionHeading num="01" title="About Me" />
      <div className="grid sm:grid-cols-[2fr_1fr] gap-10">
        <div className="text-slate leading-relaxed space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm">
            {about.skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2 text-light-slate">
                <span className="text-green">▹</span> {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
          <div className="absolute inset-0 border-2 border-green rounded translate-x-3 translate-y-3" />
          <div className="relative w-full h-full bg-green/10 rounded flex items-center justify-center text-green font-mono text-4xl font-bold">
            SB
          </div>
        </div>
      </div>
    </section>
  );
}

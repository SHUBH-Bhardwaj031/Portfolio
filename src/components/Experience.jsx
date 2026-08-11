import { useState } from 'react';
import { experience } from '../data';
import SectionHeading from './SectionHeading';
import useReveal from '../hooks/useReveal';

export default function Experience() {
  const [active, setActive] = useState(0);
  const ref = useReveal();
  const current = experience[active];

  return (
    <section
      id="experience"
      ref={ref}
      className="reveal max-w-4xl mx-auto px-6 sm:px-10 py-24"
    >
      <SectionHeading num="02" title="Where I've Worked" />
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-visible border-b sm:border-b-0 sm:border-l border-lightest-navy">
          {experience.map((job, i) => (
            <button
              key={job.company}
              onClick={() => setActive(i)}
              className={`whitespace-nowrap text-left font-mono text-sm px-5 py-3 border-l-2 sm:border-l-2 transition ${
                active === i
                  ? 'text-green border-green bg-green/5'
                  : 'text-light-slate border-transparent hover:bg-light-navy hover:text-green'
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>
        <div className="flex-1">
          <h3 className="text-lightest-slate text-lg font-semibold">
            {current.role} <span className="text-green"> @ {current.company}</span>
          </h3>
          <p className="text-slate font-mono text-sm mb-4">{current.range}</p>
          <ul className="space-y-3">
            {current.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-slate leading-relaxed">
                <span className="text-green mt-1">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

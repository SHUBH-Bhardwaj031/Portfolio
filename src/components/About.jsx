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
        {/* About Content */}
        <div className="text-slate leading-relaxed space-y-4">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <ul className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm">
            {about.skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 text-light-slate"
              >
                <span className="text-green">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Profile Image */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
          
          {/* Green Offset Border */}
          <div
            className="
              absolute
              inset-0
              border-2
              border-green
              rounded
              translate-x-3
              translate-y-3
            "
          />

          {/* Image */}
          <div
            className="
              group
              relative
              w-full
              h-full
              overflow-hidden
              rounded
              bg-green/10
            "
          >
            <img
              src="/profile.jpeg"
              alt="Shubham Bhardwaj"
              className="
                w-full
                h-full
                object-cover
                object-center
                grayscale
                transition-all
                duration-500
                ease-in-out
                group-hover:grayscale-0
                group-hover:scale-105
              "
            />

            {/* Green Tint */}
            <div
              className="
                absolute
                inset-0
                bg-green
                opacity-60
                mix-blend-multiply
                transition-opacity
                duration-500
                group-hover:opacity-0
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
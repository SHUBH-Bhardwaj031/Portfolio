import { profile } from '../data';
import useReveal from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal();
  return (
    <section
      id="contact"
      ref={ref}
      className="reveal max-w-xl mx-auto px-6 sm:px-10 py-24 text-center"
    >
      <p className="text-green font-mono mb-4">04. What's Next?</p>
      <h2 className="text-lightest-slate text-4xl sm:text-5xl font-bold mb-6">
        Get In Touch
      </h2>
      <p className="text-slate leading-relaxed mb-10">
        I'm currently looking for fresher software / full-stack developer roles.
        Whether you have an opportunity, a question, or just want to say hi — my
        inbox is open.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="inline-block border border-green text-green font-mono px-8 py-4 rounded hover:bg-green/10 transition"
      >
        Say Hello
      </a>
    </section>
  );
}

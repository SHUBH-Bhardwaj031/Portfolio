import { profile } from '../data';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6 sm:px-10"
    >
      <p className="text-green font-mono text-base sm:text-lg mb-5 animate-[fadeIn_0.8s_ease]">
        Hi, my name is
      </p>
      <h1 className="text-lightest-slate text-5xl sm:text-7xl font-bold mb-3">
        {profile.name}.
      </h1>
      <h2 className="text-slate text-4xl sm:text-6xl font-bold mb-8">
        I build things for the web.
      </h2>
      <p className="text-slate max-w-xl text-lg leading-relaxed mb-12">
        I'm a {profile.role.toLowerCase()} based in {profile.location}, focused on
        building full-stack applications with clean, maintainable code — and currently
        looking for fresher software / full-stack roles.
      </p>
      <a
        href="#projects"
        className="inline-block border border-green text-green font-mono px-8 py-4 rounded hover:bg-green/10 transition w-fit"
      >
        Check out my work
      </a>
    </section>
  );
}

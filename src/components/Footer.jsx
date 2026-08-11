import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="text-center py-8 text-slate font-mono text-xs">
      <div className="lg:hidden flex justify-center gap-6 mb-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-green transition"
        >
          GitHub
        </a>

        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-green transition"
        >
          LinkedIn
        </a>

        <a
          href={`mailto:${profile.email}`}
          className="hover:text-green transition"
        >
          Email
        </a>
      </div>

      <p     className="hover:text-green transition">
        Designed &amp; built by {profile.name}.
      
      </p>
    </footer>
  );
}
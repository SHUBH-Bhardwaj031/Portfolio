import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="text-center py-8 text-slate font-mono text-xs">
      <div className="lg:hidden flex justify-center gap-6 mb-4">
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-green transition">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-green transition">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`} className="hover:text-green transition">
          Email
        </a>
      </div>
      <p>
        Designed &amp; built by {profile.name} — layout inspired by{' '}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noreferrer"
          className="text-green hover:underline"
        >
          Brittany Chiang's v4 portfolio
        </a>
        .
      </p>
    </footer>
  );
}

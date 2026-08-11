import { profile } from '../data';

const links = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
];

export default function SocialSidebar() {
  return (
    <div className="hidden lg:flex fixed bottom-0 left-8 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate/40 after:mt-4 z-40">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-slate hover:text-green hover:-translate-y-1 transition-all text-xs font-mono tracking-widest [writing-mode:vertical-rl]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

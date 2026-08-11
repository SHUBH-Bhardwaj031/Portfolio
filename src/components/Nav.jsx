import { profile } from '../data';

const navItems = [
  { num: '01', label: 'About', href: '#about' },
  { num: '02', label: 'Experience', href: '#experience' },
  { num: '03', label: 'Work', href: '#projects' },
  { num: '04', label: 'Contact', href: '#contact' },
];

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-navy/85 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 py-5">
        <a href="#home" className="text-green font-mono text-xl font-semibold border border-green rounded-full w-11 h-11 flex items-center justify-center hover:bg-green/10 transition">
          SB
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.num}>
              <a href={item.href} className="text-light-slate hover:text-green transition font-mono">
                <span className="text-green">{item.num}.</span> {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-green text-green text-sm font-mono px-4 py-2 rounded hover:bg-green/10 transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

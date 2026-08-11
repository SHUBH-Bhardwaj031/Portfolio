import { profile } from '../data';

const navItems = [
  {
    num: '01',
    label: 'About',
    href: '#about',
  },
  {
    num: '02',
    label: 'Experience',
    href: '#experience',
  },
  {
    num: '03',
    label: 'Work',
    href: '#projects',
  },
  {
    num: '04',
    label: 'Contact',
    href: '#contact',
  },
];

export default function Nav() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-navy/90
        backdrop-blur-md
        border-b
        border-lightest-navy/20
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto
          px-6
          sm:px-10
          lg:px-12
          py-5
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <a
          href="#home"
          aria-label="Home"
          className="
            flex
            items-center
            justify-center
            w-10
            h-10
            border
            border-green
            rounded
            text-green
            font-mono
            text-sm
            font-semibold
            transition-all
            duration-200
            hover:bg-green/10
            hover:-translate-y-0.5
          "
        >
          SB
        </a>

        {/* Desktop Navigation */}
        <ul
          className="
            hidden
            md:flex
            items-center
            gap-7
            lg:gap-8
          "
        >
          {navItems.map((item) => (
            <li key={item.num}>
              <a
                href={item.href}
                className="
                  text-light-slate
                  hover:text-green
                  font-mono
                  text-xs
                  lg:text-sm
                  transition-colors
                  duration-200
                "
              >
                <span className="text-green">
                  {item.num}.
                </span>{' '}
                {item.label}
              </a>
            </li>
          ))}

          <li className="ml-1">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                border
                border-green
                text-green
                font-mono
                text-xs
                lg:text-sm
                px-4
                py-2.5
                rounded
                transition-all
                duration-200
                hover:bg-green/10
                hover:-translate-y-0.5
              "
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Resume */}
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="
            md:hidden
            border
            border-green
            text-green
            font-mono
            text-xs
            px-4
            py-2
            rounded
            transition
            hover:bg-green/10
          "
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
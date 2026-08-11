import { profile } from '../data';

const socialLinks = [
  {
    label: 'GitHub',
    href: profile.github,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.87-1.35-3.87-1.35-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.5 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.71 5.39-5.29 5.68.42.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },

  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.68H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.3ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.54 20.45H7.1V8.99H3.54v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.23 0Z" />
      </svg>
    ),
  },

  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M4 6.5L12 13L20 6.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function SocialSidebar() {
  return (
    <aside
      className="
        hidden lg:flex
        fixed
        bottom-0
        left-8
        xl:left-10
        z-40
        flex-col
        items-center
      "
      aria-label="Social links"
    >
      <div className="flex flex-col items-center gap-5">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === 'Email' ? undefined : '_blank'}
            rel={link.label === 'Email' ? undefined : 'noreferrer'}
            aria-label={link.label}
            title={link.label}
            className="
              group
              flex
              items-center
              justify-center
              w-7
              h-7
              text-slate
              transition-all
              duration-200
              ease-out
              hover:text-green
              hover:-translate-y-1
            "
          >
            <span
              className="
                block
                w-[19px]
                h-[19px]
                transition-transform
                duration-200
                group-hover:scale-110
              "
            >
              {link.icon}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-5 w-px h-24 bg-slate/40" />
    </aside>
  );
}
import { profile } from '../data';

export default function EmailSidebar() {
  return (
    <aside
      className="
        hidden lg:flex
        fixed
        bottom-0
        right-8
        xl:right-10
        z-40
        flex-col
        items-center
      "
      aria-label="Email"
    >
      <a
        href={`mailto:${profile.email}`}
        className="
          text-slate
          hover:text-green
          font-mono
          text-xs
          tracking-[0.12em]
          whitespace-nowrap
          transition-all
          duration-200
          hover:-translate-y-1
          [writing-mode:vertical-rl]
        "
      >
        {profile.email}
      </a>

      <div className="mt-5 w-px h-24 bg-slate/40" />
    </aside>
  );
}
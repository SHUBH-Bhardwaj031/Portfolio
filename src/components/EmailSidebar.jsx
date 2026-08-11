import { profile } from '../data';

export default function EmailSidebar() {
  return (
    <div className="hidden lg:flex fixed bottom-0 right-8 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-slate/40 after:mt-4 z-40">
      <a
        href={`mailto:${profile.email}`}
        className="text-slate hover:text-green hover:-translate-y-1 transition-all text-xs font-mono tracking-widest [writing-mode:vertical-rl]"
      >
        {profile.email}
      </a>
    </div>
  );
}

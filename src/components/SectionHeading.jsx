export default function SectionHeading({ num, title }) {
  return (
    <h2 className="flex items-center gap-4 text-2xl sm:text-3xl font-semibold text-lightest-slate mb-10 whitespace-nowrap">
      <span className="text-green font-mono text-lg sm:text-xl">{num}.</span>
      {title}
      <span className="hidden sm:block h-px bg-lightest-navy w-full ml-4" />
    </h2>
  );
}

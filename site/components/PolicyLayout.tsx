// Shared shell for the legal/policy pages.
export default function PolicyLayout({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h1 className="display text-4xl sm:text-5xl">{title}</h1>
      <p className="mt-3 font-display text-sm uppercase tracking-[0.18em] text-bone/40">
        Draft — takes effect at store launch
      </p>
      <div className="mt-10 space-y-8 text-bone/80 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-wide [&_h2]:text-bone [&_h2]:mb-3 [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1.5">
        {children}
      </div>
    </div>
  );
}

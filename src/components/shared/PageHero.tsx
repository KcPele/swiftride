interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative w-full pt-35 pb-20 flex items-center justify-center flex-col bg-surface-light bg-[linear-gradient(rgba(255,102,0,0.05),rgba(255,102,0,0.05))] text-center">
      <h1 className="text-page-title mb-2.5 text-dark font-extrabold">
        {title}
      </h1>
      {subtitle && (
        <p className="max-w-xl mx-auto text-text-medium text-lg leading-relaxed px-5">
          {subtitle}
        </p>
      )}
    </section>
  );
}

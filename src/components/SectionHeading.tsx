type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  variant?: 'default' | 'inverse';
};

export function SectionHeading({ eyebrow, title, description, variant = 'default' }: SectionHeadingProps) {
  const isInverse = variant === 'inverse';

  return (
    <div className="max-w-3xl">
      <div className={isInverse ? 'mb-4 text-xs uppercase tracking-[0.35em] text-sand/80' : 'section-eyebrow mb-4'}>{eyebrow}</div>
      <h2 className={isInverse ? 'font-display text-4xl leading-none text-cream md:text-5xl' : 'section-title'}>{title}</h2>
      {description ? <p className={isInverse ? 'mt-4 text-base leading-7 text-sand/90 md:text-lg' : 'section-copy mt-4'}>{description}</p> : null}
    </div>
  );
}
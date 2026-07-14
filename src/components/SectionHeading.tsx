interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  inverse?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = 'center', inverse = false }: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-xl'} ${inverse ? 'text-white' : ''}`} data-reveal>
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${inverse ? 'text-primary-300' : 'text-primary-600'}`}>{eyebrow}</p>
      <h2 className={`mt-3 font-display text-3xl font-bold tracking-[-0.025em] sm:text-4xl lg:text-5xl ${inverse ? 'text-white' : 'text-ink'}`}>{title}</h2>
      <p className={`mt-5 text-base leading-7 sm:text-lg ${inverse ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
    </div>
  );
}

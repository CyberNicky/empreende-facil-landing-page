import { TrendingUp } from 'lucide-react';

interface LogoProps {
  inverse?: boolean;
  href?: string;
}

export function Logo({ inverse = false, href = '#inicio' }: LogoProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 ${inverse ? 'focus-visible:ring-offset-ink' : ''}`}
      aria-label="Gestão Pro — voltar ao início"
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/20">
        <TrendingUp size={20} strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span className={`font-display text-xl font-bold tracking-tight ${inverse ? 'text-white' : 'text-ink'}`}>
        Gestão <span className="text-primary-500">Pro</span>
      </span>
    </a>
  );
}

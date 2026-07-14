import { ArrowUpRight } from 'lucide-react';
import { appLinks } from '../lib/links';
import { Logo } from './Logo';

const footerLinks = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Planos', href: '#planos' },
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Dúvidas', href: '#duvidas' },
];

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-8 pt-14 text-slate-300 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">Gestão simples para pequenos negócios venderem, organizarem e crescerem com mais clareza.</p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Navegação</h2>
            <nav className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm" aria-label="Navegação do rodapé">
              {footerLinks.map((link) => <a key={link.href} href={link.href} className="transition-colors hover:text-primary-300">{link.label}</a>)}
            </nav>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white">Já tem uma conta?</h2>
            <a href={appLinks.login} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-300 hover:text-primary-200">Acessar o Gestão Pro <ArrowUpRight size={16} /></a>
            <p className="mt-3 text-xs leading-5 text-slate-500">Você será direcionado ao ambiente seguro da plataforma.</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gestão Pro. Todos os direitos reservados.</p>
          <p>Feito para simplificar a rotina de quem empreende.</p>
        </div>
      </div>
    </footer>
  );
}

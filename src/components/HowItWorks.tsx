import { ArrowRight, CheckCircle2, MousePointerClick, Rocket, UserRoundPlus } from 'lucide-react';
import { appLinks } from '../lib/links';
import { SectionHeading } from './SectionHeading';

const steps = [
  { number: '01', icon: UserRoundPlus, title: 'Crie sua conta', description: 'Faça seu cadastro e comece no plano gratuito, sem informar cartão.' },
  { number: '02', icon: MousePointerClick, title: 'Organize a operação', description: 'Cadastre produtos e clientes e registre as movimentações do seu negócio.' },
  { number: '03', icon: Rocket, title: 'Cresça com clareza', description: 'Acompanhe o painel, identifique oportunidades e escolha o plano ideal.' },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding relative overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(40,173,126,0.16),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(14,165,233,0.10),transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Comece sem complicação"
          title="Do cadastro ao controle em três passos"
          description="Você não precisa mudar toda a operação de uma vez. Comece pelo essencial e evolua no seu ritmo."
          inverse
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3" data-reveal>
          {steps.map(({ number, icon: Icon, title, description }, index) => (
            <article key={number} className="relative rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-sm sm:p-8">
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/20"><Icon size={22} /></span>
                <span className="font-display text-4xl font-bold text-white/[0.08]">{number}</span>
              </div>
              <h3 className="mt-7 font-display text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              {index < steps.length - 1 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden text-primary-400 lg:block" size={26} />}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row" data-reveal>
          <a href={appLinks.signup} className="button-light">
            Criar minha conta <ArrowRight size={18} />
          </a>
          <span className="flex items-center gap-2 text-xs font-medium text-slate-300"><CheckCircle2 size={16} className="text-primary-400" /> Continue grátis ou faça upgrade quando precisar</span>
        </div>
      </div>
    </section>
  );
}

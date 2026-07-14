import { HeartHandshake, Lightbulb, ShieldCheck, Target } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const values = [
  { icon: Lightbulb, title: 'Simplicidade de verdade', description: 'Tecnologia útil deve facilitar a rotina, não criar uma nova complicação.' },
  { icon: ShieldCheck, title: 'Controle com segurança', description: 'Cada conta administra os próprios dados, com acesso protegido e separado.' },
  { icon: HeartHandshake, title: 'Perto de quem empreende', description: 'O produto parte de necessidades reais de pequenos negócios brasileiros.' },
];

export function AboutSection() {
  return (
    <section id="quem-somos" className="section-padding overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div className="relative" data-reveal>
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-100 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] bg-ink p-7 text-white shadow-soft sm:p-10">
            <div className="absolute right-0 top-0 h-52 w-52 translate-x-16 -translate-y-16 rounded-full border-[40px] border-primary-500/20" />
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-500"><Target size={24} /></span>
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-primary-300">Nossa razão de existir</p>
            <blockquote className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Fazer a boa gestão caber na rotina de quem faz o negócio acontecer.
            </blockquote>
            <div className="mt-10 h-px bg-white/10" />
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              Criamos uma experiência que traduz números e tarefas em informação clara, para que cada decisão tenha mais contexto e menos improviso.
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Quem somos"
            title="Gestão feita para quem constrói todos os dias"
            description="O Gestão Pro é uma plataforma brasileira de gestão para pequenos negócios. Nosso foco é aproximar organização, tecnologia e crescimento sem exigir conhecimento técnico."
            align="left"
          />
          <div className="mt-9 space-y-5" data-reveal>
            {values.map(({ icon: Icon, title, description }) => (
              <article key={title} className="flex gap-4 rounded-2xl border border-slate-100 p-4 transition-colors hover:border-primary-200 hover:bg-primary-50/30">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary-600"><Icon size={21} /></span>
                <div><h3 className="font-display text-base font-bold text-ink">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

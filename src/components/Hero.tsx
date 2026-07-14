import { ArrowRight, Check, CirclePlay, Sparkles } from 'lucide-react';
import { appLinks } from '../lib/links';
import { DashboardPreview } from './DashboardPreview';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-24 pt-32 sm:pt-36 lg:pb-32 lg:pt-44">
      <div className="hero-grid absolute inset-0 -z-20 opacity-60" />
      <div className="absolute left-[-10%] top-[-12%] -z-10 h-[460px] w-[460px] rounded-full bg-primary-200/45 blur-3xl" />
      <div className="absolute right-[-15%] top-[20%] -z-10 h-[440px] w-[440px] rounded-full bg-sky-100/60 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div data-reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3.5 py-2 text-xs font-semibold text-primary-700">
            <Sparkles size={15} aria-hidden="true" /> Plano gratuito. Sem prazo para acabar.
          </div>
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.06] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[4.15rem]">
            Seu negócio merece <span className="relative text-primary-600">clareza<span className="absolute -bottom-1 left-0 h-2 w-full -rotate-1 rounded-full bg-primary-200/60 -z-10" /></span> para crescer.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Vendas, estoque, clientes, despesas e relatórios conectados em uma plataforma simples — para você decidir com confiança e ganhar tempo todos os dias.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={appLinks.signup} className="button-primary button-large justify-center sm:justify-start">
              Começar grátis <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a href="#recursos" className="button-secondary button-large justify-center sm:justify-start">
              <CirclePlay size={19} className="text-primary-600" aria-hidden="true" /> Conhecer a plataforma
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-500" aria-label="Benefícios do plano gratuito">
            {['Configuração rápida', 'Sem instalação', 'Cancele quando quiser'].map((item) => (
              <li key={item} className="flex items-center gap-1.5"><Check size={14} className="text-primary-600" /> {item}</li>
            ))}
          </ul>
        </div>

        <div data-reveal className="lg:translate-x-4">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

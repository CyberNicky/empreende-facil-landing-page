import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { appLinks } from '../lib/links';

export function FinalCta() {
  return (
    <section className="bg-white px-5 py-16 sm:py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary-600 px-6 py-12 text-center text-white shadow-soft sm:px-10 sm:py-16" data-reveal>
        <div className="absolute -left-20 -top-28 h-72 w-72 rounded-full border-[50px] border-white/[0.06]" />
        <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full border-[60px] border-white/[0.07]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-100">Seu próximo passo pode ser simples</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Troque a correria por uma visão clara do seu negócio.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-primary-50 sm:text-lg">Use o Gestão Pro gratuitamente, sem prazo para acabar. Faça upgrade somente quando precisar de mais capacidade.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={appLinks.signup} className="button-light">
              Começar agora <ArrowRight size={18} />
            </a>
            <span className="flex items-center gap-2 text-xs font-semibold text-primary-50"><CheckCircle2 size={17} /> Cadastro rápido e gratuito</span>
          </div>
        </div>
      </div>
    </section>
  );
}

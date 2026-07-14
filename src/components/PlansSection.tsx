import { ArrowRight, Check, LoaderCircle, RefreshCw, Sparkles } from 'lucide-react';
import { usePlans } from '../hooks/usePlans';
import { appLinks } from '../lib/links';
import { formatMoney, getLimitLabel, getPlanAudience, getPlanFeatures } from '../lib/plans';
import type { Plan } from '../types/plan';
import { SectionHeading } from './SectionHeading';

export function PlansSection() {
  const { plans, isLoading, error, retry } = usePlans();

  return (
    <section id="planos" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Planos transparentes"
          title="Escolha o ritmo do seu crescimento"
          description="Comece grátis e avance quando fizer sentido. Os preços e benefícios abaixo são carregados diretamente da plataforma."
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600" data-reveal>
          {['Plano gratuito permanente', 'Sem cartão', 'Upgrade quando precisar'].map((text) => (
            <span key={text} className="flex items-center gap-2"><span className="grid h-5 w-5 place-items-center rounded-full bg-primary-100 text-primary-700"><Check size={12} /></span>{text}</span>
          ))}
        </div>

        {isLoading && (
          <div className="mt-12 grid min-h-80 place-items-center rounded-3xl border border-slate-200 bg-white">
            <div className="text-center text-slate-500"><LoaderCircle className="mx-auto animate-spin text-primary-500" /><p className="mt-3 text-sm">Carregando planos...</p></div>
          </div>
        )}

        {!isLoading && error && (
          <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-amber-200 bg-amber-50 p-8 text-center">
            <h3 className="font-display text-xl font-bold text-ink">Não foi possível consultar os planos</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{error}</p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={retry} className="button-primary justify-center"><RefreshCw size={17} /> Tentar novamente</button>
              <a href={appLinks.plans} className="button-secondary justify-center">Ver no aplicativo</a>
            </div>
          </div>
        )}

        {!isLoading && !error && (
          <div className="mt-14 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-6" data-reveal>
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                className="xl:col-span-2"
              />
            ))}
          </div>
        )}

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-slate-500">
          Recursos, limites e disponibilidade são validados pela plataforma conforme o plano contratado.
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan, className }: { plan: Plan; className: string }) {
  const isFreePlan = plan.code === 'trial';
  const isRecommended = plan.isRecommended || plan.code === 'starter';
  const featureLabels = getPlanFeatures(plan);

  return (
    <article
      data-plan-code={plan.code}
      className={`relative flex h-full flex-col rounded-[1.6rem] border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${className} ${
        isRecommended
          ? 'border-primary-400 bg-white shadow-xl shadow-primary-900/10 ring-1 ring-primary-400'
          : 'border-slate-200 bg-white shadow-card'
      }`}
    >
      {isRecommended && (
        <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-primary-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-800">
          <Sparkles size={12} /> Mais escolhido
        </span>
      )}

      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-600">{getPlanAudience(plan.code)}</p>
      <h3 className="mt-3 pr-24 font-display text-2xl font-bold text-ink">{plan.name}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{plan.description}</p>

      <div className="mt-6 border-b border-slate-100 pb-6">
        {isFreePlan ? (
          <div>
            <span className="font-display text-4xl font-bold tracking-tight text-ink">Grátis</span>
            <p className="mt-1 text-xs font-medium text-primary-700">Para sempre e sem cartão</p>
          </div>
        ) : (
          <div>
            <span className="font-display text-4xl font-bold tracking-tight text-ink">{formatMoney(plan.monthlyPrice)}</span>
            <span className="text-sm text-slate-500">/mês</span>
          </div>
        )}
      </div>

      <div className="mt-5 flex-1">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">O que está incluído</p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-start gap-2.5 text-sm font-semibold text-slate-700">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-50 text-primary-600"><Check size={12} /></span>
            {getLimitLabel(plan)}
          </li>
          {featureLabels.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-50 text-primary-600"><Check size={12} /></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={isFreePlan ? appLinks.signup : appLinks.plans}
        className={`mt-7 justify-center ${isRecommended ? 'button-primary' : 'button-secondary'}`}
      >
        {isFreePlan ? 'Começar grátis' : `Escolher ${plan.name}`} <ArrowRight size={17} />
      </a>
    </article>
  );
}

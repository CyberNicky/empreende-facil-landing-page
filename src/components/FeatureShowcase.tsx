import {
  BarChart3,
  Boxes,
  Check,
  CircleDollarSign,
  CloudCog,
  FileDown,
  PackageSearch,
  ReceiptText,
  ShoppingCart,
  Users,
} from 'lucide-react';
import { useState } from 'react';
import { SectionHeading } from './SectionHeading';

const featureGroups = [
  {
    id: 'vendas',
    label: 'Vendas',
    icon: ShoppingCart,
    title: 'Registre vendas sem perder o ritmo',
    description: 'Encontre produtos, calcule totais e mantenha cada movimentação organizada em poucos passos.',
    points: ['Histórico centralizado', 'Atualização automática do estoque', 'Visão rápida dos resultados'],
    visual: 'sales',
  },
  {
    id: 'estoque',
    label: 'Estoque',
    icon: Boxes,
    title: 'Saiba o que entra, sai e precisa de atenção',
    description: 'Acompanhe quantidades e receba sinais claros quando um produto estiver próximo de acabar.',
    points: ['Alertas de estoque baixo', 'Cadastro organizado por categorias', 'Controle por produto'],
    visual: 'stock',
  },
  {
    id: 'financeiro',
    label: 'Financeiro',
    icon: CircleDollarSign,
    title: 'Entenda a saúde do negócio sem planilhas',
    description: 'Cruze vendas e despesas para enxergar o resultado com contexto e agir antes que um problema cresça.',
    points: ['Despesas por categoria', 'Indicadores no dashboard', 'Períodos fáceis de comparar'],
    visual: 'finance',
  },
  {
    id: 'relatorios',
    label: 'Relatórios',
    icon: BarChart3,
    title: 'Transforme rotina em decisões melhores',
    description: 'Planos elegíveis contam com relatórios avançados, exportações e backup para uma operação mais segura.',
    points: ['Relatórios básicos e avançados', 'Exportação Excel e PDF', 'Backup automático conforme o plano'],
    visual: 'reports',
  },
];

const overviewFeatures = [
  { icon: PackageSearch, title: 'Produtos organizados', description: 'Preço, categoria e estoque em uma visão simples.' },
  { icon: Users, title: 'Clientes por perto', description: 'Cadastros e histórico acessíveis quando precisar.' },
  { icon: ReceiptText, title: 'Despesas sob controle', description: 'Registre saídas e entenda para onde o dinheiro vai.' },
  { icon: FileDown, title: 'Dados que acompanham você', description: 'Exporte relatórios nos planos com esse benefício.' },
  { icon: CloudCog, title: 'Mais tranquilidade', description: 'Backup automático disponível a partir do plano Pro.' },
  { icon: BarChart3, title: 'Indicadores úteis', description: 'Informação clara para escolher o próximo passo.' },
];

export function FeatureShowcase() {
  const [activeId, setActiveId] = useState(featureGroups[0].id);
  const activeFeature = featureGroups.find((feature) => feature.id === activeId) ?? featureGroups[0];

  return (
    <section id="recursos" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Tudo conectado"
          title="Menos ferramentas. Mais visão do seu negócio."
          description="O Gestão Pro reúne a rotina que costuma ficar espalhada em cadernos e planilhas, mantendo cada informação no lugar certo."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal>
          {overviewFeatures.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-card sm:p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                <Icon size={21} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 rounded-[2rem] bg-slate-50 p-3 ring-1 ring-slate-200 sm:p-5 lg:p-7" data-reveal>
          <div className="mb-5 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Conheça os recursos">
            {featureGroups.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={activeId === id}
                aria-controls={`panel-${id}`}
                onClick={() => setActiveId(id)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${
                  activeId === id ? 'bg-ink text-white shadow-lg' : 'bg-white text-slate-600 hover:text-ink'
                }`}
              >
                <Icon size={17} aria-hidden="true" /> {label}
              </button>
            ))}
          </div>

          <div
            id={`panel-${activeFeature.id}`}
            role="tabpanel"
            className="grid min-h-[390px] items-center gap-10 overflow-hidden rounded-[1.5rem] bg-white p-6 shadow-card sm:p-9 lg:grid-cols-2 lg:p-12"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-600">{activeFeature.label}</p>
              <h3 className="mt-3 max-w-lg font-display text-3xl font-bold tracking-tight text-ink">{activeFeature.title}</h3>
              <p className="mt-4 max-w-lg leading-7 text-slate-600">{activeFeature.description}</p>
              <ul className="mt-6 space-y-3">
                {activeFeature.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-50 text-primary-600"><Check size={14} /></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <FeatureVisual type={activeFeature.visual} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ type }: { type: string }) {
  const labels: Record<string, { title: string; badge: string; values: string[] }> = {
    sales: { title: 'Vendas recentes', badge: 'Hoje', values: ['Pedido #1042', 'Pedido #1041', 'Pedido #1040'] },
    stock: { title: 'Situação do estoque', badge: 'Atualizado', values: ['Café especial', 'Camiseta básica', 'Embalagem média'] },
    finance: { title: 'Fluxo do período', badge: 'Este mês', values: ['Receitas', 'Despesas', 'Resultado'] },
    reports: { title: 'Central de relatórios', badge: 'Organizado', values: ['Vendas por período', 'Produtos mais vendidos', 'Exportar relatório'] },
  };
  const content = labels[type] ?? labels.sales;

  return (
    <div className="relative mx-auto w-full max-w-md rounded-[1.5rem] bg-ink p-5 shadow-soft sm:p-6">
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary-500/20 blur-2xl" />
      <div className="relative flex items-center justify-between text-white">
        <div><p className="text-[10px] uppercase tracking-[0.16em] text-primary-300">Gestão Pro</p><p className="mt-1 font-display font-semibold">{content.title}</p></div>
        <span className="rounded-lg bg-white/10 px-2.5 py-1 text-[10px] text-slate-300">{content.badge}</span>
      </div>
      <div className="relative mt-6 space-y-2.5">
        {content.values.map((value, index) => (
          <div key={value} className="flex items-center justify-between rounded-xl bg-white/[0.07] p-3.5 text-white ring-1 ring-white/10">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary-500/20 text-xs font-bold text-primary-300">{index + 1}</span>
              <span className="text-xs font-medium sm:text-sm">{value}</span>
            </div>
            <span className={`h-2 w-12 rounded-full ${index === 2 ? 'bg-primary-400' : 'bg-slate-600'}`} />
          </div>
        ))}
      </div>
      <div className="relative mt-5 flex h-20 items-end gap-2" aria-hidden="true">
        {[36, 58, 44, 72, 62, 85, 68, 94].map((height, index) => (
          <span key={`${height}-${index}`} className="flex-1 rounded-t-sm bg-primary-500/70" style={{ height: `${height}%` }} />
        ))}
      </div>
    </div>
  );
}

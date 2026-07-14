import { ArrowUpRight, BarChart3, Boxes, CircleDollarSign, LayoutDashboard, ShoppingBag, Users } from 'lucide-react';

const bars = [38, 58, 42, 72, 54, 86, 66, 92, 76, 100, 84, 112];

export function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[680px]" aria-label="Prévia ilustrativa do painel Gestão Pro">
      <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-primary-300/20 blur-3xl" />
      <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white p-2 shadow-soft ring-1 ring-slate-900/5">
        <div className="flex min-h-[410px] overflow-hidden rounded-[1.25rem] bg-slate-50 sm:min-h-[450px]">
          <aside className="hidden w-40 shrink-0 bg-ink p-4 text-white sm:block">
            <div className="mb-8 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary-500">
                <ArrowUpRight size={15} />
              </span>
              <span className="font-display text-sm font-semibold">Gestão Pro</span>
            </div>
            <div className="space-y-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2.5 text-white">
                <LayoutDashboard size={14} /> Dashboard
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5"><ShoppingBag size={14} /> Vendas</div>
              <div className="flex items-center gap-2 px-3 py-2.5"><Boxes size={14} /> Produtos</div>
              <div className="flex items-center gap-2 px-3 py-2.5"><Users size={14} /> Clientes</div>
              <div className="flex items-center gap-2 px-3 py-2.5"><CircleDollarSign size={14} /> Despesas</div>
            </div>
          </aside>

          <div className="min-w-0 flex-1 p-4 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-600">Visão demonstrativa</p>
                <h3 className="mt-1 font-display text-lg font-bold text-ink sm:text-xl">Olá, seu negócio hoje</h3>
              </div>
              <span className="h-9 w-9 rounded-full bg-gradient-to-br from-primary-200 to-primary-500 ring-4 ring-white" />
            </div>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
              <Metric label="Vendas" value="R$ 2.480" accent="bg-primary-50 text-primary-600" icon={<ShoppingBag size={16} />} />
              <Metric label="Clientes" value="128" accent="bg-blue-50 text-blue-600" icon={<Users size={16} />} />
              <Metric label="Estoque baixo" value="3 itens" accent="bg-amber-50 text-amber-600" icon={<Boxes size={16} />} extraClass="hidden lg:block" />
            </div>

            <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">Desempenho de vendas</p>
                  <p className="mt-1 text-sm font-bold text-ink">Evolução no período</p>
                </div>
                <span className="rounded-lg bg-primary-50 px-2.5 py-1 text-[10px] font-semibold text-primary-700">Últimos 30 dias</span>
              </div>
              <div className="mt-6 flex h-28 items-end gap-1.5 sm:h-36 sm:gap-2" aria-hidden="true">
                {bars.map((height, index) => (
                  <span
                    key={`${height}-${index}`}
                    className={`flex-1 rounded-t-md ${index >= bars.length - 3 ? 'bg-primary-500' : 'bg-primary-100'}`}
                    style={{ height }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-xl bg-ink px-4 py-3 text-white">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary-500/20 text-primary-300"><BarChart3 size={16} /></span>
                <div><p className="text-[10px] text-slate-400">Resultado estimado</p><p className="text-xs font-semibold">Tudo em um só painel</p></div>
              </div>
              <ArrowUpRight size={17} className="text-primary-300" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-card sm:flex lg:-left-8 animate-float">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-primary-600"><Boxes size={19} /></span>
        <div><p className="text-[10px] text-slate-500">Estoque monitorado</p><p className="text-xs font-bold text-ink">Alerta antes de faltar</p></div>
      </div>
    </div>
  );
}

interface MetricProps {
  label: string;
  value: string;
  accent: string;
  icon: React.ReactNode;
  extraClass?: string;
}

function Metric({ label, value, accent, icon, extraClass = '' }: MetricProps) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-3 shadow-card sm:p-4 ${extraClass}`}>
      <span className={`mb-3 grid h-8 w-8 place-items-center rounded-lg ${accent}`}>{icon}</span>
      <p className="text-[10px] text-slate-500 sm:text-xs">{label}</p>
      <p className="mt-0.5 font-display text-base font-bold text-ink sm:text-lg">{value}</p>
    </div>
  );
}

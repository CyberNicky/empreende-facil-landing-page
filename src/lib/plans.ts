import type { Plan, PlanFeatureKey } from '../types/plan';

export const PLAN_ORDER = ['trial', 'starter', 'pro'] as const;

export const FEATURE_LABELS: Record<PlanFeatureKey, string> = {
  dashboard: 'Dashboard completo',
  sales: 'Vendas',
  products: 'Produtos e estoque',
  categories: 'Categorias',
  customers: 'Clientes',
  expenses: 'Despesas',
  reports: 'Relatórios básicos',
  advancedReports: 'Relatórios avançados',
  dataExport: 'Exportação Excel e PDF',
  automaticBackup: 'Backup automático',
  prioritySupport: 'Suporte prioritário',
  premiumSupport: 'Suporte premium',
};

const FEATURE_DISPLAY_ORDER: PlanFeatureKey[] = [
  'sales',
  'products',
  'categories',
  'customers',
  'expenses',
  'dashboard',
  'reports',
  'advancedReports',
  'dataExport',
  'automaticBackup',
  'prioritySupport',
  'premiumSupport',
];

export function sortPlans(plans: Plan[]): Plan[] {
  return plans
    .filter((plan) =>
      PLAN_ORDER.includes(plan.code as (typeof PLAN_ORDER)[number]),
    )
    .sort((first, second) => {
      const firstIndex = PLAN_ORDER.indexOf(
        first.code as (typeof PLAN_ORDER)[number],
      );
      const secondIndex = PLAN_ORDER.indexOf(
        second.code as (typeof PLAN_ORDER)[number],
      );
      const safeFirst = firstIndex === -1 ? PLAN_ORDER.length : firstIndex;
      const safeSecond = secondIndex === -1 ? PLAN_ORDER.length : secondIndex;

      return safeFirst - safeSecond;
    });
}

export function formatMoney(value: string | number): string {
  const amount = typeof value === 'number' ? value : Number(value);

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(Number.isFinite(amount) ? amount : 0);
}

export function getPlanFeatures(plan: Plan, maximum = 10): string[] {
  return FEATURE_DISPLAY_ORDER
    .filter((feature) => {
      if (!plan.features[feature]) return false;
      if (feature === 'reports' && plan.features.advancedReports) return false;
      if (feature === 'prioritySupport' && plan.features.premiumSupport) {
        return false;
      }
      return true;
    })
    .map((feature) => FEATURE_LABELS[feature])
    .slice(0, maximum);
}

export function getLimitLabel(plan: Plan): string {
  const productLimit = plan.limits.products;
  const customerLimit = plan.limits.customers;
  const salesLimit = plan.limits.salesPerMonth;

  if (productLimit == null && customerLimit == null && salesLimit == null) {
    return 'Uso ilimitado';
  }

  const entries = [
    productLimit != null ? `${productLimit.toLocaleString('pt-BR')} produtos` : null,
    customerLimit != null ? `${customerLimit.toLocaleString('pt-BR')} clientes` : null,
    salesLimit != null ? `${salesLimit.toLocaleString('pt-BR')} vendas/mês` : null,
  ].filter(Boolean);

  if (entries.length === 1) return `Até ${entries[0]}`;
  return `Até ${entries.slice(0, -1).join(', ')} e ${entries[entries.length - 1]}`;
}

export function getPlanAudience(code: string): string {
  const audiences: Record<string, string> = {
    trial: 'Para começar gratuitamente',
    starter: 'MEI e negócios iniciando',
    pro: 'Empresas em crescimento',
  };

  return audiences[code] ?? 'Para negócios que querem crescer';
}

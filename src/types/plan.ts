export type PlanFeatureKey =
  | 'dashboard'
  | 'sales'
  | 'products'
  | 'categories'
  | 'customers'
  | 'expenses'
  | 'reports'
  | 'advancedReports'
  | 'dataExport'
  | 'automaticBackup'
  | 'prioritySupport'
  | 'premiumSupport';

export interface PlanFeatures {
  dashboard?: boolean;
  sales?: boolean;
  products?: boolean;
  categories?: boolean;
  customers?: boolean;
  expenses?: boolean;
  reports?: boolean;
  advancedReports?: boolean;
  dataExport?: boolean;
  automaticBackup?: boolean;
  prioritySupport?: boolean;
  premiumSupport?: boolean;
}

export interface PlanLimits {
  products?: number | null;
  customers?: number | null;
  salesPerMonth?: number | null;
}

export interface Plan {
  id: string;
  code: string;
  name: string;
  description: string;
  monthlyPrice: string | number;
  yearlyPrice: string | number;
  trialDays?: number | null;
  durationMonths?: number | null;
  features: PlanFeatures;
  limits: PlanLimits;
  isActive: boolean;
  isRecommended?: boolean;
}

export interface PlansResponse {
  data: Plan[];
}

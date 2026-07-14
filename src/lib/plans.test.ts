import { describe, expect, it } from 'vitest';
import {
  formatMoney,
  getLimitLabel,
  getPlanFeatures,
  sortPlans,
} from './plans';
import type { Plan } from '../types/plan';

const createPlan = (code: string): Plan => ({
  id: code,
  code,
  name: code,
  description: '',
  monthlyPrice: 0,
  yearlyPrice: 0,
  features: {},
  limits: {},
  isActive: true,
});

describe('plan helpers', () => {
  it('returns only trial, starter and pro in the expected order', () => {
    const plans = ['business', 'starter', 'founder', 'trial', 'pro'].map(createPlan);

    expect(sortPlans(plans).map((plan) => plan.code)).toEqual([
      'trial',
      'starter',
      'pro',
    ]);
  });

  it('formats monetary values using Brazilian currency', () => {
    expect(formatMoney('49.90')).toContain('49,90');
  });

  it('shows the advanced Pro permissions instead of the basic report label', () => {
    const pro = createPlan('pro');
    pro.features = {
      reports: true,
      advancedReports: true,
      dataExport: true,
      automaticBackup: true,
      prioritySupport: true,
    };

    expect(getPlanFeatures(pro)).toEqual([
      'Relatórios avançados',
      'Exportação Excel e PDF',
      'Backup automático',
      'Suporte prioritário',
    ]);
  });

  it('shows advanced reports for Starter without spreadsheet export', () => {
    const starter = createPlan('starter');
    starter.features = {
      reports: true,
      advancedReports: true,
      dataExport: false,
    };

    expect(getPlanFeatures(starter)).toContain('Relatórios avançados');
    expect(getPlanFeatures(starter)).not.toContain('Exportação Excel e PDF');
  });

  it('shows the updated Starter limit and unlimited Pro usage', () => {
    const starter = createPlan('starter');
    starter.limits = {
      products: 1000,
      customers: 1000,
      salesPerMonth: 1000,
    };
    const pro = createPlan('pro');
    pro.limits = {
      products: null,
      customers: null,
      salesPerMonth: null,
    };

    expect(getLimitLabel(starter)).toBe(
      'Até 1.000 produtos, 1.000 clientes e 1.000 vendas/mês',
    );
    expect(getLimitLabel(pro)).toBe('Uso ilimitado');
  });
});

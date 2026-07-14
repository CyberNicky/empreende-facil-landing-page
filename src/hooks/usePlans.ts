import { useEffect, useState } from 'react';
import { sortPlans } from '../lib/plans';
import type { Plan, PlansResponse } from '../types/plan';

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000/api').replace(/\/$/, '');

interface UsePlansResult {
  plans: Plan[];
  isLoading: boolean;
  error: string | null;
  retry: () => void;
}

export function usePlans(): UsePlansResult {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPlans() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`${API_URL}/plans`, { signal: controller.signal });

        if (!response.ok) throw new Error('Não foi possível carregar os planos.');

        const payload = (await response.json()) as PlansResponse | Plan[];
        const data = Array.isArray(payload) ? payload : payload.data;
        setPlans(sortPlans(data.filter((plan) => plan.isActive)));
      } catch (requestError) {
        if (requestError instanceof DOMException && requestError.name === 'AbortError') return;
        setError('Os planos não puderam ser carregados agora. Tente novamente em instantes.');
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    void loadPlans();
    return () => controller.abort();
  }, [attempt]);

  return {
    plans,
    isLoading,
    error,
    retry: () => setAttempt((current) => current + 1),
  };
}

export const APP_URL = (import.meta.env.VITE_APP_URL || 'https://empreende-facil.vercel.app').replace(/\/$/, '');

export const appLinks = {
  login: `${APP_URL}/auth`,
  signup: `${APP_URL}/auth?cadastro=1`,
  plans: `${APP_URL}/planos`,
} as const;

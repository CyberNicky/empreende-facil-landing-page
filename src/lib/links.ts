export const APP_URL = (import.meta.env.VITE_APP_URL || 'http://localhost:8080').replace(/\/$/, '');

export const appLinks = {
  login: `${APP_URL}/auth`,
  signup: `${APP_URL}/auth`,
  plans: `${APP_URL}/planos`,
} as const;

# Gestão Pro — Landing Page

Site institucional independente do front-end autenticado e da API do Gestão Pro. A landing apresenta o produto, recursos, planos e informações da empresa, usando a mesma identidade visual da aplicação.

## Requisitos

- Node.js 20 ou superior
- API do Gestão Pro disponível para carregar os planos
- Front-end do Gestão Pro disponível para os links de acesso e cadastro

## Configuração

```bash
cp .env.example .env
npm install
npm run dev
```

A landing abre em `http://localhost:4173`.

Variáveis disponíveis:

- `VITE_API_URL`: URL base da API, incluindo `/api`
- `VITE_APP_URL`: URL do aplicativo principal

## Verificações

```bash
npm run lint
npm test
npm run build
```

Os preços e benefícios dos planos não ficam duplicados na landing: são lidos do endpoint público `GET /plans` da API.

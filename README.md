# SaúdeGPT Fisioterapia 🦵

Plataforma EAD multi-tenancy para **Fisioterapia** — parte do ecossistema tpiola.

## Stack

- **Frontend:** Next.js 14 (App Router) + TypeScript
- **Design System:** Navy + Gold, glassmorphism (via `@saudegpt/core`)
- **Auth:** Supabase
- **AI Tutor:** OmniRoute + Gemini
- **Gamificação:** XP, badges, streaks, leaderboard

## Órgão Regulador

- **CREFITO — Conselho Regional de Fisioterapia e Terapia Ocupacional**

## Começando

```bash
pnpm install
pnpm dev
```

## Estrutura

```
src/
  app/          # App Router pages
  components/   # UI components (course-specific)
  lib/          # Utilities
  styles/       # Theme overrides
```

## Dependências

Este projeto depende de `@saudegpt/core` para componentes compartilhados.

<!-- deploy trigger -->

<!-- redeploy v2 -->

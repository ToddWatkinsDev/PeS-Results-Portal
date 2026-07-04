# Phase 1 — Foundation Spec

## Purpose

Phase 1 establishes the technical foundation for the Play eSailing Results Platform. The goal is to lock the stack, define the repository structure, establish the core domain and permission model, and set up the Tailwind design token system so later phases can move quickly and consistently. [file:1]

The platform is intended to serve three groups from the beginning: anonymous public viewers, registered players or organisers, and administrators. It should remain ready for future read-only or external integrations without forcing UI rewrites. [file:1]

## Phase 1 outcomes

By the end of Phase 1, the project should have:

- A finalized production-grade stack.
- A layered repository structure.
- A clear route plan.
- A centralized permission model.
- Initial domain entities.
- A Tailwind token strategy for colors and theme values.
- A foundation that supports dark mode and future modular growth. [file:1]

## Final stack

The project will use the following stack:

| Area | Decision |
|---|---|
| App framework | Next.js [file:1] |
| Language | TypeScript [file:1] |
| Styling | Tailwind CSS [file:1] |
| Database | Supabase/Postgres [file:1] |
| Validation | Zod [file:1] |
| Forms | React Hook Form [file:1] |
| Tables | TanStack Table [file:1] |

This stack is selected because the platform needs full-stack routing, reusable components, form-heavy workflows, dark mode support, and a path to future integrations. [file:1]

## Architecture

The application should be split into the following layers:

- **Domain** — core business entities and rules.
- **Application** — use cases such as creating races, recording results, and listing public races.
- **Infrastructure** — database repositories, authentication adapters, and future integration connectors.
- **Presentation** — pages, forms, tables, layout shells, and UI primitives.
- **Shared** — utilities, constants, validation schemas, and design tokens. [file:1]

Architecture rules:

- UI code must consume internal application models, not raw external payloads.
- Integrations must map external data into internal domain types before use.
- Permission checks must be centralized in policy functions or services.
- Styling must be token-driven through Tailwind theme values rather than hardcoded values. [file:1]

## Repository structure

The initial repository structure should follow this pattern:

```txt
app/
src/
  domain/
  application/
  infrastructure/
  presentation/
  shared/
```

Recommended responsibility split:

- `app/` for route entry points and page composition.
- `src/domain/` for entities and business rules.
- `src/application/` for use cases and orchestration.
- `src/infrastructure/` for Supabase access, repositories, auth adapters, and future connectors.
- `src/presentation/` for reusable UI, forms, and layouts.
- `src/shared/` for helpers, constants, schemas, and design tokens. [file:1]

## Route baseline

The initial route plan should be:

| Route | Purpose |
|---|---|
| `/` | Home page. [file:1] |
| `/login` | Placeholder login for manually created accounts. [file:1] |
| `/register` | Optional placeholder route, likely hidden or restricted. [file:1] |
| `/results` | Public listing of races. [file:1] |
| `/results/[raceSlug]` | Public race detail page. [file:1] |
| `/dashboard` | Authenticated landing page. [file:1] |
| `/dashboard/races` | Owned and assigned races. [file:1] |
| `/dashboard/races/new` | Create race flow. [file:1] |
| `/dashboard/races/[raceId]` | Manage a race. [file:1] |
| `/dashboard/races/[raceId]/results/new` | Record a result manually. [file:1] |
| `/admin/users` | Manual account management. [file:1] |
| `/admin/races` | Administrative oversight. [file:1] |

## Permission model

Access control should use role-based rules with ownership and assignment checks. [file:1]

| Role | Public races | Private assigned races | Create races | Record results | Manage assigned content | Manage all content |
|---|---|---|---|---|---|---|
| Anonymous | Yes [file:1] | No [file:1] | No [file:1] | No [file:1] | No [file:1] | No [file:1] |
| User / Player | Yes [file:1] | Yes, if assigned [file:1] | Yes [file:1] | Yes [file:1] | Yes [file:1] | No [file:1] |
| Admin | Yes [file:1] | Yes [file:1] | Yes [file:1] | Yes [file:1] | Yes [file:1] | Yes [file:1] |

Permission rules:

- Anonymous users can only access public race results. [file:1]
- User accounts are created manually by the site owner for now.
- A user can manage races or events they own, or that another eligible user has assigned to them.
- Admins can manage all entities across the platform. [file:1]

## Domain model

The initial domain model should include:

- `users`
- `roles`
- `events`
- `races`
- `results`
- `race_managers`
- `event_managers`
- `visibility_rules`
- `audit_logs`
- `integration_sources` [file:1]

### Core entities

| Entity | Purpose | Key fields |
|---|---|---|
| Users | Identity and role model | `id`, `email`, `display_name`, `role`, `status` [file:1] |
| Events | Optional parent container for races | `id`, `name`, `slug`, `owner_user_id`, `visibility`, `created_at` [file:1] |
| Races | Main working object in v1 | `id`, `event_id`, `name`, `slug`, `owner_user_id`, `visibility`, `status`, `scheduled_at` [file:1] |
| Results | Recorded or imported race outcomes | `id`, `race_id`, `gamer_tag`, `finishing_position`, `race_time`, `penalties`, `avg_speed`, `top_speed`, `time_to_start`, `entered_by_user_id`, `source` [file:1] |
| Race managers | Assignment control | `race_id`, `user_id`, `permission_level` [file:1] |
| Event managers | Future event assignment control | `event_id`, `user_id`, `permission_level` [file:1] |
| Audit logs | Track important changes | `id`, `actor_user_id`, `entity_type`, `entity_id`, `action`, `created_at` [file:1] |
| Integration sources | External system metadata | `id`, `provider`, `external_id`, `synced_at`, `status` [file:1] |

### Result fields

The current expected race-result information includes:

- race name.
- gamer tag.
- finishing position.
- race time.
- penalties.
- average speed.
- top speed.
- time to start. [file:1]

## Tailwind tokens

Tailwind should be configured around semantic tokens instead of hardcoded colors. [file:1]

Suggested tokens:

- `--color-bg`
- `--color-surface`
- `--color-surface-2`
- `--color-primary`
- `--color-secondary`
- `--color-accent`
- `--color-text`
- `--color-text-muted`
- `--color-success`
- `--color-danger` [file:1]

Dark mode should be supported from the first version. [file:1]

## Phase 1 deliverables

- Confirm the stack.
- Create the folder structure.
- Define the permission matrix.
- Define the domain model.
- Define Tailwind theme tokens.
- Prepare the project for the app shell and UI system work in Phase 2. [file:1]

## Phase 1 exit criteria

Phase 1 is complete when the codebase has:

- A locked stack.
- A layered repository structure.
- Centralized permission rules.
- Initial domain entities.
- A Tailwind token system ready for implementation. [file:1]

## Next phase

The next build step after Phase 1 is Phase 2: design system, where the app shell, core UI primitives, dark mode, and branded page patterns are built. [file:1]
# Play eSailing Results Platform Design Document

## Overview

This document defines the current full design direction for a modular full-stack Play eSailing results platform. The platform is intended to serve three audiences at once: anonymous public viewers, registered players or organisers, and administrators, while remaining compatible with future direct integrations such as a read-only Play eSailing API connector.[cite:1][cite:2]

The product is positioned as a public-first results platform that can evolve into a broader companion platform over time. Public race results are available to anyone when marked public, while private races or events are visible only to authorised users based on role, ownership, or assignment rules.[cite:1][cite:30]

## Product goals

The first release should support a branded public website, placeholder authentication, race creation, manual result entry, public race-result browsing, and role-based management. The architecture should be production-oriented from the start so that future event support, richer statistics, and external data integrations can be added without major rewrites.[cite:1][cite:8]

Primary goals:
- Present Play eSailing race results in a clean, brand-aligned interface.[cite:1]
- Allow authorised users to create races and record results manually.[cite:1]
- Allow anonymous users to browse public results only.[cite:1][cite:30]
- Support dark mode and responsive layouts from the beginning using Tailwindâ€™s theming and responsive utility model.[cite:43][cite:44][cite:6]
- Keep the system modular so multiple future integrations can be attached through adapters instead of direct UI coupling.[cite:8][cite:31]

## Users and permissions

The platform should use role-based access control combined with ownership and assignment checks.

| Role | Can view public races | Can view private assigned races | Can create races | Can record results | Can manage assigned content | Can manage all content |
|---|---|---|---|---|---|---|
| Anonymous | Yes [cite:1] | No [cite:30] | No | No | No | No |
| User / Player | Yes [cite:1] | Yes, if assigned [cite:30] | Yes [cite:1] | Yes [cite:1] | Yes [cite:30] | No |
| Admin | Yes [cite:1] | Yes [cite:30] | Yes [cite:1] | Yes [cite:1] | Yes [cite:30] | Yes [cite:30] |

Permission rules:
- Anonymous users can only access public race results.[cite:1][cite:30]
- User accounts are created manually by the site owner for now; open self-service registration is not part of the current release.[cite:30]
- A player or user can manage races or events they own, or that another eligible user has assigned them to manage.[cite:30]
- Admins can manage all entities across the platform.[cite:30]

## Functional scope

The currently agreed first-scope areas are the home page, login or register flow, and race screen. Although events are expected in the broader domain model, the first UI focus should remain on race creation, result entry, and public result presentation because users have explicitly prioritised the race workflow.[cite:1]

Core features for the current design:
- Public home page explaining the platform and surfacing result content.[cite:1]
- Placeholder login and account-access flow for manually created accounts.[cite:30]
- Public results list and public race detail screens.[cite:1]
- Authenticated race creation and manual result entry.[cite:1]
- Ownership and assignment-based race management.[cite:30]
- Optional visibility controls so races can be public or private.[cite:30]

## Information architecture

The site should be designed as a web application rather than a simple static brochure site because it includes public browsing, authenticated workflows, and future integration points. Tailwindâ€™s theme system supports central control of design tokens, and its responsive utility system supports a mobile-first workflow across public pages and data-heavy app pages.[cite:29][cite:6]

Recommended route structure:
- `/` â€” home page.[cite:1]
- `/login` â€” placeholder login for manually created accounts.[cite:30]
- `/register` â€” optional placeholder route, likely hidden or access-restricted in the first release because accounts are created manually.[cite:30]
- `/results` â€” public listing of available races.[cite:1]
- `/results/[raceSlug]` â€” public race detail page.[cite:1]
- `/dashboard` â€” authenticated landing page.[cite:30]
- `/dashboard/races` â€” list of owned and assigned races.[cite:30]
- `/dashboard/races/new` â€” create race flow.[cite:1]
- `/dashboard/races/[raceId]` â€” manage a race.[cite:30]
- `/dashboard/races/[raceId]/results/new` â€” record a result manually.[cite:1]
- `/admin/users` â€” manual account management.[cite:30]
- `/admin/races` â€” administrative oversight.[cite:30]

## Modular architecture

The platform should be split into layers so future integrations can be added with minimal disruption. Tailwind is well suited to a reusable component architecture when theme values and repeated patterns are centralised rather than duplicated in templates.[cite:8][cite:63]

Recommended application layers:
- **Domain** â€” core business entities and rules such as user, race, result, visibility, ownership, and assignment.[cite:1]
- **Application** â€” use-cases such as create race, record result, publish race, assign manager, and list public results.[cite:1]
- **Infrastructure** â€” database repositories, authentication adapters, and future Play eSailing integration connectors.[cite:8][cite:31]
- **Presentation** â€” pages, forms, tables, filters, badges, layout shells, and Tailwind-based UI primitives.[cite:29][cite:63]
- **Shared** â€” utility functions, validation schemas, constants, and design tokens.[cite:8]

Key modularity principles:
- UI code should consume internal application models, not raw third-party payloads.[cite:8][cite:31]
- Integrations should implement adapter interfaces and map their data into internal types before persistence or display.[cite:8]
- Permission checks should be centralised in policy functions or services, not repeated ad hoc in pages.[cite:30]
- Styling should be token-driven, using Tailwind theme values rather than scattered hardcoded colors or spacing.[cite:29][cite:8]

## Technology recommendation

The recommended production-grade stack is:
- **Next.js** for the application shell and routing.
- **TypeScript** for safety across domain models, forms, adapters, and permissions.
- **Tailwind CSS** as the primary styling framework.
- **Supabase/Postgres** for the database and future authentication/storage support.
- **Zod** for schema validation.
- **React Hook Form** for user-facing forms.
- **TanStack Table** for scalable result tables.[cite:29][cite:63]

This stack is appropriate because the project needs a real full-stack structure, dark mode, reusable components, form-heavy workflows, and a path to future integrations while remaining approachable for iterative development.[cite:44][cite:6][cite:8]

## Data model

The data model should support current manual entry and future external imports simultaneously. Every important record should use UUIDs and include metadata fields that show whether a result was entered manually or synchronised from an external connector.[cite:1]

Recommended entities:
- `users`
- `roles`
- `events`
- `races`
- `results`
- `race_managers`
- `event_managers`
- `visibility_rules`
- `audit_logs`
- `integration_sources` [cite:1]

### Entity outline

| Entity | Purpose | Key fields |
|---|---|---|
| Users | Identity and role model | `id`, `email`, `display_name`, `role`, `status` [cite:30] |
| Events | Optional parent container for races | `id`, `name`, `slug`, `owner_user_id`, `visibility`, `created_at` [cite:1] |
| Races | Main working object in v1 | `id`, `event_id`, `name`, `slug`, `owner_user_id`, `visibility`, `status`, `scheduled_at` [cite:1] |
| Results | Recorded or imported race outcomes | `id`, `race_id`, `gamer_tag`, `finishing_position`, `race_time`, `penalties`, `avg_speed`, `top_speed`, `time_to_start`, `entered_by_user_id`, `source` [cite:1] |
| Race managers | Assignment control | `race_id`, `user_id`, `permission_level` [cite:30] |
| Event managers | Future event assignment control | `event_id`, `user_id`, `permission_level` [cite:30] |
| Audit logs | Track important changes | `id`, `actor_user_id`, `entity_type`, `entity_id`, `action`, `created_at` [cite:30] |
| Integration sources | External system metadata | `id`, `provider`, `external_id`, `synced_at`, `status` [cite:8] |

### Result fields currently expected

The current expected race-result information includes:
- race name,[cite:1]
- gamer tag,[cite:1]
- finishing position,[cite:1]
- race time,[cite:1]
- penalties,[cite:1]
- average speed,[cite:1]
- top speed,[cite:1]
- time to start.[cite:1]

The user also indicated a likely model where each race has a UUID and results, while an event aggregates multiple race results and a final total. That should be reflected in the domain model even if the first UI does not fully expose the event layer yet.[cite:1]

## Integration strategy

The platform should assume that Play eSailing API access may arrive later and that other integrations may follow after that. Because of this, integration code should be implemented behind a shared interface instead of directly inside page components or database tables.[cite:1][cite:8]

Recommended adapter structure:
- `ManualResultsAdapter` for human-entered data.[cite:1]
- `PlayESailingAdapter` for future read-only game data.[cite:1]
- `FutureIntegrationAdapter` pattern for additional providers.[cite:8]

Recommended adapter methods:
- `fetchRace()`
- `fetchResults()`
- `mapRaceToDomain()`
- `mapResultsToDomain()`
- `getSyncMetadata()` [cite:8]

This approach keeps the app modular and prevents a future integration from forcing a redesign of UI components, permissions, or database relationships.[cite:8][cite:31]

## Design system direction

The interface should stay as close to the Play eSailing brand as practical while still being optimised for usability in a results-focused application. The Play eSailing public site should be treated as the visual anchor for palette and tone, while Tailwind theme variables should hold the actual implementation tokens for colors, spacing, typography, borders, radii, and shadows.[cite:1][cite:8][cite:29]

Design principles:
- Tailwind CSS should be used as much as possible.[cite:29]
- Brand colors should be mapped to semantic tokens rather than used as scattered hardcoded values.[cite:8][cite:31]
- The public home page can be more brand-led, while the race screen should be more data-led and scannable.[cite:1]
- Dark mode should be available from the first version using Tailwindâ€™s dark-mode support.[cite:43][cite:44]
- Components should be reusable and modular so later sections and integrations can inherit the same design language.[cite:63]

Suggested semantic tokens:
- `--color-bg`
- `--color-surface`
- `--color-surface-2`
- `--color-primary`
- `--color-secondary`
- `--color-accent`
- `--color-text`
- `--color-text-muted`
- `--color-success`
- `--color-danger` [cite:8][cite:29]

## Page-by-page design

### Home page

The home page should explain the platform clearly and give users a fast understanding of what it is for. It should also present the site as an official-looking, polished companion experience rather than a generic dashboard template.[cite:1]

Recommended sections:
- Hero with a clear results-focused value proposition.[cite:1]
- Short explanation of how the platform serves spectators, players, and organisers.[cite:1]
- Preview of public race results or featured races.[cite:1]
- Login or access call-to-action.[cite:30]
- Footer with support or brand links where appropriate.[cite:7][cite:1]

### Login and register

The authentication UI should be intentionally simple because public sign-up is not the current account model. A login page is necessary, while a register page can exist only as a placeholder or restricted path depending on implementation preference.[cite:30]

Recommended states:
- Login form.[cite:30]
- Access note explaining that accounts are currently created manually.[cite:30]
- Error state for invalid credentials.[cite:30]
- Optional hidden or restricted register placeholder.[cite:30]

### Race screen

The race screen is the most important application surface because it handles both public result display and authenticated result management. Tailwindâ€™s responsive utilities make it suitable for switching between denser table layouts on desktop and stacked card or simplified table views on smaller screens.[cite:6][cite:53]

Recommended race-screen modules:
- Race header with title and status.[cite:1]
- Visibility badge: public or private.[cite:30]
- Metadata row.[cite:1]
- Results table.[cite:1]
- Manual result-entry actions for authorised users.[cite:1]
- Empty, loading, and error states.[cite:6]
- Future filters, sorting, and deeper stat breakdowns.[cite:6]

## Component inventory

The system should define reusable components before deep feature work begins. Tailwind works best at scale when repeated UI structures are componentised instead of copied with long class strings across many pages.[cite:63][cite:29]

Core UI primitives:
- Button
- Input
- Select
- Checkbox
- Radio group
- Textarea
- Badge
- Card
- Table shell
- Modal or dialog
- Tabs
- Toast
- Empty state
- Error state
- Skeleton loader [cite:63]

Feature components:
- Site header
- Footer
- Theme toggle
- Login form
- Race creation form
- Result entry form
- Results table
- Race summary header
- Role guard wrapper
- Visibility toggle [cite:44][cite:63]

## Responsive and accessibility requirements

The platform should be mobile-first and accessible from the start. Tailwindâ€™s responsive system is specifically designed to apply utility classes conditionally at different breakpoints, which makes it appropriate for public pages as well as denser authenticated screens.[cite:6][cite:53]

Required standards:
- Responsive layouts for mobile, tablet, and desktop.[cite:6]
- Keyboard-accessible navigation and forms.[cite:6]
- Clear visible focus states.[cite:44]
- Sufficient color contrast in both light and dark mode.[cite:44]
- Touch-friendly controls for small screens.[cite:6]
- Semantic structure in public and app pages.[cite:6]

## Delivery roadmap

The implementation should proceed in small, testable slices so the typist workflow and external QA workflow stay efficient.

### Phase 1 â€” Foundation
- Finalise stack.[cite:29]
- Create folder structure.[cite:63]
- Define domain entities and permissions.[cite:30]
- Define Tailwind theme tokens.[cite:8][cite:29]

### Phase 2 â€” Design system
- Build app shell.[cite:63]
- Build core UI primitives.[cite:63]
- Add dark mode.[cite:43][cite:44]
- Establish branded page patterns.[cite:1]

### Phase 3 â€” Public experience
- Build home page.[cite:1]
- Build public results list.[cite:1]
- Build public race detail view.[cite:1]

### Phase 4 â€” Auth and permissions
- Build login flow.[cite:30]
- Implement placeholder account model.[cite:30]
- Add route guards and permission policies.[cite:30]

### Phase 5 â€” Race management
- Build create-race flow.[cite:1]
- Build manual result-entry flow.[cite:1]
- Build race-management screen.[cite:30]
- Add visibility controls.[cite:30]

### Phase 6 â€” Admin controls
- Build manual account administration.[cite:30]
- Build platform oversight screens.[cite:30]
- Add audit visibility where needed.[cite:30]

### Phase 7 â€” Integration readiness
- Define adapter interfaces.[cite:8]
- Implement manual adapter.[cite:1]
- Stub the Play eSailing adapter.[cite:1]
- Add sync metadata handling.[cite:8]

## Implementation priorities

The best immediate build order is:
1. Stack and project structure.[cite:29][cite:63]
2. Permission matrix and domain model.[cite:30]
3. Tailwind theme tokens and app shell.[cite:8][cite:29]
4. UI primitives.[cite:63]
5. Home page.[cite:1]
6. Login page.[cite:30]
7. Public results list.[cite:1]
8. Public race detail page.[cite:1]
9. Create-race page.[cite:1]
10. Add-result form.[cite:1]
11. Race-management page.[cite:30]
12. Admin user management.[cite:30]

## Summary

The current design defines a modular Play eSailing results platform with a public-first browsing experience, restricted account creation, race creation and manual result entry for authorised users, role-aware visibility, and a future-proof architecture for Play eSailing and other integrations. Tailwind CSS should be the primary styling system, Play eSailing should guide the visual identity, and the internal domain model should be treated as the stable contract that all future integrations must map into.[cite:1][cite:8][cite:29]
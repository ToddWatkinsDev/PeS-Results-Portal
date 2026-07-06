# Phase 4 Status 1 — Auth and Permissions

## Phase 4 goals

Phase 4 is about making the app secure, role-aware, and ready for the management work that comes next. The main goals are to provide a real login flow for manually created accounts, protect authenticated routes, centralise permission checks, and ensure the app clearly separates public browsing from authenticated management. [file:18][file:8]

Phase 4 should support at least three roles: anonymous, user/player, and admin. Anonymous users should only see public content, users should access assigned or private areas when allowed, and admins should be able to manage everything. [file:18][file:8]

## What is done so far

The foundation for Phase 4 is now in place. The route plan includes `/dashboard`, `/dashboard/races`, `/dashboard/races/new`, `/dashboard/races/[raceId]`, `/dashboard/races/[raceId]/results/new`, `/admin/users`, and `/admin/races`, which matches the Phase 1 and Phase 4 direction. [file:7][file:18]

The dashboard pages have been updated to use server-side Supabase auth checks, and the server client helper has been corrected for Next.js 16 async cookies handling. That fixed the `cookieStore.getAll is not a function` error and allowed `/dashboard` to load successfully. [web:96][web:100]

The public race detail page has also been updated to await `params` correctly in Next.js 16. That resolved the route error caused by reading `params.raceSlug` directly before unwrapping the promise. [web:96][web:101][web:102]

## What is fixed

The Supabase server helper now uses `await cookies()` before calling `getAll()`, which matches the current Next.js 16 server API behavior. This removed the runtime crash on authenticated dashboard routes. [web:96][web:100]

The public race detail page now awaits `params` before reading `raceSlug`, which fixes the dynamic route error for `/results/[raceSlug]`. The page can now safely resolve the public race model before rendering. [web:96][web:101][web:102]

## What still needs work

The biggest remaining Phase 4 gap is route protection depth. The dashboard should not be accessible to logged-out users, and the app still needs a stronger, explicit admin section structure rather than only having the route in the plan. [file:18][file:8]

The register route should remain restricted or hidden, and the login flow still needs to be completed as a real entry point for manually created accounts. Centralised permission functions still need to be wired through the rest of the app so route access, button visibility, and data access all agree. [file:18][file:8]

## Broken or incomplete

The `asChild` console warning is still unresolved. That warning is coming from the UI button composition layer, not from the route pages themselves, so it will remain until `src/presentation/components/ui/button.tsx` is updated to handle `asChild` properly or until those usages are removed. [web:111][web:116][web:120]

The public race detail page currently uses a mocked/fixed view model pattern rather than a fully wired production data source. That is acceptable for the current phase, but it should eventually be replaced with real public race data and the shared domain model. [file:8]

## Dashboard protection

The dashboard must stay inaccessible unless a user is logged in. That should be enforced at the middleware level and again on the server side inside protected pages, so anonymous users are redirected to `/login` before they can reach `/dashboard` or admin routes. [file:18][file:8]

This is a core Phase 4 requirement and should be treated as mandatory, not optional. It also needs to apply consistently to all dashboard and admin routes, not just the landing dashboard page. [file:18][file:8]

## Admin section

Phase 4 should include a real admin section with at least `/admin/users` and `/admin/races`. Those routes should be reserved for admins only and should eventually provide manual account management and platform oversight. [file:7][file:18]

At the moment, the admin area is defined in the route plan, but it still needs the actual UI, role checks, and content screens. Admin-only access must be enforced the same way as dashboard protection, just with a stricter role requirement. [file:18][file:8]

## Current status

Overall, Phase 4 is partially complete: the auth foundation is better, the dashboard pages are using server auth, and the dynamic results page issue is fixed. The remaining work is to finish the login flow, harden route guards, add the admin section, and remove the `asChild` warning when convenient. [web:96][web:100][web:101][web:111]

## Next actions

1. Keep `/dashboard` and `/admin` fully protected from anonymous access. [file:18]
2. Build out the admin section pages and access checks. [file:18][file:7]
3. Finish the login flow for manual Supabase accounts. [file:18]
4. Add central permission helpers so route and UI permissions stay aligned. [file:18][file:8]
5. Fix the `Button` component `asChild` implementation when ready. [web:111][web:116][web:120]

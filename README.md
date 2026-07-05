Phase 4 Spec
Phase 4 title
Auth and Permissions

Purpose
Phase 4 exists to make the app secure and role-aware before any deeper management features are added. It should establish reliable login, enforce access rules centrally, and protect all authenticated routes so the app behaves consistently for anonymous users, players, and admins. This phase is essential because Phase 5 and Phase 6 depend on a working auth foundation.

Scope
Phase 4 includes:

A working login flow for manually created accounts.

A placeholder or restricted register route, since open self-service registration is not part of the release.

Centralised permission policies and route guards for protected areas.

A manual account model in Supabase for small-scale admin-created users.

What it should accomplish
Anonymous users can only access public content.

Logged-in users can access assigned/private areas only when allowed.

Admins can manage all entities across the platform.

The app has a clear and secure separation between public browsing and authenticated management.

Auth model
Login
The login page should become a real authentication entry point, not just a placeholder. It should support standard sign-in behaviour, clear validation, and friendly error feedback for invalid credentials.

Manual accounts
Account creation should be done manually in Supabase because the user base is expected to stay small, and there is no need for open sign-up. That means the project should treat Supabase as the source of truth for users, with accounts created by the site owner or admin as needed.

Register route
The register route should remain hidden, restricted, or placeholder-only. Since self-service registration is not part of the current release, the route should not create a public onboarding path that bypasses the intended manual account model.

Permission rules
Roles
Phase 4 should support at least:

Anonymous

User/Player

Admin

Access policy
The permission model should remain centralised in policy functions or services rather than scattered across pages. That keeps route access, button visibility, and data access aligned across the app.

Action	Anonymous	User/Player	Admin
View public races	Yes	Yes	Yes
View private assigned races	No	Yes, if assigned	Yes
Create races	No	Yes	Yes
Record results	No	Yes	Yes
Manage assigned content	No	Yes	Yes
Manage all content	No	No	Yes

Implementation standards
Standard and good practices
This phase should follow standard authentication and security practices throughout. That includes secure session handling, strict route protection, centralised permission checks, careful error handling, and avoiding duplicated access logic in UI components.

Recommended practices for this project
Keep auth logic in shared services or policies, not in page code.

Treat login state as a first-class app concern, not a UI-only detail.

Validate all protected route access on the server or equivalent trusted layer where possible.

Keep the register path closed unless you explicitly decide otherwise later.

Use Supabase for manual account management because the expected account volume is low and admin creation is practical.

Phase 4 deliverables
Working login flow for existing users.

Manual account model in Supabase.

Centralised permission policy layer.

Route guards for dashboard and admin areas.

Restricted or hidden register route.

Verified role-based access for anonymous, user/player, and admin users.

Phase 4 exit criteria
Phase 4 is complete when:

Login works reliably for manually created accounts.

Anonymous users cannot access protected areas.

Permission rules are enforced consistently.

Admin-only routes are inaccessible to non-admins.

The app is ready for Phase 5 race management work.

Build order
Recommended implementation order:

Define the auth and role model.

Set up Supabase login for existing users.

Create the central permission policy functions.

Add route guards to protected pages.

Lock down the register flow.

Test role-based access for all three user types

Phase 3 design doc
Phase 3 is the public experience phase of the results portal: the home page, public results list, and public race detail page. It should present the platform clearly to anonymous visitors, show public races in a table-first format on desktop, and provide a streamlined mobile card view for smaller screens [user].

Goals
The goal of Phase 3 is to make the platform feel like a finished public results site rather than a backend shell. Visitors should immediately understand what the site is for, see featured/public content, and browse race results without logging in [user]. Private races must remain hidden unless the viewer has been invited [user].

Scope
Phase 3 includes:

Home page with hero, explanation, featured feed placeholder, and access CTA [user].

Public results list with table-first desktop layout and compact mobile card view [user].

Public race detail page with full results display.

Race header labels that organisers can rename at any time, including labels like R1, R2, and R3 [user].

Score-based ordering by lowest Net points first only after at least one race has been added [user].

Page structure
Home page
The home page should explain the platform in a branded, official-looking way. It should include a clear hero, a short explanation of how the platform serves spectators, players, and organisers, and a login/access call-to-action. The featured feed should sit below the main content and start as placeholders, but the layout should be ready for future social media-style updates or developer posts [user].

Public results list
The public results list should be the main browsing surface for anonymous visitors. On desktop, it should stay very similar to the example you shared, with a dense table layout and organiser-editable race headers [user]. On small screens, it should switch to a simplified card view showing final position, Name, Points, and country [user].

Public race detail
The race detail page should show the selected race, its visibility state, metadata, and the full result grid. It should support the same organiser-editable headers and result presentation logic as the list page [user]. This page should also include proper empty, loading, and error states.

Data model
The page data should be separated into internal view models so the UI does not depend on backend payloads directly. Suggested model groups are:

Home content model for hero text, featured feed placeholders, and CTA data [user].

Race list model for race name, slug, visibility, organiser-defined headers, and summary metadata [user].

Race detail model for header labels, result rows, net points, and display order [user].

Feed item model for placeholder social/developer content slots [user].

The design doc recommends internal application models, reusable components, and adapter-style separation for future integrations.

Header rules
Race headers such as R1, R2, and R3 should not be hardcoded as fixed labels [user]. Instead, organisers should be able to rename them whenever they want, even after results already exist [user]. The underlying result slot should remain stable while the visible label changes, so the data remains consistent and the UI stays flexible [user].

Sorting rules
Initially, the table can use a random or default order when a race has no results yet [user]. Once one race has been added, the public results list should automatically sort by lowest Net points first and highest Net points last [user]. This sorting rule should apply consistently across the desktop table and any mirrored detail view, but only after the first scored race exists [user].

Visibility rules
Public races may be viewed by anyone [user]. Editing requires login [user]. Private races should be hidden completely from the public list and should only be visible to invited users [user]. This rule should be enforced in both the UI and later route/permission logic so private content never appears in public browsing by accident.

Responsive behaviour
The design should be mobile-first and accessible. Desktop layouts should prioritise density and comparison, while smaller screens should collapse into readable card layouts with the most important summary fields retained [user]. Controls should remain touch-friendly, with clear focus states and semantic structure.

Accessibility and states
The public pages should include loading, empty, and error states from the start. Keyboard navigation, visible focus styles, and sufficient contrast in dark and light mode are required. The design should avoid hiding important information behind hover-only interactions so the results remain usable across devices.

Styling direction
Tailwind CSS should remain the primary styling system, with design tokens used instead of scattered hardcoded values. The public home page can be more brand-led, but the race screens should stay data-led and scannable. Reusable components should be preferred over repeated layout code so the public pages remain consistent and easy to extend.

Development order
Define the public page data models and race header metadata rules [user].

Build the home page with placeholder featured feed below the main content [user].

Build the desktop-first public results table [user].

Add the mobile card view for small screens [user].

Build the public race detail page.

Implement organiser-editable race headers [user].

Add the “sort by lowest Net first after first race exists” rule [user].

Add loading, empty, and error states.

Add accessibility and responsiveness polish.

Validate that private races stay hidden unless invited [user].

Acceptance criteria
The home page clearly explains the platform and includes a placeholder featured feed [user].

The results list is table-first on desktop and card-based on mobile [user].

Race headers are editable at any time by organisers [user].

Table ordering by lowest Net points only activates once at least one race has been added [user].

Public races are visible to everyone, edit access requires login, and private races remain hidden unless invited [user].

The design is responsive, accessible, and consistent with the existing platform design direction.

Implementation note
The design doc recommends building public-facing pages as part of a modular application rather than a static site, using reusable components and internal models. That approach fits Phase 3 well because it keeps the public browsing experience stable while leaving room for future social feed integration, richer scoring, and authenticated management features [user].

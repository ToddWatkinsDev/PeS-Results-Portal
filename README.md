Phase 3 Status 1
Overview
Phase 3 is the public experience phase of the Play eSailing Results Portal. The goal is to make the site feel like a finished public results platform for anonymous visitors, with a branded home page, a public results list, and a public race detail page. The public experience should be clear, fast to scan, responsive, and built around internal view models rather than raw backend payloads.

Goals of Phase 3
Present the platform as a polished public results site rather than a backend shell.

Help visitors immediately understand what the site is for.

Show featured/public content on the home page.

Let anonymous visitors browse public race results without logging in.

Keep private races hidden unless the viewer has been invited.

Use a table-first desktop results list and a compact mobile card view.

Support organiser-editable race headers such as R1, R2, and R3.

Sort by lowest Net points once at least one scored race exists.

Include loading, empty, and error states from the start.

Keep the public pages responsive, accessible, and ready for future integrations.

What has been done
The home page route exists and renders a branded public landing experience.

The home page includes a hero section, explanatory copy, an access CTA, and a featured-feed placeholder.

The public results list page exists at /results.

The public results list uses fetchRaceList() from the adapter layer instead of hardcoded page data.

The results list hides private races by filtering through the adapter.

The results list shows a desktop table layout.

The results list also includes a compact mobile summary card area for smaller screens.

The public race detail page exists at /results/[raceSlug].

The race detail page uses fetchRaceDetail() from the adapter layer.

The race detail page hides private races by returning a not-found style empty state.

The adapter layer exists in src/presentation/adapters/public-adapter.ts.

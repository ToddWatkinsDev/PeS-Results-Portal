// View model for individual feed items (placeholder social/developer content)
export type FeedItemViewModel = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  href?: string;
};

// View model for the home page content
export type HomeContentViewModel = {
  heroTitle: string;
  heroSubtitle: string;
  ctaLabel: string;
  ctaHref: string;
  featuredFeed: FeedItemViewModel[];
};

// A single race header column definition (organiser-renameable)
export type RaceHeaderViewModel = {
  slot: string;
  label: string;
};

// A single row in the public results list
export type RaceListRowViewModel = {
  slug: string;
  name: string;
  visibility: "public" | "private";
  scheduledAt: string;
  headers: RaceHeaderViewModel[];
  entryCount: number;
};

// A single result row in the race detail view
export type ResultRowViewModel = {
  position: number;
  gamerTag: string;
  country?: string;
  scores: Record<string, number | null>;
  netPoints: number;
  totalPoints: number;
};

// View model for the public race detail page
export type RaceDetailViewModel = {
  name: string;
  slug: string;
  visibility: "public" | "private";
  scheduledAt: string;
  status: string;
  headers: RaceHeaderViewModel[];
  results: ResultRowViewModel[];
  hasScores: boolean;
};
import type {
  HomeContentViewModel,
  FeedItemViewModel,
  RaceListRowViewModel,
  RaceHeaderViewModel,
  RaceDetailViewModel,
  ResultRowViewModel,
} from "@/presentation/view-models/public";

// Mock data mapped into view models for Phase 3 (temporary adapter)
const feed: FeedItemViewModel[] = [
  {
    id: "f1",
    title: "Platform launched",
    description: "Public home and results list are available in alpha.",
    publishedAt: "2026-07-05T00:00:00Z",
    href: "/results",
  },
];

const defaultHeaders = (labels: string[] = ["R1", "R2", "R3"]): RaceHeaderViewModel[] =>
  labels.map((l, i) => ({ slot: `r${i + 1}`, label: l }));

const mockRaces: RaceListRowViewModel[] = [
  {
    slug: "spring-series-round-1",
    name: "Spring Series Round 1",
    visibility: "public",
    scheduledAt: "2026-07-03",
    headers: defaultHeaders(["R1", "R2", "R3"]),
    entryCount: 12,
  },
  {
    slug: "summer-cup-qualifier",
    name: "Summer Cup Qualifier",
    visibility: "public",
    scheduledAt: "2026-07-01",
    headers: defaultHeaders(["R1", "R2", "R3"]),
    entryCount: 8,
  },
];

const mockResultsForSpring = (): ResultRowViewModel[] => [
  {
    position: 1,
    gamerTag: "SailorOne",
    country: "GBR",
    scores: { r1: 1, r2: 2, r3: 1 },
    netPoints: 4,
    totalPoints: 4,
  },
  {
    position: 2,
    gamerTag: "WindRunner",
    country: "NED",
    scores: { r1: 2, r2: 1, r3: 3 },
    netPoints: 6,
    totalPoints: 6,
  },
  {
    position: 3,
    gamerTag: "HarborLine",
    country: "USA",
    scores: { r1: 3, r2: 3, r3: 2 },
    netPoints: 8,
    totalPoints: 8,
  },
];

export async function fetchHomeContent(): Promise<HomeContentViewModel> {
  return {
    heroTitle: "Public race results, built for sailors, organisers, and spectators.",
    heroSubtitle:
      "Browse public results, manage races, and record outcomes in a clean interface designed for the Play eSailing workflow.",
    ctaLabel: "View public results",
    ctaHref: "/results",
    featuredFeed: feed,
  };
}

export async function fetchRaceList(): Promise<RaceListRowViewModel[]> {
  // In future, map external payloads -> RaceListRowViewModel here.
  return mockRaces;
}

export async function fetchRaceDetail(slug: string): Promise<RaceDetailViewModel | null> {
  if (slug !== "spring-series-round-1") return null;

  const headers = defaultHeaders(["R1", "R2", "R3"]);
  const results = mockResultsForSpring();

  return {
    name: "Spring Series Round 1",
    slug: "spring-series-round-1",
    visibility: "public",
    scheduledAt: "2026-07-03",
    status: "Published",
    headers,
    results,
    hasScores: results.length > 0,
  };
}
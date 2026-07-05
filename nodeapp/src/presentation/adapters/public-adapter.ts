import type {
  HomeContentViewModel,
  FeedItemViewModel,
  RaceListRowViewModel,
  RaceHeaderViewModel,
  RaceDetailViewModel,
  ResultRowViewModel,
} from "@/presentation/view-models/public";

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
  labels.map((label, index) => ({
    slot: `r${index + 1}`,
    label,
  }));

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
  {
    slug: "private-invite-race",
    name: "Private Invite Race",
    visibility: "private",
    scheduledAt: "2026-07-04",
    headers: defaultHeaders(["R1", "R2", "R3"]),
    entryCount: 10,
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

const mockResultsForSummer = (): ResultRowViewModel[] => [
  {
    position: 1,
    gamerTag: "TideRider",
    country: "NOR",
    scores: { r1: 2, r2: 2, r3: 1 },
    netPoints: 5,
    totalPoints: 5,
  },
  {
    position: 2,
    gamerTag: "BlueWake",
    country: "AUS",
    scores: { r1: 1, r2: 4, r3: 2 },
    netPoints: 7,
    totalPoints: 7,
  },
];

function sortByNetPoints(results: ResultRowViewModel[]) {
  return [...results].sort((a, b) => a.netPoints - b.netPoints);
}

function toPublicRaceList(races: RaceListRowViewModel[]) {
  return races
    .filter((race) => race.visibility === "public")
    .sort((a, b) => a.scheduledAt.localeCompare(b.scheduledAt));
}

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
  return toPublicRaceList(mockRaces);
}

export async function fetchRaceDetail(slug: string): Promise<RaceDetailViewModel | null> {
  if (slug === "private-invite-race") return null;

  if (slug === "spring-series-round-1") {
    const headers = defaultHeaders(["R1", "R2", "R3"]);
    const results = sortByNetPoints(mockResultsForSpring());

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

  if (slug === "summer-cup-qualifier") {
    const headers = defaultHeaders(["R1", "R2", "R3"]);
    const results = sortByNetPoints(mockResultsForSummer());
    const hasScores = results.length > 0;

    return {
      name: "Summer Cup Qualifier",
      slug: "summer-cup-qualifier",
      visibility: "public",
      scheduledAt: "2026-07-01",
      status: "Published",
      headers,
      results: hasScores ? results : [],
      hasScores,
    };
  }

  return null;
}
import Link from "next/link";
import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import EmptyState from "@/presentation/components/ui/empty-state";

type RaceDetailPageProps = {
  params: {
    raceSlug: string;
  };
};

const race = {
  title: "Spring Series Round 1",
  slug: "spring-series-round-1",
  status: "Published",
  date: "Jul 3, 2026",
  winner: "SailorOne",
  summary:
    "Public race detail pages will show the key result summary, race metadata, and full finishing order.",
};

const results = [
  { position: 1, sailor: "SailorOne", time: "12:41", penalty: "0" },
  { position: 2, sailor: "WindRunner", time: "12:58", penalty: "0" },
  { position: 3, sailor: "HarborLine", time: "13:07", penalty: "2" },
];

export default function RaceDetailPage({ params }: RaceDetailPageProps) {
  if (params.raceSlug !== race.slug) {
    return (
      <main className="mx-auto flex min-h-[60vh] w-full max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <EmptyState
          title="Race not found"
          description="The race you are looking for does not exist or is not public yet."
          action={
            <Button asChild>
              <Link href="/results">Back to results</Link>
            </Button>
          }
        />
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-primary)]">
          Public Race Detail
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          {race.title}
        </h1>
        <p className="max-w-2xl text-[color:var(--color-text-muted)]">
          {race.summary}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-5">
          <p className="text-sm text-[color:var(--color-text-muted)]">Status</p>
          <p className="mt-1 text-lg font-semibold text-[color:var(--color-text)]">
            {race.status}
          </p>
        </Card>
        <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-5">
          <p className="text-sm text-[color:var(--color-text-muted)]">Date</p>
          <p className="mt-1 text-lg font-semibold text-[color:var(--color-text)]">
            {race.date}
          </p>
        </Card>
        <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-5">
          <p className="text-sm text-[color:var(--color-text-muted)]">Winner</p>
          <p className="mt-1 text-lg font-semibold text-[color:var(--color-text)]">
            {race.winner}
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
            Results
          </h2>
          <p className="text-sm text-[color:var(--color-text-muted)]">
            This table will later connect to the live race results data model.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)]">
          <div className="grid grid-cols-4 border-b border-[color:var(--color-surface-2)] bg-[color:var(--color-surface-2)] px-5 py-4 text-sm font-semibold text-[color:var(--color-text)]">
            <div>Pos</div>
            <div>Sailor</div>
            <div>Time</div>
            <div>Penalty</div>
          </div>

          {results.map((result) => (
            <div
              key={result.position}
              className="grid grid-cols-4 px-5 py-4 text-sm text-[color:var(--color-text-muted)] transition-colors hover:bg-[color:var(--color-surface-2)]"
            >
              <div className="font-medium text-[color:var(--color-text)]">
                {result.position}
              </div>
              <div>{result.sailor}</div>
              <div>{result.time}</div>
              <div>{result.penalty}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[color:var(--color-text)]">
                Want the full list?
              </h2>
              <p className="text-sm text-[color:var(--color-text-muted)]">
                Return to the public results list to browse more races.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/results">Back to results</Link>
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
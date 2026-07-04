import Link from "next/link";
import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import EmptyState from "@/presentation/components/ui/empty-state";

const results = [
  {
    race: "Spring Series Round 1",
    winner: "SailorOne",
    date: "Jul 3, 2026",
    status: "Published",
  },
  {
    race: "Summer Cup Qualifier",
    winner: "WindRunner",
    date: "Jul 1, 2026",
    status: "Published",
  },
];

export default function ResultsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-primary)]">
          Public Results
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          Latest published races
        </h1>
        <p className="max-w-2xl text-[color:var(--color-text-muted)]">
          Browse the most recent public race results and open any race for more detail.
        </p>
      </section>

      {results.length > 0 ? (
        <section className="overflow-hidden rounded-2xl border border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] shadow-sm">
          <div className="grid grid-cols-4 border-b border-[color:var(--color-surface-2)] bg-[color:var(--color-surface-2)] px-5 py-4 text-sm font-semibold text-[color:var(--color-text)]">
            <div>Race</div>
            <div>Winner</div>
            <div>Date</div>
            <div>Status</div>
          </div>

          {results.map((result) => (
            <div
              key={result.race}
              className="grid grid-cols-4 px-5 py-4 text-sm text-[color:var(--color-text-muted)] transition-colors hover:bg-[color:var(--color-surface-2)]"
            >
              <div className="font-medium text-[color:var(--color-text)]">
                {result.race}
              </div>
              <div>{result.winner}</div>
              <div>{result.date}</div>
              <div>{result.status}</div>
            </div>
          ))}
        </section>
      ) : (
        <EmptyState
          title="No public results yet"
          description="Published races will appear here once they are available."
          action={
            <Button asChild>
              <Link href="/">Back to home</Link>
            </Button>
          }
        />
      )}

      <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-[color:var(--color-text)]">
              Looking for a specific race?
            </h2>
            <p className="text-sm text-[color:var(--color-text-muted)]">
              Public race detail pages will be connected in the next Phase 2 slice.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </Card>
    </main>
  );
}
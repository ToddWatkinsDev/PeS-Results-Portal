import Link from "next/link";
import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import EmptyState from "@/presentation/components/ui/empty-state";
import { fetchRaceList } from "@/presentation/adapters/public-adapter";

export default async function ResultsPage() {
  const races = await fetchRaceList();

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

      {races.length > 0 ? (
        <section className="overflow-hidden rounded-2xl border border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] shadow-sm">
          <div className="hidden md:grid grid-cols-4 border-b border-[color:var(--color-surface-2)] bg-[color:var(--color-surface-2)] px-5 py-4 text-sm font-semibold text-[color:var(--color-text)]">
            <div>Race</div>
            <div>Headers</div>
            <div>Date</div>
            <div>Entries</div>
          </div>

          {races.map((r) => (
            <div
              key={r.slug}
              className="grid grid-cols-1 gap-3 border-b px-5 py-4 text-sm text-[color:var(--color-text-muted)] md:grid-cols-4 md:items-center transition-colors hover:bg-[color:var(--color-surface-2)]"
            >
              <div className="font-medium text-[color:var(--color-text)]">
                <Link href={`/results/${r.slug}`}>{r.name}</Link>
              </div>

              <div className="flex flex-wrap gap-2">
                {r.headers.map((h) => (
                  <div
                    key={h.slot}
                    className="rounded-full px-2 py-0.5 text-xs bg-[color:var(--color-surface-2)] text-[color:var(--color-text)]"
                  >
                    {h.label}
                  </div>
                ))}
              </div>

              <div className="md:justify-self-start">{r.scheduledAt}</div>
              <div className="md:justify-self-end">{r.entryCount}</div>

              <div className="md:hidden col-span-full rounded-xl border border-[color:var(--color-surface-2)] bg-[color:var(--color-bg)] p-4 text-sm text-[color:var(--color-text-muted)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-medium text-[color:var(--color-text)]">{r.name}</div>
                    <div className="mt-1">{r.scheduledAt}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-[color:var(--color-text)]">{r.entryCount}</div>
                    <div>entries</div>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.headers.map((h) => (
                    <span
                      key={h.slot}
                      className="rounded-full bg-[color:var(--color-surface-2)] px-2 py-0.5 text-xs text-[color:var(--color-text)]"
                    >
                      {h.label}
                    </span>
                  ))}
                </div>
              </div>
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
              Public race detail pages will be connected in the next Phase 3 slice.
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
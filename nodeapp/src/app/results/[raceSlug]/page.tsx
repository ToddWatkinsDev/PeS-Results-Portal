import Link from "next/link";
import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import EmptyState from "@/presentation/components/ui/empty-state";
import { fetchRaceDetail } from "@/presentation/adapters/public-adapter";

type RaceDetailPageProps = {
  params: {
    raceSlug: string;
  };
};

export default async function RaceDetailPage({ params }: RaceDetailPageProps) {
  const mdl = await fetchRaceDetail(params.raceSlug);

  if (!mdl || mdl.visibility !== "public") {
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
          {mdl.name}
        </h1>
        <p className="max-w-2xl text-[color:var(--color-text-muted)]">
          The public race detail shows header labels, metadata, and the finishing order.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-5">
          <p className="text-sm text-[color:var(--color-text-muted)]">Status</p>
          <p className="mt-1 text-lg font-semibold text-[color:var(--color-text)]">{mdl.status}</p>
        </Card>
        <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-5">
          <p className="text-sm text-[color:var(--color-text-muted)]">Date</p>
          <p className="mt-1 text-lg font-semibold text-[color:var(--color-text)]">{mdl.scheduledAt}</p>
        </Card>
        <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-5">
          <p className="text-sm text-[color:var(--color-text-muted)]">Results</p>
          <p className="mt-1 text-lg font-semibold text-[color:var(--color-text)]">{mdl.results.length} entries</p>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">Results</h2>
          <p className="text-sm text-[color:var(--color-text-muted)]">This table reflects the imported view model and organiser headers.</p>
        </div>

        {mdl.results.length === 0 ? (
          <EmptyState title="No results yet" description="Results will appear here once recorded." action={<Button asChild><Link href="/results">Back to results</Link></Button>} />
        ) : (
          <div className="overflow-hidden rounded-2xl border border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)]">
            <div className="grid grid-cols-6 border-b border-[color:var(--color-surface-2)] bg-[color:var(--color-surface-2)] px-5 py-4 text-sm font-semibold text-[color:var(--color-text)]">
              <div>Pos</div>
              <div>Sailor</div>
              <div>Country</div>
              {mdl.headers.map((h) => (
                <div key={h.slot}>{h.label}</div>
              ))}
              <div>Net</div>
            </div>

            {mdl.results.map((r) => (
              <div key={r.position} className="grid grid-cols-6 px-5 py-4 text-sm text-[color:var(--color-text-muted)] transition-colors hover:bg-[color:var(--color-surface-2)]">
                <div className="font-medium text-[color:var(--color-text)]">{r.position}</div>
                <div>{r.gamerTag}</div>
                <div>{r.country ?? "-"}</div>
                {mdl.headers.map((h) => (
                  <div key={h.slot}>{r.scores[h.slot] ?? "-"}</div>
                ))}
                <div className="font-semibold text-[color:var(--color-text)]">{r.netPoints}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-[color:var(--color-text)]">Want the full list?</h2>
              <p className="text-sm text-[color:var(--color-text-muted)]">Return to the public results list to browse more races.</p>
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
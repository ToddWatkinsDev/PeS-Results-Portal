import Link from "next/link";
import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import EmptyState from "@/presentation/components/ui/empty-state";

type ManageRacePageProps = {
  params: {
    raceId: string;
  };
};

export default function ManageRacePage({ params }: ManageRacePageProps) {
  const raceId = params.raceId;

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-primary)]">
          Manage Race
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          Race {raceId}
        </h1>
        <p className="max-w-2xl text-[color:var(--color-text-muted)]">
          Update race details, review visibility, and move into result entry.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-5">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-[color:var(--color-text)]">
              Race details
            </h2>
            <p className="text-sm text-[color:var(--color-text-muted)]">
              Name, slug, visibility, and scheduling controls will live here.
            </p>
          </div>
        </Card>

        <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-5">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-[color:var(--color-text)]">
              Results entry
            </h2>
            <p className="text-sm text-[color:var(--color-text-muted)]">
              Add manual results for this race from the dedicated entry page.
            </p>
            <Button asChild className="mt-3">
              <Link href={`/dashboard/races/${raceId}/results/new`}>Add result</Link>
            </Button>
          </div>
        </Card>
      </section>

      <EmptyState
        title="Race management shell is ready"
        description="This screen is ready for the deeper Phase 2 race management controls."
        action={
          <Button asChild variant="outline">
            <Link href="/dashboard/races">Back to races</Link>
          </Button>
        }
      />
    </main>
  );
}
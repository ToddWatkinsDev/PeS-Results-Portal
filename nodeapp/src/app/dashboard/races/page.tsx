import Link from "next/link";
import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import EmptyState from "@/presentation/components/ui/empty-state";

const races = [
  {
    name: "Spring Series Round 1",
    status: "Published",
    visibility: "Public",
    href: "/dashboard/races/spring-series-round-1",
  },
  {
    name: "Summer Cup Qualifier",
    status: "Draft",
    visibility: "Private",
    href: "/dashboard/races/summer-cup-qualifier",
  },
];

export default function DashboardRacesPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-primary)]">
          Dashboard Races
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          Owned and assigned races
        </h1>
        <p className="max-w-2xl text-[color:var(--color-text-muted)]">
          Review the races you manage and open any race to update details or results.
        </p>
      </section>

      <section className="flex justify-start">
        <Button asChild>
          <Link href="/dashboard/races/new">Create race</Link>
        </Button>
      </section>

      {races.length > 0 ? (
        <section className="grid gap-4">
          {races.map((race) => (
            <Card
              key={race.name}
              className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-[color:var(--color-text)]">
                    {race.name}
                  </h2>
                  <p className="text-sm text-[color:var(--color-text-muted)]">
                    {race.status} · {race.visibility}
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link href={race.href}>Open</Link>
                </Button>
              </div>
            </Card>
          ))}
        </section>
      ) : (
        <EmptyState
          title="No races yet"
          description="Create your first race to begin managing entries and results."
          action={
            <Button asChild>
              <Link href="/dashboard/races/new">Create race</Link>
            </Button>
          }
        />
      )}
    </main>
  );
}
import Link from "next/link"
import { redirect } from "next/navigation"
import { isAdminUser } from "@/infrastructure/auth/permissions"
import Button from "@/presentation/components/ui/button"
import Card from "@/presentation/components/ui/card"
import EmptyState from "@/presentation/components/ui/empty-state"

const adminRaces = [
  {
    name: "Spring Series Round 1",
    visibility: "Public",
    status: "Published",
    href: "/dashboard/races/spring-series-round-1",
  },
  {
    name: "Summer Cup Qualifier",
    visibility: "Private",
    status: "Draft",
    href: "/dashboard/races/summer-cup-qualifier",
  },
]

export default async function AdminRacesPage() {
  const isAdmin = await isAdminUser()

  if (!isAdmin) {
    redirect("/dashboard")
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-primary)]">
          Admin Races
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          Administrative oversight
        </h1>
        <p className="max-w-2xl text-[color:var(--color-text-muted)]">
          Review races across the platform and open them for deeper management.
        </p>
      </section>

      {adminRaces.length > 0 ? (
        <section className="grid gap-4">
          {adminRaces.map((race) => (
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
                    {race.visibility} · {race.status}
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
          title="No races available"
          description="Administrative race records will appear here."
        />
      )}
    </main>
  )
}

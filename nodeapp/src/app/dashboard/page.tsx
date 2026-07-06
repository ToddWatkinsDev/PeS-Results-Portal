import Link from "next/link"
import { createClient } from "@/infrastructure/supabase/server"
import Button from "@/presentation/components/ui/button"
import Card from "@/presentation/components/ui/card"
import EmptyState from "@/presentation/components/ui/empty-state"

const dashboardItems = [
  {
    title: "Manage races",
    description: "Review owned and assigned races in one place.",
    href: "/dashboard/races",
  },
  {
    title: "Create a race",
    description: "Start a new race flow for manual result entry.",
    href: "/dashboard/races/new",
  },
  {
    title: "Admin area",
    description: "Access account and race oversight tools.",
    href: "/admin/users",
  },
]

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-primary)]">
          Dashboard
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          Welcome back
        </h1>
        <p className="max-w-2xl text-[color:var(--color-text-muted)]">
          Use the dashboard to manage races, record results, and oversee account access.
        </p>
        {user?.email ? (
          <p className="text-sm text-[color:var(--color-text-muted)]">
            Signed in as {user.email}
          </p>
        ) : null}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {dashboardItems.map((item) => (
          <Card
            key={item.title}
            className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-5"
          >
            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-[color:var(--color-text)]">
                {item.title}
              </h2>
              <p className="text-sm text-[color:var(--color-text-muted)]">
                {item.description}
              </p>
              <Button variant="outline" asChild>
                <Link href={item.href}>Open</Link>
              </Button>
            </div>
          </Card>
        ))}
      </section>

      <EmptyState
        title="Dashboard shell is ready"
        description="The structure is in place. Next, connect the dashboard to real user, race, and result data."
      />
    </main>
  )
}
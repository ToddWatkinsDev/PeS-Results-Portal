import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import EmptyState from "@/presentation/components/ui/empty-state";

const stats = [
  { label: "Owned races", value: "0" },
  { label: "Assigned races", value: "0" },
  { label: "Published results", value: "0" },
];

export default function DashboardPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
          Dashboard
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Welcome back
        </h1>
        <p className="max-w-2xl text-slate-600">
          Manage races, enter results, and review the current state of the portal.
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-5">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{stat.value}</p>
          </Card>
        ))}
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold">Recent activity</h2>
            <Button variant="secondary">View all</Button>
          </div>

          <div className="mt-6">
            <EmptyState
              title="No activity yet"
              description="As races and results are added, recent actions will appear here."
              action={<Button>Create race</Button>}
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold">Quick actions</h2>
          <div className="mt-4 space-y-3">
            <Button className="w-full">Create race</Button>
            <Button variant="secondary" className="w-full">
              Add result
            </Button>
            <Button variant="ghost" className="w-full">
              Open public results
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}
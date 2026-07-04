import Link from "next/link";
import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import EmptyState from "@/presentation/components/ui/empty-state";

const users = [
  {
    name: "Site Owner",
    email: "owner@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Race Manager",
    email: "manager@example.com",
    role: "User",
    status: "Active",
  },
];

export default function AdminUsersPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-primary)]">
          Admin Users
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          Manual account management
        </h1>
        <p className="max-w-2xl text-[color:var(--color-text-muted)]">
          Review and manage accounts created by the site owner.
        </p>
      </section>

      {users.length > 0 ? (
        <section className="grid gap-4">
          {users.map((user) => (
            <Card
              key={user.email}
              className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-[color:var(--color-text)]">
                    {user.name}
                  </h2>
                  <p className="text-sm text-[color:var(--color-text-muted)]">
                    {user.email} · {user.role} · {user.status}
                  </p>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/admin/races">Manage races</Link>
                </Button>
              </div>
            </Card>
          ))}
        </section>
      ) : (
        <EmptyState
          title="No users available"
          description="Manual account records will appear here."
        />
      )}
    </main>
  );
}
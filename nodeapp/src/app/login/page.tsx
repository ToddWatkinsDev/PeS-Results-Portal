import Link from "next/link";
import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import Input from "@/presentation/components/ui/input";
import EmptyState from "@/presentation/components/ui/empty-state";

export default function LoginPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--color-primary)]">
          Login
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--color-text)] sm:text-4xl">
          Access your account
        </h1>
        <p className="max-w-xl text-[color:var(--color-text-muted)]">
          Accounts are created manually by the site owner for now.
        </p>
      </section>

      <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-6">
        <form className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[color:var(--color-text)]"
            >
              Email
            </label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[color:var(--color-text)]"
            >
              Password
            </label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Card>

      <EmptyState
        title="No self-service sign-up"
        description="If you do not already have an account, contact the site owner for access."
        action={
          <Button asChild variant="outline">
            <Link href="/">Back to home</Link>
          </Button>
        }
      />
    </main>
  );
}
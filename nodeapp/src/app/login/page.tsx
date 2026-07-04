import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";

export default function LoginPage() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
          Access
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Sign in to your account
        </h1>
        <p className="max-w-xl text-slate-600">
          Accounts are currently created manually by the site owner.
        </p>
      </section>

      <Card className="mt-8 p-6">
        <form className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-slate-500">
              No self-service registration yet.
            </p>
            <Button type="submit">Sign in</Button>
          </div>
        </form>
      </Card>
    </main>
  );
}
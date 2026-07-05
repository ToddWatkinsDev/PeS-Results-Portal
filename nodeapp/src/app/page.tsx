import Link from "next/link";
import Button from "@/presentation/components/ui/button";
import Card from "@/presentation/components/ui/card";
import EmptyState from "@/presentation/components/ui/empty-state";
import Footer from "@/presentation/components/footer";
import { fetchHomeContent } from "@/presentation/adapters/public-adapter";

export default async function HomePage() {
  const mdl = await fetchHomeContent();

  return (
    <>
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] px-4 py-1 text-sm text-[color:var(--color-text-muted)]">
              Play eSailing Results Platform
            </div>

            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-[color:var(--color-text)] sm:text-5xl">
                {mdl.heroTitle}
              </h1>
              <p className="max-w-xl text-base leading-7 text-[color:var(--color-text-muted)] sm:text-lg">
                {mdl.heroSubtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href={mdl.ctaHref}>{mdl.ctaLabel}</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>

          <Card className="border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-6">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-[color:var(--color-text)]">
                What you can do
              </h2>
              <ul className="space-y-3 text-sm text-[color:var(--color-text-muted)]">
                <li>Browse public race results.</li>
                <li>Manage races you own or are assigned to.</li>
                <li>Record manual results for official events.</li>
                <li>Prepare for future event and integration support.</li>
              </ul>
            </div>
          </Card>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-[color:var(--color-text)]">
              Featured results
            </h2>
            <p className="text-sm text-[color:var(--color-text-muted)]">
              This section will connect to live public results in the next slice.
            </p>
          </div>

          {mdl.featuredFeed.length === 0 ? (
            <EmptyState
              title="No live results connected yet"
              description="The homepage shell is ready. Next, connect the results list or keep this empty state until data is available."
              action={
                <Button asChild>
                  <Link href="/results">Go to results</Link>
                </Button>
              }
            />
          ) : (
            <div className="space-y-4">
              {mdl.featuredFeed.map((f) => (
                <Card key={f.id} className="p-4">
                  <h3 className="font-semibold text-[color:var(--color-text)]">{f.title}</h3>
                  <p className="text-sm text-[color:var(--color-text-muted)]">{f.description}</p>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
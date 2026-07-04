import EmptyState from "@/presentation/components/ui/empty-state";
import Button from "@/presentation/components/ui/button";

type RaceDetailPageProps = {
  params: {
    raceSlug: string;
  };
};

export default function RaceDetailPage({ params }: RaceDetailPageProps) {
  const raceName = params.raceSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
          Public Race
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {raceName}
        </h1>
        <p className="max-w-2xl text-slate-600">
          View published race details, standings, and summary information for this event.
        </p>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Status</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">Published</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Entries</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">0</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Visibility</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">Public</p>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Results</h2>
          <Button variant="secondary">Refresh</Button>
        </div>

        <EmptyState
          title="No results published yet"
          description="This race detail page is ready for standings once results are entered."
          action={<Button>Back to results</Button>}
        />
      </section>
    </main>
  );
}
import EmptyState from "@/presentation/components/ui/empty-state";

const results = [
  {
    race: "Spring Series Round 1",
    winner: "SailorOne",
    date: "Jul 3, 2026",
    status: "Published",
  },
  {
    race: "Summer Cup Qualifier",
    winner: "WindRunner",
    date: "Jul 1, 2026",
    status: "Published",
  },
];

export default function ResultsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
          Public Results
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Latest published races
        </h1>
        <p className="max-w-2xl text-slate-600">
          Browse the most recent public race results and open any race for more detail.
        </p>
      </section>

      <section className="mt-8">
        {results.length > 0 ? (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-700">
              <div>Race</div>
              <div>Winner</div>
              <div>Date</div>
              <div>Status</div>
            </div>
            {results.map((result) => (
              <div
                key={result.race}
                className="grid grid-cols-4 px-5 py-4 text-sm text-slate-700 hover:bg-slate-50"
              >
                <div className="font-medium text-slate-900">{result.race}</div>
                <div>{result.winner}</div>
                <div>{result.date}</div>
                <div>{result.status}</div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No public results yet"
            description="Published races will appear here once they are available."
          />
        )}
      </section>
    </main>
  );
}
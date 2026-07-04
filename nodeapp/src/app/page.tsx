export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Play eSailing Results Portal
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Race results, rankings, and administration in one place.
          </h1>
          <p className="max-w-2xl text-lg text-slate-600">
            A public-first portal for sailors, organisers, and admins to view results and manage events.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Public results</h2>
            <p className="mt-2 text-sm text-slate-600">Browse races, series, and rankings.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Race admin</h2>
            <p className="mt-2 text-sm text-slate-600">Manage events, fleets, and scoring.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Insights</h2>
            <p className="mt-2 text-sm text-slate-600">Track performance over time.</p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="text-lg font-semibold">Recent results</h2>
          </div>
          <div className="p-5">
            <div className="flex flex-col items-start gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-semibold">No published results yet</h3>
                <p className="text-sm text-slate-600">
                  Once races are published, the latest results will appear here.
                </p>
              </div>
              <div className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                View results
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
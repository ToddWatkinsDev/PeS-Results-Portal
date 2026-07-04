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
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-slate-500">
              <div>Event</div>
              <div>Class</div>
              <div>Winner</div>
              <div>Status</div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="grid grid-cols-4 gap-4 rounded-xl bg-slate-50 px-4 py-3 text-sm">
                <div>Spring Series</div>
                <div>ILCA 7</div>
                <div>A. Smith</div>
                <div>Published</div>
              </div>
              <div className="grid grid-cols-4 gap-4 rounded-xl bg-slate-50 px-4 py-3 text-sm">
                <div>Club Night</div>
                <div>49er</div>
                <div>M. Jones</div>
                <div>Draft</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
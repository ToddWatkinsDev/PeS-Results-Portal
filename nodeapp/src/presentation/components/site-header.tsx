export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            Play eSailing
          </p>
          <p className="text-sm text-slate-600">Results Portal</p>
        </div>

        <nav className="flex items-center gap-3 text-sm font-medium text-slate-700">
          <a href="/" className="rounded-full px-3 py-2 hover:bg-slate-100">
            Home
          </a>
          <a href="/results" className="rounded-full px-3 py-2 hover:bg-slate-100">
            Results
          </a>
          <a href="/dashboard" className="rounded-full px-3 py-2 hover:bg-slate-100">
            Dashboard
          </a>
        </nav>
      </div>
    </header>
  );
}
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Play eSailing Results Portal</p>
        <div className="flex items-center gap-4">
          <a href="/" className="hover:text-slate-900">
            Home
          </a>
          <a href="/results" className="hover:text-slate-900">
            Results
          </a>
          <a href="/dashboard" className="hover:text-slate-900">
            Dashboard
          </a>
        </div>
      </div>
    </footer>
  );
}
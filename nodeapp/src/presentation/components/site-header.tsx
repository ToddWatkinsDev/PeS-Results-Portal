export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <p className="text-sm font-semibold tracking-wide text-slate-950">
          Play eSailing Results Portal
        </p>
        <div className="text-sm text-slate-500">Public dashboard</div>
      </div>
    </header>
  );
}
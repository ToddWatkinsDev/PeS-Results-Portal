import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-surface-2)] bg-[color:var(--color-bg)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-[color:var(--color-text-muted)] sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p>Play eSailing Results Platform</p>
        <nav className="flex flex-wrap gap-4">
          <Link href="/results" className="hover:text-[color:var(--color-text)]">
            Results
          </Link>
          <Link href="/login" className="hover:text-[color:var(--color-text)]">
            Login
          </Link>
        </nav>
      </div>
    </footer>
  );
}
'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/infrastructure/supabase/client'
import { signInWithEmail } from '@/infrastructure/supabase/auth'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectedFrom = searchParams.get('redirectedFrom') || '/dashboard'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        router.replace('/dashboard')
      }
    }

    checkSession()
  }, [router])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await signInWithEmail(email, password)
      router.replace(redirectedFrom)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-4 py-12">
      <div className="rounded-2xl border border-[color:var(--color-surface-2)] bg-[color:var(--color-surface)] p-6 shadow-sm">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-[color:var(--color-text)]">
            Login
          </h1>
          <p className="text-sm text-[color:var(--color-text-muted)]">
            Accounts are created manually for now.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-[color:var(--color-text)]">
              Email
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              className="w-full rounded-xl border border-[color:var(--color-surface-2)] bg-transparent px-4 py-3 text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-primary)]"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-[color:var(--color-text)]">
              Password
            </span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-[color:var(--color-surface-2)] bg-transparent px-4 py-3 text-[color:var(--color-text)] outline-none transition focus:border-[color:var(--color-primary)]"
            />
          </label>

          {error ? (
            <p className="text-sm text-red-500" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[color:var(--color-primary)] px-4 py-3 font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </main>
  )
}
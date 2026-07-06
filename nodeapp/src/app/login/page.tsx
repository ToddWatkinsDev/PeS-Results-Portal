'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signInWithEmail } from '@/infrastructure/supabase/auth'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectedFrom = searchParams.get('redirectedFrom') || '/dashboard'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const result = await signInWithEmail(email, password)
      console.log(result)
      router.push(redirectedFrom)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main>
      <h1>Login</h1>
      <p>Accounts are created manually for now.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />

        {error ? <p>{error}</p> : null}

        <button type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </main>
  )
}
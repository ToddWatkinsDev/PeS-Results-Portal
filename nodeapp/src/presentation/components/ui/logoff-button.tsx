'use client'

import { useRouter } from 'next/navigation'
import Button from '@/presentation/components/ui/button'
import { supabase } from '@/infrastructure/supabase/client'

export default function LogoffButton() {
  const router = useRouter()

  const handleLogoff = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <Button variant="outline" onClick={handleLogoff}>
      Logoff
    </Button>
  )
}
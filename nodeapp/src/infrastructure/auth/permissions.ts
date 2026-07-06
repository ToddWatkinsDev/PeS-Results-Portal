import { createClient } from "@/infrastructure/supabase/server"

export async function isAdminUser() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return false
  }

  const { data: profile, error } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single<{ role: string | null }>()

  if (error || !profile) {
    return false
  }

  return profile.role === "admin"
}
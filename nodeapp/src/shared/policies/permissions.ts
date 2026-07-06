export type AppRole = 'anonymous' | 'user' | 'admin'

export function isAdminRole(role?: string | null) {
  return role === 'admin'
}

export function canAccessDashboard(role?: string | null) {
  return role === 'user' || role === 'admin'
}

export function canAccessAdmin(role?: string | null) {
  return role === 'admin'
}

export function canAccessPublicContent() {
  return true
}
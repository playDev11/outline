// Simple route obfuscation using base64 encoding
export function cn(...classes: (string | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}

export const obfuscateRoute = (route: string): string => {
  return Buffer.from(route)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}

export const deobfuscateRoute = (hash: string): string => {
  const base64 = hash.replace(/-/g, '+').replace(/_/g, '/')
  try {
    return Buffer.from(base64, 'base64').toString()
  } catch {
    return '/'
  }
}

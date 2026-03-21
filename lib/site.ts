/** Canonical site origin for Open Graph / Twitter absolute URLs. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
  if (fromEnv) return fromEnv
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return 'https://martinhornak.com'
}

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { obfuscateRoute, deobfuscateRoute } from './src/utils/route-obfuscator'
import crypto from 'node:crypto'

export function middleware(request: NextRequest) {
  // Generate unique nonce for CSP
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')

  // Implement strict security headers
  const headers = new Headers()

  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data: ${process.env.NEXT_PUBLIC_IMAGE_DOMAIN || ''};
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `

  headers.set(
    'Content-Security-Policy',
    cspHeader.replace(/\s{2,}/g, ' ').trim()
  )
  headers.set('X-DNS-Prefetch-Control', 'off')
  headers.set('X-Frame-Options', 'DENY')
  headers.set('X-Content-Type-Options', 'nosniff')
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  )
  headers.set('X-XSS-Protection', '1; mode=block')
  headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )

  // Check if the route should be obfuscated
  const url = new URL(request.url)
  if (url.pathname === '/signin') {
    const obfuscatedRoute = obfuscateRoute('/signin')
    return NextResponse.redirect(new URL(`/${obfuscatedRoute}`, request.url))
  }

  // Check if the route is already obfuscated
  const deobfuscatedRoute = deobfuscateRoute(url.pathname.slice(1))
  if (deobfuscatedRoute === '/signin') {
    return NextResponse.next()
  }

  return NextResponse.next({
    headers,
    request: {
      headers: new Headers(headers),
    },
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

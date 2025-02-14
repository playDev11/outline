import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { encrypt } from '@/lib/encryption'

export async function POST(request: Request) {
  const headersList = headers()
  const clientIp = (await headersList).get('x-forwarded-for') || 'unknown'

  try {
    const data = await request.json()

    // Encrypt response data
    const encryptedResponse = await encrypt(
      JSON.stringify({
        status: 'success',
        timestamp: Date.now(),
      })
    )

    return NextResponse.json(
      { data: encryptedResponse },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

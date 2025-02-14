'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function SecureNavigation() {
  return (
    <nav className="flex items-center justify-between px-6 h-[48px] bg-white border-b border-gray-200">
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D46jfMhv0KMxHHzC3AYBQUzr5tHp26.png"
            alt="Microsoft"
            width={108}
            height={24}
            className="h-5 w-auto"
            priority
          />
        </Link>
        <Link href="/" className="text-sm font-semibold">
          Microsoft 365
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/outlook" className="text-sm">
            Outlook
          </Link>
          <Link href="/products" className="text-sm">
            Products
          </Link>
          <Link href="/business" className="text-sm">
            For business
          </Link>
          <Link href="/pricing" className="text-sm">
            Plans and pricing
          </Link>
          <Link href="/resources" className="text-sm">
            Resources
          </Link>
          <Link href="/support" className="text-sm">
            Support
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/buy" className="text-sm">
          Buy now
        </Link>
        <Link href="/signin" className="text-sm">
          Sign in
        </Link>
        <Button variant="ghost" size="sm" className="px-2">
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </Button>
      </div>
    </nav>
  )
}

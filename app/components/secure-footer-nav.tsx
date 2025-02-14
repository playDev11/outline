'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function SecureFooterNav() {
  const footerItems = [
    'Overview',
    'Take the tour',
    'Download the app',
    'Plans & Pricing',
    'Microsoft 365 apps',
    'News & Tips',
    'FAQ',
  ]

  return (
    <nav className="border-t fixed bottom-0 left-0 right-0 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex space-x-6 text-sm">
            {footerItems.map((item, i) => (
              <Link
                key={i}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-600 hover:text-gray-900"
              >
                {item}
              </Link>
            ))}
          </div>
          <Button className="bg-[#2F2F2F] hover:bg-[#1F1F1F] text-white rounded-sm">
            See plans & pricing
          </Button>
        </div>
      </div>
    </nav>
  )
}

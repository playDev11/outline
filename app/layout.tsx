import './globals.css'
import { Inter } from 'next/font/google'
import type React from 'react' // Import React

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Secure Next.js Site',
  description: 'A highly secure Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

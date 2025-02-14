'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft } from 'lucide-react'
import type React from 'react' // Added import for React

export function SignInForm() {
  const [step, setStep] = useState<'email' | 'password'>('email')
  const [email, setEmail] = useState('')

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setStep('password')
    }
  }

  const handleBack = () => {
    setStep('email')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF8F8] to-[#F0F8F0]">
      <h1 className="text-[40px] mb-4">Outlook</h1>

      <div className="w-[440px] bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-start mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D46jfMhv0KMxHHzC3AYBQUzr5tHp26.png"
            alt="Microsoft"
            width={108}
            height={24}
            priority
          />
        </div>

        {step === 'email' ? (
          <form onSubmit={handleNext} className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Sign in</h2>
              <p className="text-sm text-gray-600">to continue to Outlook</p>
            </div>
            <Input
              type="text"
              placeholder="Email, phone, or Skype"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 border-b-2 border-t-0 border-x-0 rounded-none focus:ring-0 px-0"
              required
            />
            <div className="space-y-4 pt-4">
              <p className="text-sm">
                No account?{' '}
                <Link
                  href="#"
                  className="text-[#0067B8] hover:text-[#005BA1] hover:underline"
                >
                  Create one!
                </Link>
              </p>
              <Button
                type="submit"
                className="w-[108px] h-11 bg-[#0067B8] hover:bg-[#005BA1] float-right"
              >
                Next
              </Button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleNext} className="space-y-4">
            <div className="space-y-4">
              <button
                onClick={handleBack}
                className="flex items-center text-sm text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                {email}
              </button>
              <h2 className="text-2xl font-semibold">Enter password</h2>
            </div>
            <Input
              type="password"
              placeholder="Password"
              className="w-full h-11 border-b-2 border-t-0 border-x-0 rounded-none focus:ring-0 px-0"
              required
            />
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Link
                  href="#"
                  className="text-sm text-[#0067B8] hover:text-[#005BA1] hover:underline block"
                >
                  Forgot password?
                </Link>
                <Link
                  href="#"
                  className="text-sm text-[#0067B8] hover:text-[#005BA1] hover:underline block"
                >
                  Other ways to sign in
                </Link>
              </div>
              <Button
                type="submit"
                className="w-[108px] h-11 bg-[#0067B8] hover:bg-[#005BA1] float-right"
              >
                Sign in
              </Button>
            </div>
          </form>
        )}
      </div>

      <footer className="fixed bottom-0 w-full bg-[#333333] text-white py-2">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
          <div className="flex space-x-6 text-xs">
            <Link href="#" className="hover:underline">
              Terms of use
            </Link>
            <Link href="#" className="hover:underline">
              Privacy & cookies
            </Link>
            <span>...</span>
          </div>
          <div className="text-xs">
            <span>Use private browsing if this is not your device. </span>
            <Link href="#" className="hover:underline">
              Learn more
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

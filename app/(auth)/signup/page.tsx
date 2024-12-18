"use client"

import { SignupForm } from 'ui/auth/SignupForm'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()

  const handleSignup = async (
    nama: string, 
    username: string, 
    email: string, 
    password: string
  ) => {
    try {
      const response = await fetch('https://api.dev.asvri.ai/api/v2/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama, username, email, password }),
      })

      const data = await response.json() as { message?: string, error?: string, token?: any}

      if (response.ok) {
        // Simpan token di localStorage atau cookie
        localStorage.setItem('token', data.token)
        router.push('/login')
      } else {
        throw new Error(data.error || 'Signup failed')
      }
    } catch (error) {
      throw error instanceof Error ? error : new Error('Signup failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <SignupForm onSignup={handleSignup} />
    </div>
  )
}
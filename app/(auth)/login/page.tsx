"use client"

import { LoginForm } from 'ui/auth/LoginForm'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await fetch('https://api.dev.asvri.ai/api/v2/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
  
      const data = await response.json() as { message?: string, error?: string, token?: any }
  
      if (response.ok) {
        // Simpan token di localStorage atau cookie
        localStorage.setItem('token', data.token)
        router.push('/spaces')
      } else {
        throw new Error(data.error || 'Login failed')
      }
    } catch (error) {
      throw error instanceof Error ? error : new Error('Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <LoginForm onLogin={handleLogin} />
    </div>
  )
}
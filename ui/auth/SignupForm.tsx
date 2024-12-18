"use client"

import { useState } from 'react'
import { Button } from 'ui/components/Button/Button'
import { Input } from 'ui/components/Input/Input'

interface SignupFormProps {
  onSignup: (nama: string, username: string, email: string, password: string) => Promise<void>
}

export const SignupForm = ({ onSignup }: SignupFormProps) => {
  const [nama, setNama] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      await onSignup(nama, username, email, password)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form 
        onSubmit={handleSubmit} 
        className="w-[500px] px-10 py-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">Sign Up</h2>
        
        {error && (
          <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label 
            htmlFor="nama" 
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Nama
          </label>
          <Input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-4">
          <label 
            htmlFor="username" 
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Username
          </label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            placeholder="Choose a username"
          />
        </div>

        <div className="mb-4">
          <label 
            htmlFor="email" 
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label 
            htmlFor="password" 
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            placeholder="Create a password"
          />
        </div>

        <div className="mb-6">
          <label 
            htmlFor="confirm-password" 
            className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
          >
            Confirm Password
          </label>
          <Input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            placeholder="Repeat your password"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Sign Up
        </Button>

        <div className="mt-4 text-center">
          <a 
            href="/login" 
            className="text-blue-500 hover:underline"
          >
            Already have an account? Log In
          </a>
        </div>
      </form>
    </div>
  )
}
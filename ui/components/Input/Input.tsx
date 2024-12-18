import { twMerge } from 'tailwind-merge'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const inputVariants = cva(
  [
    'block',
    'w-full',
    'px-3',
    'py-2',
    'border',
    'rounded-md',
    'focus:outline-none',
    'focus:ring-2',
    'focus:border-transparent'
  ],
  {
    variants: {
      intent: {
        default: [
          'border-gray-300', 
          'focus:ring-blue-500'
        ],
        error: [
          'border-red-500', 
          'text-red-900', 
          'placeholder-red-300', 
          'focus:ring-red-500'
        ]
      },
      size: {
        sm: ['text-sm', 'py-1', 'px-2'],
        md: ['text-base', 'py-2', 'px-3'],
        lg: ['text-lg', 'py-3', 'px-4']
      }
    },
    defaultVariants: {
      intent: 'default',
      size: 'md'
    }
  }
)

export interface InputProps 
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  intent?: 'default' | 'error'
  size?: 'sm' | 'md' | 'lg'
}

export function Input({ 
  className, 
  intent = 'default', 
  size = 'md', 
  label, 
  error,
  id,
  ...props 
}: InputProps) {
  const inputId = id || props.name

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={twMerge(
          inputVariants({ 
            intent: error ? 'error' : intent, 
            size, 
            className 
          })
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
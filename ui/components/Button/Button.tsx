import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import React, { ReactNode } from 'react'

const button = cva(
  [
    'justify-center',
    'inline-flex',
    'items-center',
    'rounded-xl',
    'text-center',
    'border',
    'border-blue-400',
    'transition-colors',
    'delay-50',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-blue-400', 'text-white', 'hover:enabled:bg-blue-700'],
        secondary: ['bg-transparent', 'text-blue-400', 'hover:enabled:bg-blue-400', 'hover:enabled:text-white'],
      },
      size: {
        sm: ['min-w-20', 'h-full', 'min-h-10', 'text-sm', 'py-1.5', 'px-4'],
        lg: ['min-w-32', 'h-full', 'min-h-12', 'text-lg', 'py-2.5', 'px-6'],
      },
      underline: { true: ['underline'], false: [] },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'lg',
    },
  }
)

type ButtonBaseProps = {
  children: ReactNode
  className?: string
  intent?: 'primary' | 'secondary'
  size?: 'sm' | 'lg'
  underline?: boolean
}

type ButtonAsButtonProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never
}

type ButtonAsLinkProps = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

export function Button(props: ButtonProps) {
  const { 
    children, 
    className, 
    intent = 'primary', 
    size = 'lg', 
    underline = false,
    ...rest 
  } = props

  // Determine if it's an anchor or button based on the presence of href
  const isAnchor = 'href' in rest

  // Type assertion to resolve type incompatibility
  const componentProps = isAnchor 
    ? rest as React.AnchorHTMLAttributes<HTMLAnchorElement>
    : rest as React.ButtonHTMLAttributes<HTMLButtonElement>

  return React.createElement(
    isAnchor ? 'a' : 'button',
    {
      ...componentProps,
      className: twMerge(button({ 
        intent, 
        size, 
        className, 
        underline 
      }))
    },
    children
  )
}
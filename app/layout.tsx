import { Metadata } from 'next'
import { ThemeProvider } from 'ui/theme/ThemeProvider'
import NavHeader from 'ui/blocks/NavHeader/index.client'
import { cookies } from 'next/headers'

import 'styles/global-stylesheet.css'
import 'styles/google-font-Source-Sans-Pro.css'
import 'styles/google-font-IBM-Plex-Mono.css'

export const metadata: Metadata = {
  title: 'JAGR AI',
  openGraph: {
    title: 'JAGR AI',
    type: 'website',
    url: 'huggingface',
    images: '/front/assets/logo-jmi-rw.png',
  },
  description:
    'We’re on a journey to advance and democratize artificial intelligence through open source and open science.',
  twitter: {
    card: 'summary_large_image',
    site: '@huggingface',
  },
  icons: {
    icon: '/front/assets/logo-jmi-rw.png', // Favicon/logo kecil
    shortcut: '/front/assets/logo-jmi-rw.png',
    apple: '/front/assets/logo-jmi-rw.png',
  },
  appLinks: {},
}

function getInitialTheme() {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) return storedTheme // Gunakan tema dari localStorage jika ada
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return userPrefersDark ? 'dark' : 'light' // Default berdasarkan preferensi pengguna
  }
  return 'light' // Default di server
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')
  const themeScript = `
    (function() {
      const storedTheme = localStorage.getItem('theme');
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const theme = storedTheme || (userPrefersDark ? 'dark' : 'light');
      document.documentElement.classList.add(theme);
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>
          <main
            className="HomePage flex min-h-screen flex-col 
              bg-white text-black 
              dark:bg-dark-background dark:text-white"
            style={{ fontSize: 16 }}
          >
            <div className="flex min-h-screen flex-col">
              <NavHeader />
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

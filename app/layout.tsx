import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/ui/providers/theme-provider'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord Clone',
  description: 'Real time chat app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={ cn(inter.className,
          "bg-white dark:bg-[#313338]"
          )}>
          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={false}
            storageKey='c-hub-theme'
          >
            {children}
          </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
    
  )
}

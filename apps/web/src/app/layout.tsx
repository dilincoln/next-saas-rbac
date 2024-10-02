import '@/app/globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={clsx(inter.className, 'dark')} lang="en">
      <body>{children}</body>
    </html>
  )
}

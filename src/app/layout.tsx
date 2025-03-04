import './globals.css'
import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'AI Podcast - Transform Ideas into Conversations',
  description: 'Create natural-sounding podcasts with AI-generated conversations between any two people of your choice.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

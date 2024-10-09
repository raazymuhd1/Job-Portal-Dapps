import './globals.css'
import type { Metadata } from 'next'
import { Orbitron, Exo } from 'next/font/google'
import { Header } from '@/components'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  display: "swap",
  variable: "--font-orbitron" 
})

export const metadata: Metadata = {
  title: 'SeekJob',
  description: 'Seek for job, wait no more',
}

// main color #f2f2f2
// second color #0076fb

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={`${orbitron.variable}`}>
        <body className={`bg-[#ffffff]`}>
          <Header />
          {children}
        </body>
      </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Header from './components/Header'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sörkép',
  description: 'Sör-Térkép',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin']})

export const metadata = {
  title: 'CSULB Club Hub',
  description: 'The nexus of the clubs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}

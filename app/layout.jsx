import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GreenBuild - Sustainable Architecture & Green Building Designs',
  description: 'Green building solutions for sustainable architecture. Discover eco-friendly designs, energy-efficient homes, and sustainable building practices.',
  keywords: 'green building, sustainable architecture, eco-friendly homes, energy efficient design, LEED certified, sustainable construction',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
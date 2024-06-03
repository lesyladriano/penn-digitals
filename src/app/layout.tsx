import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/ui/header'
import ScrollUp from '../components/ui/scrollUpButton'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Penn Digitals',
  description: 'The Penn Digitals, born on June 8, 2022, stands as a testament to the power of entrepreneurial dreams.',
  icons: {
    icon: [
      '/favicon.ico?=v4'
    ],
    apple: [
      '/apple-touch-icon.png?v=4'
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>
         The Penn Digitals
        </title>
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-M1i5Xyc3bxBWDzHe72eJ0sjDHqUMmMMy+8bZPEc35WmWZxO6s2BrN5cXieLbTMOq3H5cLx3IGvxEY2ACx9soNQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></link>

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@400;500;700&family=Passions+Conflict&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Satisfy&display=swap" rel="stylesheet"></link>

      </head>
      <body className={inter.className}>
        {children}
          <ScrollUp/>
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vishesh Pal | Software Engineer & Tech Innovator',
  description: 'Portfolio of Vishesh Pal - Electronics Engineering student specializing in AI, IoT, Cloud Computing, and Full-Stack Development. Building the future through code and innovation.',
  keywords: ['Vishesh Pal', 'Software Engineer', 'Full Stack Developer', 'AI', 'IoT', 'React', 'Next.js', 'AWS', 'Portfolio'],
  authors: [{ name: 'Vishesh Pal' }],
  creator: 'Vishesh Pal',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vishesh-dev.me',
    title: 'Vishesh Pal | Software Engineer & Tech Innovator',
    description: 'Building the future through code and innovation.',
    siteName: 'Vishesh Pal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishesh Pal | Software Engineer & Tech Innovator',
    description: 'Building the future through code and innovation.',
    creator: '@Vishesh_Pal_21',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#030303',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}

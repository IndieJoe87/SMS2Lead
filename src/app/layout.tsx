import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import JsonLd from '@/components/JsonLd'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sms2lead.de'),
  title: {
    default: 'SMS2Lead - Automatischer SMS-Service für verpasste Anrufe',
    template: '%s | SMS2Lead'
  },
  description: 'SMS2Lead - Der automatische SMS-Service für verpasste Anrufe. Steigern Sie Ihre Erreichbarkeit und Ihren Umsatz mit unserem professionellen Rückrufservice. Ein Service von WebWerkMitte aus Weißenfels.',
  keywords: [
    'SMS Service',
    'Rückrufservice',
    'Kundenservice',
    'Weißenfels',
    'WebWerkMitte',
    'Automatische SMS',
    'Verpasste Anrufe',
    'Kundenbetreuung',
    'Business SMS',
    'Erreichbarkeit verbessern',
    'SMS Benachrichtigung',
    'Kundenservice Software',
    'Anrufmanagement',
    'Geschäftskommunikation',
    'SMS Marketing'
  ],
  authors: [{ name: 'WebWerkMitte', url: 'https://www.webwerkmitte.de' }],
  creator: 'WebWerkMitte',
  publisher: 'WebWerkMitte',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://sms2lead.de',
    siteName: 'SMS2Lead',
    title: 'SMS2Lead - Automatischer SMS-Service für verpasste Anrufe',
    description: 'SMS2Lead - Der automatische SMS-Service für verpasste Anrufe. Steigern Sie Ihre Erreichbarkeit und Ihren Umsatz mit unserem professionellen Rückrufservice.',
    images: [
      {
        url: 'https://WebWerkmitte.b-cdn.net/LogoCall.png',
        width: 300,
        height: 100,
        alt: 'SMS2Lead Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMS2Lead - Automatischer SMS-Service für verpasste Anrufe',
    description: 'Automatische SMS-Benachrichtigungen bei verpassten Anrufen. Steigern Sie Ihre Erreichbarkeit.',
    images: ['https://WebWerkmitte.b-cdn.net/LogoCall.png'],
    creator: '@webwerkmitte',
  },
  alternates: {
    canonical: 'https://sms2lead.de',
    languages: {
      'de-DE': 'https://sms2lead.de',
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  verification: {
    google: 'google-site-verification-code', // You'll need to replace this with your actual verification code
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://WebWerkmitte.b-cdn.net" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`} suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col">
          <Nav />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
        <JsonLd />
      </body>
    </html>
  )
}

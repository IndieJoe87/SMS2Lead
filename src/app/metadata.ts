import { Metadata } from 'next'

const defaultKeywords = [
  'SMS Service',
  'Rückrufservice',
  'Kundenservice',
  'Weißenfels',
  'WebWerkMitte',
  'Automatische SMS',
  'Verpasste Anrufe',
  'Kundenbetreuung',
  'Business SMS',
  'Erreichbarkeit verbessern'
]

const defaultDescription = 'SMS2Lead - Der automatische SMS-Service für verpasste Anrufe. Steigern Sie Ihre Erreichbarkeit und Ihren Umsatz mit unserem professionellen Rückrufservice. Ein Service von WebWerkMitte aus Weißenfels.'

export const defaultMetadata: Metadata = {
  title: {
    default: 'SMS2Lead - Automatischer SMS-Service für verpasste Anrufe',
    template: '%s | SMS2Lead'
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  authors: [{ name: 'WebWerkMitte' }],
  creator: 'WebWerkMitte',
  publisher: 'WebWerkMitte',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://sms2lead.de',
    siteName: 'SMS2Lead',
    title: 'SMS2Lead - Automatischer SMS-Service für verpasste Anrufe',
    description: defaultDescription,
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
    description: defaultDescription,
    images: ['https://WebWerkmitte.b-cdn.net/LogoCall.png'],
  },
  alternates: {
    canonical: 'https://sms2lead.de',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

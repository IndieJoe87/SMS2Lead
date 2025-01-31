export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://sms2lead.de/#organization',
        name: 'SMS2Lead',
        url: 'https://sms2lead.de',
        logo: {
          '@type': 'ImageObject',
          url: 'https://WebWerkmitte.b-cdn.net/LogoCall.png',
          width: 300,
          height: 100,
        },
        sameAs: [
          'https://www.webwerkmitte.de',
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Merseburger Straße 12',
          addressLocality: 'Weißenfels',
          postalCode: '06667',
          addressCountry: 'DE',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+49-123-456789',
          contactType: 'customer service',
          areaServed: 'DE',
          availableLanguage: 'German',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://sms2lead.de/#website',
        url: 'https://sms2lead.de',
        name: 'SMS2Lead',
        publisher: {
          '@id': 'https://sms2lead.de/#organization',
        },
        description: 'Automatische SMS-Benachrichtigungen bei verpassten Anrufen. Ein Service von WebWerkMitte.',
      },
      {
        '@type': 'Service',
        '@id': 'https://sms2lead.de/#service',
        name: 'SMS2Lead Rückrufservice',
        provider: {
          '@id': 'https://sms2lead.de/#organization',
        },
        description: 'Automatischer SMS-Service für verpasste Anrufe mit sofortiger Benachrichtigung',
        areaServed: 'DE',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'SMS2Lead Tarife',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SMS2Lead Basic',
                description: 'Basis-Tarif mit allen wichtigen Funktionen',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SMS2Lead Professional',
                description: 'Erweiterter Tarif für professionelle Anforderungen',
              },
            },
          ],
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

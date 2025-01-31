import { Metadata } from 'next'
import Pricing from '@/components/Pricing'
import CallToAction from '@/components/CallToAction'

export const metadata: Metadata = {
  title: 'Preise & Tarife',
  description: 'Entdecken Sie unsere flexiblen Tarife für SMS2Lead. Kostenlose Testphase, keine Vertragsbindung und persönlicher Support inklusive. Ein Service von WebWerkMitte aus Weißenfels.',
  openGraph: {
    title: 'SMS2Lead Preise & Tarife - Flexibel und Transparent',
    description: 'Wählen Sie den passenden Tarif für Ihr Unternehmen. Jetzt 7 Tage kostenlos testen.',
  }
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <div className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Wählen Sie den passenden Tarif
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible Tarife für jede Unternehmensgröße. Starten Sie jetzt und steigern Sie Ihren Umsatz.
          </p>
        </div>
      </div>
      <Pricing />
      <CallToAction />
    </div>
  )
}

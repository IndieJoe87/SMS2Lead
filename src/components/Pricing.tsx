'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 249,
    originalYearlyPrice: 2988, // 249 * 12
    discountedYearlyPrice: 2241, // 2988 - (2988 * 0.25)
    discountedMonthlyPrice: 186.75, // 249 - (249 * 0.25)
    features: [
      '2-Wege-SMS & E-Mail',
      'Google My Business Messaging',
      'Webchat',
      'Bewertungsmanagement',
      'Facebook Messenger',
      'GMB Anrufverfolgung',
      'Verpasste-Anruf-SMS',
      'SMS-Zahlungen'
    ],
    monthlyLink: 'https://buy.stripe.com/aEU00leqVfxkeTmeUW',
    yearlyLink: 'https://buy.stripe.com/6oEfZjdmRad0h1ubIL'
  },
  {
    name: 'Professional',
    monthlyPrice: 449,
    originalYearlyPrice: 5388, // 449 * 12
    discountedYearlyPrice: 4041, // 5388 - (5388 * 0.25)
    discountedMonthlyPrice: 336.75, // 449 - (449 * 0.25)
    features: [
      'Alle Basic Funktionen',
      'Kalender',
      'CRM',
      'Vertriebs-Pipeline',
      'E-Mail-Marketing'
    ],
    monthlyLink: 'https://buy.stripe.com/14k7sNdmR84SfXq8wA',
    yearlyLink: 'https://buy.stripe.com/aEU28taaFfxk3aEaEJ'
  },
  {
    name: 'Premium',
    monthlyPrice: 699,
    originalYearlyPrice: 8388, // 699 * 12
    discountedYearlyPrice: 6291, // 8388 - (8388 * 0.25)
    discountedMonthlyPrice: 524.25, // 699 - (699 * 0.25)
    features: [
      'Alle Professional Funktionen',
      'Social-Media-Planung',
      'Rechnungsstellung',
      'Formulare & Umfragen',
      'Trigger Links',
      'Vorlagen für SMS & E-Mails',
      'Funnel- & Website-Erstellung',
      'Workflows & Automatisierungen',
      'Mitgliedschaften',
      'Alle Berichte & Statistiken',
      'Trigger & Kampagnen',
      'Blogs & Affiliate Manager'
    ],
    monthlyLink: 'https://buy.stripe.com/aEU28taaFfxk3aEaEJ',
    yearlyLink: 'https://buy.stripe.com/eVa5kFciNetg7qU4gn'
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {isYearly && (
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 19L3.5 13M3.5 13L9.5 7M3.5 13H20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-semibold">25% Rabatt bei jährlicher Zahlung!</span>
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wählen Sie Ihren Plan
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Flexible Tarife für jede Unternehmensgröße
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={isYearly ? 'text-gray-500' : 'font-semibold'}>Monatlich</span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                isYearly ? 'bg-primary' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                } shadow-sm`}
              />
            </button>
            <span className={!isYearly ? 'text-gray-500' : 'font-semibold'}>Jährlich (25% Rabatt)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden relative"
            >
              {isYearly && (
                <div className="absolute -right-12 top-7 rotate-45 bg-accent text-white px-14 py-1 text-sm font-medium">
                  25% Rabatt
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  {isYearly ? (
                    <>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-4xl font-bold">€{plan.discountedMonthlyPrice}</span>
                        <span className="text-gray-600">/Monat</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <span className="line-through">€{plan.monthlyPrice}</span>
                        <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-sm">-25%</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        Bei jährlicher Zahlung
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="text-4xl font-bold">€{plan.monthlyPrice}</span>
                      <span className="text-gray-600">/Monat</span>
                    </div>
                  )}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={isYearly ? plan.yearlyLink : plan.monthlyLink}
                  className="block w-full bg-primary text-white text-center py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Jetzt starten
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

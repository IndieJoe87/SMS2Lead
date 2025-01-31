'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Automatische SMS-Benachrichtigungen',
    description: 'Sofortige SMS-Benachrichtigung bei verpassten Anrufen mit allen relevanten Informationen.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Google My Business Integration',
    description: 'Nahtlose Integration mit Google My Business für optimale Kundenkommunikation.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Webchat & Messenger',
    description: 'Integrierter Webchat und Facebook Messenger für eine einheitliche Kommunikation.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: 'Bewertungsmanagement',
    description: 'Aktives Management und Monitoring von Kundenbewertungen auf allen Plattformen.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section className="relative py-20 bg-gradient-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-50" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Alles für Ihre Kommunikation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unsere Funktionen helfen Ihnen dabei, keine Kundenanfrage zu verpassen und Ihre Erreichbarkeit zu maximieren.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 relative h-full">
                <div className="mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ein Service von <a href="https://www.webwerkmitte.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WebWerkMitte</a></h2>
            <p className="text-lg text-muted-foreground mb-2">
              Ihre Online Service Agency in Weißenfels
            </p>
            <p className="text-muted-foreground">
              Wir sind Ihr Partner für ganzheitlichen digitalen Erfolg
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit, mehr Umsatz zu generieren?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Starten Sie jetzt mit unserem automatisierten Rückruf-SMS-Service und verpassen Sie nie wieder einen wichtigen Anruf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/preis"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white text-primary px-8 text-lg font-medium shadow hover:bg-white/90 transition-colors"
            >
              Jetzt starten
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex h-12 items-center justify-center rounded-md border-2 border-white px-8 text-lg font-medium shadow-sm hover:bg-white/10 transition-colors"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

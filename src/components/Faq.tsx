'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Wie funktioniert der automatische SMS-Versand?',
    answer: 'Sobald ein Anruf verpasst wird, erkennt unser System dies automatisch und sendet sofort eine personalisierte SMS an den Anrufer. Diese enthält typischerweise eine Entschuldigung für den verpassten Anruf und die Möglichkeit zur Terminvereinbarung oder zum Rückruf.'
  },
  {
    question: 'Welche Integrationen werden unterstützt?',
    answer: 'Unser System unterstützt Integrationen mit allen gängigen Telefonanlagen, Google My Business, Facebook Messenger, verschiedenen CRM-Systemen und Kalenderlösungen. Die verfügbaren Integrationen hängen vom gewählten Tarif ab.'
  },
  {
    question: 'Kann ich den SMS-Text personalisieren?',
    answer: 'Ja, Sie können sowohl den SMS-Text als auch alle automatischen Nachrichten vollständig personalisieren. Sie können verschiedene Vorlagen für unterschiedliche Situationen erstellen und diese mit dynamischen Feldern wie Name oder Uhrzeit anreichern.'
  },
  {
    question: 'Gibt es eine Mindestvertragslaufzeit?',
    answer: 'Nein, Sie können unseren Service monatlich oder jährlich buchen und jederzeit kündigen. Bei jährlicher Zahlung erhalten Sie einen Rabatt von 17%.'
  },
  {
    question: 'Wie viele SMS sind im Preis inbegriffen?',
    answer: 'Alle Tarife beinhalten ein monatliches SMS-Kontingent. Der Basic-Tarif enthält 500 SMS, Professional 1.000 SMS und Premium 2.500 SMS pro Monat. Zusätzliche SMS können bei Bedarf kostengünstig hinzugebucht werden.'
  },
  {
    question: 'Wie lange ist die kostenlose Testphase?',
    answer: 'Sie können unseren Service 7 Tage lang kostenlos testen. In dieser Zeit haben Sie Zugriff auf alle Funktionen und können sich von der Qualität unseres Services überzeugen.'
  }
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-600">
            Finden Sie schnell Antworten auf Ihre Fragen
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-lg font-medium text-left">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

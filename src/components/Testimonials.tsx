'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Michael Schmidt',
    role: 'Geschäftsführer, Autohaus Schmidt',
    content: 'Seit wir den SMS-Rückrufservice nutzen, entgeht uns kein wichtiger Kunde mehr. Unser Umsatz ist um 25% gestiegen!',
    image: '/testimonials/person1.jpg'
  },
  {
    name: 'Sarah Weber',
    role: 'Inhaberin, Friseursalon Beauty & Style',
    content: 'Die automatischen SMS sind Gold wert. Unsere Kunden schätzen den professionellen Service und wir können uns auf unser Kerngeschäft konzentrieren.',
    image: '/testimonials/person2.jpg'
  },
  {
    name: 'Thomas Müller',
    role: 'Praxisinhaber, Zahnarztpraxis Müller',
    content: 'Ein unverzichtbares Tool für unsere Praxis. Die Integration war einfach und der Support ist hervorragend. Klare Empfehlung!',
    image: '/testimonials/person3.jpg'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-gray-600">
            Erfolgsgeschichten zufriedener Unternehmen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4">
                  {/* Placeholder for profile image */}
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

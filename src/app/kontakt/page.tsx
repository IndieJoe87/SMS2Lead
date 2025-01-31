'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kontaktieren Sie uns
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Haben Sie Fragen? Wir sind für Sie da und helfen Ihnen gerne weiter.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input type="text" placeholder="Ihr Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Firma</label>
                  <Input type="text" placeholder="Ihre Firma" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">E-Mail</label>
                <Input type="email" placeholder="ihre.email@beispiel.de" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Telefon</label>
                <Input type="tel" placeholder="+49" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nachricht</label>
                <Textarea placeholder="Wie können wir Ihnen helfen?" rows={5} />
              </div>

              <div className="flex justify-end">
                <Button type="submit" size="lg">
                  Nachricht senden
                </Button>
              </div>
            </form>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">E-Mail</h3>
                <p className="text-gray-600">info@callme.de</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Telefon</h3>
                <p className="text-gray-600">+49 (0) 123 456789</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Geschäftszeiten</h3>
                <p className="text-gray-600">Mo-Fr: 9:00 - 17:00 Uhr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import Faq from '@/components/Faq'
import CallToAction from '@/components/CallToAction'

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <div className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Häufig gestellte Fragen
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Finden Sie schnell Antworten auf Ihre Fragen zu unserem Service.
          </p>
        </div>
      </div>
      <Faq />
      <CallToAction />
    </div>
  )
}

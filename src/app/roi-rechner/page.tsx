import RoiCalculator from '@/components/RoiCalculator'
import CallToAction from '@/components/CallToAction'

export default function RoiCalculatorPage() {
  return (
    <div className="min-h-screen">
      <div className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ROI Rechner
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Berechnen Sie, wie viel Umsatz Sie durch verpasste Anrufe verlieren und wie hoch Ihre potenzielle Rendite mit unserem Service ist.
          </p>
        </div>
      </div>
      <RoiCalculator />
      <CallToAction />
    </div>
  )
}

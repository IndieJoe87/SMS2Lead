'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

type CalculatorInputs = {
  missedCalls: number
  averageProfit: number
  conversionRate: number
}

export default function UmsatzRechner() {
  const [results, setResults] = useState<{
    monthlyLoss: number
    savings: number
    roi: number
  } | null>(null)

  const { register, handleSubmit } = useForm<CalculatorInputs>({
    defaultValues: {
      missedCalls: 15,
      averageProfit: 500,
      conversionRate: 30
    }
  })

  const calculateResults = (data: CalculatorInputs) => {
    const workingDaysPerMonth = 20 // 5 days * 4 weeks
    const monthlyMissedCalls = data.missedCalls * workingDaysPerMonth
    const potentialCustomers = monthlyMissedCalls * (data.conversionRate / 100)
    const monthlyLoss = potentialCustomers * data.averageProfit
    const monthlyServiceCost = 199 // CallMe service cost
    const savings = monthlyLoss - monthlyServiceCost
    const roi = (savings / monthlyServiceCost) * 100

    setResults({
      monthlyLoss,
      savings,
      roi
    })
  }

  return (
    <section className="py-20 bg-gray-50" id="umsatz-rechner">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Berechnen Sie Ihren Umsatzgewinn
          </h2>

          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit(calculateResults)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Durchschnittliche verpasste Anrufe pro Tag
                </label>
                <input
                  type="number"
                  {...register('missedCalls', { min: 1 })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Wie viele Anrufe verpassen Sie durchschnittlich an einem Arbeitstag?
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Durchschnittlicher Gewinn pro Kunde (€)
                </label>
                <input
                  type="number"
                  {...register('averageProfit', { min: 1 })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Wie hoch ist Ihr durchschnittlicher Gewinn pro Kunde?
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Konversionsrate (%)
                </label>
                <input
                  type="number"
                  {...register('conversionRate', { min: 1, max: 100 })}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Wie viel Prozent der zurückgerufenen Kunden werden zu zahlenden Kunden?
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white rounded-md py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Potenzial berechnen
              </button>
            </form>

            {results && (
              <div className="mt-8 space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-600">Monatlicher Umsatzverlust ohne SMS2Lead:</p>
                  <p className="text-2xl font-bold">€{Math.round(results.monthlyLoss).toLocaleString()}</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-600">Monatlicher Mehrgewinn mit SMS2Lead:</p>
                  <p className="text-2xl font-bold text-green-600">€{Math.round(results.savings).toLocaleString()}</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-600">Rendite:</p>
                  <p className="text-2xl font-bold text-blue-600">{Math.round(results.roi)}%</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

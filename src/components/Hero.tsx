'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Hero() {
  return (
    <section className="relative py-20 bg-gradient-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <div className="flex justify-center mb-8">
              <Image
                src="https://WebWerkmitte.b-cdn.net/LogoCall.png"
                alt="SMS2Lead Logo"
                width={300}
                height={100}
                className="w-auto h-auto max-w-[300px]"
                priority
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
              Verpassen Sie nie wieder einen wichtigen Anruf
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
              Automatische SMS-Benachrichtigungen bei verpassten Anrufen.
              <span className="block mt-2">Steigern Sie Ihre Erreichbarkeit und Ihren Umsatz.</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/preis">
              <Button size="lg" variant="default" className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 transition-opacity">
                Jetzt starten
              </Button>
            </Link>
            <Link href="#umsatz-rechner">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary/20 hover:bg-primary/5">
                Umsatzpotenzial berechnen
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            <Card className="bg-white/70 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle>Kostenlose Testphase</CardTitle>
                <CardDescription>
                  Testen Sie unseren Service 7 Tage lang kostenlos
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle>Keine Vertragsbindung</CardTitle>
                <CardDescription>
                  Flexibel kündbar, keine versteckten Kosten
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white/70 backdrop-blur-sm border-primary/10">
              <CardHeader>
                <CardTitle>Support inklusive</CardTitle>
                <CardDescription>
                  Persönliche Betreuung und technischer Support
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

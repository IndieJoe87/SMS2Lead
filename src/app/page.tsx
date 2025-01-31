import Hero from '@/components/Hero'
import Features from '@/components/Features'
import UmsatzRechner from '@/components/UmsatzRechner'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <UmsatzRechner />
      <Pricing />
      <Testimonials />
      <Faq />
      <CallToAction />
    </div>
  )
}

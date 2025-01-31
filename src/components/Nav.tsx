'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Nav() {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', label: 'Start' },
    { href: '#umsatz-rechner', label: 'Umsatzrechner' },
    { href: '/preis', label: 'Preise' },
    { href: '/faq', label: 'FAQ' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <div className="flex-none">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-foreground">SMS2Lead</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="flex-1 hidden md:flex justify-center items-center">
          <div className="flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex-1 flex md:hidden justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>SMS2Lead</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-foreground/80",
                      pathname === item.href ? "text-foreground" : "text-foreground/60"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button className="w-full" asChild>
                    <Link href="/preis">
                      Kostenlos testen
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop CTA Button */}
        <div className="flex-none hidden md:block">
          <Link href="/preis">
            <Button>
              Kostenlos testen
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

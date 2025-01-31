import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-light border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Über uns</h3>
            <p className="text-muted-foreground">
              Ein Service von <a href="https://www.webwerkmitte.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WebWerkMitte</a> - Ihre Online Service Agency in Weißenfels. Steigern Sie Ihre Erreichbarkeit und Ihren Umsatz.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@webwerkmitte.de</li>
              <li>Tel: +49 (0) 123 456789</li>
              <li>Mo-Fr: 9:00 - 17:00 Uhr</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/10 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SMS2Lead - Ein Service von <a href="https://www.webwerkmitte.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WebWerkMitte</a>. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

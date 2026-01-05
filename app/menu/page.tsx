import { PremiumMenuBook } from "@/components/premium-menu-book"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-primary">
            Allo Amigo
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-sm hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/gallery" className="text-sm hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Menu Book */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h1 className="font-serif text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f4e5c3] to-[#d4af37] bg-clip-text text-transparent">
              Notre Menu
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Découvrez notre sélection exquise de plats et boissons préparés avec passion
            </p>
          </div>

          <PremiumMenuBook />
        </div>
      </div>
    </div>
  )
}

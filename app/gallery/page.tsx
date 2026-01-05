import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function GalleryPage() {
  const images = [
    { src: "/images/back.jpeg", alt: "Cafe Interior" },
    { src: "/images/back2.jpeg", alt: "Coffee Making" },
    { src: "/images/bac.jpeg", alt: "Desserts Display" },

  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-primary">
            Allo Amigo
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm hover:text-primary">Home</Link>
            <Link href="/menu" className="text-sm hover:text-primary">Menu</Link>
            <Link href="/gallery" className="text-sm hover:text-primary">Gallery</Link>
            <Link href="/about" className="text-sm hover:text-primary">About</Link>
            <Link href="/contact" className="text-sm hover:text-primary">Contact</Link>

            <Button asChild variant="ghost" size="sm">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Gallery Content */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              A glimpse into the Allo Amigo experience
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg border border-border hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

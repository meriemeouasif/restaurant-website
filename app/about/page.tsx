import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Award, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
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

      {/* About Content */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-serif text-5xl md:text-6xl font-bold gradient-text">À Propos d'Allo Amigo</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Votre destination culinaire où tradition rencontre innovation, et chaque visite est une expérience
              mémorable
            </p>
          </div>

          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto">
            <div className="relative h-[500px] group">
              <img
                src="/cozy-restaurant-founders-story-vintage-photos.jpg"
                alt="Notre histoire"
                className="w-full h-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-accent/10 border border-accent/30">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-sm font-bold text-accent tracking-[0.3em] uppercase">Notre Histoire</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Le Début d'une <span className="gradient-text">Grande Aventure</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Allo Amigo est né d'un rêve simple : créer un espace où les gens pourraient se rassembler, se connecter
                et savourer une cuisine exceptionnelle. Ce qui a commencé comme un petit restaurant est devenu un lieu
                emblématique de la ville, mais notre engagement envers la qualité et la chaleur reste inchangé.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Nous croyons que la grande cuisine et l'hospitalité ont le pouvoir de rassembler les gens. Chaque
                ingrédient est soigneusement sélectionné, chaque plat préparé avec passion.
              </p>
            </div>
          </div>

          {/* Culinary Philosophy Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto">
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-accent/10 border border-accent/30">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-sm font-bold text-accent tracking-[0.3em] uppercase">Notre Philosophie</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Passion & <span className="gradient-text">Excellence</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Notre philosophie culinaire repose sur trois piliers : la qualité des ingrédients, le respect des
                traditions, et l'innovation constante. Nous travaillons avec des producteurs locaux et sélectionnons les
                meilleurs produits pour garantir une expérience gustative exceptionnelle.
              </p>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Chaque membre de notre équipe partage cette passion pour l'excellence. De la cuisine à la salle, nous
                veillons à ce que chaque détail soit parfait pour vous offrir un moment inoubliable.
              </p>
            </div>

            <div className="relative h-[500px] group order-1 md:order-2">
              <img
                src="/fresh-ingredients-and-spices-arranged-artistically.jpg"
                alt="Notre philosophie culinaire"
                className="w-full h-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center space-y-4 p-8 bg-card border border-border rounded-lg">
              <div className="inline-flex p-4 rounded-full bg-accent/10">
                <Heart className="h-10 w-10 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-card-foreground">Passion</h3>
              <p className="text-muted-foreground leading-relaxed">
                We pour our hearts into everything we do, from brewing the perfect cup to plating each dish with care
              </p>
            </div>

            <div className="text-center space-y-4 p-8 bg-card border border-border rounded-lg">
              <div className="inline-flex p-4 rounded-full bg-accent/10">
                <Award className="h-10 w-10 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-card-foreground">Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Only the finest ingredients and most carefully sourced beans make it to your table
              </p>
            </div>

            <div className="text-center space-y-4 p-8 bg-card border border-border rounded-lg">
              <div className="inline-flex p-4 rounded-full bg-accent/10">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-card-foreground">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're more than a café - we're a gathering place where friendships are formed and memories are made
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 py-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Join Our Story</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us today and become part of the Allo Amigo family
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/menu">View Menu</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

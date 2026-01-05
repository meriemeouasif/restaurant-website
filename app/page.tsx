import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, UtensilsCrossed, MenuIcon, MapPin, Phone, Mail, ArrowRight, Star } from "lucide-react"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-3xl font-bold text-accent tracking-tight hover:scale-105 transition-transform duration-300"
          >
            Allo Amigo
          </Link>
          <div className="hidden md:flex items-center gap-10">
            {["Home", "Menu", "Gallery", "About", "Contact"].map((link) => (
              <Link
                key={link}
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-sm font-medium text-white/80 hover:text-accent transition-all duration-300 relative group uppercase tracking-[0.15em]"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black font-bold px-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/30"
          >
            <Link href="/contact">Réserver</Link>
          </Button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/bac.jpeg"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h1 className="font-serif text-7xl md:text-9xl font-black text-white tracking-tight leading-[0.95]">
              <span className="gradient-text">Allo Amigo</span>
            </h1>

            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-24 bg-accent/50" />
              <div className="w-2 h-2 bg-accent" />
              <div className="h-px w-24 bg-accent/50" />
            </div>

            <p className="text-xl md:text-3xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
              Plongez dans un paradis de saveurs et d'élégance
            </p>

            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-black text-lg px-12 py-7 h-auto font-bold group shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Link href="/menu">
                  Explorez Notre Carte
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-px h-16 bg-accent/60" />
        </div>
      </section>

      <section className="relative py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-accent/10 border border-accent/30">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-sm font-bold text-accent tracking-[0.3em] uppercase">Notre Équipe</span>
              </div>

              <h2 className="font-serif text-4xl md:text-6xl font-black text-foreground leading-tight">
                L'Esprit <span className="gradient-text">Allo Amigo</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Chez Allo Amigo, notre équipe est notre plus grande fierté. Composée de passionnés de gastronomie et
                d'hospitalité, chaque membre apporte son expertise unique pour créer une expérience exceptionnelle. De
                nos chefs talentueux à notre personnel accueillant, nous travaillons ensemble comme une famille pour
                vous offrir le meilleur.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre philosophie est simple : l'excellence dans chaque détail. Nous croyons que le service doit être
                aussi mémorable que nos plats, et que chaque client mérite d'être traité comme un ami.
              </p>
            </div>

            <div className="relative h-[600px] group">
            <video
  src="/images/WhatsApp Video 2026-01-03 at 15.25.11.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700"
>
  Your browser does not support the video tag.
</video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative h-[600px] group order-2 md:order-1">
                  <video
  src="/images/WhatsApp Video 2026-01-05 at 00.45.46.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700"
>
  Your browser does not support the video tag.
</video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="space-y-8 order-1 md:order-2">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-accent/10 border border-accent/30">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-sm font-bold text-accent tracking-[0.3em] uppercase">Notre Méthode</span>
              </div>

              <h2 className="font-serif text-4xl md:text-6xl font-black text-foreground leading-tight">
                L'Art de la <span className="gradient-text">Préparation</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaque plat chez Allo Amigo est une œuvre d'art culinaire. Nous utilisons exclusivement des ingrédients
                frais et de première qualité, soigneusement sélectionnés auprès de producteurs locaux et internationaux.
                Notre approche respecte les traditions tout en embrassant l'innovation.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Nos chefs maîtrisent des techniques ancestrales combinées aux méthodes modernes. Chaque recette est
                perfectionnée, chaque saveur équilibrée avec précision. De la sélection des épices à la cuisson
                minutieuse, rien n'est laissé au hasard.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Ingrédients Frais</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-black text-accent">15+</div>
                  <div className="text-sm text-muted-foreground">Années d'Expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-accent/10 border border-accent/30">
                <div className="w-2 h-2 bg-accent" />
                <span className="text-sm font-bold text-accent tracking-[0.3em] uppercase">Notre Ambiance</span>
              </div>

              <h2 className="font-serif text-4xl md:text-6xl font-black text-foreground leading-tight">
                Un Lieu <span className="gradient-text">Unique</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                L'atmosphère d'Allo Amigo a été pensée dans les moindres détails pour créer un cocon de bien-être. Un
                éclairage tamisé, une décoration élégante inspirée des tendances contemporaines, et une acoustique
                soignée pour permettre les conversations intimes comme les soirées animées.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Que vous veniez pour un déjeuner d'affaires, un dîner romantique ou une soirée entre amis, notre espace
                s'adapte à chaque moment. Notre bar élégant propose une sélection de cocktails signatures et notre
                lounge hookah offre une expérience de détente unique.
              </p>
            </div>

            <div className="relative h-[600px] group">
              <img
                src="/images/bac.jpeg"
                alt="L'ambiance Allo Amigo"
                className="w-full h-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-accent/10 border border-accent/30 mb-8">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-sm font-bold text-accent tracking-[0.3em] uppercase">Nous Trouver</span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl font-black text-foreground leading-tight mb-6">
              Venez Nous <span className="gradient-text">Rendre Visite</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Situés au cœur de Casablanca, nous vous accueillons dans un cadre exceptionnel
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div className="relative h-[500px] group overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8662676893!2d-7.638468!3d33.589089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2f1e2d7f3f7%3A0x8f9e3e3e3e3e3e3e!2s20%20Boulevard%20Slaoui%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="space-y-8">
              <div className="bg-card border border-border p-8 space-y-6 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center">
                    <MapPin className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Adresse</p>
                    <p className="text-xl font-bold text-foreground">20 Boulevard Slaoui</p>
                    <p className="text-foreground/80">Casablanca, Morocco</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-8 space-y-6 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center">
                    <Phone className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Téléphone</p>
                    <a
                      href="tel:+212701758511"
                      className="text-xl font-bold text-foreground hover:text-accent transition-colors"
                    >
                      +212 701-758-511
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-8 space-y-6 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-accent/10 flex items-center justify-center">
                    <Mail className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:contact@alloamigo.com"
                      className="text-xl font-bold text-foreground hover:text-accent transition-colors"
                    >
                      contact@alloamigo.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-8 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-card-foreground">Horaires d'Ouverture</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Lundi - Jeudi</span>
                    <span className="font-semibold text-foreground">12:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Vendredi - Samedi</span>
                    <span className="font-semibold text-foreground">12:00 - 01:00</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Dimanche</span>
                    <span className="font-semibold text-foreground">12:00 - 23:00</span>
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-black font-bold py-6 text-lg hover:scale-105 transition-all duration-300"
              >
                <a href="https://maps.app.goo.gl/ifge6fyoJephQAfY6" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-5 w-5" />
                  Ouvrir dans Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-background">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="font-serif text-5xl md:text-7xl font-black text-foreground leading-tight">
              Plongez dans un Paradis de Saveurs
            </h2>

            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-24 bg-accent/50" />
              <div className="w-2 h-2 bg-accent" />
              <div className="h-px w-24 bg-accent/50" />
            </div>

            <p className="text-xl md:text-3xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Chez Allo Amigo, chaque moment est une promesse de raffinement et de plaisir.
            </p>

            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-black text-lg px-12 py-7 h-auto font-bold group shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Link href="/menu">
                  Explorez Notre Carte
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto space-y-10">
            <h2 className="font-serif text-5xl md:text-7xl font-black text-foreground leading-tight">
              Pourquoi Choisir Allo Amigo?
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Coffee,
                  title: "Expérience Culinaire",
                  description: "Une fusion exquise entre les cuisines méditerranéennes préparées avec passion",
                },
                {
                  icon: UtensilsCrossed,
                  title: "Bar & Cocktails",
                  description: "Des cocktails originaux et savoureux, préparés avec amour et expertise",
                },
                {
                  icon: MenuIcon,
                  title: "Ambiance Unique",
                  description: "Un cadre moderne et chaleureux parfait pour se détendre entre amis",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group text-center space-y-6 p-10 bg-card border border-border hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="inline-flex p-6 bg-accent/10 group-hover:bg-accent/20 transition-all duration-500">
                    <feature.icon className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-accent/10 border border-accent/30 mb-8">
              <div className="w-2 h-2 bg-accent" />
              <span className="text-sm font-bold text-accent tracking-[0.3em] uppercase">Témoignages</span>
            </div>

            <h2 className="font-serif text-5xl md:text-7xl font-black text-foreground leading-tight mb-6">
              Ce Que Disent <span className="gradient-text">Nos Clients</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez les avis authentiques de nos clients sur Google
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Sarah M.",
                rating: 5,
                text: "Une expérience culinaire exceptionnelle! L'ambiance est chaleureuse et les plats sont délicieux. Je recommande vivement Allo Amigo pour un moment inoubliable.",
                date: "Il y a 2 semaines",
              },
              {
                name: "Mohammed K.",
                rating: 5,
                text: "Le meilleur restaurant de Casablanca! Le service est impeccable, les cocktails sont créatifs et la qualité des ingrédients est remarquable. Un vrai coup de cœur!",
                date: "Il y a 1 mois",
              },
              {
                name: "Leila B.",
                rating: 5,
                text: "Ambiance incroyable et cuisine raffinée. L'équipe est très accueillante et attentive. C'est devenu mon endroit préféré pour les dîners entre amis.",
                date: "Il y a 3 semaines",
              },
              {
                name: "Ahmed R.",
                rating: 5,
                text: "Un cadre élégant avec une cuisine de qualité supérieure. Les desserts sont divins et le rapport qualité-prix est excellent. Je reviendrai sans hésiter!",
                date: "Il y a 1 semaine",
              },
              {
                name: "Nadia F.",
                rating: 5,
                text: "Service impeccable et plats savoureux. L'atmosphère est parfaite pour un dîner romantique. Les cocktails sont particulièrement réussis. Bravo à toute l'équipe!",
                date: "Il y a 2 mois",
              },
              {
                name: "Karim D.",
                rating: 5,
                text: "Une adresse incontournable à Casablanca! La fusion des saveurs est magistrale et l'accueil est toujours chaleureux. Un restaurant qui mérite d'être découvert.",
                date: "Il y a 3 jours",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-card border border-border p-8 space-y-4 hover:border-accent/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{review.text}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-black font-bold px-8 py-6 text-lg hover:scale-105 transition-all duration-300 bg-transparent"
            >
              <a href="https://maps.app.goo.gl/ifge6fyoJephQAfY6" target="_blank" rel="noopener noreferrer">
                <Star className="mr-2 h-5 w-5" />
                Voir tous les avis sur Google
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-border bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-6">
              <p className="font-serif text-3xl font-bold text-accent">Allo Amigo</p>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Plongez dans un paradis de saveurs et d'élégance. Chaque moment passé chez nous est une promesse de
                raffinement.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">Liens Rapides</h4>
              <div className="flex flex-col gap-3">
                {["Menu", "Gallery", "About", "Contact"].map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-lg">Contact</h4>
              <div className="flex flex-col gap-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>20 Bd Slaoui, Casablanca</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span>+212 701-758-511</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span>contact@alloamigo.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pt-10 border-t border-border">
            <p className="text-sm text-muted-foreground">© 2026 Allo Amigo. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

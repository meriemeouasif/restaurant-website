"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Utensils, Coffee, Wine, IceCream } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

type MenuItem = {
  name: string
  description: string
  price: string
  image?: string
}

type MenuCategory = {
  category: string
  icon: React.ReactNode
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    category: "Café & Boissons Chaudes",
    icon: <Coffee className="w-8 h-8" />,
    items: [
      {
        name: "Espresso",
        description: "Un expresso riche et corsé, préparé avec nos grains sélectionnés",
        price: "25 DH",
        image: "/espresso-coffee-cup.png",
      },
      {
        name: "Cappuccino",
        description: "Mousse crémeuse avec une touche de cacao sur un lit d'espresso",
        price: "35 DH",
        image: "/cappuccino-with-foam-art.jpg",
      },
      {
        name: "Café Latte",
        description: "Espresso velouté avec du lait chaud et une touche de douceur",
        price: "38 DH",
        image: "/latte-coffee.png",
      },
      {
        name: "Americano",
        description: "Espresso classique allongé avec de l'eau chaude",
        price: "28 DH",
        image: "/americano-coffee.png",
      },
      {
        name: "Flat White",
        description: "La perfection de la micro-mousse dans un espresso onctueux",
        price: "40 DH",
        image: "/flat-white.png",
      },
      {
        name: "Mocha",
        description: "Harmonie parfaite entre chocolat et espresso",
        price: "42 DH",
        image: "/mocha-coffee-with-chocolate.jpg",
      },
    ],
  },
  {
    category: "Boissons Fraîches",
    icon: <Wine className="w-8 h-8" />,
    items: [
      {
        name: "Thé Glacé",
        description: "Mélange rafraîchissant de thé noir et citron",
        price: "28 DH",
        image: "/iced-tea-with-lemon.png",
      },
      {
        name: "Citronnade Fraîche",
        description: "Agrumes pressés à la main pour une fraîcheur maximale",
        price: "32 DH",
        image: "/fresh-lemonade.png",
      },
      {
        name: "Smoothie Bowl",
        description: "Fruits tropicaux mixés à la perfection",
        price: "55 DH",
        image: "/tropical-smoothie-bowl.jpg",
      },
      {
        name: "Chocolat Chaud",
        description: "Cacao riche avec crème fouettée",
        price: "35 DH",
        image: "/hot-chocolate-with-whipped-cream.jpg",
      },
      {
        name: "Matcha Latte",
        description: "Thé vert japonais premium de qualité cérémoniale",
        price: "45 DH",
        image: "/matcha-latte-green-tea.jpg",
      },
      {
        name: "Jus Frais",
        description: "Sélection de fruits de saison pressés à froid",
        price: "38 DH",
        image: "/fresh-fruit-juice.png",
      },
    ],
  },
  {
    category: "Plats Délicieux",
    icon: <Utensils className="w-8 h-8" />,
    items: [
      {
        name: "Toast à l'Avocat",
        description: "Avocat écrasé sur pain au levain, œuf poché parfait",
        price: "65 DH",
        image: "/avocado-toast-poached-egg.png",
      },
      {
        name: "Burrito Petit-Déjeuner",
        description: "Œufs brouillés, fromage, salsa et haricots enroulés",
        price: "60 DH",
        image: "/breakfast-burrito.jpg",
      },
      {
        name: "Club Sandwich",
        description: "Triple étage avec dinde et bacon croustillant",
        price: "75 DH",
        image: "/club-sandwich-triple-decker.jpg",
      },
      {
        name: "Salade César",
        description: "Romaine croquante, parmesan, croûtons à l'ail",
        price: "58 DH",
        image: "/caesar-salad.png",
      },
      {
        name: "Pâtes Carbonara",
        description: "Sauce crémeuse avec pancetta et parmesan",
        price: "85 DH",
        image: "/pasta-carbonara.png",
      },
      {
        name: "Saumon Grillé",
        description: "Saumon atlantique frais avec légumes de saison",
        price: "120 DH",
        image: "/grilled-salmon-with-vegetables.jpg",
      },
    ],
  },
  {
    category: "Desserts Gourmands",
    icon: <IceCream className="w-8 h-8" />,
    items: [
      {
        name: "Tiramisu",
        description: "Délice italien classique imbibé de café",
        price: "48 DH",
        image: "/classic-tiramisu.png",
      },
      {
        name: "Brownie au Chocolat",
        description: "Fondant et moelleux, servi avec glace vanille",
        price: "42 DH",
        image: "/chocolate-brownie-ice-cream.png",
      },
      {
        name: "Cheesecake",
        description: "Style New York avec compote de fruits rouges",
        price: "45 DH",
        image: "/new-york-cheesecake.png",
      },
      {
        name: "Crème Brûlée",
        description: "Crème onctueuse avec sucre caramélisé craquant",
        price: "50 DH",
        image: "/classic-creme-brulee.png",
      },
      {
        name: "Tarte aux Pommes",
        description: "Faite maison avec cannelle et amour",
        price: "42 DH",
        image: "/apple-pie-homemade.jpg",
      },
      {
        name: "Macarons",
        description: "Assortiment de biscuits français aux amandes",
        price: "38 DH",
        image: "/french-macarons-assorted.jpg",
      },
    ],
  },
]

export function PremiumMenuBook() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const totalPages = menuData.length

  const handleNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
      }, 800)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
      }, 800)
    }
  }

  const currentCategory = menuData[currentPage]

  return (
    <div className="max-w-7xl mx-auto">
      {/* Menu Book Container with 3D effect */}
      <div className="relative" style={{ perspective: "2500px" }}>
        {/* Glow effect */}
        <div className="absolute -inset-8 bg-gradient-to-r from-[#d4af37]/20 via-[#d4af37]/10 to-[#d4af37]/20 rounded-3xl blur-3xl animate-pulse" />

        {/* Book Pages */}
        <div
          className={cn(
            "relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl shadow-2xl overflow-hidden",
            "border border-[#d4af37]/30",
            "transition-all duration-800 ease-in-out transform-gpu",
            isFlipping && "scale-[0.98] rotate-y-3",
          )}
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#d4af37]/40 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-[#d4af37]/40 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-[#d4af37]/40 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#d4af37]/40 rounded-br-2xl" />

          {/* Page Content */}
          <div className="relative z-10 p-8 md:p-16 min-h-[800px]">
            {/* Category Header with icon */}
            <div className="text-center mb-12 space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div className="text-[#d4af37]">{currentCategory.icon}</div>
                <h2 className="font-serif text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f4e5c3] to-[#d4af37] bg-clip-text text-transparent">
                  {currentCategory.category}
                </h2>
                <div className="text-[#d4af37]">{currentCategory.icon}</div>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
                <div className="w-3 h-3 rounded-full bg-[#d4af37] animate-pulse" />
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              </div>
            </div>

            {/* Menu Items Grid with images */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {currentCategory.items.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "group relative bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50",
                    "hover:border-[#d4af37]/50 hover:shadow-xl hover:shadow-[#d4af37]/10",
                    "transition-all duration-500 hover:-translate-y-1",
                    "animate-fade-in-up",
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Item image */}
                  {item.image && (
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent" />
                    </div>
                  )}

                  {/* Item details */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-2xl font-semibold text-[#f4e5c3] group-hover:text-[#d4af37] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-[#d4af37] whitespace-nowrap">{item.price}</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/5 to-[#d4af37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Page Number with decorative style */}
            <div className="text-center pt-8 border-t border-zinc-700/50">
              <span className="text-sm text-zinc-500 font-serif tracking-widest">
                ~ Page {currentPage + 1} sur {totalPages} ~
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls with premium styling */}
      <div className="flex items-center justify-center gap-6 mt-12">
        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 0 || isFlipping}
          variant="outline"
          size="lg"
          className={cn(
            "gap-2 bg-zinc-900 border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10",
            "hover:border-[#d4af37] transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20",
            "disabled:opacity-30 disabled:cursor-not-allowed",
          )}
        >
          <ChevronLeft className="h-5 w-5" />
          Précédent
        </Button>

        {/* Page Indicators with elegant dots */}
        <div className="flex items-center gap-3 px-6 py-3 bg-zinc-900/50 rounded-full border border-zinc-700/50">
          {menuData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isFlipping && index !== currentPage) {
                  setIsFlipping(true)
                  setTimeout(() => {
                    setCurrentPage(index)
                    setIsFlipping(false)
                  }, 800)
                }
              }}
              className={cn(
                "rounded-full transition-all duration-500",
                index === currentPage
                  ? "w-12 h-3 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3]"
                  : "w-3 h-3 bg-zinc-600 hover:bg-zinc-500",
              )}
              aria-label={`Aller à ${menuData[index].category}`}
            />
          ))}
        </div>

        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1 || isFlipping}
          variant="outline"
          size="lg"
          className={cn(
            "gap-2 bg-zinc-900 border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10",
            "hover:border-[#d4af37] transition-all duration-300 hover:shadow-lg hover:shadow-[#d4af37]/20",
            "disabled:opacity-30 disabled:cursor-not-allowed",
          )}
        >
          Suivant
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

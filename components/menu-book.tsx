"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type MenuItem = {
  name: string
  description: string
  price: string
}

type MenuCategory = {
  category: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", description: "Rich and bold, the perfect shot", price: "$3.50" },
      { name: "Cappuccino", description: "Creamy foam with a touch of cocoa", price: "$4.50" },
      { name: "Latte", description: "Smooth and velvety espresso with milk", price: "$4.75" },
      { name: "Americano", description: "Classic espresso with hot water", price: "$3.75" },
      { name: "Flat White", description: "Microfoam perfection from down under", price: "$4.50" },
      { name: "Mocha", description: "Chocolate and espresso harmony", price: "$5.25" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Iced Tea", description: "Refreshing blend of black tea and lemon", price: "$3.50" },
      { name: "Fresh Lemonade", description: "Hand-squeezed citrus goodness", price: "$4.00" },
      { name: "Smoothie Bowl", description: "Tropical fruits blended to perfection", price: "$7.50" },
      { name: "Hot Chocolate", description: "Rich cocoa with whipped cream", price: "$4.50" },
      { name: "Matcha Latte", description: "Premium Japanese green tea", price: "$5.50" },
      { name: "Fresh Juice", description: "Seasonal fruit selection", price: "$5.00" },
    ],
  },
  {
    category: "Food",
    items: [
      { name: "Avocado Toast", description: "Smashed avocado on sourdough, poached egg", price: "$12.00" },
      { name: "Breakfast Burrito", description: "Scrambled eggs, cheese, salsa, and beans", price: "$11.50" },
      { name: "Club Sandwich", description: "Triple-decker with turkey and bacon", price: "$13.50" },
      { name: "Caesar Salad", description: "Crisp romaine, parmesan, garlic croutons", price: "$10.50" },
      { name: "Pasta Carbonara", description: "Creamy sauce with pancetta", price: "$15.00" },
      { name: "Grilled Salmon", description: "Fresh Atlantic salmon with vegetables", price: "$18.00" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Tiramisu", description: "Classic Italian coffee-soaked delight", price: "$7.50" },
      { name: "Chocolate Brownie", description: "Warm, fudgy, with vanilla ice cream", price: "$6.50" },
      { name: "Cheesecake", description: "New York style with berry compote", price: "$7.00" },
      { name: "Crème Brûlée", description: "Silky custard with caramelized sugar", price: "$8.00" },
      { name: "Apple Pie", description: "Homemade with cinnamon and love", price: "$6.50" },
      { name: "Macarons", description: "Assorted French almond cookies", price: "$5.50" },
    ],
  },
]

export function MenuBook() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const totalPages = menuData.length

  const handleNextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
      }, 600)
    }
  }

  const currentCategory = menuData[currentPage]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Menu Book Container */}
      <div className="relative perspective-[2000px]">
        {/* Book Shadow */}
        <div className="absolute -inset-4 bg-primary/5 rounded-lg blur-xl" />

        {/* Menu Page */}
        <div
          className={cn(
            "relative bg-gradient-to-br from-secondary via-card to-secondary border-2 border-primary/20 rounded-lg shadow-2xl p-8 md:p-12",
            "transition-all duration-600 ease-in-out",
            isFlipping && "animate-flip-page",
          )}
        >
          {/* Page Texture Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50 rounded-lg pointer-events-none" />

          {/* Page Content */}
          <div className="relative z-10 min-h-[500px] flex flex-col">
            {/* Category Header */}
            <div className="text-center mb-8 pb-6 border-b-2 border-primary/30">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
                {currentCategory.category}
              </h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="h-px w-12 bg-accent" />
                <div className="w-2 h-2 rounded-full bg-accent" />
                <div className="h-px w-12 bg-accent" />
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 grid md:grid-cols-2 gap-6">
              {currentCategory.items.map((item, index) => (
                <div key={index} className="space-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl font-semibold text-card-foreground">{item.name}</h3>
                    <div className="flex-1 border-b border-dotted border-muted-foreground/30 mb-1" />
                    <span className="font-semibold text-accent text-lg">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Page Number */}
            <div className="text-center mt-8 pt-6 border-t border-primary/20">
              <span className="text-sm text-muted-foreground font-mono">
                Page {currentPage + 1} of {totalPages}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 0 || isFlipping}
          variant="outline"
          size="lg"
          className="gap-2 bg-transparent"
        >
          <ChevronLeft className="h-5 w-5" />
          Previous
        </Button>

        {/* Page Indicators */}
        <div className="flex items-center gap-2">
          {menuData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isFlipping && index !== currentPage) {
                  setIsFlipping(true)
                  setTimeout(() => {
                    setCurrentPage(index)
                    setIsFlipping(false)
                  }, 600)
                }
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentPage ? "bg-accent w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              aria-label={`Go to ${menuData[index].category}`}
            />
          ))}
        </div>

        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1 || isFlipping}
          variant="outline"
          size="lg"
          className="gap-2 bg-transparent"
        >
          Next
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

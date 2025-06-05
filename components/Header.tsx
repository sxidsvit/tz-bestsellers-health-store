import React from 'react'
import { ShoppingCart, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CartProps {
  cart: number[];
}

const Header = ({cart}: CartProps) => {
  return (
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
                VitaLife
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-green-600" />
                {cart && cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                    {cart.length}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header
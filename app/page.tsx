"use client"

import { useState, useEffect } from "react"
import { products } from "@/data";
import {addToCart, removeFromCart, isInCart} from "@/lib/cartUtils"
import ShowReferralMessage from "@/components/ShowReferralMessage"
import ProductCard from "@/components/ProductCard"
import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [cart, setCart] = useState<number[]>([])
  const [referrer, setReferrer] = useState<string | null>(null)
  const [showReferralMessage, setShowReferralMessage] = useState(false)

  useEffect(() => {
    // Перевіряємо реферальний параметр
    const urlParams = new URLSearchParams(window.location.search)
    const refParam = urlParams.get("ref")

    if (refParam) {
      localStorage.setItem("referrer", refParam)
      setReferrer(refParam)
      setShowReferralMessage(true)

      // Приховуємо повідомлення через 10 секунд
      setTimeout(() => {
        setShowReferralMessage(false)
      }, 10000)
    } else {
      // Перевіряємо чи є збережений реферер
      const savedReferrer = localStorage.getItem("referrer")
      if (savedReferrer) {
        setReferrer(savedReferrer)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
      {/* Header */}
      <Header cart={cart} />

      {/* Referral Message */}
      {showReferralMessage && referrer &&  <ShowReferralMessage referrer={referrer}/>}

      {/* Hero Section */}
      <HeroSection />

      {/* Bestsellers Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Бестселери місяця</h3>
            <p className="text-lg text-gray-600">Найпопулярніші продукти, які обирають наші клієнти</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            { products.map((product) => 
                <ProductCard 
                   key={product.id}
                   product = {product}
                   addToCart ={addToCart} 
                   removeFromCart = {removeFromCart}
                   isInCart = {isInCart} 
                   cart={cart}
                   setCart={setCart}
                /> ) }
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer referrer={referrer} />
    </div>
  )
}

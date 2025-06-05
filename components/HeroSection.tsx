import React from 'react'
import { Check } from "lucide-react"

export const HeroSection = () => {
  return (
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Твоє здоров'я - наш пріоритет</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Преміальні вітаміни та добавки для активного життя. Підтримай свій організм найкращими натуральними
            компонентами.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Сертифіковано</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Натуральні інгредієнти</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-500" />
              <span>Швидка доставка</span>
            </div>
          </div>
        </div>
      </section>

    
  )
}

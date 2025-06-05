import React from 'react'
import { Referrer} from "@/types/index"
import { Zap } from "lucide-react"

interface FooterProps {
  referrer: Referrer;
}

const Footer = ({referrer}: FooterProps) => {
  return (
          <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold">VitaLife</h3>
          </div>
          <p className="text-gray-400 mb-4">Твій надійний партнер у світі здоров'я та краси</p>
          {referrer && <p className="text-sm text-green-400">Запрошений користувачем: {referrer}</p>}
        </div>
      </footer>
  )
}

export default Footer
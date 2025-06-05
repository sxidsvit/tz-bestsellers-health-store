'use client'

import React from 'react'
import { Referrer } from "@/types/index"

interface ShowReferralMessageProps {
  referrer: Referrer;
}

const ShowReferralMessage = ({referrer}: ShowReferralMessageProps) => {
  return (
       <div className="bg-gradient-to-r from-green-500 to-orange-500 text-white py-3 px-4 text-center">
          <p className="font-medium">
            🎉 Вас запросив <span className="font-bold">{referrer}</span>. Після реєстрації ви отримаєте бонус!
          </p>
        </div>
  )
}

export default ShowReferralMessage
"use client"

import { useState } from "react"

interface ImpactData {
  wasteKg: number
  co2Kg: number
  tokensIssued: number
  members: number
}

export function useImpact() {
  const [data, setData] = useState<ImpactData>({
    wasteKg: 15420,
    co2Kg: 13878,
    tokensIssued: 77100,
    members: 2340,
  })

  const refresh = () => {
    // Simulate data refresh with slight variations
    setData({
      wasteKg: Math.floor(15420 + Math.random() * 1000),
      co2Kg: Math.floor(13878 + Math.random() * 800),
      tokensIssued: Math.floor(77100 + Math.random() * 5000),
      members: Math.floor(2340 + Math.random() * 200),
    })
  }

  return {
    ...data,
    refresh,
  }
}

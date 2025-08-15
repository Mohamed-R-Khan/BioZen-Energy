"use client"

import { useState, useCallback } from "react"

interface ImpactData {
  wasteKg: number
  co2Kg: number
  tokensIssued: number
  members: number
}

export function useImpact() {
  const [data, setData] = useState<ImpactData>({
    wasteKg: 125000,
    co2Kg: 45000,
    tokensIssued: 89000,
    members: 12500,
  })

  const refresh = useCallback(() => {
    // Simulate data refresh with slight variations
    setData({
      wasteKg: Math.floor(125000 + Math.random() * 5000),
      co2Kg: Math.floor(45000 + Math.random() * 2000),
      tokensIssued: Math.floor(89000 + Math.random() * 3000),
      members: Math.floor(12500 + Math.random() * 500),
    })
  }, [])

  return {
    ...data,
    refresh,
  }
}

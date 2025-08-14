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
      wasteKg: 125000 + Math.floor(Math.random() * 5000),
      co2Kg: 45000 + Math.floor(Math.random() * 2000),
      tokensIssued: 89000 + Math.floor(Math.random() * 3000),
      members: 12500 + Math.floor(Math.random() * 500),
    })
  }, [])

  return {
    ...data,
    refresh,
  }
}

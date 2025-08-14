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
    wasteKg: 125420,
    co2Kg: 43890,
    tokensIssued: 892340,
    members: 15670,
  })

  const refresh = useCallback(() => {
    // Simulate data refresh with slight variations
    setData({
      wasteKg: Math.floor(125420 + Math.random() * 5000),
      co2Kg: Math.floor(43890 + Math.random() * 2000),
      tokensIssued: Math.floor(892340 + Math.random() * 10000),
      members: Math.floor(15670 + Math.random() * 500),
    })
  }, [])

  return {
    ...data,
    refresh,
  }
}

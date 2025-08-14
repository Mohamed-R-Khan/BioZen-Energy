"use client"

import { useState, useCallback } from "react"

interface ImpactData {
  wasteKg: number
  co2Kg: number
  tokensIssued: number
  members: number
}

const mockMetrics: ImpactData = {
  wasteKg: 125000,
  co2Kg: 45000,
  tokensIssued: 89000,
  members: 15000,
}

export function useImpact() {
  const [data, setData] = useState<ImpactData>(mockMetrics)

  const refresh = useCallback(() => {
    // Simulate data refresh with slight variations
    const variation = () => Math.floor(Math.random() * 1000) + 500

    setData({
      wasteKg: mockMetrics.wasteKg + variation(),
      co2Kg: mockMetrics.co2Kg + Math.floor(variation() * 0.3),
      tokensIssued: mockMetrics.tokensIssued + variation(),
      members: mockMetrics.members + Math.floor(variation() * 0.1),
    })
  }, [])

  return {
    ...data,
    refresh,
  }
}

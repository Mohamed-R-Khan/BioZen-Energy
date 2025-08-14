"use client"

import { useState, useEffect } from "react"
import { siteConfig } from "@/lib/site-config"

interface ImpactData {
  wasteKg: number
  co2Kg: number
  tokensIssued: number
  members: number
  refresh: () => void
}

export function useImpact(): ImpactData {
  const [data, setData] = useState({
    wasteKg: 0,
    co2Kg: 0,
    tokensIssued: 0,
    members: 0,
  })

  const refresh = () => {
    // Simulate slight variations in real-world data
    const variance = (base: number, factor = 0.1) => Math.floor(base + (Math.random() - 0.5) * base * factor)

    setData({
      wasteKg: variance(siteConfig.mockMetrics.wasteKg),
      co2Kg: variance(siteConfig.mockMetrics.co2Kg),
      tokensIssued: variance(siteConfig.mockMetrics.tokensIssued),
      members: variance(siteConfig.mockMetrics.members, 0.05),
    })
  }

  useEffect(() => {
    refresh()
    // Auto-refresh every 30 seconds
    const interval = setInterval(refresh, 30000)
    return () => clearInterval(interval)
  }, [])

  return { ...data, refresh }
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle, Loader2 } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Basic email validation
      if (!email.includes("@")) {
        throw new Error("Please enter a valid email address")
      }

      setIsSuccess(true)
      setEmail("")

      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Stay Updated
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Join Our Green Revolution</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
            Get the latest updates on new collection points, rewards, and sustainability impact
          </p>
          <div className="w-full max-w-sm space-y-2">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-lg flex-1 border-green-200 focus:border-green-400"
                disabled={isLoading}
              />
              <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Subscribe"}
              </Button>
            </form>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 text-green-600 text-sm"
              >
                <CheckCircle className="w-4 h-4" />
                Successfully subscribed! Welcome to the green revolution.
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-red-600 text-sm"
              >
                {error}
              </motion.div>
            )}
            <p className="text-xs text-gray-500">Join 10,000+ eco-warriors. Unsubscribe anytime.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

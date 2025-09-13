"use client"

import { Layout } from "../../components/layout"
import { PageTransition } from "../../components/page-transition"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Apple, Play, CheckCircle, Smartphone, Shield, Zap } from "lucide-react"

export default function DownloadPage() {
  return (
    <Layout>
      <PageTransition>
        <div className="w-full">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
            <div className="container px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-8 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                  📱 Mobile App
                </Badge>

                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-mono text-gray-900">
                  Download the BioZen App
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
                  Turn your smartphone into a powerful tool for environmental change. Track waste deposits, earn
                  ZenDollar rewards, monitor your carbon impact, and connect with a community of eco-warriors making a
                  real difference.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 pt-6">
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                    <Apple className="w-6 h-6 mr-3" />
                    Download on App Store
                  </Button>
                  <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 px-8 py-6 text-lg">
                    <Play className="w-6 h-6 mr-3" />
                    Get it on Google Play
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Free download
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    No ads
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Secure & private
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Blockchain verified
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* App Features */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono text-gray-900 mb-4">
                  App Features
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Everything you need to participate in India's circular economy
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                <motion.div
                  className="text-center p-8 bg-green-50 rounded-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Smartphone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Booth Finder</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Locate the nearest smart collection booth, check capacity, and get real-time directions
                  </p>
                </motion.div>

                <motion.div
                  className="text-center p-8 bg-blue-50 rounded-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Blockchain Wallet</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Secure ZenDollar wallet with transaction history and reward redemption options
                  </p>
                </motion.div>

                <motion.div
                  className="text-center p-8 bg-purple-50 rounded-2xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Impact Tracking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Monitor your environmental impact with detailed analytics and carbon credit tracking
                  </p>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  )
}

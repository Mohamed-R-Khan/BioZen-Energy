"use client"

import { Layout } from "../../components/layout"
import { PageTransition } from "../../components/page-transition"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Apple, Play, CheckCircle, Star, Smartphone, Shield, Zap } from "lucide-react"

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

                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                  Turn your smartphone into a powerful tool for environmental change. Track waste, earn rewards, and
                  make a real impact with every deposit.
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
                </div>
              </motion.div>
            </div>
          </section>

          {/* App Features */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  App Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Everything You Need</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Discover all the powerful features that make waste management rewarding and fun
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                {[
                  {
                    title: "Smart Booth Locator",
                    description: "Find the nearest collection booth with GPS navigation and real-time availability",
                    features: ["GPS navigation", "Real-time status", "Booth ratings"],
                    icon: Smartphone,
                  },
                  {
                    title: "Reward Tracking",
                    description: "Monitor your ZenDollar earnings and track your environmental impact in real-time",
                    features: ["Live balance", "Transaction history", "Impact metrics"],
                    icon: Zap,
                  },
                  {
                    title: "Green Marketplace",
                    description: "Browse and redeem eco-friendly products using your earned ZenDollar tokens",
                    features: ["Product catalog", "Instant redemption", "Delivery tracking"],
                    icon: Shield,
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 p-6">
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                          <feature.icon className="w-8 h-8 text-green-600" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {feature.features.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* App Stats */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <motion.div
                className="grid gap-8 md:grid-cols-4 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-green-600 font-mono">50K+</div>
                  <div className="text-gray-600">App Downloads</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-600 font-mono">4.8</div>
                  <div className="text-gray-600 flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    App Store Rating
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-purple-600 font-mono">25K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-orange-600 font-mono">99%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  FAQ
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  Frequently Asked Questions
                </h2>
              </motion.div>

              <div className="max-w-3xl mx-auto space-y-6">
                {[
                  {
                    question: "Is the BioZen app free to download and use?",
                    answer:
                      "Yes, the BioZen app is completely free to download and use. There are no hidden fees or subscription charges.",
                  },
                  {
                    question: "How do I earn ZenDollar tokens?",
                    answer:
                      "Simply deposit your segregated waste at any BioZen collection booth. You'll receive ZenDollar tokens based on the weight and type of waste deposited.",
                  },
                  {
                    question: "What can I redeem with my ZenDollars?",
                    answer:
                      "You can redeem ZenDollars for eco-friendly products, sustainable lifestyle items, and exclusive green rewards in our marketplace.",
                  },
                  {
                    question: "Is my personal data secure?",
                    answer:
                      "Absolutely. We use enterprise-grade security measures and blockchain technology to protect your data and transactions.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
                        <CardDescription className="text-left text-base leading-relaxed">{faq.answer}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  )
}

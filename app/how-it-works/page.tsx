"use client"

import { Layout } from "../../components/layout"
import { PageTransition } from "../../components/page-transition"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Recycle, Coins, Smartphone, Zap, Shield, Users } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <Layout>
      <PageTransition>
        <div className="w-full">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-600 to-blue-600">
            <div className="container px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-6 text-center text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  How It Works
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-mono">How BioZen Works</h1>
                <p className="max-w-[800px] text-green-100 md:text-xl/relaxed">
                  Discover the simple yet powerful process that transforms your daily waste into valuable rewards while
                  contributing to a sustainable future.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Detailed Steps */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="space-y-16">
                {[
                  {
                    step: "01",
                    title: "Drop Segregated Waste",
                    description: "Visit our smart collection booths located throughout your city",
                    details:
                      "Our AI-powered collection booths are strategically placed in residential areas, commercial complexes, and public spaces. Simply bring your properly segregated organic and recyclable waste to any booth.",
                    icon: Recycle,
                    color: "green",
                    features: [
                      "24/7 accessible smart booths",
                      "Automatic waste weighing",
                      "Quality verification system",
                      "Real-time booth availability",
                    ],
                  },
                  {
                    step: "02",
                    title: "Earn ZenDollar Tokens",
                    description: "Receive blockchain-verified tokens instantly based on waste type and weight",
                    details:
                      "Our blockchain system automatically calculates your reward based on the environmental impact of your waste deposit. Different waste types have different token values based on their recycling potential and energy conversion efficiency.",
                    icon: Coins,
                    color: "yellow",
                    features: [
                      "Instant token generation",
                      "Blockchain verification",
                      "Transparent pricing",
                      "Bonus multipliers available",
                    ],
                  },
                  {
                    step: "03",
                    title: "Redeem for Green Gifts",
                    description: "Use your ZenDollars in our mobile app marketplace for eco-friendly rewards",
                    details:
                      "Browse our curated marketplace of sustainable products, from organic foods to eco-friendly household items. Your tokens can also be used for discounts at partner stores or donated to environmental causes.",
                    icon: Smartphone,
                    color: "blue",
                    features: [
                      "Curated green products",
                      "Partner store discounts",
                      "Charity donation options",
                      "Exclusive member rewards",
                    ],
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className={`grid gap-8 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-full bg-${step.color}-100 flex items-center justify-center`}>
                          <step.icon className={`h-8 w-8 text-${step.color}-600`} />
                        </div>
                        <div className={`text-6xl font-bold text-${step.color}-600 font-mono opacity-20`}>
                          {step.step}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-bold tracking-tighter">{step.title}</h3>
                        <p className="text-xl text-gray-600 leading-relaxed">{step.description}</p>
                        <p className="text-gray-500 leading-relaxed">{step.details}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {step.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className={`w-2 h-2 rounded-full bg-${step.color}-400`}></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                      <Card className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                        <CardContent className="text-center space-y-4">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className={`w-24 h-24 mx-auto bg-${step.color}-100 rounded-full flex items-center justify-center`}
                          >
                            <step.icon className={`w-12 h-12 text-${step.color}-600`} />
                          </motion.div>
                          <h4 className="text-xl font-semibold">Step {step.step}</h4>
                          <p className="text-gray-600">{step.title}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Technology Behind */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Technology
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  The Technology Behind BioZen
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Advanced technology stack powering India's first waste-to-wealth ecosystem
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                {[
                  {
                    icon: Zap,
                    title: "Anaerobic Digestion",
                    description:
                      "Convert organic waste into clean Bio-CNG energy through advanced biological processes",
                    color: "green",
                  },
                  {
                    icon: Shield,
                    title: "Blockchain Security",
                    description:
                      "Immutable transaction records and transparent reward distribution using blockchain technology",
                    color: "blue",
                  },
                  {
                    icon: Users,
                    title: "AI-Powered Sorting",
                    description:
                      "Smart waste classification and quality verification using computer vision and machine learning",
                    color: "purple",
                  },
                ].map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 rounded-full bg-${tech.color}-100 flex items-center justify-center mx-auto mb-4`}
                        >
                          <tech.icon className={`h-8 w-8 text-${tech.color}-600`} />
                        </motion.div>
                        <CardTitle className="text-xl">{tech.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{tech.description}</CardDescription>
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

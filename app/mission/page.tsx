"use client"

import { Layout } from "../../components/layout"
import { PageTransition } from "../../components/page-transition"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Target, Globe, Zap, Users, Leaf, TrendingUp } from "lucide-react"

export default function MissionPage() {
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
                  Our Mission
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-mono">
                  Building India's Circular Economy
                </h1>
                <p className="max-w-[800px] text-green-100 md:text-xl/relaxed">
                  To create a sustainable circular economy where waste becomes wealth, citizens are empowered, and
                  environmental impact is measurably positive.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <motion.div
                className="max-w-4xl mx-auto text-center space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Mission Statement
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  Transforming Waste into Opportunity
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  BioZen Energy exists to revolutionize India's approach to waste management by creating the first
                  comprehensive waste-to-wealth ecosystem. We empower citizens to become active participants in
                  environmental conservation while generating clean energy and economic value from waste.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8">
                  <blockquote className="text-2xl font-semibold text-gray-800 italic">
                    "Every piece of waste is an opportunity. Every citizen is a changemaker. Every action creates
                    impact."
                  </blockquote>
                  <p className="text-gray-600 mt-4">— BioZen Energy Mission</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Goals & Objectives */}
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
                  Our Goals
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">2030 Vision & Objectives</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Ambitious yet achievable goals that will transform India's waste management landscape
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {[
                  {
                    icon: Users,
                    title: "10 Million Citizens",
                    description: "Engage 10 million citizens across India in our waste-to-wealth ecosystem",
                    target: "10M",
                    current: "50K",
                    color: "blue",
                  },
                  {
                    icon: Globe,
                    title: "100 Cities",
                    description: "Deploy smart collection infrastructure in 100 Indian cities",
                    target: "100",
                    current: "1",
                    color: "green",
                  },
                  {
                    icon: Zap,
                    title: "1 Million Tonnes",
                    description: "Process 1 million tonnes of waste annually into clean Bio-CNG",
                    target: "1M",
                    current: "15K",
                    color: "yellow",
                  },
                  {
                    icon: Leaf,
                    title: "Carbon Neutral",
                    description: "Achieve carbon neutrality and help India meet its climate goals",
                    target: "Net Zero",
                    current: "23.7T",
                    color: "emerald",
                  },
                  {
                    icon: TrendingUp,
                    title: "₹1000 Crore Revenue",
                    description: "Build a sustainable business model generating ₹1000 crore annually",
                    target: "₹1000Cr",
                    current: "₹5Cr",
                    color: "purple",
                  },
                  {
                    icon: Target,
                    title: "50,000 Jobs",
                    description: "Create 50,000 direct and indirect jobs in the green economy",
                    target: "50K",
                    current: "500",
                    color: "orange",
                  },
                ].map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 rounded-full bg-${goal.color}-100 flex items-center justify-center mx-auto mb-4`}
                        >
                          <goal.icon className={`h-8 w-8 text-${goal.color}-600`} />
                        </motion.div>
                        <CardTitle className="text-xl">{goal.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{goal.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Current:</span>
                            <span className={`font-semibold text-${goal.color}-600`}>{goal.current}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Target 2030:</span>
                            <span className={`font-bold text-${goal.color}-700`}>{goal.target}</span>
                          </div>
                          <div className={`w-full bg-gray-200 rounded-full h-2 mt-3`}>
                            <div className={`bg-${goal.color}-500 h-2 rounded-full`} style={{ width: "5%" }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Impact Areas */}
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
                  Impact Areas
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  Creating Multi-Dimensional Impact
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Our mission extends beyond waste management to create positive impact across multiple dimensions
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {[
                  {
                    title: "Environmental Impact",
                    description:
                      "Reducing landfill burden, cutting greenhouse gas emissions, and generating clean energy",
                    metrics: [
                      "Reduce landfill waste by 80%",
                      "Cut methane emissions by 60%",
                      "Generate 100MW clean energy",
                    ],
                  },
                  {
                    title: "Social Impact",
                    description: "Creating jobs, improving public health, and building stronger communities",
                    metrics: ["Create 50,000 green jobs", "Improve air quality in cities", "Engage 10M citizens"],
                  },
                  {
                    title: "Economic Impact",
                    description: "Building a sustainable circular economy and creating new revenue streams",
                    metrics: ["₹1000Cr annual revenue", "₹500Cr citizen rewards", "₹200Cr cost savings"],
                  },
                  {
                    title: "Technological Impact",
                    description: "Advancing blockchain, IoT, and clean energy technologies in India",
                    metrics: ["100+ patents filed", "50+ tech partnerships", "10+ research papers"],
                  },
                ].map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardTitle className="text-xl">{impact.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{impact.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {impact.metrics.map((metric, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                              {metric}
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
        </div>
      </PageTransition>
    </Layout>
  )
}

"use client"

import { Layout } from "../../components/layout"
import { PageTransition } from "../../components/page-transition"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Leaf, Users, Globe, Target, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
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
                  About BioZen Energy
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-mono">
                  Pioneering India's Circular Economy
                </h1>
                <p className="max-w-[800px] text-green-100 md:text-xl/relaxed">
                  We're on a mission to transform India's waste management landscape through innovative technology,
                  blockchain rewards, and community empowerment.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Our Story */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit">
                    Our Story
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-mono">From Vision to Reality</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Founded in 2025 in Bangalore, BioZen Energy emerged from a simple yet powerful idea: what if we
                      could make waste management rewarding for citizens while creating clean energy?
                    </p>
                    <p>
                      Our founder, Raafe Khan, passionate about environmental sustainability and blockchain technology,
                      recognized the massive opportunity in India's waste management sector. With over 62 million tonnes
                      of waste generated annually, India needed an innovative solution that could engage citizens,
                      reduce landfill burden, and create economic value.
                    </p>
                    <p>
                      Today, we're proud to be India's first waste-to-wealth platform, combining smart collection
                      infrastructure, blockchain rewards, and anaerobic digestion technology to create a truly circular
                      economy.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 font-mono">2025</div>
                        <p className="text-sm text-gray-600">Founded</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 font-mono">50K+</div>
                        <p className="text-sm text-gray-600">Users</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 font-mono">100+</div>
                        <p className="text-sm text-gray-600">Collection Booths</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-orange-600 font-mono">15K</div>
                        <p className="text-sm text-gray-600">kg Waste Processed</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Our Values */}
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
                  Our Values
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">What Drives Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Our core values guide every decision we make and every solution we build
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                {[
                  {
                    icon: Leaf,
                    title: "Environmental Stewardship",
                    description:
                      "We believe in protecting our planet for future generations through innovative waste management and clean energy solutions.",
                    color: "green",
                  },
                  {
                    icon: Users,
                    title: "Community Empowerment",
                    description:
                      "Every citizen has the power to make a difference. We provide the tools and incentives to turn individual actions into collective impact.",
                    color: "blue",
                  },
                  {
                    icon: Lightbulb,
                    title: "Innovation & Transparency",
                    description:
                      "We leverage cutting-edge technology and maintain complete transparency through blockchain to build trust and drive progress.",
                    color: "purple",
                  },
                  {
                    icon: Heart,
                    title: "Social Impact",
                    description:
                      "Our work creates jobs, improves public health, and builds stronger communities while addressing environmental challenges.",
                    color: "red",
                  },
                  {
                    icon: Target,
                    title: "Measurable Results",
                    description:
                      "We track and report our environmental impact, ensuring every kilogram of waste processed contributes to measurable change.",
                    color: "orange",
                  },
                  {
                    icon: Globe,
                    title: "Scalable Solutions",
                    description:
                      "Our technology and business model are designed to scale across India and eventually to other developing nations.",
                    color: "teal",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-16 h-16 rounded-full bg-${value.color}-100 flex items-center justify-center mx-auto mb-4`}
                        >
                          <value.icon className={`h-8 w-8 text-${value.color}-600`} />
                        </motion.div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
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

"use client"

import { Layout } from "../../components/layout"
import { PageTransition } from "../../components/page-transition"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Smartphone, Coins, Leaf, Users, Star, Download, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function JoinPage() {
  return (
    <Layout>
      <PageTransition>
        <div className="w-full">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-600 to-emerald-600">
            <div className="container px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-6 text-center text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Join the Movement
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-mono">
                  Become a BioZen Eco-Warrior
                </h1>
                <p className="max-w-[800px] text-green-100 md:text-xl/relaxed">
                  Join thousands of citizens across India who are turning their daily waste into valuable rewards while
                  contributing to a cleaner, greener future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/download">
                    <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                      <Download className="w-4 h-4 mr-2" />
                      Download App Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    Watch Demo Video
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
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
                  Member Benefits
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Why Join BioZen?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Discover the exclusive benefits and rewards waiting for you as a BioZen community member
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                {[
                  {
                    icon: Coins,
                    title: "Earn ZenDollars",
                    description: "Get rewarded with blockchain-verified tokens for every kilogram of waste you deposit",
                    benefits: ["Instant rewards", "Transparent tracking", "Secure blockchain"],
                    color: "yellow",
                  },
                  {
                    icon: Leaf,
                    title: "Environmental Impact",
                    description: "Track your personal contribution to reducing carbon emissions and waste",
                    benefits: ["Carbon footprint tracking", "Impact visualization", "Achievement badges"],
                    color: "green",
                  },
                  {
                    icon: Smartphone,
                    title: "Exclusive Rewards",
                    description: "Redeem your tokens for eco-friendly products and sustainable lifestyle items",
                    benefits: ["Green product catalog", "Partner discounts", "Premium rewards"],
                    color: "blue",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center">
                        <div
                          className={`w-16 h-16 rounded-full bg-${benefit.color}-100 flex items-center justify-center mx-auto mb-4`}
                        >
                          <benefit.icon className={`h-8 w-8 text-${benefit.color}-600`} />
                        </div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {benefit.benefits.map((item, i) => (
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

          {/* Testimonials */}
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
                  Success Stories
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">What Our Members Say</h2>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                {[
                  {
                    name: "Priya Sharma",
                    location: "Bangalore",
                    avatar: "PS",
                    quote:
                      "I've earned over 500 ZenDollars in just 2 months! The app makes it so easy to track my impact.",
                    tokens: "500+ ZenDollars",
                    impact: "12kg waste recycled",
                  },
                  {
                    name: "Rajesh Kumar",
                    location: "Mumbai",
                    avatar: "RK",
                    quote: "Finally, a way to make my daily waste disposal meaningful. The rewards are just a bonus!",
                    tokens: "750+ ZenDollars",
                    impact: "18kg waste recycled",
                  },
                  {
                    name: "Anita Patel",
                    location: "Delhi",
                    avatar: "AP",
                    quote:
                      "My kids love tracking our family's environmental impact. It's made us more conscious about waste.",
                    tokens: "320+ ZenDollars",
                    impact: "8kg waste recycled",
                  },
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">"{testimonial.quote}"</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-sm font-medium text-green-600">{testimonial.avatar}</span>
                          </div>
                          <div>
                            <div className="font-medium">{testimonial.name}</div>
                            <div className="text-sm text-gray-500">{testimonial.location}</div>
                          </div>
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Earned:</span>
                            <span className="font-medium text-green-600">{testimonial.tokens}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Impact:</span>
                            <span className="font-medium text-blue-600">{testimonial.impact}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 to-blue-600">
            <div className="container px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-6 text-center text-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  Ready to Start Your Green Journey?
                </h2>
                <p className="max-w-[600px] text-green-100 md:text-xl/relaxed">
                  Download the BioZen app today and join India's largest waste-to-wealth community
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/download">
                    <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                      <Download className="w-4 h-4 mr-2" />
                      Download App
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Join Community
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-green-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Free to join
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Instant rewards
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    24/7 support
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  )
}

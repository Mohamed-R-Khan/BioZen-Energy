"use client"

import { Layout } from "../../components/layout"
import { PageTransition } from "../../components/page-transition"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Building2, Globe, CheckCircle, ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export default function PartnersPage() {
  return (
    <Layout>
      <PageTransition>
        <div className="w-full">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 to-green-600">
            <div className="container px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-6 text-center text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Partnership Opportunities
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-mono">Partner with BioZen</h1>
                <p className="max-w-[800px] text-blue-100 md:text-xl/relaxed">
                  Join India's leading waste-to-wealth platform and create sustainable impact in your community.
                  Together, we can build a cleaner, greener future.
                </p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Start Partnership Discussion
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Partnership Types */}
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
                  Partnership Models
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Choose Your Partnership</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  We offer flexible partnership models tailored to different organizations and their sustainability
                  goals
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {[
                  {
                    title: "Municipal Partnerships",
                    description: "Transform your city's waste management with smart collection infrastructure",
                    icon: Building2,
                    benefits: [
                      "Smart collection booth deployment",
                      "Real-time waste management analytics",
                      "Citizen engagement platform",
                      "Reduced landfill burden",
                      "Carbon emission tracking",
                      "Revenue sharing model",
                    ],
                    cta: "Discuss Municipal Partnership",
                  },
                  {
                    title: "Corporate Partnerships",
                    description: "Enhance your CSR initiatives and earn verified carbon credits",
                    icon: Globe,
                    benefits: [
                      "Verified carbon credit generation",
                      "Employee engagement programs",
                      "Brand visibility opportunities",
                      "Sustainability reporting support",
                      "Custom reward sponsorship",
                      "ESG compliance assistance",
                    ],
                    cta: "Explore Corporate Partnership",
                  },
                ].map((partnership, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                          <partnership.icon className="h-8 w-8 text-green-600" />
                        </div>
                        <CardTitle className="text-2xl">{partnership.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {partnership.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <ul className="space-y-3">
                          {partnership.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-green-600 hover:bg-green-700">{partnership.cta}</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Corporate Section */}
          <section id="corporates" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
              <motion.div
                className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Corporate Solutions
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Enterprise Sustainability</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Comprehensive sustainability solutions for forward-thinking corporations
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                {[
                  {
                    title: "Carbon Credit Program",
                    description: "Generate verified carbon credits through waste-to-energy conversion",
                    price: "Custom Pricing",
                    features: [
                      "Verified carbon credits",
                      "Blockchain certification",
                      "Impact reporting",
                      "Compliance support",
                    ],
                  },
                  {
                    title: "Employee Engagement",
                    description: "Gamified sustainability programs for your workforce",
                    price: "₹50,000/month",
                    features: ["Custom app branding", "Employee leaderboards", "Team challenges", "Impact dashboards"],
                  },
                  {
                    title: "Brand Sponsorship",
                    description: "Sponsor rewards and gain brand visibility in our ecosystem",
                    price: "₹1,00,000/month",
                    features: ["Reward sponsorship", "Brand visibility", "Marketing campaigns", "PR opportunities"],
                  },
                ].map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="text-center">
                        <CardTitle className="text-xl">{tier.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed mb-4">{tier.description}</CardDescription>
                        <div className="text-2xl font-bold text-green-600">{tier.price}</div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2">
                          {tier.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit">
                    Get in Touch
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-mono">
                    Start Your Partnership Journey
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Ready to make a sustainable impact? Fill out the form and our partnership team will get back to you
                    within 24 hours.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-green-600" />
                      <span>partnerships@biozenenergy.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span>+91 80 1234 5678</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <span>Bangalore, Karnataka, India</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Partnership Inquiry</CardTitle>
                      <CardDescription>Tell us about your organization and sustainability goals</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">First Name</label>
                          <Input placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Last Name</label>
                          <Input placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input type="email" placeholder="john@company.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Organization</label>
                        <Input placeholder="Company Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Partnership Type</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                          <option>Select partnership type</option>
                          <option>Municipal Partnership</option>
                          <option>Corporate Partnership</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Message</label>
                        <Textarea
                          placeholder="Tell us about your sustainability goals and how we can work together..."
                          rows={4}
                        />
                      </div>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Submit Inquiry
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </PageTransition>
    </Layout>
  )
}

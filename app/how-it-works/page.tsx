"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Recycle,
  Coins,
  Gift,
  ArrowRight,
  Scale,
  Scan,
  Shield,
  Zap,
  Leaf,
  Download,
  Users,
  Building,
} from "lucide-react"
import Link from "next/link"
import { Layout } from "@/components/layout"
import { PageTransition } from "@/components/page-transition"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const ProcessOverview = () => (
  <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
    <div className="container px-4 md:px-6">
      <motion.div className="text-center mb-16" initial="initial" animate="animate" variants={fadeInUp}>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">How It Works</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our complete waste-to-wealth cycle that transforms your everyday waste into valuable rewards and clean energy
        </p>
      </motion.div>

      <motion.div className="max-w-6xl mx-auto" initial="initial" animate="animate" variants={staggerContainer}>
        <div className="grid lg:grid-cols-4 gap-8 items-center">
          {/* Step 1 */}
          <motion.div variants={fadeInUp}>
            <Card className="text-center p-6 h-full">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="mb-3">Drop Waste</CardTitle>
              <CardDescription>Segregated organic & recyclable waste</CardDescription>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="hidden lg:flex justify-center">
            <ArrowRight className="w-8 h-8 text-green-500" />
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={fadeInUp}>
            <Card className="text-center p-6 h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="mb-3">Earn Tokens</CardTitle>
              <CardDescription>Instant ZenDollar rewards</CardDescription>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} className="hidden lg:flex justify-center">
            <ArrowRight className="w-8 h-8 text-green-500" />
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={fadeInUp}>
            <Card className="text-center p-6 h-full">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="mb-3">Redeem Rewards</CardTitle>
              <CardDescription>Green gifts & sustainable products</CardDescription>
            </Card>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <div className="flex items-center justify-center space-x-4">
              <Zap className="w-8 h-8" />
              <span className="text-xl font-semibold">Meanwhile, your waste becomes clean Bio-CNG energy!</span>
              <Leaf className="w-8 h-8" />
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

const TokenEarningRules = () => {
  const categories = [
    {
      category: "Organic Waste",
      rate: "5 ZenDollars per kg",
      examples: ["Food scraps", "Vegetable peels", "Garden waste", "Paper towels"],
      color: "green",
    },
    {
      category: "Recyclable Plastic",
      rate: "8 ZenDollars per kg",
      examples: ["PET bottles", "Clean containers", "Plastic bags", "Food packaging"],
      color: "blue",
    },
    {
      category: "Paper & Cardboard",
      rate: "3 ZenDollars per kg",
      examples: ["Newspapers", "Magazines", "Cardboard boxes", "Office paper"],
      color: "orange",
    },
    {
      category: "Metal & Glass",
      rate: "10 ZenDollars per kg",
      examples: ["Aluminum cans", "Glass bottles", "Metal containers", "Tin cans"],
      color: "purple",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Token Earning Rules</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent rates for different waste categories, weighed accurately at smart collection booths
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {categories.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full p-6">
                <CardHeader className="p-0 mb-4">
                  <Badge
                    className={`w-fit mb-2 bg-${item.color}-100 text-${item.color}-700 hover:bg-${item.color}-200`}
                  >
                    {item.category}
                  </Badge>
                  <CardTitle className={`text-2xl text-${item.color}-600`}>{item.rate}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-2">
                    {item.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-${item.color}-400 rounded-full mr-2`} />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="p-8 bg-yellow-50 border-yellow-200">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-yellow-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Abuse Prevention & Quality Control</h3>
                <ul className="space-y-2 text-yellow-700">
                  <li>• All waste must be properly segregated and clean</li>
                  <li>• Smart scales detect and reject contaminated materials</li>
                  <li>• Daily limits apply to prevent system gaming</li>
                  <li>• Quality inspections ensure waste processing standards</li>
                  <li>• KYC verification may be required for large deposits</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

const BioCNGProcess = () => (
  <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
    <div className="container px-4 md:px-6">
      <motion.div
        className="text-center mb-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Bio-CNG Production Process</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced anaerobic digestion technology converts organic waste into clean, renewable Bio-CNG
        </p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {[
            { title: "Collection", icon: Recycle, description: "Segregated organic waste collected from smart booths" },
            { title: "Preparation", icon: Scale, description: "Waste is sorted, cleaned, and prepared for digestion" },
            {
              title: "Digestion",
              icon: Zap,
              description: "Anaerobic bacteria break down organic matter in oxygen-free environment",
            },
            {
              title: "Purification",
              icon: Scan,
              description: "Raw biogas is cleaned and purified to Bio-CNG standards",
            },
            {
              title: "Distribution",
              icon: Gift,
              description: "Clean Bio-CNG distributed for cooking, heating, and transport",
            },
          ].map((step, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="text-center p-6 h-full">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="mb-3 text-lg">{step.title}</CardTitle>
                <CardDescription className="text-sm">{step.description}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="mt-12">
          <Card className="p-8 bg-white shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6">Environmental Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Reduces Methane</h4>
                <p className="text-gray-600 text-sm">Prevents methane emissions from landfills</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Clean Energy</h4>
                <p className="text-gray-600 text-sm">Replaces fossil fuels with renewable Bio-CNG</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Circular Economy</h4>
                <p className="text-gray-600 text-sm">Waste becomes valuable resource</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

const CarbonMath = () => (
  <section className="py-24 bg-white">
    <div className="container px-4 md:px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Carbon Impact Calculation</h2>
        <p className="text-xl text-gray-600 mb-12">
          Every kilogram of waste you deposit creates measurable environmental impact, tracked and verified through
          ZenVolt credits
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 text-left">
            <h3 className="text-2xl font-bold mb-6">CO₂ Avoidance Formula</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Landfill Diversion</h4>
                <p className="text-gray-600 text-sm">1 kg organic waste = 0.5 kg CO₂ methane avoided</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Bio-CNG Production</h4>
                <p className="text-gray-600 text-sm">1 kg waste = 0.2 m³ Bio-CNG = 0.4 kg CO₂ fossil fuel replaced</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Total Impact</h4>
                <p className="text-green-700 text-sm font-medium">1 kg waste = 0.9 kg CO₂ equivalent saved</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 text-left">
            <h3 className="text-2xl font-bold mb-6">ZenVolt Credit System</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold">Real-time Tracking</h4>
                  <p className="text-gray-600 text-sm">
                    Smart contracts automatically calculate and record CO₂ savings
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold">Blockchain Verification</h4>
                  <p className="text-gray-600 text-sm">Immutable ledger ensures accurate carbon credit accounting</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold">Third-party Audits</h4>
                  <p className="text-gray-600 text-sm">Regular verification by certified environmental agencies</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  </section>
)

const HowItWorksFAQ = () => {
  const faqs = [
    {
      question: "How accurate are the smart collection booth scales?",
      answer:
        "Our scales are calibrated to ±10g accuracy and undergo monthly certification. They automatically compensate for container weight and environmental factors.",
    },
    {
      question: "What happens if I deposit contaminated waste?",
      answer:
        "Contaminated waste is automatically rejected by our scanner system. Clean the waste and try again, or dispose of it through regular waste collection.",
    },
    {
      question: "How long does Bio-CNG production take?",
      answer:
        "The anaerobic digestion process takes 15-25 days. However, our facilities operate continuously, so Bio-CNG is produced daily from ongoing waste input.",
    },
    {
      question: "Can I track my individual environmental impact?",
      answer:
        "Yes! Your app dashboard shows personal metrics including total waste deposited, ZenDollars earned, CO₂ saved, and your community ranking.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Process FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

const CallToActions = () => (
  <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
    <div className="container px-4 md:px-6">
      <motion.div
        className="text-center mb-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Start?</h2>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Join thousands of eco-warriors turning waste into wealth and making a measurable environmental impact
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <Link href="/join">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
              <Users className="w-5 h-5 mr-2" />
              Join the Movement
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Link href="/download">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-6 text-lg bg-transparent"
            >
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Link href="/partners">
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-8 py-6 text-lg">
              <Building className="w-5 h-5 mr-2" />
              Partner with Us
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default function HowItWorksPage() {
  return (
    <Layout>
      <PageTransition>
        <div className="min-h-screen">
          <ProcessOverview />
          <TokenEarningRules />
          <BioCNGProcess />
          <CarbonMath />
          <HowItWorksFAQ />
          <CallToActions />
        </div>
      </PageTransition>
    </Layout>
  )
}

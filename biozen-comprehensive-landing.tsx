"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Recycle,
  Coins,
  Gift,
  Users,
  Leaf,
  Zap,
  Building,
  School,
  Hospital,
  Navigation,
  Eye,
  Wifi,
  Shield,
  Clock,
  ChevronRight,
  Mail,
  Download,
  BarChart3,
  Globe,
  Award,
  Heart,
} from "lucide-react"
import Link from "next/link"
import { useImpact } from "@/hooks/use-impact"
import { useState, useEffect } from "react"

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

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
    <div className="container px-4 md:px-6 relative z-10">
      <motion.div
        className="flex flex-col items-center space-y-6 text-center"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-sm px-4 py-2">
            India's First Waste-to-Wealth Platform
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 max-w-5xl"
          variants={fadeInUp}
        >
          Turning Waste Into Wealth, One ZenDollar at a Time
        </motion.h1>

        <motion.p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed" variants={fadeInUp}>
          Exchange your segregated waste at smart collection booths for ZenDollar tokens. Redeem eco-friendly rewards
          while we turn your waste into clean Bio-CNG.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 pt-6" variants={fadeInUp}>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
            Join the Movement
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          <Link href="/download">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </Button>
          </Link>
          <Link href="/partners">
            <Button size="lg" variant="ghost" className="text-lg px-8 py-6">
              Partner with Us
            </Button>
          </Link>
        </motion.div>

        <motion.div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-gray-500" variants={fadeInUp}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            Blockchain Verified
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            Carbon Neutral
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            Bangalore, India
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Drop Segregated Waste",
      description: "Bring your sorted organic and recyclable waste to our smart collection booths",
      icon: Recycle,
    },
    {
      number: "02",
      title: "Earn ZenDollar Tokens",
      description: "Get blockchain-verified rewards instantly for every kilogram deposited",
      icon: Coins,
    },
    {
      number: "03",
      title: "Redeem for Green Gifts",
      description: "Exchange tokens for eco-friendly products and sustainable rewards",
      icon: Gift,
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Three simple steps to turn your waste into wealth</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {steps.map((step, index) => (
            <Link href="/how-it-works" key={index}>
              <motion.div variants={fadeInUp} className="h-full">
                <Card className="h-full min-h-[280px] hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-green-200">
                  <CardContent className="h-full p-6 flex flex-col items-center justify-center text-center space-y-4">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors flex-shrink-0">
                      <step.icon className="w-8 h-8 text-green-600" />
                    </div>

                    {/* Badge */}
                    <Badge variant="outline" className="text-green-600 border-green-600 flex-shrink-0">
                      {step.number}
                    </Badge>

                    {/* Title */}
                    <CardTitle className="text-xl font-semibold text-center flex-shrink-0">{step.title}</CardTitle>

                    {/* Description */}
                    <CardDescription className="text-base text-center leading-relaxed flex-shrink-0">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const SmartCollectionBooths = () => {
  const placements = [
    {
      title: "Housing Societies",
      description: "Shortest walk distance for residents with low contamination rates",
      icon: Building,
      features: ["Resident-driven", "Low contamination", "Community engagement"],
    },
    {
      title: "Hospitals & Clinics",
      description: "Clear signage excluding biomedical waste with full audit trail",
      icon: Hospital,
      features: ["Clear signage", "Audit trail", "Safe disposal"],
    },
    {
      title: "Schools & Universities",
      description: "Campus challenges with leaderboards and educational workshops",
      icon: School,
      features: ["Campus challenges", "Leaderboards", "Educational workshops"],
    },
    {
      title: "Transit & Community Hubs",
      description: "High footfall locations with short dwell time and notifications",
      icon: Navigation,
      features: ["High footfall", "Quick access", "Smart notifications"],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Smart Collection Booths</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Advanced collection points with calibrated scales, QR check-in, category scanners, and safe storage bays for
            instant ZenDollar rewards
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {placements.map((placement, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <placement.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{placement.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{placement.description}</CardDescription>
                  <ul className="space-y-1">
                    {placement.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Siting & Operations Guidelines</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <Eye className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Security & Lighting</h4>
                <p className="text-sm text-gray-600">CCTV monitoring and proper lighting for 24/7 safety</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Wifi className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Connectivity</h4>
                <p className="text-sm text-gray-600">230V power with 4G/5G/Wi-Fi connectivity</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Hygiene Control</h4>
                <p className="text-sm text-gray-600">Odor control and cleanliness protocols</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Scheduled Ops</h4>
                <p className="text-sm text-gray-600">Regular pickups with telemetry tracking</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/partners#booths">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Host a Booth in Your Community
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const ImpactStats = () => {
  const { wasteKg, co2Kg, tokensIssued, members, refresh } = useImpact()
  const [hasAnimated, setHasAnimated] = useState(false)

  const stats = [
    { label: "Waste Collected", value: wasteKg, suffix: "kg", icon: Recycle },
    { label: "ZenDollars Issued", value: tokensIssued, suffix: "", icon: Coins },
    { label: "CO₂ Avoided", value: co2Kg, suffix: "kg", icon: Leaf },
    { label: "Community Members", value: members, suffix: "", icon: Users },
  ]

  const AnimatedCounter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!hasAnimated) return

      let startTime: number
      const duration = 2000
      const startValue = 0

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        const currentValue = Math.floor(startValue + (end - startValue) * progress)
        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [end, hasAnimated])

    return (
      <span className="text-4xl md:text-5xl font-bold text-green-600 leading-none">
        {count.toLocaleString()}
        {suffix}
      </span>
    )
  }

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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Live Sustainability Metrics</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time impact tracking powered by blockchain transparency
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          onAnimationComplete={() => setHasAnimated(true)}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp} className="h-full">
              <Card className="h-full min-h-[220px] hover:shadow-lg transition-shadow">
                <CardContent className="h-full p-6 flex flex-col items-center justify-center text-center space-y-4">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-8 h-8 text-green-600" />
                  </div>

                  {/* Animated Counter */}
                  <div className="flex-shrink-0" aria-live="polite">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-gray-600 font-medium text-base leading-tight flex-shrink-0">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Button
            variant="outline"
            onClick={refresh}
            className="hover:bg-green-50 hover:border-green-300 bg-transparent"
          >
            Refresh Data
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

const ZenEcosystem = () => (
  <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
    <div className="container px-4 md:px-6">
      <motion.div
        className="grid lg:grid-cols-2 gap-12 items-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">ZenDollar & ZenVolt Ecosystem</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2" />
              <p className="text-lg text-gray-700 leading-relaxed">
                ZenDollar Tokens — Blockchain-verified rewards for every kilogram of waste deposited.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2" />
              <p className="text-lg text-gray-700 leading-relaxed">
                ZenVolt Credits — Track and verify CO₂ saved through our waste-to-energy process.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/tokenomics">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Read the Token Guide
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-2 gap-4" variants={fadeInUp}>
          <Card className="p-6 bg-green-100 border-green-200">
            <Coins className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-bold text-green-800 mb-2">ZenDollar</h3>
            <p className="text-green-700">Reward tokens for waste deposits</p>
          </Card>
          <Card className="p-6 bg-blue-100 border-blue-200">
            <Zap className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-blue-800 mb-2">ZenVolt</h3>
            <p className="text-blue-700">Carbon credit tracking system</p>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

const TechMission = () => {
  const pillars = [
    {
      title: "Waste-to-Energy",
      description: "Converting organic waste into clean Bio-CNG through advanced anaerobic digestion",
      icon: Recycle,
    },
    {
      title: "Blockchain Transparency",
      description: "Every transaction recorded on blockchain for complete transparency and traceability",
      icon: Globe,
    },
    {
      title: "Citizen Empowerment",
      description: "Empowering individuals to make a measurable environmental impact and earn rewards",
      icon: Users,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid lg:grid-cols-3 gap-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {pillars.map((pillar, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full p-8 text-center hover:shadow-lg transition-shadow">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <pillar.icon className="w-8 h-8 text-green-600" />
                </div>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-base leading-relaxed">{pillar.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="max-w-4xl mx-auto p-8 bg-green-50 border-green-200">
            <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
              "A circular economy where waste becomes wealth and impact is measurable."
            </blockquote>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

const Audiences = () => {
  const audiences = [
    {
      title: "Citizens",
      description: "Earn ZenDollars, get green rewards, and track your environmental impact",
      features: ["Earn ZenDollars", "Green Rewards", "Track Impact"],
      cta: "Download App",
      href: "/download",
      icon: Users,
      color: "green",
    },
    {
      title: "Municipalities",
      description: "Smart collection systems with real-time analytics and citizen engagement",
      features: ["Smart Collection", "Real-time Analytics", "Citizen Engagement"],
      cta: "Partner with Us",
      href: "/partners#municipalities",
      icon: Building,
      color: "blue",
    },
    {
      title: "Corporates",
      description: "Carbon credits, CSR impact measurement, and enhanced brand visibility",
      features: ["Carbon Credits", "CSR Impact", "Brand Visibility"],
      cta: "Explore Partnership",
      href: "/partners#corporates",
      icon: BarChart3,
      color: "purple",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">For Whom</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sustainable solutions for every stakeholder in the ecosystem
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {audiences.map((audience, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 group">
                <div
                  className={`mx-auto w-16 h-16 bg-${audience.color}-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-${audience.color}-200 transition-colors`}
                >
                  <audience.icon className={`w-8 h-8 text-${audience.color}-600`} />
                </div>
                <CardHeader className="text-center p-0 mb-6">
                  <CardTitle className="text-2xl mb-3">{audience.title}</CardTitle>
                  <CardDescription className="text-base">{audience.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <ul className="space-y-3">
                    {audience.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Award className="w-4 h-4 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={audience.href}>
                    <Button className={`w-full bg-${audience.color}-600 hover:bg-${audience.color}-700`} size="lg">
                      {audience.cta}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const CaseStudy = () => (
  <section className="py-24 bg-white">
    <div className="container px-4 md:px-6">
      <motion.div
        className="text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pilot Success Story</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Waste Diverted</span>
                  <span className="text-2xl font-bold text-green-600">2,500kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">CO₂ Reduced</span>
                  <span className="text-2xl font-bold text-green-600">875kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Participants</span>
                  <span className="text-2xl font-bold text-green-600">340</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-6">
                <div className="w-32 h-32 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-16 h-16 text-green-600" />
                </div>
                <p className="text-xl text-gray-700 font-semibold">Community Impact</p>
              </div>
              <Link href="/how-it-works#pilot">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  See How It Works in a City
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  </section>
)

const FAQ = () => {
  const faqs = [
    {
      question: "What is ZenDollar? Is it a cryptocurrency?",
      answer:
        "ZenDollar is a blockchain-verified reward token that you earn for depositing waste. While built on blockchain technology for transparency, it's specifically designed as a reward system within our ecosystem, not as a traditional cryptocurrency for trading.",
    },
    {
      question: "How are tokens earned?",
      answer:
        "You earn ZenDollar tokens by depositing segregated organic and recyclable waste at our smart collection booths. The amount earned depends on the weight and type of waste deposited, with rates clearly displayed at each booth.",
    },
    {
      question: "What waste types are accepted?",
      answer:
        "We accept household organic waste (food scraps, garden waste) and clean recyclables (paper, cardboard, plastic bottles, cans). Biomedical waste, hazardous materials, and contaminated items are not accepted.",
    },
    {
      question: "How does Bio-CNG work?",
      answer:
        "Organic waste undergoes anaerobic digestion in our facilities, where microorganisms break down the material in oxygen-free conditions to produce biogas, which is then purified into Bio-CNG for clean energy use.",
    },
    {
      question: "How are CO₂ savings measured?",
      answer:
        "We calculate CO₂ savings based on waste diverted from landfills (preventing methane emissions) and the clean energy produced. Our ZenVolt system tracks and verifies these carbon credits using blockchain technology.",
    },
    {
      question: "Are rewards transferable?",
      answer:
        "ZenDollar tokens can be redeemed for rewards within our ecosystem but are not transferable between users. This ensures the tokens maintain their intended purpose as environmental incentives.",
    },
    {
      question: "Is my wallet required?",
      answer:
        "While we support crypto wallets for those who prefer them, you can also use our mobile app with a simple account to earn and redeem tokens. No crypto experience is necessary to participate.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our waste-to-wealth platform
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <span className="text-left font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

const Team = () => {
  const teamMembers = [
    { name: "Raafe Khan", role: "CEO" },
    { name: "Kirtish Cheyyur", role: "CFO" },
    { name: "Mishal", role: "CTO" },
    { name: "Hari Om Trivedi", role: "CRO" },
    { name: "Wayne", role: "Operations Lead" },
    { name: "Jocelyn", role: "HR Lead" },
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The innovators behind India's first waste-to-wealth platform
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="text-center p-8 hover:shadow-lg transition-shadow border-2 hover:border-green-200">
                <CardContent className="p-0 space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-lg text-green-600 font-semibold">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      setEmail("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Join Our Green Revolution</h2>
          <p className="text-xl mb-8 opacity-90">Join 10,000+ eco-warriors making a difference. Unsubscribe anytime.</p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-white/20 placeholder:text-white/60 text-white flex-1"
              required
              disabled={status === "loading"}
            />
            <Button type="submit" className="bg-white text-green-600 hover:bg-gray-100" disabled={status === "loading"}>
              {status === "loading" ? (
                "Joining..."
              ) : (
                <>
                  <Mail className="w-4 h-4 mr-2" />
                  Join Now
                </>
              )}
            </Button>
          </form>

          {status === "success" && (
            <p className="mt-4 text-green-200">Welcome to the revolution! Check your email for confirmation.</p>
          )}

          {status === "error" && <p className="mt-4 text-red-200">Something went wrong. Please try again.</p>}
        </motion.div>
      </div>
    </section>
  )
}

export default function BioZenComprehensiveLanding() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <SmartCollectionBooths />
      <ImpactStats />
      <ZenEcosystem />
      <TechMission />
      <Audiences />
      <CaseStudy />
      <FAQ />
      <Team />
      <Newsletter />
    </div>
  )
}

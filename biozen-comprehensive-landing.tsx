"use client"

import React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Recycle,
  Coins,
  Gift,
  Users,
  Leaf,
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
  Apple,
  Play,
  CheckCircle,
  Scale,
  Zap,
  Droplets,
  Sprout,
  ArrowRight,
  FlaskConical,
  Fuel,
  Palette,
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

        <motion.p className="text-xl md:text-2xl text-gray-600 max-w-4xl leading-relaxed" variants={fadeInUp}>
          BioZen Energy is India's first waste-to-wealth platform, rewarding citizens with ZenDollar tokens for waste
          segregation, while generating clean Bio-CNG and carbon credits through scientific anaerobic digestion and
          upcycling.
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
            Founded 2025
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
                  <CardContent className="h-full flex flex-col items-center justify-center text-center gap-2 p-6">
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

const ScientificProcess = () => {
  const processSteps = [
    {
      title: "Collection",
      description: "Segregated waste is deposited at Smart Collection Booths",
      icon: Recycle,
      color: "green",
    },
    {
      title: "Pre-processing",
      description: "Waste is weighed, scanned, and sorted into biodegradable vs. non-biodegradable",
      icon: Scale,
      color: "blue",
    },
    {
      title: "Anaerobic Digestion",
      description: "Biodegradable waste is fed into a biogas digester, producing Bio-CNG and organic slurry",
      icon: FlaskConical,
      color: "purple",
    },
    {
      title: "Bio-CNG Utilisation",
      description: "Captured gas is purified and can be used as a clean fuel alternative to LPG/CNG",
      icon: Fuel,
      color: "orange",
    },
    {
      title: "By-products",
      description:
        "Organic slurry is converted into fertiliser; non-biodegradables are upcycled or used for art pieces",
      icon: Sprout,
      color: "teal",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">How BioZen Works: From Waste to Energy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our scientific approach transforms everyday waste into valuable resources through advanced anaerobic
            digestion and sustainable upcycling
          </p>
        </motion.div>

        {/* Visual Flow Diagram */}
        <motion.div
          className="max-w-6xl mx-auto mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div variants={fadeInUp}>
                  <Card
                    className={`text-center p-6 h-full bg-${step.color}-50 border-${step.color}-200 hover:shadow-lg transition-shadow`}
                  >
                    <div
                      className={`w-16 h-16 bg-${step.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <step.icon className={`w-8 h-8 text-${step.color}-600`} />
                    </div>
                    <CardTitle className="text-lg mb-3">{step.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">{step.description}</CardDescription>
                  </Card>
                </motion.div>

                {index < processSteps.length - 1 && (
                  <motion.div variants={fadeInUp} className="hidden md:flex justify-center">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Detailed Benefits */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Card className="p-8 bg-green-50 border-green-200 h-full">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-xl mb-4 text-center">Clean Energy Production</CardTitle>
              <CardDescription className="text-center leading-relaxed">
                Our anaerobic digestion process produces Bio-CNG that can replace traditional fossil fuels, reducing
                carbon emissions by up to 80%
              </CardDescription>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-8 bg-blue-50 border-blue-200 h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-4 text-center">Organic Fertiliser</CardTitle>
              <CardDescription className="text-center leading-relaxed">
                The nutrient-rich slurry from digestion becomes high-quality organic fertiliser, supporting sustainable
                agriculture
              </CardDescription>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-8 bg-purple-50 border-purple-200 h-full">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl mb-4 text-center">Creative Upcycling</CardTitle>
              <CardDescription className="text-center leading-relaxed">
                Non-biodegradable materials are transformed into art pieces and functional products, giving waste a
                second life
              </CardDescription>
            </Card>
          </motion.div>
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
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          onAnimationComplete={() => setHasAnimated(true)}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={fadeInUp} className="h-full">
              <Card className="h-full min-h-[220px] hover:shadow-lg transition-shadow">
                <CardContent className="h-full flex flex-col items-center justify-center text-center gap-2 p-6">
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

const Founder = () => (
  <section className="py-24 bg-gray-50">
    <div className="container px-4 md:px-6">
      <motion.div
        className="text-center mb-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The visionary behind India's first waste-to-wealth platform
        </p>
      </motion.div>

      <motion.div
        className="max-w-2xl mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Card className="text-center p-12 hover:shadow-lg transition-shadow border-2 hover:border-green-200">
          <CardContent className="space-y-6">
            <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-16 h-16 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Raafe Khan</h3>
            <p className="text-xl text-green-600 font-semibold">Founder & CEO</p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
              Raafe Khan — Founder & CEO, BioZen Energy Pvt. Ltd. (2025)
            </p>
            <div className="pt-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 text-sm px-4 py-2">
                Pioneering India's Circular Economy
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  </section>
)

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

const DownloadApp = () => (
  <section className="py-24 bg-white">
    <div className="container px-4 md:px-6">
      <motion.div
        className="flex flex-col items-center justify-center space-y-8 text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
          📱 Mobile App
        </Badge>

        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono text-gray-900">
          Download the BioZen App
        </h2>

        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
          Turn your smartphone into a powerful tool for environmental change. Track waste, earn rewards, and make a real
          impact with every deposit.
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

        <div className="pt-8">
          <Link href="/download">
            <Button variant="outline" size="lg" className="bg-transparent">
              Learn More About the App
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
)

export default function BioZenComprehensiveLanding() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <ScientificProcess />
      <SmartCollectionBooths />
      <ImpactStats />
      <Founder />
      <Newsletter />
      <DownloadApp />
    </div>
  )
}

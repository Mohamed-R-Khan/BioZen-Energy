"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Leaf,
  Recycle,
  Smartphone,
  Coins,
  Zap,
  Users,
  Building2,
  Download,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  TrendingUp,
  Sparkles,
  MapPin,
  Mail,
  Phone,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import { AnimatedCursor } from "./components/animated-cursor"
import { StatsCounter } from "./components/stats-counter"
import Link from "next/link"
import { NewsletterSignup } from "./components/newsletter-signup"

export default function BioZenEnergyLanding() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const howItWorksRef = useRef(null)
  const impactRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const howItWorksInView = useInView(howItWorksRef, { once: true })
  const impactInView = useInView(impactRef, { once: true })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-x-hidden">
      <AnimatedCursor />

      {/* Animated Background Elements */}
      <motion.div className="fixed inset-0 opacity-10 pointer-events-none" style={{ y: backgroundY }}>
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-300 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-teal-300 rounded-full blur-xl"></div>
      </motion.div>

      {/* Header */}
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Recycle className="h-8 w-8 text-green-600" />
          </motion.div>
          <span className="ml-2 text-2xl font-bold text-gray-900 font-mono">BioZen Energy</span>
        </div>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <a href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
            How It Works
          </a>
          <a href="#impact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Impact
          </a>
          <a href="#technology" className="text-sm font-medium hover:text-green-600 transition-colors">
            Technology
          </a>
          <a href="#partner" className="text-sm font-medium hover:text-green-600 transition-colors">
            Partner
          </a>
        </nav>
        <div className="ml-6 flex gap-2">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            <Download className="w-4 h-4 mr-2" />
            Download App
          </Button>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Badge variant="secondary" className="w-fit bg-green-100 text-green-800 border-green-200">
                      🌍 India's First Waste-to-Wealth Platform
                    </Badge>
                  </motion.div>

                  <motion.h1
                    className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent font-mono"
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Turning Waste Into Wealth, One ZenDollar at a Time
                  </motion.h1>

                  <motion.p
                    className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Exchange your segregated waste at smart collection booths for blockchain-based ZenDollar tokens.
                    Redeem for eco-friendly gifts while we convert your waste into clean Bio-CNG energy.
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col gap-4 min-[400px]:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link href="/join">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 group w-full">
                      <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
                      Join the Movement
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/download">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-green-200 hover:bg-green-50 bg-transparent w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download App
                    </Button>
                  </Link>
                  <Link href="/partners">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-blue-200 hover:bg-blue-50 bg-transparent w-full"
                    >
                      <Building2 className="w-4 h-4 mr-2" />
                      Partner with Us
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  className="flex items-center gap-6 text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={heroInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Blockchain Verified
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Carbon Neutral
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-green-600" />
                    Bangalore, India
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-3xl opacity-30"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  ></motion.div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-green-100">
                    <div className="text-center space-y-4">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center"
                      >
                        <Recycle className="w-12 h-12 text-green-600" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900">Smart Collection Booth</h3>
                      <p className="text-gray-600">Drop waste → Earn ZenDollars → Get rewards</p>
                      <div className="flex justify-center gap-2">
                        <motion.div
                          className="w-3 h-3 bg-green-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
                        ></motion.div>
                        <motion.div
                          className="w-3 h-3 bg-emerald-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                        ></motion.div>
                        <motion.div
                          className="w-3 h-3 bg-teal-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.4 }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" ref={howItWorksRef} className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                How It Works
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Simple. Smart. Sustainable.</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Transform your daily waste into valuable rewards through our gamified blockchain ecosystem
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Drop Segregated Waste",
                  description:
                    "Visit our smart collection booths and deposit your properly segregated organic and recyclable waste",
                  icon: Recycle,
                  color: "green",
                },
                {
                  step: "02",
                  title: "Earn ZenDollar Tokens",
                  description:
                    "Receive blockchain-verified ZenDollar tokens instantly based on the weight and type of waste deposited",
                  icon: Coins,
                  color: "emerald",
                },
                {
                  step: "03",
                  title: "Redeem for Green Gifts",
                  description:
                    "Use your ZenDollars in our mobile app to redeem eco-friendly products and sustainable rewards",
                  icon: Smartphone,
                  color: "teal",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Link href="/how-it-works">
                    <Card className="relative overflow-hidden border-2 hover:border-green-200 transition-all duration-300 group cursor-pointer">
                      <CardHeader className="text-center pb-4">
                        <motion.div
                          className={`w-16 h-16 rounded-full bg-${item.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <item.icon className={`h-8 w-8 text-${item.color}-600`} />
                        </motion.div>
                        <div className={`text-4xl font-bold text-${item.color}-600 font-mono mb-2`}>{item.step}</div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ZenDollar & ZenVolt System */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 text-white"
              >
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Blockchain Technology
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  ZenDollar & ZenVolt Ecosystem
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Coins className="w-6 h-6 mt-1 text-yellow-300" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">ZenDollar Tokens</h3>
                      <p className="text-green-100 leading-relaxed">
                        Blockchain-verified reward tokens earned for every kilogram of waste deposited. Transparent,
                        secure, and instantly transferable.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 mt-1 text-yellow-300" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">ZenVolt Carbon Credits</h3>
                      <p className="text-green-100 leading-relaxed">
                        Track and verify CO₂ emissions saved through our waste-to-energy process. Earn additional
                        credits for your environmental impact.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <Coins className="w-8 h-8 text-yellow-800" />
                      </motion.div>
                      <h4 className="text-lg font-semibold text-white mb-2">ZenDollar</h4>
                      <p className="text-green-100 text-sm">Reward Token</p>
                    </div>
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <Zap className="w-8 h-8 text-blue-800" />
                      </motion.div>
                      <h4 className="text-lg font-semibold text-white mb-2">ZenVolt</h4>
                      <p className="text-green-100 text-sm">Carbon Credit</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sustainability Impact */}
        <section id="impact" ref={impactRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={impactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Live Impact
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                Real-Time Sustainability Metrics
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Track our collective environmental impact as we build a cleaner, greener future together
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  icon: Recycle,
                  value: 15420,
                  suffix: " kg",
                  label: "Waste Collected",
                  color: "green",
                },
                {
                  icon: Coins,
                  value: 89650,
                  suffix: "",
                  label: "ZenDollars Issued",
                  color: "yellow",
                },
                {
                  icon: Leaf,
                  value: 23.7,
                  suffix: " tonnes",
                  label: "CO₂ Avoided",
                  color: "emerald",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={impactInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="space-y-4">
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className={`w-16 h-16 rounded-full bg-${stat.color}-100 flex items-center justify-center mx-auto`}
                      >
                        <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                      </motion.div>
                      <div className={`text-4xl font-bold text-${stat.color}-600 font-mono`}>
                        <StatsCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Mission */}
        <section id="technology" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Technology & Mission
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">
                  Powering the Circular Economy
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Waste-to-Energy via Bio-CNG</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Advanced anaerobic digestion technology converts organic waste into clean Bio-CNG, reducing
                        landfill burden while generating renewable energy.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Blockchain Transparency</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Every transaction, reward, and carbon credit is recorded on blockchain, ensuring complete
                        transparency and trust in our ecosystem.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Citizen Empowerment</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Empowering every citizen to become an active participant in the circular economy through
                        gamified rewards and meaningful environmental impact.
                      </p>
                    </div>
                  </div>
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
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 font-mono">Our Mission</h3>
                      <p className="text-gray-700 leading-relaxed">
                        "To create a sustainable circular economy where waste becomes wealth, citizens are empowered,
                        and environmental impact is measurably positive."
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded-xl">
                        <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <p className="text-sm font-medium">Circular Economy</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-xl">
                        <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium">Global Impact</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Join or Partner Section */}
        <section id="partner" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-600 to-blue-600">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Join the Movement
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white font-mono">
                Be Part of the Solution
              </h2>
              <p className="max-w-[900px] text-green-100 md:text-xl/relaxed">
                Whether you're a citizen, municipality, or corporation, there's a place for you in our ecosystem
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  title: "For Citizens",
                  description: "Join thousands of eco-warriors earning rewards for sustainable waste management",
                  icon: Users,
                  cta: "Download App",
                  ctaLink: "/download#citizen-app",
                  benefits: ["Earn ZenDollars", "Get Green Rewards", "Track Impact"],
                },
                {
                  title: "For Municipalities",
                  description: "Partner with us to implement smart waste management solutions in your city",
                  icon: Building2,
                  cta: "Partner with Us",
                  ctaLink: "/partners",
                  benefits: ["Smart Collection", "Data Analytics", "Citizen Engagement"],
                },
                {
                  title: "For Corporates",
                  description: "Sponsor rewards, earn carbon credits, and showcase your sustainability commitment",
                  icon: Globe,
                  cta: "Explore Partnership",
                  ctaLink: "/partners#corporates",
                  benefits: ["Carbon Credits", "CSR Impact", "Brand Visibility"],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                    <CardHeader className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4"
                      >
                        <item.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                      <CardDescription className="text-green-100">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {item.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-green-100">
                            <CheckCircle className="h-4 w-4 text-green-300" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Link href={item.ctaLink}>
                        <Button className="w-full bg-white text-green-600 hover:bg-green-50">{item.cta}</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Stay Updated
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Join Our Green Revolution</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Get the latest updates on new collection points, rewards, and sustainability impact
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-lg flex-1 border-green-200 focus:border-green-400"
                  />
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500">Join 10,000+ eco-warriors. Unsubscribe anytime.</p>
              </div>
            </motion.div>
          </div>
        </section>
        <NewsletterSignup />
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Recycle className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold font-mono">BioZen Energy</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Turning waste into wealth through blockchain-powered sustainability solutions in Bangalore, India.
              </p>
              <div className="flex gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  iOS App
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Android
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Press & Media
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@biozenenergy.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 80 1234 5678</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 BioZen Energy Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

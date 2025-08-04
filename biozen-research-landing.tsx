"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
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
  Leaf,
  MapPin,
  Mail,
  Phone,
  Factory,
  TrendingUp,
} from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { StatsCounter } from "./components/stats-counter"
import { NewsletterSignup } from "./components/newsletter-signup"

export default function BioZenResearchLanding() {
  const heroRef = useRef(null)
  const howItWorksRef = useRef(null)
  const metricsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const howItWorksInView = useInView(howItWorksRef, { once: true })
  const metricsInView = useInView(metricsRef, { once: true })

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-40 shadow-sm"
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
          <span className="ml-2 text-2xl font-bold text-gray-900">BioZen Energy</span>
        </div>
        <nav className="ml-auto hidden md:flex gap-6">
          <a href="#how-it-works" className="text-sm font-medium hover:text-green-600 transition-colors">
            How It Works
          </a>
          <a href="#technology" className="text-sm font-medium hover:text-green-600 transition-colors">
            Technology
          </a>
          <a href="#impact" className="text-sm font-medium hover:text-green-600 transition-colors">
            Impact
          </a>
          <a href="#partners" className="text-sm font-medium hover:text-green-600 transition-colors">
            Partners
          </a>
        </nav>
        <div className="ml-6 flex gap-2">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Link href="/download">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </Link>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
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
                      🇮🇳 India's First Waste-to-Wealth Platform
                    </Badge>
                  </motion.div>

                  <motion.h1
                    className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl text-gray-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Turning Waste into Wealth, One ZenDollar at a Time
                  </motion.h1>

                  <motion.p
                    className="max-w-[600px] text-gray-600 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Earn blockchain-verified ZenDollar tokens by depositing segregated waste at our Smart Collection
                    Booths. Redeem tokens for eco-friendly gifts while we convert your waste into clean Bio-CNG energy.
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col gap-4 sm:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link href="/join">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                      Join the Movement
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/download">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Download App
                    </Button>
                  </Link>
                  <Link href="/partners">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
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
                    Zero Waste to Landfill
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
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl blur-3xl opacity-20"></div>
                  <Card className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                        <Recycle className="w-10 h-10 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Collection Booth</h3>
                        <p className="text-gray-600 text-sm">AI-powered waste sorting and instant token rewards</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-600 mb-1">1 kg waste</div>
                        <div className="text-sm text-gray-500 mb-2">↓</div>
                        <div className="text-xl font-bold text-blue-600">10 ZenDollars</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" ref={howItWorksRef} className="w-full py-16 md:py-24 lg:py-32 bg-white">
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Three Simple Steps to Impact
              </h2>
              <p className="max-w-[800px] text-gray-600 text-lg">
                Our streamlined process makes sustainable waste management rewarding and accessible to everyone
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Drop Segregated Waste",
                  description: "Visit any Smart Collection Booth and deposit your properly segregated organic waste",
                  icon: Recycle,
                  color: "green",
                  details: "AI-powered sorting validates waste quality",
                },
                {
                  step: "02",
                  title: "Earn ZenDollar Tokens",
                  description: "Receive blockchain-verified tokens instantly based on waste weight and type",
                  icon: Coins,
                  color: "blue",
                  details: "Transparent, secure, immutable rewards",
                },
                {
                  step: "03",
                  title: "Redeem for Eco-Friendly Gifts",
                  description: "Use tokens in our marketplace for sustainable products and partner discounts",
                  icon: Smartphone,
                  color: "purple",
                  details: "Curated selection of green products",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Link href="/how-it-works">
                    <Card className="relative overflow-hidden border-2 hover:border-green-200 transition-all duration-300 group cursor-pointer h-full">
                      <CardHeader className="text-center pb-4">
                        <div className="relative mb-6">
                          <div
                            className={`w-16 h-16 rounded-full bg-${item.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <item.icon className={`h-8 w-8 text-${item.color}-600`} />
                          </div>
                          <div
                            className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-${item.color}-600 text-white text-sm font-bold flex items-center justify-center`}
                          >
                            {item.step}
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-3">{item.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed mb-2">{item.description}</CardDescription>
                        <div className={`text-sm text-${item.color}-600 font-medium`}>{item.details}</div>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Token Ecosystem Overview */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 w-fit">
                  Token Ecosystem
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                  Blockchain-Powered Rewards
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                      <Coins className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">ZenDollar Token</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Blockchain-verified reward tokens earned for waste deposits. Each token represents verified
                        environmental impact and can be redeemed for real-world value.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">ZenVolt Carbon Credits</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Equivalent carbon credits generated through our waste-to-energy process. Tradeable certificates
                        representing verified CO₂ emissions reduction.
                      </p>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Why Blockchain?</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Immutable transaction records
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Transparent reward distribution
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Real-world value backing
                      </li>
                    </ul>
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
                <Card className="bg-white p-8 shadow-lg">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Token Flow</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Recycle className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="font-medium">1 kg Organic Waste</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="flex items-center gap-2">
                          <Coins className="w-4 h-4 text-yellow-600" />
                          <span className="font-bold text-yellow-600">10 ZenDollars</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Factory className="w-4 h-4 text-blue-600" />
                          </div>
                          <span className="font-medium">Bio-CNG Generated</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                        <div className="flex items-center gap-2">
                          <Leaf className="w-4 h-4 text-green-600" />
                          <span className="font-bold text-green-600">1 ZenVolt Credit</span>
                        </div>
                      </div>

                      <div className="text-center pt-4">
                        <div className="text-sm text-gray-500 mb-2">Current Exchange Rate</div>
                        <div className="text-lg font-bold text-gray-900">1 ZenDollar = ₹1.50</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Live Sustainability Metrics */}
        <section id="impact" ref={metricsRef} className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={metricsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Live Impact
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Real-Time Sustainability Metrics
              </h2>
              <p className="max-w-[800px] text-gray-600 text-lg">
                Track our collective environmental impact as we build a cleaner, greener future together
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                {
                  icon: Recycle,
                  value: 15420,
                  suffix: " kg",
                  label: "Total Waste Collected",
                  description: "Diverted from landfills",
                  color: "green",
                },
                {
                  icon: Coins,
                  value: 154200,
                  suffix: "",
                  label: "ZenDollars Issued",
                  description: "Rewards distributed to citizens",
                  color: "blue",
                },
                {
                  icon: Leaf,
                  value: 23.7,
                  suffix: " tonnes",
                  label: "CO₂ Emissions Avoided",
                  description: "Through waste-to-energy conversion",
                  color: "emerald",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={metricsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="space-y-4">
                      <div
                        className={`w-16 h-16 rounded-full bg-${stat.color}-100 flex items-center justify-center mx-auto`}
                      >
                        <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                      </div>
                      <div className={`text-4xl font-bold text-${stat.color}-600`}>
                        <StatsCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{stat.label}</p>
                        <p className="text-sm text-gray-500">{stat.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Mission Section */}
        <section id="technology" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit mb-4">
                    Technology & Mission
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-6">
                    Powering the Circular Economy
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Waste-to-Energy via Bio-CNG</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Advanced anaerobic digestion technology converts organic waste into clean Bio-CNG, reducing
                        landfill burden while generating renewable energy for communities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Blockchain Transparency</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Every transaction, reward, and carbon credit is recorded on blockchain, ensuring complete
                        transparency, trust, and verifiable environmental impact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Citizen Empowerment</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Empowering every citizen to become an active participant in environmental conservation through
                        meaningful rewards and measurable impact tracking.
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
                <Card className="bg-gradient-to-br from-green-50 to-blue-50 p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                      <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                        "To create a sustainable circular economy where waste becomes wealth, citizens are empowered,
                        and environmental impact is measurably positive."
                      </blockquote>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded-xl">
                        <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-900">Circular Economy</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-xl">
                        <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-900">Global Impact</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section id="partners" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Who It's For
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Segmented Benefits for Everyone
              </h2>
              <p className="max-w-[800px] text-gray-600 text-lg">
                Our platform creates value for citizens, municipalities, and corporations through tailored benefits
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  title: "For Citizens",
                  description:
                    "Earn rewards for responsible waste management while contributing to a cleaner environment",
                  icon: Users,
                  benefits: [
                    "Earn ZenDollar tokens for waste deposits",
                    "Redeem tokens for eco-friendly gifts",
                    "Track personal environmental impact",
                    "Access to exclusive green marketplace",
                  ],
                  cta: "Join the Movement",
                  ctaLink: "/join",
                  color: "green",
                },
                {
                  title: "For Municipalities",
                  description:
                    "Implement smart waste management infrastructure with real-time data and citizen engagement",
                  icon: Building2,
                  benefits: [
                    "Deploy Smart Collection Booths",
                    "Real-time waste management analytics",
                    "Reduce landfill burden by 80%",
                    "Increase citizen participation rates",
                  ],
                  cta: "Partner with Us",
                  ctaLink: "/partners",
                  color: "blue",
                },
                {
                  title: "For Corporates",
                  description:
                    "Enhance CSR initiatives and earn verified carbon credits through waste sponsorship programs",
                  icon: Globe,
                  benefits: [
                    "Sponsor rewards and gain brand visibility",
                    "Earn tradeable ZenVolt carbon credits",
                    "Support ESG compliance goals",
                    "Engage employees in sustainability",
                  ],
                  cta: "Explore Partnership",
                  ctaLink: "/partners#corporates",
                  color: "purple",
                },
              ].map((segment, index) => (
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
                        className={`w-16 h-16 rounded-full bg-${segment.color}-100 flex items-center justify-center mx-auto mb-4`}
                      >
                        <segment.icon className={`h-8 w-8 text-${segment.color}-600`} />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{segment.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{segment.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {segment.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={segment.ctaLink}>
                        <Button className={`w-full bg-${segment.color}-600 hover:bg-${segment.color}-700`}>
                          {segment.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSignup />
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Recycle className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold">BioZen Energy</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                India's first waste-to-wealth platform, turning waste into wealth through blockchain-powered
                sustainability solutions.
              </p>
              <div className="flex gap-4">
                <Link href="/download">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    iOS App
                  </Button>
                </Link>
                <Link href="/download">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Android
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-green-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/mission" className="hover:text-green-400 transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <Link href="/press" className="hover:text-green-400 transition-colors">
                    Press & Media
                  </Link>
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

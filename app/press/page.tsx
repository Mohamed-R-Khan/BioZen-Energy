"use client"

import { Layout } from "../../components/layout"
import { PageTransition } from "../../components/page-transition"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, ExternalLink, Download, Award, Newspaper, Users } from "lucide-react"

export default function PressPage() {
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
                  Press & Media
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl font-mono">BioZen in the News</h1>
                <p className="max-w-[800px] text-green-100 md:text-xl/relaxed">
                  Stay updated with the latest news, press releases, and media coverage about BioZen Energy's journey to
                  transform India's waste management landscape.
                </p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Download className="w-4 h-4 mr-2" />
                  Download Press Kit
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Latest News */}
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
                  Latest News
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Recent Coverage</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Recent media coverage and press releases about BioZen Energy
                </p>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {[
                  {
                    title: "BioZen Energy Raises ₹50 Crore in Series A Funding",
                    publication: "Economic Times",
                    date: "January 15, 2024",
                    excerpt:
                      "Bangalore-based waste-to-wealth startup secures funding to expand across 10 Indian cities...",
                    type: "Funding News",
                    color: "green",
                  },
                  {
                    title: "India's First Blockchain-Based Waste Management Platform Launches",
                    publication: "TechCrunch India",
                    date: "December 20, 2023",
                    excerpt:
                      "BioZen Energy introduces revolutionary ZenDollar token system for waste recycling rewards...",
                    type: "Product Launch",
                    color: "blue",
                  },
                  {
                    title: "Bangalore Startup Converts 1000 Tonnes of Waste to Clean Energy",
                    publication: "The Hindu",
                    date: "November 30, 2023",
                    excerpt: "BioZen Energy's anaerobic digestion technology successfully processes organic waste...",
                    type: "Milestone",
                    color: "purple",
                  },
                  {
                    title: "BioZen Energy Wins 'Best CleanTech Startup' Award",
                    publication: "Startup India",
                    date: "October 15, 2023",
                    excerpt: "Recognition for innovative approach to solving India's waste management challenges...",
                    type: "Award",
                    color: "yellow",
                  },
                  {
                    title: "Smart Waste Collection Booths Deployed Across Bangalore",
                    publication: "Deccan Herald",
                    date: "September 25, 2023",
                    excerpt: "50 AI-powered collection booths now operational in residential and commercial areas...",
                    type: "Expansion",
                    color: "emerald",
                  },
                  {
                    title: "BioZen Partners with Karnataka Government for State-Wide Rollout",
                    publication: "Business Standard",
                    date: "August 10, 2023",
                    excerpt: "Strategic partnership to implement waste-to-wealth solutions across Karnataka state...",
                    type: "Partnership",
                    color: "orange",
                  },
                ].map((news, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className={`bg-${news.color}-100 text-${news.color}-800`}>
                            {news.type}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {news.date}
                          </div>
                        </div>
                        <CardTitle className="text-lg leading-tight">{news.title}</CardTitle>
                        <CardDescription className="text-sm font-medium text-blue-600">
                          {news.publication}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-gray-600 leading-relaxed">{news.excerpt}</p>
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Read Full Article
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Press Releases */}
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
                  Press Releases
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Official Announcements</h2>
              </motion.div>

              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  {
                    title: "BioZen Energy Announces Expansion to Mumbai and Delhi",
                    date: "February 1, 2024",
                    summary:
                      "Following successful deployment in Bangalore, BioZen Energy announces expansion to India's financial and political capitals with 100 new smart collection booths.",
                  },
                  {
                    title: "Partnership with IIT Bangalore for Advanced Waste Processing Research",
                    date: "January 20, 2024",
                    summary:
                      "Collaborative research initiative to develop next-generation anaerobic digestion technology and improve Bio-CNG production efficiency.",
                  },
                  {
                    title: "BioZen Mobile App Crosses 50,000 Downloads Milestone",
                    date: "December 15, 2023",
                    summary:
                      "Rapid user adoption demonstrates strong market demand for gamified waste management solutions and blockchain-based reward systems.",
                  },
                ].map((release, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{release.title}</CardTitle>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {release.date}
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed">{release.summary}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Media Kit */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-2 items-center max-w-5xl mx-auto">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit">
                    Media Resources
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-mono">Press Kit & Resources</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Download our comprehensive press kit containing high-resolution images, company logos, executive
                    bios, fact sheets, and other media resources for your coverage of BioZen Energy.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Newspaper className="w-5 h-5 text-green-600" />
                      <span>Company fact sheet and timeline</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-green-600" />
                      <span>Executive team bios and photos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-green-600" />
                      <span>Awards and recognition certificates</span>
                    </div>
                  </div>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download Complete Press Kit
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Media Contact</CardTitle>
                      <CardDescription>For press inquiries, interviews, and media partnerships</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="font-medium">Priya Sharma</p>
                        <p className="text-sm text-gray-600">Head of Communications</p>
                        <p className="text-sm text-gray-600">press@biozenenergy.com</p>
                        <p className="text-sm text-gray-600">+91 98765 43210</p>
                      </div>
                      <div>
                        <p className="font-medium">Rajesh Kumar</p>
                        <p className="text-sm text-gray-600">Co-Founder & CEO</p>
                        <p className="text-sm text-gray-600">ceo@biozenenergy.com</p>
                        <p className="text-sm text-gray-600">Available for interviews</p>
                      </div>
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

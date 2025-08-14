"use client"

import { Layout } from "../../components/layout"
import { PageTransition } from "../../components/page-transition"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, ExternalLink, Download, FileText, ImageIcon, Palette, Users } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

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
                  Latest Press
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-mono">Recent Coverage</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Recent media coverage and press releases about BioZen Energy
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                {siteConfig.press.length > 0 ? (
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {siteConfig.press.map((item, index) => (
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
                              <div className="flex items-center gap-1 text-sm text-gray-500">
                                <Calendar className="w-4 h-4" />
                                {new Date(item.date).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })}
                              </div>
                            </div>
                            <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                            <CardDescription className="text-sm font-medium text-blue-600">
                              {item.outlet}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-sm text-gray-600 leading-relaxed">{item.summary}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" size="sm" className="w-full bg-transparent">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Read Full Article
                              </Button>
                            </a>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FileText className="w-12 h-12 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">No press items yet</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      We're working on building relationships with media outlets. Check back soon for updates!
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </section>

          {/* Media Kit */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
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
                    Download our comprehensive press kit containing essential media resources for your coverage of
                    BioZen Energy.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-green-600" />
                      <span>Company fact sheet & timeline (PDF)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ImageIcon className="w-5 h-5 text-green-600" />
                      <span>Logo pack (SVG/PNG)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Palette className="w-5 h-5 text-green-600" />
                      <span>Brand guidelines (PDF)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-500">Founders bios (coming soon)</span>
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
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        Media enquiries:{" "}
                        <a
                          href="mailto:press@biozenenergy.com"
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          press@biozenenergy.com
                        </a>{" "}
                        (Bangalore, India)
                      </p>
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

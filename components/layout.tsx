"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Recycle, Download } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatedCursor } from "./animated-cursor"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <AnimatedCursor />

      {/* Header */}
      <motion.header
        className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/" className="flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Recycle className="h-8 w-8 text-green-600" />
          </motion.div>
          <span className="ml-2 text-2xl font-bold text-gray-900 font-mono">BioZen Energy</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link
            href="/how-it-works"
            className={`text-sm font-medium transition-colors ${
              isActive("/how-it-works") ? "text-green-600" : "hover:text-green-600"
            }`}
          >
            How It Works
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${
              isActive("/about") ? "text-green-600" : "hover:text-green-600"
            }`}
          >
            About
          </Link>
          <Link
            href="/partners"
            className={`text-sm font-medium transition-colors ${
              isActive("/partners") ? "text-green-600" : "hover:text-green-600"
            }`}
          >
            Partners
          </Link>
          <Link
            href="/press"
            className={`text-sm font-medium transition-colors ${
              isActive("/press") ? "text-green-600" : "hover:text-green-600"
            }`}
          >
            Press
          </Link>
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

      <main className="flex-1">{children}</main>

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
                Turning waste into wealth through blockchain-powered sustainability solutions in India.
              </p>
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
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>hello@biozenenergy.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>+91 80 1234 5678</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 BioZen Energy Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-white">
            NFC<span className="text-purple-400">Cards</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {["Accueil", "Services", "À Propos", "Portfolio", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={item === "À Propos" ? "/about" : `#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
              <div className="w-full h-0.5 bg-white"></div>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

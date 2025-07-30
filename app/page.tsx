"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { NFCCardAnimation } from "@/components/nfc-card-animation"
import { IPhoneInterface } from "@/components/iphone-interface"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const [showDemo, setShowDemo] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Navigation />

      <AnimatePresence mode="wait">
        {!showDemo ? (
          <motion.div
            key="main-content"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onStartDemo={() => setShowDemo(true)} />
            <Services />
            <Portfolio />
            <Contact />
          </motion.div>
        ) : (
          <motion.div
            key="demo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
          >
            {/* Background particles */}
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-20 relative z-10">
              {/* NFC Card */}
              <NFCCardAnimation onAnimationComplete={() => setAnimationComplete(true)} startAnimation={showDemo} />

              {/* iPhone */}
              <IPhoneInterface showInstagram={animationComplete} />
            </div>

            {/* Back button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              onClick={() => {
                setShowDemo(false)
                setAnimationComplete(false)
              }}
              className="absolute top-8 left-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              ← Retour au site
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

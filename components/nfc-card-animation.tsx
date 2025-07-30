"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface NFCCardAnimationProps {
  onAnimationComplete: () => void
  startAnimation: boolean
}

export function NFCCardAnimation({ onAnimationComplete, startAnimation }: NFCCardAnimationProps) {
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    if (startAnimation) {
      const timer1 = setTimeout(() => setAnimationPhase(1), 1000)
      const timer2 = setTimeout(() => setAnimationPhase(2), 2500)
      const timer3 = setTimeout(() => {
        setAnimationPhase(3)
        onAnimationComplete()
      }, 4000)

      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [startAnimation, onAnimationComplete])

  return (
    <div className="relative">
      {/* NFC Card */}
      <motion.div
        initial={{ x: 0, y: 0, scale: 1, rotateY: 0 }}
        animate={{
          x: animationPhase >= 2 ? 300 : 0,
          y: animationPhase >= 2 ? -50 : 0,
          scale: animationPhase >= 2 ? 0.8 : 1,
          rotateY: animationPhase >= 1 ? 15 : 0,
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Card Shadow */}
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: animationPhase >= 1 ? 0.6 : 0.3,
            scale: animationPhase >= 1 ? 1.1 : 1,
          }}
          className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-blue-600/50 rounded-2xl blur-xl transform translate-y-4"
        />

        {/* Main Card */}
        <div className="relative w-80 h-48 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          {/* Card Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/30 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full"></div>
          </div>

          {/* Card Content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <h3 className="text-2xl font-bold">NFC Card</h3>
                <p className="text-white/80 text-sm">Carte Personnalisée</p>
              </div>

              {/* NFC Symbol */}
              <motion.div
                animate={{
                  scale: animationPhase >= 1 ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 0.8,
                  repeat: animationPhase >= 1 ? Number.POSITIVE_INFINITY : 0,
                }}
                className="w-12 h-12 border-2 border-white/60 rounded-full flex items-center justify-center"
              >
                <div className="w-6 h-6 border border-white/60 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                </div>
              </motion.div>
            </div>

            <div className="text-white">
              <p className="text-lg font-semibold">@votre_profil</p>
              <p className="text-white/70 text-sm">Touchez pour ouvrir Instagram</p>
            </div>
          </div>

          {/* Holographic Effect */}
          <motion.div
            animate={{
              background:
                animationPhase >= 1
                  ? [
                      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                      "linear-gradient(225deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                    ]
                  : "transparent",
            }}
            transition={{
              duration: 2,
              repeat: animationPhase >= 1 ? Number.POSITIVE_INFINITY : 0,
            }}
            className="absolute inset-0"
          />
        </div>
      </motion.div>

      {/* Connection Lines */}
      <motion.div
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{
          opacity: animationPhase >= 2 ? 1 : 0,
          pathLength: animationPhase >= 2 ? 1 : 0,
        }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/2 left-full"
      >
        <svg width="300" height="100" className="overflow-visible">
          <motion.path
            d="M 0 50 Q 150 20 300 50"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -10],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Floating Particles */}
      {animationPhase >= 1 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * 320,
                y: Math.random() * 200,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                y: [null, -50, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  )
}

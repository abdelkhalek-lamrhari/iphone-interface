"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface IPhoneInterfaceProps {
  showInstagram: boolean
}

export function IPhoneInterface({ showInstagram }: IPhoneInterfaceProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="w-[375px] h-[812px] bg-black rounded-[55px] p-2 shadow-2xl">
        <div className="w-full h-full bg-gray-900 rounded-[45px] overflow-hidden relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[35%] h-[30px] bg-black rounded-b-2xl z-50"></div>

          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-8 pt-2 z-40 text-white text-sm">
            <div className="flex items-center gap-1">
              <span>
                {currentTime.getHours().toString().padStart(2, "0")}:
                {currentTime.getMinutes().toString().padStart(2, "0")}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="w-6 h-3 border border-white rounded-sm">
                <div className="w-4 h-1 bg-green-500 rounded-sm m-0.5"></div>
              </div>
            </div>
          </div>

          {/* Screen Content */}
          <div className="pt-12 h-full relative">
            <AnimatePresence mode="wait">
              {!showInstagram ? (
                <motion.div
                  key="homescreen"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                >
                  {/* Home Screen Apps */}
                  <div className="p-6 pt-8">
                    <div className="grid grid-cols-4 gap-6 mb-8">
                      {[
                        { name: "Messages", color: "bg-green-500", icon: "💬" },
                        { name: "Phone", color: "bg-green-600", icon: "📞" },
                        { name: "Safari", color: "bg-blue-500", icon: "🌐" },
                        { name: "Music", color: "bg-red-500", icon: "🎵" },
                      ].map((app, index) => (
                        <motion.div
                          key={app.name}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`w-14 h-14 ${app.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg`}
                        >
                          {app.icon}
                        </motion.div>
                      ))}
                    </div>

                    <div className="grid grid-cols-4 gap-6 mb-8">
                      {[
                        { name: "Camera", color: "bg-gray-700", icon: "📷" },
                        { name: "Photos", color: "bg-gradient-to-br from-yellow-400 to-pink-500", icon: "🖼️" },
                        {
                          name: "Instagram",
                          color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
                          icon: "📷",
                          isInstagram: true,
                        },
                        { name: "Settings", color: "bg-gray-600", icon: "⚙️" },
                      ].map((app, index) => (
                        <motion.div
                          key={app.name}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className={`w-14 h-14 ${app.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg ${app.isInstagram ? "ring-2 ring-white/50" : ""}`}
                        >
                          {app.icon}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Dock */}
                  <div className="absolute bottom-8 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4">
                      <div className="grid grid-cols-4 gap-4">
                        {[
                          { name: "Mail", color: "bg-blue-600", icon: "✉️" },
                          { name: "Calendar", color: "bg-red-600", icon: "📅" },
                          { name: "Notes", color: "bg-yellow-500", icon: "📝" },
                          { name: "Reminders", color: "bg-orange-500", icon: "✅" },
                        ].map((app, index) => (
                          <div
                            key={app.name}
                            className={`w-14 h-14 ${app.color} rounded-2xl flex items-center justify-center text-white text-xl shadow-lg`}
                          >
                            {app.icon}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="instagram"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-white"
                >
                  {/* Instagram Interface */}
                  <div className="h-full flex flex-col">
                    {/* Instagram Header */}
                    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Instagram
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 text-gray-700">❤️</div>
                        <div className="w-6 h-6 text-gray-700">💬</div>
                      </div>
                    </div>

                    {/* Stories */}
                    <div className="bg-white border-b border-gray-100 p-4">
                      <div className="flex gap-4 overflow-x-auto">
                        <div className="flex flex-col items-center gap-2 min-w-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-0.5">
                            <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                              👤
                            </div>
                          </div>
                          <span className="text-xs text-gray-600 truncate">Votre story</span>
                        </div>
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="flex flex-col items-center gap-2 min-w-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full p-0.5">
                              <div className="w-full h-full bg-gray-300 rounded-full"></div>
                            </div>
                            <span className="text-xs text-gray-600 truncate">ami_{i}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Feed */}
                    <div className="flex-1 overflow-y-auto">
                      {/* Post */}
                      <div className="bg-white border-b border-gray-100">
                        {/* Post Header */}
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm">
                              NFC
                            </div>
                            <div>
                              <div className="font-semibold text-sm">porta_card</div>
                              <div className="text-xs text-gray-500">Sponsorisé</div>
                            </div>
                          </div>
                          <div className="text-gray-600">⋯</div>
                        </div>

                        {/* Post Image */}
                        <div className="aspect-square bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="text-6xl mb-4">🎨</div>
                            <div className="text-xl font-bold">Cartes NFC</div>
                            <div className="text-sm opacity-80">Personnalisées</div>
                          </div>
                        </div>

                        {/* Post Actions */}
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-4">
                              <div className="text-xl">❤️</div>
                              <div className="text-xl">💬</div>
                              <div className="text-xl">📤</div>
                            </div>
                            <div className="text-xl">🔖</div>
                          </div>
                          <div className="text-sm font-semibold mb-2">1,234 mentions J'aime</div>
                          <div className="text-sm">
                            <span className="font-semibold">nfc_cards_custom</span> Découvrez nos cartes NFC
                            personnalisées ! Connectez votre monde physique au digital ✨ #NFC #Innovation #Digital
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="bg-white border-t border-gray-200 px-4 py-2">
                      <div className="flex items-center justify-around">
                        {["🏠", "🔍", "➕", "❤️", "👤"].map((icon, index) => (
                          <div key={index} className="p-3 text-xl">
                            {icon}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* iPhone Glow Effect */}
      <motion.div
        animate={{
          opacity: showInstagram ? 0.8 : 0.4,
          scale: showInstagram ? 1.05 : 1,
        }}
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-[55px] blur-2xl -z-10"
      />
    </div>
  )
}

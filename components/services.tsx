"use client"

import { motion } from "framer-motion"
import { Smartphone, Palette, Code, Zap } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Personnalisé",
      description: "Création de designs uniques qui reflètent parfaitement votre marque et votre identité visuelle.",
      features: ["Logo personnalisé", "Couleurs sur mesure", "Finitions premium", "Design responsive"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Cartes NFC Premium",
      description: "Cartes NFC de haute qualité avec technologie de pointe pour une connexion instantanée et fiable.",
      features: ["Puce NFC intégrée", "Matériaux durables", "Résistant à l'eau", "Longue durée de vie"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Applications Web",
      description: "Développement d'applications web sur mesure optimisées pour mobile et parfaitement intégrées.",
      features: ["Interface intuitive", "Responsive design", "Performance optimisée", "Analytics intégrés"],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intégration Complète",
      description: "Service complet d'intégration avec vos réseaux sociaux et plateformes digitales existantes.",
      features: ["Réseaux sociaux", "Site web", "E-commerce", "CRM integration"],
    },
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Nos{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Des solutions complètes pour transformer votre présence digitale avec la technologie NFC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-white/70">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

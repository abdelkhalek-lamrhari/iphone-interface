"use client"

import { motion } from "framer-motion"
import { ExternalLink, Heart, Share2 } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "Restaurant Le Gourmet",
      category: "Restauration",
      description: "Carte NFC pour menu digital et réservations instantanées",
      image: "🍽️",
      color: "from-orange-500 to-red-600",
      stats: { likes: "2.3k", shares: "456" },
    },
    {
      title: "Studio Photo Pro",
      category: "Photographie",
      description: "Portfolio interactif avec galerie et prise de rendez-vous",
      image: "📸",
      color: "from-purple-500 to-pink-600",
      stats: { likes: "1.8k", shares: "321" },
    },
    {
      title: "Boutique Mode",
      category: "E-commerce",
      description: "Catalogue produits avec liens directs vers la boutique en ligne",
      image: "👗",
      color: "from-blue-500 to-cyan-600",
      stats: { likes: "3.1k", shares: "678" },
    },
    {
      title: "Coach Fitness",
      category: "Sport & Santé",
      description: "Profil complet avec programmes d'entraînement et suivi",
      image: "💪",
      color: "from-green-500 to-emerald-600",
      stats: { likes: "2.7k", shares: "543" },
    },
    {
      title: "Artiste Musicien",
      category: "Musique",
      description: "Streaming musical et liens vers toutes les plateformes",
      image: "🎵",
      color: "from-indigo-500 to-purple-600",
      stats: { likes: "4.2k", shares: "892" },
    },
    {
      title: "Agent Immobilier",
      category: "Immobilier",
      description: "Catalogue de biens avec visite virtuelle intégrée",
      image: "🏠",
      color: "from-teal-500 to-blue-600",
      stats: { likes: "1.9k", shares: "234" },
    },
  ]

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Notre{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos créations les plus réussies et inspirez-vous pour votre projet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                {/* Project Image */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}
                >
                  {project.image}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-purple-400 font-semibold">{project.category}</span>
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {project.stats.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        {project.stats.shares}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Voir Plus de Projets(coming soon) 
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

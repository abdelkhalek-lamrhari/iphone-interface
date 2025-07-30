"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-8 leading-tight"
      >
        À Propos de Nous
      </motion.h1>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20"
      >
        <h2 className="text-3xl font-bold mb-6 text-purple-400">Notre Mission</h2>
        <p className="text-lg leading-relaxed mb-8">
          Chez NFC Cards, notre mission est de transformer la manière dont les entreprises et les individus
          interagissent avec le monde numérique. Nous sommes spécialisés dans la création de cartes NFC personnalisées
          et de solutions web sur mesure, offrant une passerelle unique entre le physique et le digital. Nous croyons en
          la puissance de la technologie pour simplifier, connecter et innover.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-purple-400">Ce Que Nous Faisons</h2>
        <p className="text-lg leading-relaxed mb-8">
          Nous concevons et fabriquons des cartes NFC uniques, adaptées à vos besoins spécifiques – qu'il s'agisse de
          cartes de visite intelligentes, de cartes d'accès, de solutions de paiement ou de marketing interactif. Chaque
          carte est un chef-d'œuvre de technologie et de design. En parallèle, nous développons des applications web
          personnalisées qui s'activent au contact de nos cartes NFC, offrant des expériences utilisateur fluides et
          innovantes. Imaginez une carte qui ouvre instantanément votre portfolio en ligne, un menu de restaurant
          interactif, ou un formulaire de contact pré-rempli.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-purple-400">Notre Expertise</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-3 mb-8">
          <li>Conception et fabrication de cartes NFC sur mesure</li>
          <li>Développement d'applications web dédiées aux interactions NFC</li>
          <li>Intégration de solutions numériques pour une expérience utilisateur optimale</li>
          <li>Design innovant et technologie de pointe</li>
          <li>Support client dédié et accompagnement personnalisé</li>
        </ul>

        <p className="text-lg leading-relaxed text-center font-semibold">
          Nous sommes passionnés par l'innovation et nous nous engageons à fournir des solutions qui non seulement
          répondent à vos attentes, mais les dépassent.
        </p>
      </motion.section>
    </div>
  )
}

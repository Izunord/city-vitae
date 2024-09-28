"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExperienceBar } from './app_experience-bar'
import { Modal } from './app_modal'

const buildings = [
  { id: 1, name: 'Castle', top: '23%', left: '13%', width: '25%', height: '25%', message: 'Visit the grand castle' },
  { id: 2, name: 'Shop', top: '35%', left: '40%', width: '15%', height: '15%', message: 'Browse the local shop' },
  { id: 3, name: 'House 1', top: '20%', left: '75%', width: '15%', height: '15%', message: 'Explore House 1' },
  { id: 4, name: 'House 2', top: '40%', left: '60%', width: '15%', height: '15%', message: 'Discover House 2' },
  { id: 5, name: 'Pond', top: '60%', left: '70%', width: '20%', height: '20%', message: 'Relax by the pond' },
  { id: 6, name: 'House 3', top: '55%', left: '48%', width: '15%', height: '15%', message: 'Check out House 3' },
  { id: 7, name: 'House 4', top: '55%', left: '15%', width: '15%', height: '15%', message: 'Visit House 4' },
]

export default function PixelVillage() {
  const [xp, setXp] = useState(0)
  const [visitedBuildings, setVisitedBuildings] = useState<number[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentBuilding, setCurrentBuilding] = useState<number | null>(null)
  const [showWindEffect, setShowWindEffect] = useState(false)

  const handleBuildingClick = (buildingId: number) => {
    if (!visitedBuildings.includes(buildingId)) {
      setXp(prevXp => prevXp + 15)
      setVisitedBuildings(prevVisited => [...prevVisited, buildingId])
    }
    setCurrentBuilding(buildingId)
    setIsModalOpen(true)
    setShowWindEffect(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentBuilding(null)
    setShowWindEffect(false)
  }

  useEffect(() => {
    if (showWindEffect) {
      const timer = setTimeout(() => {
        setShowWindEffect(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [showWindEffect])

  return (
    <div className="relative min-h-screen bg-cover bg-center w-100" style={{ backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/53bcwjiaqy1a1-iWb6bsvoWFWnXMXhu5dg2GSsiGvY0U.webp")' }}>
      <div className="absolute top-4 left-4 bg-white bg-opacity-80 p-2 rounded-lg">
        <h1 className="text-2xl font-bold text-green-800">Pouchele Adrien</h1>
      </div>
      <div className="absolute top-4 right-4 bg-white bg-opacity-80 p-2 rounded-lg">
        <ExperienceBar xp={xp} />
      </div>
      <div className="relative w-full h-screen">
        {buildings.map((building) => (
          <motion.button
            key={building.id}
            className="absolute bg-transparent hover:bg-white hover:bg-opacity-20 transition-colors duration-200 cursor-pointer"
            style={{
              top: building.top,
              left: building.left,
              width: building.width,
              height: building.height,
            }}
            onClick={() => handleBuildingClick(building.id)}
            whileHover={{ scale: 1.05 }}
            title={building.message}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">
            {buildings.find(b => b.id === currentBuilding)?.name}
          </h2>
          <p>This is where you can add specific content for each building.</p>
        </div>
      </Modal>
      <AnimatePresence>
        {showWindEffect && (
          <motion.div
            className="fixed inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(200)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: Math.random() * 5 + 2 + 'px',
                  height: Math.random() * 5 + 2 + 'px',
                  top: Math.random() * 100 + '%',
                  left: '-5px',
                }}
                animate={{
                  x: ['0vw', '100vw'],
                  y: [0, Math.random() * 50 - 25],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
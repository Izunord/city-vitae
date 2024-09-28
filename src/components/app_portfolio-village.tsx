"use client"

import { useState } from 'react'
import { ExperienceBar } from './app_experience-bar'
import { House } from 'lucide-react'
import { Modal } from './app_modal'

export default function PortfolioVillage() {
  const [xp, setXp] = useState(0)
  const [visitedHouses, setVisitedHouses] = useState<number[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentHouse, setCurrentHouse] = useState<number | null>(null)

  const handleHouseClick = (houseId: number) => {
    if (!visitedHouses.includes(houseId)) {
      setXp(prevXp => prevXp + 15)
      setVisitedHouses(prevVisited => [...prevVisited, houseId])
    }
    setCurrentHouse(houseId)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentHouse(null)
  }

  return (
    <div className="relative min-h-screen bg-green-100 p-8">
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <ExperienceBar xp={xp} />
      </div>
      <div className="grid grid-cols-3 gap-8 mt-16">
        {[...Array(9)].map((_, index) => (
          <House key={index} id={index + 1} onClick={() => handleHouseClick(index + 1)} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">House {currentHouse}</h2>
          {/* Add your content here */}
          <p>This is where you can add specific content for each house.</p>
        </div>
      </Modal>
    </div>
  )
}
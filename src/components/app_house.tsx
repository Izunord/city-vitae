import { Home } from 'lucide-react'

interface HouseProps {
  id: number
  onClick: () => void
}

export function House({ id, onClick }: HouseProps) {
  return (
    <div 
      className="bg-yellow-200 p-8 rounded-lg shadow-md cursor-pointer hover:bg-yellow-300 transition-colors"
      onClick={onClick}
    >
      <Home className="w-12 h-12 mx-auto mb-2" />
      <p className="text-center font-semibold">House {id}</p>
    </div>
  )
}
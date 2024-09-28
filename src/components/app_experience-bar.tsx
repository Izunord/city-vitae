interface ExperienceBarProps {
  xp: number
}

export function ExperienceBar({ xp }: ExperienceBarProps) {
  const maxXP = 105 // Maximum XP (7 buildings * 15 XP)
  const percentage = Math.min((xp / maxXP) * 100, 100)

  return (
    <div className="w-48">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-blue-700 mr-2">XP: {xp}/{maxXP}</span>
        <div className="w-24 bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
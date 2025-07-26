import { useState } from 'react'
import { FaRobot } from 'react-icons/fa'
import { FloatingAssistant } from './components/FloatingAssistant'

interface Position {
  x: number
  y: number
}

export default function App() {
  const [position] = useState<Position>({ x: 100, y: 100 })

  return (
    <div className='flex items-center justify-center h-screen top-0 left-0'>
      {/* <div
        style={{ left: position.x, top: position.y }}
        className="draggable-div fixed z-50 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl flex items-center justify-center cursor-move transition-all duration-300"
      >
        <FaRobot className="text-white text-3xl" />
      </div> */}
      <FloatingAssistant onOpenDialog={() => {}} />
    </div>
  )
}

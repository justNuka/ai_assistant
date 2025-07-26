import { useState } from "react";
import { FaRobot } from 'react-icons/fa'

interface FloatingAssistantProps {
  onOpenDialog: () => void;
}

interface Position {
  x: number
  y: number
}

export function FloatingAssistant({ onOpenDialog }: FloatingAssistantProps) {
  const [position] = useState<Position>({ x: 100, y: 100 })
  
  const handleClick = () => {
    onOpenDialog();
  };

  return (
    <>
      {/* Floating assistant button */}
      <div
        className="draggable-div fixed z-50"
        style={{ left: position.x, top: position.y }}
        onClick={handleClick}
      >
        <div className="glass-effect glass-hover rounded-full p-4 shadow-2xl transition-all duration-300 group">
          <div className="relative">
            <FaRobot className="text-white text-3xl" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
}

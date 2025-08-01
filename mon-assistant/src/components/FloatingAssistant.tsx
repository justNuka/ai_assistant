import { useDraggable } from '../hooks/useDraggable';
import { FaRobot } from 'react-icons/fa'

interface FloatingAssistantProps {
  onOpenDialog: () => void;
}

export function FloatingAssistant({ onOpenDialog }: FloatingAssistantProps) {
  const { position, isDragging, hasMoved, elementRef, handleMouseDown } = useDraggable({
    x: window.innerWidth - 120,
    y: 80
  });

  const handleClick = () => {
    if (!hasMoved) {
      onOpenDialog();
    }
  };

  return (
    <>
      {/* Floating assistant button */}
      <div
        ref={elementRef}
        className={`fixed z-50 ${isDragging ? 'drag-handle' : 'drag-handle'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
      >
        <div className="glass-effect glass-hover rounded-full p-4 shadow-2xl transition-all duration-300 animate-float group">
          <div className="relative">
            <FaRobot className="text-white text-3xl" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
}

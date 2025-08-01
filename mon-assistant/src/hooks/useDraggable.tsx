import { useState, useRef, useCallback, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DragState {
  isDragging: boolean;
  dragOffset: Position;
  hasMoved: boolean;
}

export function useDraggable(initialPosition?: Position) {
  const [position, setPosition] = useState<Position>(initialPosition || { x: 0, y: 0 });
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    dragOffset: { x: 0, y: 0 },
    hasMoved: false
  });
  
  const elementRef = useRef<HTMLDivElement>(null);
  const initialMousePos = useRef<Position>({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!elementRef.current) return;
    
    const rect = elementRef.current.getBoundingClientRect();
    const dragOffset = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    
    initialMousePos.current = { x: e.clientX, y: e.clientY };
    
    setDragState({
      isDragging: true,
      dragOffset,
      hasMoved: false
    });
    
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragState.isDragging || !elementRef.current) return;
    
    const newX = e.clientX - dragState.dragOffset.x;
    const newY = e.clientY - dragState.dragOffset.y;
    
    // Keep element within viewport bounds
    const maxX = window.innerWidth - elementRef.current.offsetWidth;
    const maxY = window.innerHeight - elementRef.current.offsetHeight;
    
    const boundedX = Math.max(0, Math.min(newX, maxX));
    const boundedY = Math.max(0, Math.min(newY, maxY));
    
    setPosition({ x: boundedX, y: boundedY });
    
    // Check if mouse has moved significantly
    const distance = Math.sqrt(
      Math.pow(e.clientX - initialMousePos.current.x, 2) +
      Math.pow(e.clientY - initialMousePos.current.y, 2)
    );
    
    if (distance > 5) {
      setDragState(prev => ({ ...prev, hasMoved: true }));
    }
  }, [dragState.isDragging, dragState.dragOffset]);

  const handleMouseUp = useCallback(() => {
    if (dragState.isDragging) {
      setDragState(prev => ({ ...prev, isDragging: false }));
    }
  }, [dragState.isDragging]);

  // Attach global mouse events
  useEffect(() => {
    if (dragState.isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [dragState.isDragging, handleMouseMove, handleMouseUp]);

  return {
    position,
    isDragging: dragState.isDragging,
    hasMoved: dragState.hasMoved,
    elementRef,
    handleMouseDown
  };
}

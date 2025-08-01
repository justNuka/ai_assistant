import { useState } from 'react';
import { FloatingAssistant } from '../components/FloatingAssistant';
import { MainDialog } from '../components/MainDialog';

export default function AssistantPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    console.log("handleOpenDialog called - opening dialog");
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    console.log("handleCloseDialog called - closing dialog");
    setIsDialogOpen(false);
  };

  console.log("AssistantPage render - isDialogOpen:", isDialogOpen);

  return (
    <div className="min-h-screen relative">
      <FloatingAssistant onOpenDialog={handleOpenDialog} />
      <MainDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
}

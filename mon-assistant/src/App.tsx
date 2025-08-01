import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import AssistantPage from "./pages/AssistantPage";

export default function App() {

  return (
    <>
      <TooltipProvider>
        <Toaster />
        <AssistantPage />
      </TooltipProvider>
    </>
  )
}

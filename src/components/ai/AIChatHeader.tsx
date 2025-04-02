
import React from "react";
import { Button } from "@/components/ui/button";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { X, Minimize2, Maximize2 } from "lucide-react";
import { useAIChat } from "./AIChatContext";

const AIChatHeader: React.FC = () => {
  const { isMinimized, toggleMinimize, handleClose } = useAIChat();

  return (
    <CardHeader className="p-3 border-b flex flex-row items-center justify-between space-y-0">
      <CardTitle className="text-base font-medium">FarmSphere Assistant</CardTitle>
      <div className="flex gap-1">
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={toggleMinimize}
        >
          {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0" 
          onClick={handleClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
  );
};

export default AIChatHeader;

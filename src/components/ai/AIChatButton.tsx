
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useAIChat } from "./AIChatContext";

const AIChatButton: React.FC = () => {
  const { toggleChat } = useAIChat();

  return (
    <Button 
      onClick={toggleChat}
      className="rounded-full h-14 w-14 shadow-lg bg-green-600 hover:bg-green-700"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default AIChatButton;

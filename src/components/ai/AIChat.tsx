
import React from "react";
import { AIChatProvider } from "./AIChatContext";
import AIChatButton from "./AIChatButton";
import AIChatWindow from "./AIChatWindow";
import { useAIChat } from "./AIChatContext";

const AIChatContent: React.FC = () => {
  const { isOpen } = useAIChat();

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? <AIChatButton /> : <AIChatWindow />}
    </div>
  );
};

const AIChat: React.FC = () => {
  return (
    <AIChatProvider>
      <AIChatContent />
    </AIChatProvider>
  );
};

export default AIChat;

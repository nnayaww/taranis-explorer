
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Send, Loader2 } from "lucide-react";
import { useAIChat } from "./AIChatContext";

const AIChatInput: React.FC = () => {
  const { message, setMessage, isLoading, handleSendMessage } = useAIChat();

  return (
    <CardFooter className="border-t p-3">
      <form onSubmit={handleSendMessage} className="flex w-full gap-2">
        <Input
          placeholder="Ask a question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
          className="flex-1"
        />
        <Button 
          type="submit" 
          size="icon" 
          disabled={isLoading || !message.trim()}
          className="bg-green-600 hover:bg-green-700"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>
    </CardFooter>
  );
};

export default AIChatInput;

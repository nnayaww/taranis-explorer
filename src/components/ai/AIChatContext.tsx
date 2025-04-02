
import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIResponse {
  response?: string;
  error?: string;
}

interface AIChatContextType {
  isOpen: boolean;
  isMinimized: boolean;
  messages: Message[];
  message: string;
  isLoading: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  setIsOpen: (value: boolean) => void;
  setIsMinimized: (value: boolean) => void;
  setMessage: (value: string) => void;
  handleSendMessage: (e?: React.FormEvent) => Promise<void>;
  toggleChat: () => void;
  toggleMinimize: (e: React.MouseEvent) => void;
  handleClose: (e: React.MouseEvent) => void;
}

const AIChatContext = createContext<AIChatContextType | null>(null);

export const AIChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!message.trim()) return;
    
    const userMessage = { role: "user" as const, content: message.trim() };
    setMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      console.log("Sending message to AI assistant:", userMessage.content);
      
      const { data, error } = await supabase.functions.invoke<AIResponse>('ai-assistant', {
        body: { message: userMessage.content }
      });

      console.log("AI assistant response:", data);
      console.log("AI assistant error:", error);

      if (error) {
        console.error("Supabase function error:", error);
        throw new Error(error.message || "Error calling AI assistant function");
      }

      if (!data) {
        throw new Error("No data received from AI assistant");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: data.response || "I'm sorry, I couldn't process your request." 
      }]);
    } catch (error: unknown) {
      console.error("Error in AI chat:", error);
      
      let errorMessage = "I'm sorry, I encountered an error processing your request. Please try again later.";
      
      if (error instanceof Error) {
        const isQuotaError = error.message.includes("quota") || 
                            error.message.includes("API plan") || 
                            error.message.includes("insufficient");
        
        if (isQuotaError) {
          errorMessage = "I'm sorry, the AI service is currently unavailable due to usage limits. Please try again later.";
        }
        
        toast({
          title: "Error",
          description: `Failed to get a response: ${error.message}`,
          variant: "destructive"
        });
      }
      
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: errorMessage 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    setIsMinimized(false);
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(prev => !prev);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const value = {
    isOpen,
    isMinimized,
    messages,
    message,
    isLoading,
    messagesEndRef,
    setIsOpen,
    setIsMinimized,
    setMessage,
    handleSendMessage,
    toggleChat,
    toggleMinimize,
    handleClose
  };

  return (
    <AIChatContext.Provider value={value}>
      {children}
    </AIChatContext.Provider>
  );
};

export const useAIChat = () => {
  const context = useContext(AIChatContext);
  if (!context) {
    throw new Error("useAIChat must be used within an AIChatProvider");
  }
  return context;
};

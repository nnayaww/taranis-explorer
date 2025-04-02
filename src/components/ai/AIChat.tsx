import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { MessageCircle, Send, X, Minimize2, Maximize2, Loader2 } from "lucide-react";
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

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadChatbase = () => {
      if (!document.getElementById("x5BiAxhbWsaR4cddUFPut")) {
        const script = document.createElement("script");
        script.src = "https://www.chatbase.co/embed.min.js";
        script.id = "x5BiAxhbWsaR4cddUFPut";
        script.setAttribute("domain", "www.chatbase.co");
        document.body.appendChild(script);
      }
    };

    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args: any[]) => {
        if (!window.chatbase.q) {
          window.chatbase.q = [];
        }
        window.chatbase.q.push(args);
      };
      
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") {
            return target.q;
          }
          if (typeof prop === 'string') {
            return (...args: any[]) => target(prop, ...args);
          }
          return undefined;
        }
      });
      
      if (document.readyState === "complete") {
        loadChatbase();
      } else {
        window.addEventListener("load", loadChatbase);
      }
    }

    return () => {
      window.removeEventListener("load", loadChatbase);
    };
  }, []);

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

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button 
          onClick={toggleChat}
          className="rounded-full h-14 w-14 shadow-lg bg-green-600 hover:bg-green-700"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      ) : (
        <Card className={`w-80 sm:w-96 shadow-xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[500px]'}`}>
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
          
          <Collapsible open={!isMinimized}>
            <CollapsibleContent className="flex flex-col h-[calc(500px-120px)]">
              <CardContent className="p-3 overflow-y-auto h-full">
                {messages.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 space-y-2">
                    <MessageCircle className="h-10 w-10 text-green-600" />
                    <p>Ask me anything about agricultural intelligence,<br />crop monitoring, or farming technology.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            msg.role === "user"
                              ? "bg-green-600 text-white"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {msg.content}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>
                )}
              </CardContent>
              
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
            </CollapsibleContent>
          </Collapsible>
        </Card>
      )}
    </div>
  );
};

export default AIChat;

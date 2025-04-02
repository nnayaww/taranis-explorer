
import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useAIChat } from "./AIChatContext";
import AIChatHeader from "./AIChatHeader";
import AIChatMessages from "./AIChatMessages";
import AIChatInput from "./AIChatInput";

const AIChatWindow: React.FC = () => {
  const { isMinimized } = useAIChat();
  
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

  return (
    <Card className={`w-80 sm:w-96 shadow-xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[500px]'}`}>
      <AIChatHeader />
      <Collapsible open={!isMinimized}>
        <CollapsibleContent className="flex flex-col h-[calc(500px-120px)]">
          <AIChatMessages />
          <AIChatInput />
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default AIChatWindow;

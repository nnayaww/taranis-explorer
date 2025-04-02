
import React from "react";
import { CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { useAIChat } from "./AIChatContext";

const AIChatMessages: React.FC = () => {
  const { messages, messagesEndRef } = useAIChat();

  return (
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
  );
};

export default AIChatMessages;

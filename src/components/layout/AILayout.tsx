
import React from "react";
import AIChat from "../ai/AIChat";

type AILayoutProps = {
  children: React.ReactNode;
};

const AILayout: React.FC<AILayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <AIChat />
    </>
  );
};

export default AILayout;

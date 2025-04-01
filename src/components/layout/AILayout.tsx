
import React from "react";
import Layout from "./Layout";
import AIChat from "../ai/AIChat";

type AILayoutProps = {
  children: React.ReactNode;
};

const AILayout: React.FC<AILayoutProps> = ({ children }) => {
  return (
    <Layout>
      {children}
      <AIChat />
    </Layout>
  );
};

export default AILayout;

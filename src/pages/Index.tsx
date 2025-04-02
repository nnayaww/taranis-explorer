
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Solutions from "@/components/home/Solutions";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Solutions />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;

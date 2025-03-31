
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900 mix-blend-multiply opacity-90" />
        <img
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Agriculture field"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          AI-Powered Intelligence for Agriculture
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-gray-300">
          Revolutionize your farming operations with real-time insights, actionable intelligence, and predictive analytics to maximize your yield potential.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-medium shadow-lg">
            Get Started
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-900 px-8 py-3 text-base font-medium">
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

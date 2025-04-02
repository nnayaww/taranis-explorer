
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <div className="bg-green-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to transform your agriculture?</span>
          <span className="block text-green-200">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
          <Button className="bg-white text-green-700 hover:bg-green-50 px-6 py-3 text-base font-medium shadow-lg">
            Get Started
          </Button>
          <Button className="border-white bg-transparent text-white hover:bg-white hover:text-green-700 px-6 py-3 text-base font-medium border">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;

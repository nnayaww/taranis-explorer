
import { Leaf, BarChart3, CloudRain, Sprout } from "lucide-react";

const features = [
  {
    name: "Crop Monitoring",
    description: "Identify emerging issues early with high-resolution imagery and AI-powered analysis across your entire operation.",
    icon: Leaf,
  },
  {
    name: "Disease Detection",
    description: "Automatically detect and identify diseases, pests, and weeds with advanced computer vision technology.",
    icon: Sprout,
  },
  {
    name: "Weather Intelligence",
    description: "Make informed decisions with hyperlocal weather forecasts and growing degree day calculations.",
    icon: CloudRain,
  },
  {
    name: "Yield Analytics",
    description: "Predict yields and optimize inputs with historical data analysis and machine learning algorithms.",
    icon: BarChart3,
  },
];

const Features = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to monitor your crops
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform provides comprehensive insights for every stage of crop development
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-green-100 rounded-lg p-2 inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

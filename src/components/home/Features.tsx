
import { Leaf, BarChart3, CloudRain, Sprout } from "lucide-react";

const features = [
  {
    name: "Crop Monitoring",
    description: "Identify emerging issues early with high-resolution imagery and AI-powered analysis across your entire operation.",
    icon: Leaf,
    image: "/lovable-uploads/photo-1518495973542-4542c06a5843.png"
  },
  {
    name: "Disease Detection",
    description: "Automatically detect and identify diseases, pests, and weeds with advanced computer vision technology.",
    icon: Sprout,
    image: "/lovable-uploads/photo-1509316975850-ff9c5deb0cd9.png"
  },
  {
    name: "Weather Intelligence",
    description: "Make informed decisions with hyperlocal weather forecasts and growing degree day calculations.",
    icon: CloudRain,
    image: "/lovable-uploads/photo-1482938289607-e9573fc25ebb.png"
  },
  {
    name: "Yield Analytics",
    description: "Predict yields and optimize inputs with historical data analysis and machine learning algorithms.",
    icon: BarChart3,
    image: "/lovable-uploads/photo-1469474968028-56623f02e42e.png"
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
              <div key={feature.name} className="relative p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow overflow-hidden group">
                {/* Background image with overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity">
                  <img 
                    src={feature.image} 
                    alt={feature.name} 
                    className="w-full h-full object-cover"
                    key={feature.image} // Add a key to force re-render when image changes
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="bg-green-100 rounded-lg p-2 inline-block mb-4">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured technology image */}
        <div className="mt-20 lg:mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                The Role of Technology in Modern Agriculture
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                A farmer does not grow crops. A farmer creates an environment where crops can grow. Our technology helps create the perfect environment for your crops to thrive.
              </p>
              <div className="mt-6 text-base text-gray-500 space-y-4">
                <p>
                  With our integrated platform, farmers can access real-time data on soil conditions, weather forecasts, and crop health—all from the palm of their hand.
                </p>
                <p>
                  FarmSphere technology empowers farmers to make informed decisions, reduce waste, and maximize yields while minimizing environmental impact.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 flex justify-center">
              <div className="relative w-full lg:max-w-md">
                <img 
                  src="/lovable-uploads/photo-1513836279014-a89f7a76ae86.png" 
                  alt="Agricultural technology" 
                  className="rounded-lg shadow-xl"
                  key="tech-image" // Add key to force re-render
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-md border border-gray-100">
                  <img 
                    src="/lovable-uploads/photo-1465146344425-f00d5f5c8f07.png" 
                    alt="Farming quote" 
                    className="w-64 h-auto"
                    key="quote-image" // Add key to force re-render
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;


import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

// Mock data for solutions
const solutionsData = {
  "crop-monitoring": {
    title: "Crop Monitoring",
    description: "Real-time monitoring of crop health, growth, and development throughout the entire growing season.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    features: [
      "Daily high-resolution imagery",
      "Vegetation indices tracking",
      "Growth stage monitoring",
      "Anomaly detection",
      "Historical comparison",
      "Custom alerts and notifications"
    ],
    benefits: [
      "Early detection of crop stress",
      "Targeted application of inputs",
      "Reduced scouting time",
      "Data-driven decision making",
      "Improved yield potential"
    ]
  },
  "disease-detection": {
    title: "Disease & Pest Detection",
    description: "Early identification of diseases, pests, and weeds using advanced AI and image recognition.",
    image: "https://images.unsplash.com/photo-1628352081568-6a763b86ea71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    features: [
      "AI-powered disease recognition",
      "Weed identification and mapping",
      "Pest pressure monitoring",
      "Treatment recommendation engine",
      "Risk forecasting",
      "Integration with spray controllers"
    ],
    benefits: [
      "Reduced crop losses",
      "Optimized chemical usage",
      "Lower environmental impact",
      "Cost savings on inputs",
      "Improved crop quality"
    ]
  },
  "yield-prediction": {
    title: "Yield Prediction",
    description: "Accurate forecasting of crop yields based on historical data, current conditions, and AI models.",
    image: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    features: [
      "Field-level yield forecasting",
      "Multi-year data analysis",
      "Weather impact modeling",
      "Harvest planning tools",
      "Market integration",
      "Financial projections"
    ],
    benefits: [
      "Better harvest planning",
      "Improved marketing decisions",
      "Enhanced financial forecasting",
      "Optimized storage requirements",
      "Data-driven crop insurance"
    ]
  },
  "enterprise": {
    title: "Enterprise Management",
    description: "Comprehensive management tools for agricultural businesses operating at scale.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Multi-field management",
      "Team collaboration tools",
      "Role-based access control",
      "Enterprise reporting",
      "API integrations",
      "Custom workflows"
    ],
    benefits: [
      "Streamlined operations",
      "Improved team coordination",
      "Centralized data management",
      "Standardized practices",
      "Scalable growth"
    ]
  },
  "farmers": {
    title: "For Farmers",
    description: "Intuitive tools designed specifically for individual farmers and small operations.",
    image: "https://images.unsplash.com/photo-1626953981882-a15372b35980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Simple, intuitive interface",
      "Mobile-first design",
      "Field-level insights",
      "Quick action recommendations",
      "Weather integration",
      "Equipment tracking"
    ],
    benefits: [
      "Ease of use",
      "Time savings",
      "Practical recommendations",
      "Increased profitability",
      "Sustainable practices"
    ]
  },
  "agronomists": {
    title: "For Agronomists",
    description: "Advanced tools for agricultural consultants to monitor multiple fields and provide data-driven recommendations.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Client field management",
      "Advanced analytics",
      "Custom recommendation engine",
      "Report generation",
      "Communication tools",
      "Historical data analysis"
    ],
    benefits: [
      "Data-backed recommendations",
      "More clients serviced",
      "Enhanced client relationships",
      "Value-added services",
      "Improved client outcomes"
    ]
  }
};

const SolutionDetail = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const solution = solutionId ? solutionsData[solutionId as keyof typeof solutionsData] : null;

  if (!solution) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Solution not found</h1>
            <p className="mt-4 text-gray-500">The solution you're looking for doesn't exist or has been moved.</p>
            <Link to="/solutions" className="mt-6 inline-block">
              <Button className="bg-green-600 hover:bg-green-700">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Solutions
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0">
            <img 
              src={solution.image} 
              alt={solution.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900 bg-opacity-70 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {solution.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              {solution.description}
            </p>
            <div className="mt-10">
              <Link to="/solutions">
                <Button variant="outline" className="bg-white text-green-700 border-white hover:bg-gray-100">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
              <p className="mt-4 text-lg text-gray-500">
                Everything you need to implement {solution.title.toLowerCase()} effectively.
              </p>
              <ul className="mt-8 space-y-4">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-lg text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Benefits</h2>
              <p className="mt-4 text-lg text-gray-500">
                Why our {solution.title.toLowerCase()} solution stands out from the rest.
              </p>
              <ul className="mt-8 space-y-4">
                {solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-lg text-gray-700">{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-green-700">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block text-green-200">Contact us today for a demo.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Button className="bg-white text-green-600 hover:bg-gray-50">
                  Request Demo
                </Button>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Button variant="outline" className="text-white border-white hover:bg-green-800">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SolutionDetail;

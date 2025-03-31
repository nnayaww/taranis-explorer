
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plant, Bug, BarChart3, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionCard = ({ title, description, icon: Icon, link }: { 
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
}) => (
  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
      <Icon className="text-green-600 h-6 w-6" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to={link}>
      <Button variant="link" className="text-green-600 p-0 flex items-center">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  </div>
);

const Solutions = () => {
  return (
    <Layout>
      <div className="pt-12 pb-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Solutions
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Comprehensive intelligence solutions tailored for every stakeholder in modern agriculture
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <SolutionCard
              title="Crop Monitoring"
              description="Real-time monitoring of crop health, growth, and development throughout the entire growing season."
              icon={Plant}
              link="/solutions/crop-monitoring"
            />
            <SolutionCard
              title="Disease & Pest Detection"
              description="Early identification of diseases, pests, and weeds using advanced AI and image recognition."
              icon={Bug}
              link="/solutions/disease-detection"
            />
            <SolutionCard
              title="Yield Prediction"
              description="Accurate forecasting of crop yields based on historical data, current conditions, and AI models."
              icon={BarChart3}
              link="/solutions/yield-prediction"
            />
            <SolutionCard
              title="Enterprise Management"
              description="Comprehensive management tools for agricultural businesses operating at scale."
              icon={Building2}
              link="/solutions/enterprise"
            />
            <SolutionCard
              title="For Farmers"
              description="Intuitive tools designed specifically for individual farmers and small operations."
              icon={Plant}
              link="/solutions/farmers"
            />
            <SolutionCard
              title="For Agronomists"
              description="Advanced tools for agricultural consultants to monitor multiple fields and provide data-driven recommendations."
              icon={Plant}
              link="/solutions/agronomists"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;

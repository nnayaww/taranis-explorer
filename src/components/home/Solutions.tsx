
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "For Farmers",
    description: "Real-time insights on crop health, pest threats, and optimal intervention times to maximize yield.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "/solutions/farmers",
  },
  {
    title: "For Agronomists",
    description: "Powerful tools to monitor multiple fields, identify patterns, and provide data-driven recommendations.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    link: "/solutions/agronomists",
  },
  {
    title: "For Enterprises",
    description: "Comprehensive intelligence platform for agricultural businesses managing large-scale operations.",
    image: "https://images.unsplash.com/photo-1589923188651-268a9765eb58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "/solutions/enterprises",
  }
];

const Solutions = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Tailored for every agricultural need
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We provide specialized solutions for different stakeholders in agriculture
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src={solution.image} 
                  alt={solution.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                <p className="mt-2 text-gray-600">{solution.description}</p>
                <div className="mt-4">
                  <Link to={solution.link}>
                    <Button variant="link" className="text-green-600 p-0 flex items-center">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;

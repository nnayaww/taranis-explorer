
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

// Define the correct type for solutions
type Solution = Database["public"]["Tables"]["solutions"]["Row"];

const Solutions = () => {
  const { data: solutions, isLoading, error } = useQuery({
    queryKey: ['homeSolutions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('solutions')
        .select('*')
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

  // Custom image mapping based on solution titles
  const getImageForSolution = (title: string) => {
    if (title.includes("Crop Monitoring") || title.includes("crop") || title.includes("monitoring")) {
      return "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
    } else if (title.includes("Disease") || title.includes("Pest") || title.includes("detection")) {
      return "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
    } else if (title.includes("Yield") || title.includes("Prediction") || title.includes("Analytics")) {
      return "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
    }
    // Fixed: Changed 'solution?.image_url' to a default image URL
    return "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
  };

  if (isLoading) {
    return (
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tailored for every agricultural need
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Loading solutions...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.error("Error loading solutions:", error);
    return (
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tailored for every agricultural need
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Could not load solutions. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

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
          {solutions?.map((solution: Solution) => (
            <div key={solution.id} className="relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200">
                <img 
                  src={getImageForSolution(solution.title)} 
                  alt={solution.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                <p className="mt-2 text-gray-600">{solution.description}</p>
                <div className="mt-4">
                  <Link to={`/solutions/${solution.slug}`}>
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

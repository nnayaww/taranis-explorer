
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout, Bug, BarChart3, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

// Define the correct type for solutions
type Solution = Database["public"]["Tables"]["solutions"]["Row"];

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

const getIconForSolution = (title: string) => {
  if (title.includes("Disease") || title.includes("Pest")) return Bug;
  if (title.includes("Yield") || title.includes("Analytics")) return BarChart3;
  if (title.includes("Enterprise") || title.includes("Agronomists")) return Building2;
  return Sprout;
};

const Solutions = () => {
  const { data: solutions, isLoading, error } = useQuery({
    queryKey: ['solutions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('solutions')
        .select('*');
      
      if (error) throw error;
      return data;
    },
  });

  // Log any errors to console for debugging
  useEffect(() => {
    if (error) {
      console.error("Error fetching solutions:", error);
    }
  }, [error]);

  return (
    <>
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

          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">Loading solutions...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-lg text-red-600">Error loading solutions. Please try again later.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {solutions?.map((solution: Solution) => (
                <SolutionCard
                  key={solution.id}
                  title={solution.title}
                  description={solution.description}
                  icon={getIconForSolution(solution.title)}
                  link={`/solutions/${solution.slug}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Solutions;

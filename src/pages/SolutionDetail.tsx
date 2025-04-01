
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

// Define the correct type for solutions
type Solution = Database["public"]["Tables"]["solutions"]["Row"];

const SolutionDetail = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  
  const { data: solution, isLoading, error } = useQuery({
    queryKey: ['solution', solutionId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('solutions')
        .select('*')
        .eq('slug', solutionId as string)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!solutionId,
  });

  if (isLoading) {
    return (
      <>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Loading...</h1>
          </div>
        </div>
      </>
    );
  }

  if (error || !solution) {
    return (
      <>
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
      </>
    );
  }

  return (
    <>
      <div className="bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0">
            <img 
              src={solution.image_url} 
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
                {solution.features.map((feature: string, index: number) => (
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
                {solution.benefits.map((benefit: string, index: number) => (
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
    </>
  );
};

export default SolutionDetail;

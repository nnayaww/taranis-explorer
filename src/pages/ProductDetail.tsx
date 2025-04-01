
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Download } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

// Define the correct type for products
type Product = Database["public"]["Tables"]["products"]["Row"];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', productId as string)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!productId,
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Loading...</h1>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Product not found</h1>
            <p className="mt-4 text-gray-500">The product you're looking for doesn't exist or has been moved.</p>
            <Link to="/products" className="mt-6 inline-block">
              <Button className="bg-green-600 hover:bg-green-700">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
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
              src={product.image_url} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900 bg-opacity-70 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {product.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              {product.description}
            </p>
            <div className="mt-10">
              <Link to="/products">
                <Button variant="outline" className="bg-white text-green-700 border-white hover:bg-gray-100">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Overview</h2>
              <p className="mt-4 text-lg text-gray-500">
                {product.long_description}
              </p>
              <div className="mt-8">
                <Button className="bg-green-600 hover:bg-green-700">
                  Request a Demo
                </Button>
                <Button variant="outline" className="ml-4 border-green-600 text-green-600 hover:bg-green-50">
                  <Download className="mr-2 h-4 w-4" /> Download Brochure
                </Button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-green-50">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Product Specifications</h3>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                    {product.specifications.map((spec: string, index: number) => (
                      <div key={index} className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">{spec.split(': ')[0]}</dt>
                        <dd className="mt-1 text-sm text-gray-900">{spec.split(': ')[1]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Key Features</h2>
              <p className="mt-4 text-lg text-gray-500">
                Everything you need to maximize your agricultural intelligence
              </p>
            </div>
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
              {product.features.map((feature: string, index: number) => (
                <div key={index} className="relative">
                  <dt>
                    <Check className="absolute h-6 w-6 text-green-500" />
                    <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature}</p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-green-700">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">What our customers are saying</h2>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="px-6 py-8 sm:p-10">
                  <div className="text-xl text-gray-700 italic leading-relaxed">
                    "{product.testimonial_quote}"
                  </div>
                  <div className="mt-6 text-right">
                    <p className="text-base font-semibold text-gray-900">— {product.testimonial_author}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to transform your agricultural operation?</span>
              <span className="block text-green-600">Start with {product.title} today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;

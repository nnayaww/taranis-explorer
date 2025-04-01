
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Camera, Cpu, Cloud, Database as DatabaseIcon, Globe } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import type { Database } from "@/integrations/supabase/types";
import { useState } from "react";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";

// Define the correct type for products
type Product = Database["public"]["Tables"]["products"]["Row"];

const ProductCard = ({ title, description, features, image, slug }: {
  title: string;
  description: string;
  features: string[];
  image: string;
  slug: string;
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 border border-gray-100">
    <div className="md:flex">
      <div className="md:w-2/5">
        <img 
          src={image} 
          alt={title} 
          className="h-64 w-full object-cover md:h-full"
        />
      </div>
      <div className="p-8 md:w-3/5">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-6">
          <h4 className="text-sm uppercase text-gray-500 font-semibold mb-3">Key Features</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Link to={`/products/${slug}`}>
          <Button className="bg-green-600 hover:bg-green-700">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  </div>
);

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  const { data: products, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*');
      
      if (error) throw error;
      return data;
    },
  });

  // Calculate pagination values
  const totalProducts = products?.length || 0;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  
  // Get current products
  const getCurrentProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products?.slice(startIndex, endIndex) || [];
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Generate page numbers array for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <>
      <div className="pt-12 pb-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Products
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Cutting-edge agricultural intelligence tools designed to revolutionize farming
            </p>
          </div>

          <div className="mt-12">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">Loading products...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-lg text-red-600">Error loading products. Please try again later.</p>
              </div>
            ) : (
              <>
                {getCurrentProducts().map((product: Product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    features={product.features.slice(0, 4)} // Limit to 4 features for display
                    image={product.image_url}
                    slug={product.slug}
                  />
                ))}
                
                {/* Pagination */}
                {totalProducts > productsPerPage && (
                  <div className="mt-12">
                    <Pagination>
                      <PaginationContent>
                        {currentPage > 1 && (
                          <PaginationItem>
                            <PaginationPrevious 
                              onClick={() => handlePageChange(currentPage - 1)}
                              className="cursor-pointer"
                            />
                          </PaginationItem>
                        )}
                        
                        {getPageNumbers().map(number => (
                          <PaginationItem key={number}>
                            <PaginationLink
                              isActive={currentPage === number}
                              onClick={() => handlePageChange(number)}
                              className="cursor-pointer"
                            >
                              {number}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        
                        {currentPage < totalPages && (
                          <PaginationItem>
                            <PaginationNext 
                              onClick={() => handlePageChange(currentPage + 1)}
                              className="cursor-pointer"
                            />
                          </PaginationItem>
                        )}
                      </PaginationContent>
                    </Pagination>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="bg-green-50 rounded-xl p-8 mt-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Our Technology Stack</h2>
              <p className="text-gray-600 mt-2">Powered by cutting-edge technologies</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow mb-3">
                  <Camera className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-medium">Advanced Imaging</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow mb-3">
                  <Cpu className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-medium">AI Processing</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow mb-3">
                  <Cloud className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-medium">Cloud Platform</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow mb-3">
                  <DatabaseIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-medium">Big Data Analysis</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

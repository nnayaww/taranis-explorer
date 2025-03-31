
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Determine if this is a specific content page that doesn't exist yet
  const isSpecificContent = path.includes('/solutions/') || 
                           path.includes('/products/') || 
                           path.includes('/insights/');
  
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              {isSpecificContent ? "Content Coming Soon" : "Page not found"}
            </h2>
            <p className="mt-2 text-base text-gray-500">
              {isSpecificContent 
                ? "This detailed content is currently in development. Please check back later."
                : "The page you're looking for doesn't exist or has been moved."}
            </p>
          </div>
          <div className="mt-8">
            <Link to={isSpecificContent ? path.split('/').slice(0, 2).join('/') : "/"}>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                {isSpecificContent ? "Back to Overview" : "Go back home"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;


import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Download } from "lucide-react";

// Mock data for products
const productsData = {
  "taranis-aerialimaging": {
    title: "Taranis AerialImaging",
    description: "High-resolution aerial imagery capture and processing for comprehensive field monitoring.",
    longDescription: "Taranis AerialImaging provides the industry's highest resolution imagery at 0.5mm per pixel, enabling you to see issues at a leaf level that are invisible to the human eye and standard drone imagery. Our proprietary capture technology works with both drones and manned aircraft to deliver unparalleled detail.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    features: [
      "Ultra-high-resolution imagery (0.5mm per pixel)",
      "Proprietary image capture technology",
      "Compatible with drones and manned aircraft",
      "Rapid processing and delivery",
      "Multi-spectral imaging options",
      "Automated flight planning"
    ],
    specifications: [
      "Resolution: 0.5mm per pixel",
      "Coverage: Up to 1,000 acres per hour",
      "Processing time: 24-48 hours",
      "Output formats: TIFF, JPG, PNG, GeoTIFF",
      "Platform integration: DJI, Parrot, AgEagle, and more",
      "Data storage: Secure cloud storage included"
    ],
    testimonial: {
      quote: "Taranis AerialImaging has transformed how we monitor our fields. We're seeing issues weeks before they'd be visible to the naked eye.",
      author: "John Deere, Farm Manager at Heartland Agriculture"
    }
  },
  "taranis-fieldai": {
    title: "Taranis FieldAI",
    description: "Advanced AI-powered analysis of field imagery to detect issues before they become visible to the human eye.",
    longDescription: "Taranis FieldAI combines cutting-edge machine learning with agronomic expertise to analyze ultra-high-resolution imagery and identify emerging threats to your crop. Our AI can detect early signs of disease, pests, nutrient deficiencies, and weed pressure before they cause significant damage.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    features: [
      "Early disease detection",
      "Weed identification and mapping",
      "Nutrient deficiency analysis",
      "Plant count and stand evaluation",
      "Automatic issue classification",
      "Severity assessment and prioritization"
    ],
    specifications: [
      "Detection accuracy: >95% for major diseases and pests",
      "Weed library: Over 500 species identified",
      "Processing capacity: Unlimited field analysis",
      "Update frequency: Daily algorithm improvements",
      "Integration: API available for third-party platforms",
      "Export options: CSV, PDF, Shape files"
    ],
    testimonial: {
      quote: "FieldAI identified a fungal infection in our wheat crop two weeks before it became visible. This early detection saved us over $30,000 in potential losses.",
      author: "Sarah Miller, Agronomist at Midwest Farms"
    }
  },
  "taranis-fieldinsight": {
    title: "Taranis FieldInsight",
    description: "Comprehensive dashboard for monitoring and managing all aspects of field health and operations.",
    longDescription: "Taranis FieldInsight brings together all your agricultural data into a single, intuitive platform. Monitor field health, track interventions, plan operations, and make data-driven decisions with our comprehensive dashboard that puts actionable insights at your fingertips.",
    image: "https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    features: [
      "Customizable user interface",
      "Real-time alerts and notifications",
      "Historical data tracking and comparison",
      "Multi-field management tools",
      "Weather integration",
      "Prescription map generation"
    ],
    specifications: [
      "Platform: Web and mobile (iOS/Android)",
      "Users: Unlimited with role-based access",
      "Fields: Unlimited with grouping capabilities",
      "Data storage: 5 years included",
      "Offline capability: Yes, with auto-sync",
      "Security: SOC 2 Type II compliant"
    ],
    testimonial: {
      quote: "FieldInsight has become the central hub for all our farm operations. The ability to see everything in one place and collaborate with our agronomist has streamlined our entire operation.",
      author: "Michael Johnson, Owner of Johnson Family Farms"
    }
  }
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productsData[productId as keyof typeof productsData] : null;

  if (!product) {
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
              src={product.image} 
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
                {product.longDescription}
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
                    {product.specifications.map((spec, index) => (
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
              {product.features.map((feature, index) => (
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
                    "{product.testimonial.quote}"
                  </div>
                  <div className="mt-6 text-right">
                    <p className="text-base font-semibold text-gray-900">— {product.testimonial.author}</p>
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

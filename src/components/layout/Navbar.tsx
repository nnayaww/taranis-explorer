
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-600">Taranis</span>
              <span className="ml-1 text-sm text-gray-500">Explorer</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/solutions" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Solutions
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Products
            </Link>
            <Link to="/insights" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Insights
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              About
            </Link>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              Request Demo
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/solutions" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              Solutions
            </Link>
            <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              Products
            </Link>
            <Link to="/insights" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              Insights
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors font-medium">
              About
            </Link>
            <div className="px-3 py-2">
              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

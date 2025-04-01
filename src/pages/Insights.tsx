
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    title: "The Future of Precision Agriculture in 2023",
    excerpt: "How emerging technologies are revolutionizing the way farmers monitor and manage their crops.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    date: "June 15, 2023",
    author: "Dr. Maria Rodriguez",
    readTime: "8 min read",
    category: "Technology",
    slug: "future-precision-agriculture-2023"
  },
  {
    title: "Early Disease Detection: A Game Changer for Crop Management",
    excerpt: "How early detection of plant diseases can drastically reduce crop losses and improve agricultural sustainability.",
    image: "https://images.unsplash.com/photo-1628352081568-6a763b86ea71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "May 22, 2023",
    author: "James Thompson",
    readTime: "6 min read",
    category: "Research",
    slug: "early-disease-detection-crop-management"
  },
  {
    title: "Maximizing Yield Through Data-Driven Decision Making",
    excerpt: "Case studies showing how farmers increased their yields by 30% through systematic application of agricultural intelligence.",
    image: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    date: "April 10, 2023",
    author: "Emma Chen, PhD",
    readTime: "12 min read",
    category: "Case Study",
    slug: "maximizing-yield-data-driven-decisions"
  },
  {
    title: "The ROI of Agricultural Intelligence Platforms",
    excerpt: "Breaking down the financial benefits of implementing agricultural intelligence solutions on farms of various sizes.",
    image: "https://images.unsplash.com/photo-1536657464919-892534f38d56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    date: "March 5, 2023",
    author: "Robert Johnson",
    readTime: "9 min read",
    category: "Business",
    slug: "roi-agricultural-intelligence-platforms"
  },
  {
    title: "Climate Change and the Future of Farming",
    excerpt: "How agricultural intelligence tools are helping farmers adapt to changing climate conditions and unpredictable weather patterns.",
    image: "https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    date: "February 18, 2023",
    author: "Dr. Sarah Williams",
    readTime: "10 min read",
    category: "Climate",
    slug: "climate-change-future-farming"
  },
  {
    title: "Sustainable Agriculture: The Role of Technology",
    excerpt: "Exploring how modern technology is enabling more sustainable farming practices without sacrificing productivity.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    date: "January 7, 2023",
    author: "Thomas Lee",
    readTime: "7 min read",
    category: "Sustainability",
    slug: "sustainable-agriculture-technology-role"
  }
];

const ArticleCard = ({ article }: { article: typeof articles[0] }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img 
      src={article.image} 
      alt={article.title} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <Tag className="h-4 w-4 mr-1" />
        <span>{article.category}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h3>
      <p className="text-gray-600 mb-4">{article.excerpt}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <User className="h-4 w-4 mr-1" />
        <span className="mr-3">{article.author}</span>
        <Calendar className="h-4 w-4 mr-1" />
        <span className="mr-3">{article.date}</span>
        <Clock className="h-4 w-4 mr-1" />
        <span>{article.readTime}</span>
      </div>
      <Link to={`/insights/${article.slug}`}>
        <Button variant="link" className="text-green-600 p-0 flex items-center">
          Read more <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </div>
);

const Insights = () => {
  return (
    <>
      <div className="pt-12 pb-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Insights
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Discover the latest agricultural intelligence trends, research, and best practices
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-green-600 hover:bg-green-700">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;

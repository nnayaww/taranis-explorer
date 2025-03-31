
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Clock, Tag, Facebook, Twitter, Linkedin } from "lucide-react";

// Mock data for articles
const articlesData = {
  "future-precision-agriculture-2023": {
    title: "The Future of Precision Agriculture in 2023",
    excerpt: "How emerging technologies are revolutionizing the way farmers monitor and manage their crops.",
    content: `
      <p class="mb-4">The agricultural industry is on the brink of a technological revolution, with precision agriculture leading the charge. As we navigate through 2023, several emerging technologies are reshaping how farmers monitor and manage their crops, promising increased efficiency, sustainability, and profitability.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Rise of AI and Machine Learning</h2>
      <p class="mb-4">Artificial Intelligence (AI) and Machine Learning are transforming agricultural practices by enabling more accurate predictions and recommendations. These technologies analyze vast amounts of data from various sources, including satellite imagery, weather patterns, soil sensors, and historical crop performance.</p>
      <p class="mb-4">AI algorithms can now detect early signs of crop diseases, predict optimal planting and harvesting times, and recommend precise application of inputs such as water, fertilizers, and pesticides. This level of precision reduces waste, minimizes environmental impact, and optimizes resource utilization.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Advanced Imaging Technologies</h2>
      <p class="mb-4">High-resolution imaging, captured by drones, satellites, and specialized cameras, provides farmers with unprecedented visibility into field conditions. These images can reveal issues that are invisible to the naked eye, allowing for early intervention before problems escalate.</p>
      <p class="mb-4">For instance, multispectral and hyperspectral imaging can detect changes in chlorophyll content, water stress, and nutrient deficiencies long before visible symptoms appear. This early detection capability enables targeted interventions that can save crops and increase yields significantly.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Internet of Things (IoT) in Agriculture</h2>
      <p class="mb-4">The proliferation of IoT devices in agriculture has created a connected ecosystem that provides real-time data and insights. Smart sensors in fields monitor soil moisture, temperature, humidity, and other critical parameters, feeding this information into centralized systems for analysis and action.</p>
      <p class="mb-4">These IoT networks enable automated irrigation systems, climate control in greenhouses, and livestock monitoring, reducing labor requirements while improving outcomes. The data collected also contributes to building more robust predictive models over time.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Robotics and Automation</h2>
      <p class="mb-4">Agricultural robotics is advancing rapidly, with autonomous vehicles and robots now capable of performing complex tasks such as planting, weeding, harvesting, and sorting. These machines operate with precision that exceeds human capabilities, working 24/7 without fatigue.</p>
      <p class="mb-4">The integration of robotics with AI vision systems allows for selective harvesting of crops at optimal ripeness, targeted application of pesticides only where needed, and mechanical weeding that reduces herbicide use. As labor shortages continue to challenge the agricultural sector, robotics offers a viable solution that also enhances precision.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Data Integration Platforms</h2>
      <p class="mb-4">Perhaps the most significant development in precision agriculture is the emergence of comprehensive data integration platforms. These systems bring together information from multiple sources – weather forecasts, soil tests, equipment sensors, satellite imagery, and market data – into unified dashboards that support decision-making.</p>
      <p class="mb-4">Such platforms enable farmers to make informed choices based on complete information, rather than relying on intuition or partial data. They also facilitate better communication between stakeholders, from farm managers to agronomists, equipment operators, and financial partners.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Challenges and Opportunities</h2>
      <p class="mb-4">Despite the promise of these technologies, several challenges remain. Connectivity issues in rural areas, the cost of implementation, and the learning curve associated with new technologies can be barriers to adoption. Data privacy and security concerns also need addressing as more farm information moves to digital platforms.</p>
      <p class="mb-4">However, the opportunities far outweigh the challenges. Precision agriculture technologies can help address the global food security challenge by increasing yields while using fewer resources. They can make farming more environmentally sustainable by reducing chemical use and minimizing waste. And they can improve the economic viability of farming by optimizing inputs and maximizing outputs.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">As we progress through in 2023 and beyond, precision agriculture will continue to evolve and mature. The integration of AI, advanced imaging, IoT, robotics, and data platforms is creating a new paradigm in farming – one that is more precise, efficient, sustainable, and profitable.</p>
      <p class="mb-4">For farmers willing to embrace these technologies, the future looks promising. The initial investment in precision agriculture solutions is increasingly offset by the tangible benefits they deliver: higher yields, reduced costs, and improved environmental stewardship. In this new era of farming, data is as valuable a resource as land and water, and the most successful farmers will be those who harness it effectively.</p>
    `,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    date: "June 15, 2023",
    author: "Dr. Maria Rodriguez",
    authorTitle: "Agricultural Technology Specialist",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Precision Agriculture", "AI", "IoT", "Robotics", "Data Integration"]
  },
  "early-disease-detection-crop-management": {
    title: "Early Disease Detection: A Game Changer for Crop Management",
    excerpt: "How early detection of plant diseases can drastically reduce crop losses and improve agricultural sustainability.",
    content: `
      <p class="mb-4">In the battle against crop diseases, timing is everything. Early detection can mean the difference between a minor intervention and catastrophic loss. Traditional methods of disease identification relied heavily on visual inspection by farmers or agronomists, often catching problems only after they had already caused significant damage. However, cutting-edge technologies are now enabling the detection of plant diseases days or even weeks before visible symptoms appear.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Cost of Plant Diseases</h2>
      <p class="mb-4">Plant diseases account for an estimated 20-40% of crop losses worldwide, representing billions of dollars in economic impact annually. Beyond the direct yield loss, diseases can reduce crop quality, increase handling costs, and sometimes render harvests unmarketable due to mycotoxin contamination or aesthetic issues.</p>
      <p class="mb-4">Moreover, the environmental impact of disease management can be substantial. Reactive treatments often require larger quantities of fungicides or other chemicals compared to preventative approaches. This not only increases input costs but also contributes to environmental concerns such as chemical runoff, soil degradation, and impacts on non-target organisms.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Technology Behind Early Detection</h2>
      <p class="mb-4">Several technologies are now converging to revolutionize how we detect and manage crop diseases:</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Hyperspectral Imaging</h3>
      <p class="mb-4">Hyperspectral cameras can capture information across the electromagnetic spectrum, detecting subtle changes in plant tissue that are invisible to the human eye. These changes often indicate stress or infection days before visible symptoms appear. Mounted on drones or specialized equipment, these cameras can efficiently scan large areas, creating detailed maps of potential disease hotspots.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Molecular Diagnostics</h3>
      <p class="mb-4">Advances in field-deployable molecular techniques such as loop-mediated isothermal amplification (LAMP) and portable PCR devices allow for rapid identification of pathogen DNA. These methods can confirm the presence of specific disease-causing organisms in minutes or hours, rather than days required for traditional lab tests. Some systems are now simple enough to be used by farmers in the field without specialized training.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">AI and Machine Learning</h3>
      <p class="mb-4">Artificial intelligence systems trained on thousands of images can now identify patterns associated with specific diseases with remarkable accuracy. These systems improve over time as they analyze more data, becoming increasingly adept at distinguishing between different pathogens and even predicting disease susceptibility based on environmental conditions.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">IoT Sensor Networks</h3>
      <p class="mb-4">Networks of connected sensors throughout fields can monitor environmental conditions conducive to disease development. By tracking factors such as leaf wetness duration, temperature, and humidity, these systems can alert farmers when conditions favor infection, enabling preventative treatments before pathogens take hold.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Benefits of Early Detection</h2>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Reduced Chemical Usage</h3>
      <p class="mb-4">When diseases are caught early, they can often be managed with targeted applications of fungicides or other controls, rather than blanket treatments across entire fields. Some studies have shown reductions of 30-50% in fungicide use when early detection systems are implemented.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Improved Yield Preservation</h3>
      <p class="mb-4">Early intervention can prevent the exponential spread of disease through a crop, preserving yield potential that would otherwise be lost. Farmers using early detection systems regularly report 10-15% higher yields compared to conventional scouting methods.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Enhanced Decision-Making</h3>
      <p class="mb-4">With precise information about disease presence and severity, farmers can make more informed decisions about treatment timing, product selection, and application rates. This precision leads to more effective management and better return on investment for crop protection inputs.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Case Studies: Early Detection in Action</h2>
      <p class="mb-4">In the Midwest corn belt, a network of farmers utilizing hyperspectral drone imaging identified northern corn leaf blight an average of 7.5 days before visible symptoms appeared. This early warning allowed for timely fungicide applications that preserved an estimated 12 bushels per acre compared to neighboring fields managed with traditional scouting methods.</p>
      <p class="mb-4">Similarly, in California's wine country, vineyards employing AI-powered camera systems for powdery mildew detection reduced fungicide applications by 40% while maintaining equivalent or better disease control compared to standard spray programs. The environmental benefits were substantial, with reduced chemical runoff into nearby watersheds.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Implementation Challenges</h2>
      <p class="mb-4">Despite the clear benefits, several barriers to widespread adoption of early detection technologies remain:</p>
      <p class="mb-4"><strong>Cost:</strong> The initial investment in sensors, imaging equipment, or service subscriptions can be substantial, though rapidly decreasing as technologies mature.</p>
      <p class="mb-4"><strong>Technical expertise:</strong> Some systems require specialized knowledge to operate and interpret results effectively.</p>
      <p class="mb-4"><strong>Integration:</strong> Farmers often struggle to integrate new detection systems with existing farm management platforms.</p>
      <p class="mb-4"><strong>Reliability:</strong> False positives or missed detections can undermine confidence in the technology.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Future of Disease Detection</h2>
      <p class="mb-4">Looking ahead, several promising developments are on the horizon:</p>
      <p class="mb-4"><strong>Satellite-based monitoring:</strong> Improvements in satellite resolution and revisit frequency will enable continuous monitoring of crop health across vast areas.</p>
      <p class="mb-4"><strong>Integrated pest management platforms:</strong> Comprehensive systems that combine disease detection with weather forecasting, growth modeling, and treatment recommendations will streamline decision-making.</p>
      <p class="mb-4"><strong>Automated intervention:</strong> Detection systems will increasingly be linked directly to precision application equipment, allowing for automated, targeted treatments of affected areas.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">Early disease detection represents a fundamental shift in crop protection philosophy—from reactive management to preventative intervention. By identifying problems before they cause significant damage, these technologies enable more sustainable farming practices with reduced environmental impact and improved economic outcomes.</p>
      <p class="mb-4">As the technologies continue to evolve and become more accessible, early disease detection will likely become standard practice in modern agriculture, contributing significantly to food security and agricultural sustainability in the face of increasing production challenges and climate uncertainty.</p>
    `,
    image: "https://images.unsplash.com/photo-1628352081568-6a763b86ea71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "May 22, 2023",
    author: "James Thompson",
    authorTitle: "Plant Pathologist",
    authorImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    readTime: "6 min read",
    category: "Research",
    tags: ["Disease Detection", "Crop Protection", "Sustainability", "Technology", "Case Studies"]
  },
  "maximizing-yield-data-driven-decisions": {
    title: "Maximizing Yield Through Data-Driven Decision Making",
    excerpt: "Case studies showing how farmers increased their yields by 30% through systematic application of agricultural intelligence.",
    content: `
      <p class="mb-4">In an era of tightening margins and increasing environmental pressures, farmers are turning to data-driven approaches to maximize yields while optimizing resource use. This article presents several case studies where agricultural intelligence platforms have enabled significant yield increases through better decision-making at every stage of the growing season.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Data Revolution in Agriculture</h2>
      <p class="mb-4">The agricultural sector is experiencing a data revolution similar to those that have transformed other industries. Today's farmers have access to unprecedented amounts of information: soil analyses, weather patterns, satellite imagery, equipment performance metrics, and historical yield data. When properly integrated and analyzed, this data becomes a powerful tool for optimizing farm operations.</p>
      <p class="mb-4">Agricultural intelligence platforms serve as the central nervous system of modern farming operations, collecting data from multiple sources, analyzing patterns, and generating actionable recommendations. The most effective platforms combine big data analytics with agronomic expertise to provide insights that are both scientifically sound and practically applicable.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Case Study 1: Precision Planting in the Corn Belt</h2>
      <p class="mb-4">Johnson Family Farms in Iowa implemented a data-driven approach to corn production, focusing initially on optimizing planting operations. Using high-resolution soil mapping combined with historical yield data, they created variable rate seeding prescriptions that matched plant populations to the productive potential of each field zone.</p>
      <p class="mb-4">The results were immediate and significant:</p>
      <ul class="list-disc pl-8 mb-4">
        <li>Overall yield increased by 18 bushels per acre (approximately 10.5%)</li>
        <li>Seed costs decreased by $8.50 per acre despite the higher technology investment</li>
        <li>Areas previously underperforming showed the greatest improvement</li>
        <li>Return on investment for the precision planting system was achieved in the first growing season</li>
      </ul>
      <p class="mb-4">"The key insight for us was realizing that our best soil could handle much higher populations than we were using, while our poorer soils were actually being overplanted," explains Tom Johnson. "We were essentially leaving yield on the table in some areas and wasting seed in others."</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Case Study 2: Irrigation Optimization in California</h2>
      <p class="mb-4">Valencia Citrus Growers, facing water restrictions and rising costs in Southern California, implemented a comprehensive soil moisture monitoring system integrated with weather forecasting. The system included:</p>
      <ul class="list-disc pl-8 mb-4">
        <li>Wireless soil moisture sensors at multiple depths throughout their orchards</li>
        <li>Automated weather stations capturing microclimate data</li>
        <li>Integration with irrigation controllers for automated adjustments</li>
        <li>Predictive modeling for evapotranspiration rates</li>
      </ul>
      <p class="mb-4">The data-driven irrigation approach yielded remarkable results:</p>
      <ul class="list-disc pl-8 mb-4">
        <li>Water usage decreased by 27% compared to previous seasons</li>
        <li>Fruit quality improved, with more consistent sizing and higher sugar content</li>
        <li>Total yield increased by 22% despite the reduced water application</li>
        <li>Energy costs for pumping water decreased proportionally</li>
      </ul>
      <p class="mb-4">Operations manager Maria Sanchez notes, "We discovered that we had been overwatering certain blocks and underwatering others. The soil moisture data showed us exactly when and where to apply water for optimal tree health. The improvement in fruit quality alone paid for the system."</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Case Study 3: Integrated Pest Management in Midwest Soybeans</h2>
      <p class="mb-4">Heartland Agricultural Cooperative worked with 50 member farmers to implement a data-driven approach to soybean pest management. The system combined:</p>
      <ul class="list-disc pl-8 mb-4">
        <li>Weekly drone scouting with multispectral imagery</li>
        <li>AI-powered pest identification and population estimates</li>
        <li>Weather-based pest development models</li>
        <li>Economic threshold calculators</li>
        <li>Precision application maps for targeted treatments</li>
      </ul>
      <p class="mb-4">Compared to neighboring farms using standard practices, the participating farmers saw:</p>
      <ul class="list-disc pl-8 mb-4">
        <li>34% reduction in insecticide applications</li>
        <li>28% reduction in herbicide use through targeted application</li>
        <li>Average yield increase of 7.2 bushels per acre (approximately 14%)</li>
        <li>$45 per acre increase in net profitability</li>
      </ul>
      <p class="mb-4">"The precision and timing made all the difference," explains agronomist Sarah Williams. "By treating exactly when and where needed, we not only saved on chemical costs but actually got better control of pests while preserving beneficial insects."</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Case Study 4: Comprehensive Approach to Wheat Production</h2>
      <p class="mb-4">Perhaps the most dramatic results came from Prairie Wheat Growers in Saskatchewan, who implemented a comprehensive data-driven approach across all aspects of their operation. Their integrated system included:</p>
      <ul class="list-disc pl-8 mb-4">
        <li>Detailed soil mapping and zone management</li>
        <li>Variable rate seeding and fertilizer application</li>
        <li>Real-time equipment performance monitoring</li>
        <li>Weekly satellite imagery for crop development tracking</li>
        <li>Predictive modeling for disease risk</li>
        <li>Weather-based decision support for all operations</li>
      </ul>
      <p class="mb-4">After three years of implementation and refinement, Prairie Wheat Growers documented:</p>
      <ul class="list-disc pl-8 mb-4">
        <li>31% increase in average yield across all fields</li>
        <li>42% reduction in fungicide use through better timing and targeting</li>
        <li>26% decrease in nitrogen application while maintaining protein levels</li>
        <li>Significant reduction in fuel usage through optimized field operations</li>
        <li>$112 per acre improvement in net profitability</li>
      </ul>
      <p class="mb-4">"It's not any one thing that made the difference, but the cumulative effect of better decisions throughout the season," explains owner Robert Mackenzie. "Having data to guide every decision from planting to harvest completely transformed our operation."</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Key Success Factors</h2>
      <p class="mb-4">Analysis of these and other successful implementations reveals several common factors:</p>
      <p class="mb-4"><strong>Integration of multiple data sources:</strong> The most successful operations combined information from various sources rather than relying on isolated data points.</p>
      <p class="mb-4"><strong>Focus on actionable insights:</strong> Effective systems translated complex data into clear recommendations that could be implemented immediately.</p>
      <p class="mb-4"><strong>Continuous improvement approach:</strong> Farmers who viewed data collection as an ongoing process rather than a one-time implementation saw results improve over multiple seasons.</p>
      <p class="mb-4"><strong>User-friendly interfaces:</strong> Systems that presented information in intuitive formats were adopted more widely and used more consistently.</p>
      <p class="mb-4"><strong>Support from agronomic experts:</strong> Technical data combined with human expertise provided the most valuable insights.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Implementation Challenges and Solutions</h2>
      <p class="mb-4">Despite the impressive results, implementing data-driven agriculture is not without challenges:</p>
      <p class="mb-4"><strong>Initial investment:</strong> The upfront costs of sensors, software, and training can be substantial. Many successful operations started with a single aspect (like soil mapping) and reinvested the initial returns into expanding their capabilities.</p>
      <p class="mb-4"><strong>Learning curve:</strong> New systems require time and training to use effectively. Operations that designated a specific team member as the "data champion" typically saw faster adoption and better results.</p>
      <p class="mb-4"><strong>Data overload:</strong> Too much information can be as problematic as too little. Successful implementations focused on collecting only the most relevant data and presenting it in digestible formats.</p>
      <p class="mb-4"><strong>Connectivity issues:</strong> Rural internet access remains a challenge in many areas. Some operations implemented local data storage and processing systems that synchronized with cloud platforms when connectivity was available.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      <p class="mb-4">The case studies presented here demonstrate that data-driven agriculture is not merely a theoretical concept but a practical approach that can deliver substantial improvements in yield, efficiency, and profitability. By systematically collecting and analyzing information about their operations, farmers can make better decisions at every stage of production.</p>
      <p class="mb-4">As technology continues to evolve and become more accessible, the potential for data-driven yield optimization will only increase. Farmers who embrace these approaches now are not only positioning themselves for immediate gains but building the capabilities needed for long-term success in an increasingly competitive and resource-constrained environment.</p>
    `,
    image: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    date: "April 10, 2023",
    author: "Emma Chen, PhD",
    authorTitle: "Agricultural Data Scientist",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
    readTime: "12 min read",
    category: "Case Study",
    tags: ["Yield Optimization", "Case Studies", "Data Analytics", "ROI", "Precision Agriculture"]
  }
};

const ArticleDetail = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? articlesData[articleId as keyof typeof articlesData] : null;

  if (!article) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Article not found</h1>
            <p className="mt-4 text-gray-500">The article you're looking for doesn't exist or has been moved.</p>
            <Link to="/insights" className="mt-6 inline-block">
              <Button className="bg-green-600 hover:bg-green-700">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative">
          <div className="absolute inset-0">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-green-900 bg-opacity-70 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-white mb-4">
              <Tag className="h-4 w-4 mr-1" />
              <span className="mr-4">{article.category}</span>
              <Calendar className="h-4 w-4 mr-1" />
              <span className="mr-4">{article.date}</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{article.readTime}</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              {article.excerpt}
            </p>
            <div className="mt-10">
              <Link to="/insights">
                <Button variant="outline" className="bg-white text-green-700 border-white hover:bg-gray-100">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          {/* Author Info */}
          <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
            <img 
              src={article.authorImage} 
              alt={article.author} 
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">{article.author}</h3>
              <p className="text-gray-600">{article.authorTitle}</p>
            </div>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-green prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Related Topics</h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Share This Article</h4>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* More Articles Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">More Insights</h2>
              <p className="mt-3 text-xl text-gray-500">Discover more agricultural intelligence content</p>
            </div>
            <div className="mt-12">
              <Link to="/insights" className="inline-block">
                <Button className="bg-green-600 hover:bg-green-700">
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;


import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Globe, Users, Award, Leaf } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-green-50 to-white">
        {/* Hero section */}
        <div className="pt-16 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  About Taranis Explorer
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  We're revolutionizing agriculture with cutting-edge AI and imagery analysis. 
                  Our mission is to help farmers, agronomists, and agricultural enterprises make 
                  better decisions through advanced crop intelligence.
                </p>
                <div className="mt-8 flex space-x-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Our Solutions
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Team meeting"
                  className="rounded-lg shadow-lg object-cover h-96 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission section */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Mission</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Empowering agricultural decisions with intelligence
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-green-100 rounded-full p-3 mb-4">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                <p className="text-gray-600">
                  Supporting sustainable agriculture practices across the globe to ensure food security for future generations.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-green-100 rounded-full p-3 mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Farmer-First Approach</h3>
                <p className="text-gray-600">
                  Developing tools that solve real problems for farmers, making advanced technology accessible and useful.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <div className="bg-green-100 rounded-full p-3 mb-4">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  Promoting sustainable farming practices through precision agriculture and resource optimization.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Our Team</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Meet the experts behind Taranis Explorer
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Dr. Emily Chen",
                  role: "Chief Executive Officer",
                  image: "https://randomuser.me/api/portraits/women/23.jpg",
                  bio: "PhD in Agricultural Science with 15+ years of experience in crop management."
                },
                {
                  name: "Michael Johnson",
                  role: "Chief Technology Officer",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  bio: "Expert in AI and computer vision with a background in agricultural engineering."
                },
                {
                  name: "Sarah Williams",
                  role: "Lead Data Scientist",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  bio: "Specialized in machine learning applications for agricultural data analysis."
                },
                {
                  name: "David Rodriguez",
                  role: "Head of Product",
                  image: "https://randomuser.me/api/portraits/men/68.jpg",
                  bio: "Former agronomist with expertise in translating field needs to technology solutions."
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-green-600 mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company history */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
                <div className="mt-6 space-y-6 text-gray-600">
                  <p>
                    Founded in 2015, Taranis Explorer began with a simple mission: to transform the way farmers monitor and manage their crops using advanced technology.
                  </p>
                  <p>
                    What started as a small team of agricultural experts and computer scientists has grown into a global leader in agricultural intelligence, serving thousands of farms across multiple continents.
                  </p>
                  <p>
                    Today, we're proud to be at the forefront of the agricultural technology revolution, continuously innovating to meet the evolving needs of modern farming.
                  </p>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Key Milestones:</h3>
                  <ul className="space-y-2">
                    {[
                      "2015: Founded in Silicon Valley",
                      "2017: Launched first commercial product",
                      "2019: Expanded operations to Europe and South America",
                      "2021: Reached 1 million acres monitored",
                      "2023: Introduced AI-driven yield prediction technology"
                    ].map((milestone, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <img 
                  src="https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                  alt="Company history"
                  className="rounded-lg shadow-lg object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Implementing Taranis has completely transformed our approach to crop management. We've seen a 20% increase in yield and 30% reduction in input costs.",
    name: "Sarah Johnson",
    title: "Farm Owner, Heartland Farms",
    avatar: "SJ",
  },
  {
    quote: "As an agronomist, I can now monitor 3x more fields with greater precision. The disease detection feature has been a game-changer for early intervention.",
    name: "Michael Rodriguez",
    title: "Senior Agronomist, AgriConsult",
    avatar: "MR",
  },
  {
    quote: "The data insights from Taranis have enabled us to make better decisions across our 50,000 acre operation. It's like having an expert in every field.",
    name: "David Chen",
    title: "Operations Director, Pacific Ag Enterprises",
    avatar: "DC",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by agricultural professionals worldwide
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-green-100"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-lg text-gray-600">{testimonial.quote}</p>
              </div>
              <div className="mt-6 flex items-center">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-green-100 text-green-800">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

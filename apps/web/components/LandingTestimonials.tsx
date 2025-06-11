import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TextileCorp Manufacturing",
    company: "Mumbai, India",
    image: "/testimonial-1.jpg",
    content: "WholesaleDekho transformed our business completely. We went from local sales to nationwide distribution in just 6 months. The platform's buyer matching is incredible!",
    rating: 5,
    type: "manufacturer",
    stats: "300% increase in sales"
  },
  {
    name: "Priya Sharma",
    role: "Procurement Head",
    company: "RetailMax Solutions",
    image: "/testimonial-2.jpg",
    content: "Finding reliable manufacturers was always a challenge. Now we have direct access to verified suppliers with transparent pricing. Our procurement costs reduced by 25%.",
    rating: 5,
    type: "buyer",
    stats: "25% cost savings"
  },
  {
    name: "Mohammed Ali",
    role: "Founder, ElectroTech Industries",
    company: "Bangalore, India",
    image: "/testimonial-3.jpg",
    content: "The quality of buyers we connect with through WholesaleDekho is outstanding. Every order is serious business. Our revenue doubled in the first year.",
    rating: 5,
    type: "manufacturer",
    stats: "200% revenue growth"
  },
  {
    name: "Sneha Patel",
    role: "Supply Chain Manager",
    company: "FashionForward Retail",
    image: "/testimonial-4.jpg",
    content: "The transparency in the platform is remarkable. Real-time tracking, quality assurance, and reliable delivery schedules have made our operations so much smoother.",
    rating: 5,
    type: "buyer",
    stats: "95% on-time delivery"
  },
  {
    name: "Vikram Singh",
    role: "Director, HomeCraft Furniture",
    company: "Jaipur, India",
    image: "/testimonial-5.jpg",
    content: "International expansion seemed impossible until we joined WholesaleDekho. Now we export to 15 countries with confidence, thanks to their global buyer network.",
    rating: 5,
    type: "manufacturer",
    stats: "15 countries reached"
  },
  {
    name: "Anita Reddy",
    role: "Purchasing Director",
    company: "MegaMart Chain",
    image: "/testimonial-6.jpg",
    content: "WholesaleDekho's AI matching saved us months of vendor research. We found the perfect manufacturers for our private label products in just weeks.",
    rating: 5,
    type: "buyer",
    stats: "80% faster sourcing"
  }
];

const companyLogos = [
  { name: "TechCorp", logo: "🏢" },
  { name: "InnovateX", logo: "🚀" },
  { name: "GlobalTrade", logo: "🌍" },
  { name: "SmartManufac", logo: "⚙️" },
  { name: "RetailGiant", logo: "🏪" },
  { name: "FutureFactory", logo: "🏭" }
];

export default function LandingTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Thousands</span> <br />
            of Businesses Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From small manufacturers to large enterprises, businesses across India and beyond 
            trust WholesaleDekho to drive their growth and success.
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-16">
          <p className="text-center text-gray-500 text-sm mb-8 font-medium">
            TRUSTED BY LEADING COMPANIES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors duration-300">
                <span className="text-2xl">{company.logo}</span>
                <span className="font-semibold text-lg">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Stats badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-6 ${
                  testimonial.type === 'manufacturer' 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {testimonial.stats}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 ring-2 ring-gray-100 group-hover:ring-purple-200 transition-all duration-300">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>

                {/* Type indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`w-3 h-3 rounded-full ${
                    testimonial.type === 'manufacturer' ? 'bg-purple-400' : 'bg-blue-400'
                  }`}></div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
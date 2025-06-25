"use client";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Boutique Owner, Mumbai",
        content: "Found amazing wholesale sarees directly from manufacturers. Saved 40% on my usual costs!",
        rating: 5
    },
    {
        name: "Rajesh Kumar",
        role: "Fashion Retailer, Delhi",
        content: "The chat feature made negotiating bulk orders so easy. Great quality products every time.",
        rating: 5
    },
    {
        name: "Anita Patel",
        role: "Online Store Owner",
        content: "Connected with 15+ verified manufacturers in just one week. My business has grown 3x!",
        rating: 5
    },
   
];

export default function MovingTestimonials() {
    return (
        <div className="w-full max-w-9xl mx-auto px-4">
            <div className="flex flex-wrap gap-4 md:gap-8 2xl:gap-12 justify-center">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 rounded-lg p-4 md:p-6 shadow-md shadow-orange-100 border border-orange-100 w-full sm:w-80 2xl:w-[26rem]"
                    >
                        <div className="flex items-center gap-1 mb-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-orange-400 text-orange-400" />
                            ))}
                        </div>
                        <p className="text-gray-700 mb-3 text-xs md:text-sm leading-relaxed">
                            "{testimonial.content}"
                        </p>
                        <div className="border-t border-orange-100 pt-2">
                            <p className="font-semibold text-gray-800 text-xs md:text-sm">{testimonial.name}</p>
                            <p className="text-orange-500 text-xs font-medium">{testimonial.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
import { Product } from "@redb/db";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductCard2({ product }: { product: Product }) {
    // Create multiple slides for demonstration - you can modify this based on your needs
    const carouselItems = [
        {
            image: product.image === "random.jpg" ? "/black-tshirt.png" : product.image,
            alt: product.name
        },
        {
            image: "/black-tshirt.png", // Add more images as needed
            alt: `${product.name} - view 2`
        },
        {
            image: product.image === "random.jpg" ? "/black-tshirt.png" : product.image,
            alt: `${product.name} - view 3`
        }
    ];

    return (
        <div className="flex flex-col  md:border rounded-lg md:rounded-xl  transition-all duration-300 overflow-hidden   border-gray-200">
            {/* Carousel Container with hover group */}
            <div className="w-full  relative group">
                <Carousel className="w-full h-full" opts={{ align: "start", loop: true }}>
                    <CarouselContent className="h-full">
                        {carouselItems.map((item, index) => (
                            <CarouselItem key={index} className="h-full">
                                <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-sm">
                                    <Image 
                                        src={item.image} 
                                        alt={item.alt} 
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Navigation buttons - only visible on hover and hidden on mobile */}
                    <CarouselPrevious 
                        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-transparent hover:bg-white/90 border-0 hover:border hover:border-gray-200 shadow-none hover:shadow-lg h-10 w-10 rounded-lg items-center justify-center" 
                    />
                    <CarouselNext 
                        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-transparent hover:bg-white/90 border-0 hover:border hover:border-gray-200 shadow-none hover:shadow-lg h-10 w-10 rounded-lg items-center justify-center" 
                    />
                </Carousel>
            </div>
            
            <div className="flex justify-between gap-2 p-2">
                <div className="flex flex-col md:gap-2">
                    <div className="md:text-lg font-bold">{product.name}</div>
                    <div className="text-md text-gray-900">${product.price} - ${product.price + 100}</div>
                    <div className="text-sm text-gray-500 rounded-full">{"LOT/ARTICLE 300"}</div>
                </div>
                <div>
                    <div className="text-sm">
                        <button 
                            className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-stone-200 hover:border-stone-300 cursor-pointer"
                            aria-label="Save product"
                        >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            <span className="text-xs font-medium text-gray-600 hidden sm:inline">Save</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

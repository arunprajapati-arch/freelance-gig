import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Product {
    id: number;
    name: string;
    image: string;
}

const products: Product[] = [
    {
        id: 1,
        name: "Limited Edition",
        image: "/black-tshirt.png"
    },
    {
        id: 2,
        name: "Summer Collection",
        image: "/black-tshirt.png"
    },
    {
        id: 3,
        name: "Premium Series",
        image: "/black-tshirt.png"
    }
];

export default function NewArrival() {
    return (
        <div className="w-full md:w-[300px] lg:w-[350px]">
            <div className="relative h-full rounded-2xl border border-rose-200 shadow-md flex flex-col gap-2 md:gap-3 p-3 md:p-4 justify-center items-center overflow-hidden">
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-red-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                    </svg>
                    <h1 className="text-lg md:text-2xl font-bold text-gray-800 text-center">New Arrivals</h1>
                </div>
                
                <Carousel className="w-full">
                    <CarouselContent>
                        {products.map((product, index) => (
                            <CarouselItem key={product.id}>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="relative overflow-hidden rounded-lg">
                                        <Image 
                                            src={product.image}
                                            alt={product.name}
                                            width={100} 
                                            height={100} 
                                            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px] group-hover:scale-110 transition-transform duration-300" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <p className="text-sm md:text-base font-semibold text-gray-700">{product.name}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 " />
                    <CarouselNext className="right-0" />
                </Carousel>
            </div>
        </div>
    );
}
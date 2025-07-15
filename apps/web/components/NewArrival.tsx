"use client";
import Image from "next/image";
import { User, Product } from "@redb/db";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface NewArrivalProps {
  manufacturer: User | null;
  products: Product[];
  loading: boolean;
  error: string | null;
}

export default function NewArrival({ manufacturer, products, loading, error }: NewArrivalProps) {
  // Take only the first 3 products for NewArrival
  const newArrivalProducts = products.slice(0, 3);

  const formatProductType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  };

  const formatPrice = (price: string | number) => {
    return `₹${parseFloat(price.toString()).toLocaleString('en-IN')}`;
  };

  if (!manufacturer) {
    return (
      <div className="w-full md:w-1/2">
        <div className="relative  rounded-2xl border border-gray-200 shadow-md flex flex-col gap-2  p-2  justify-center items-center overflow-hidden">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
            <h1 className="text-lg md:text-2xl font-bold text-gray-400 text-center">New Arrivals</h1>
          </div>
          <div className="text-center py-8">
            <p className="text-sm text-gray-500">Select a manufacturer to view their latest products</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-1/3 ">
      <div className="relative  rounded-xl sm:rounded-2xl border border-rose-200 shadow-md flex flex-col gap-1 p-2  justify-center items-center overflow-hidden">
        <div className="flex items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-900" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
          </svg>
          <h1 className="text-sm sm:text-base md:text-xl font-bold text-gray-800 text-center">New Arrivals</h1>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-4 sm:py-6 md:py-8">
            <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-red-900"></div>
          </div>
        ) : error ? (
          <div className="text-center py-3 sm:py-4 md:py-6">
            <p className="text-xs sm:text-sm text-red-500">{error}</p>
          </div>
        ) : newArrivalProducts.length === 0 ? (
          <div className="text-center py-3 sm:py-4 md:py-6">
            <p className="text-xs sm:text-sm text-gray-500">No products available</p>
            <p className="text-xs text-gray-400 mt-1">This manufacturer hasn't added any products yet</p>
          </div>
        ) : (
          <div className="w-full flex-1 flex flex-col justify-center">
            <Carousel className="w-full">
              <CarouselContent>
                {newArrivalProducts.map((product, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <div className="relative overflow-hidden rounded-md sm:rounded-lg group">
                        <Image 
                          src={"/black-tshirt.png"}
                          alt={product.name}
                          width={120} 
                          height={120} 
                          className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[130px] lg:h-[130px] object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {/* <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 bg-white/90 px-1 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full text-xs font-medium text-gray-700">
                          {formatProductType(product.type)}
                        </div> */}
                      </div>
                      <div className="text-center">
                        <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-700 truncate w-20 sm:w-28 md:w-32 lg:w-36">
                          {product.name}
                        </p>
                        <p className="text-xs sm:text-xs md:text-sm text-red-900 font-bold">
                          {formatPrice(Number(product.price))}
                        </p>
                        {product.description && (
                          <p className="text-xs text-gray-500 mt-0.5 sm:mt-1 line-clamp-1 w-20 sm:w-28 md:w-32 lg:w-36">
                            {product.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {newArrivalProducts.length > 1 && (
                <>
                  <CarouselPrevious className="left-0 w-6 h-6 sm:w-8 sm:h-8" />
                  <CarouselNext className="right-0 w-6 h-6 sm:w-8 sm:h-8" />
                </>
              )}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
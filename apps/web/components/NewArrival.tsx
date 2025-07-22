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
      <div className="w-4/5 md:w-1/4">
        <div className="relative rounded-2xl border border-gray-200 shadow-md flex flex-col gap-1 p-1.5 justify-center items-center overflow-hidden">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
            <h1 className="text-base md:text-xl font-bold text-gray-400 text-center">New Arrivals</h1>
          </div>
          <div className="text-center py-3">
            <p className="text-xs text-gray-500">Select a manufacturer to view their latest products</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-4/5 md:w-[80%]">
      <div className="relative rounded-xl sm:rounded-2xl border border-rose-200 shadow-md flex flex-col gap-1 p-2 justify-center items-center overflow-hidden">
        <div className="flex items-center gap-1 sm:gap-2">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-900" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
          </svg>
          <h1 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 text-center">New Arrivals</h1>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-2 sm:py-3">
            <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-red-900"></div>
          </div>
        ) : error ? (
          <div className="text-center py-2 sm:py-3">
            <p className="text-xs text-red-500">{error}</p>
          </div>
        ) : newArrivalProducts.length === 0 ? (
          <div className="text-center py-2 sm:py-3">
            <p className="text-xs text-gray-500">No products available</p>
            <p className="text-xs text-gray-400">This manufacturer hasn't added any products yet</p>
          </div>
        ) : (
          <div className="w-full flex-1 flex flex-col justify-center">
            <Carousel className="w-full">
              <CarouselContent>
                {newArrivalProducts.map((product, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                      <div className="relative overflow-hidden rounded-md sm:rounded-lg group">
                        <Image 
                          src={product.image === "random.jpg" ? "/black-tshirt.png" : product.image}
                          alt={product.name}
                          width={120} 
                          height={120} 
                          className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[120px] md:h-[120px] object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-semibold text-gray-700 truncate w-12 sm:w-14 md:w-20">
                          {product.name}
                        </p>
                        <p className="text-xs text-red-900 font-bold">
                          {formatPrice(Number(product.price))}
                        </p>
                        {product.description && (
                          <p className="text-xs text-gray-500 line-clamp-1 w-12 sm:w-14 md:w-20">
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
                  <CarouselPrevious className="left-0 w-4 h-4 sm:w-5 sm:h-5" />
                  <CarouselNext className="right-0 w-4 h-4 sm:w-5 sm:h-5" />
                </>
              )}
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
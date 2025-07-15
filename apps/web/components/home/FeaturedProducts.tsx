import { Star, Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Product } from "./types";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  console.log(Array.isArray(products));
  
  // Safety check: ensure products is always an array
  const safeProducts = Array.isArray(products) ? products : [];
  
  return (
    <div className="px-4 py-8 ">
     
      
      {/* Products Grid - keeping the exact same styling */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
        {safeProducts.map((product) => (
          <div key={product.id} className="group bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1 min-h-[320px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[380px] flex flex-col">
            <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0">
              <Image
                src={"/black-tshirt.png"}
                alt={product.name}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col space-y-2">
                {product.isNew && (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                    NEW
                  </span>
                )}
              </div>
            </div>
            
            <div className="p-3 sm:p-4 flex-1 flex flex-col">
              <div className="flex gap-2 mb-2 sm:mb-3">
                {/* {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer"
                    style={{ backgroundColor: color }}
                    aria-label={`Select ${color} color variant`}
                  />
                ))} */}
              </div>
              
              <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors duration-200">
                {product.name}
              </h3>
              <p className="text-xs text-gray-500 mb-2 sm:mb-3">{product.manufacturer}</p>
              
              {/* Price and Save button section */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center">
                  <p className="text-lg sm:text-xl font-bold text-gray-900">₹{product.price}</p>
                </div>
                <button className="flex items-center gap-1 px-2 py-1.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300 cursor-pointer">
                  <ShoppingBag className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-medium text-gray-600">Save</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
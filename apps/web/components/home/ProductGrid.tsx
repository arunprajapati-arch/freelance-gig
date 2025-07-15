"use client"
import Image from "next/image";
import { Product, User } from "@redb/db";
import Link from "next/link";

interface ProductGridProps {
  manufacturer: User | null;
  products: Product[];
  loading: boolean;
  error: string | null;
}

export default function ProductGrid({ manufacturer, products, loading, error }: ProductGridProps) {
  // Take products 4+ for ProductGrid (skip first 3 shown in NewArrival)
  // Only show if there are more than 3 products total
  // Limit to 9 products for 3x3 grid on larger screens
  const gridProducts = products.length > 3 ? products.slice(3, 12) : [];

  const formatPrice = (price: string | number) => {
    return `₹${parseFloat(price.toString()).toLocaleString('en-IN')}`;
  };

  const formatProductType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  };

  const getColorBadge = (color: string) => {
    const colorMap: Record<string, string> = {
      RED: '#ef4444',
      GREEN: '#22c55e',
      BLUE: '#3b82f6',
      YELLOW: '#eab308',
      PURPLE: '#a855f7',
      ORANGE: '#f97316',
      PINK: '#ec4899',
      BROWN: '#a3a3a3'
    };
    return colorMap[color] || '#6b7280';
  };

  if (!manufacturer) {
    return (
      <div className="w-full mt-4 md:mt-6 mb-4 md:mb-8 flex justify-center">
        <div className="w-full max-w-2xl lg:max-w-4xl px-2 sm:px-4">
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Manufacturer Selected</h3>
            <p className="text-sm text-gray-500">Select a manufacturer to view their products</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="w-full mt-4 md:mt-6 mb-4 md:mb-8 flex justify-center">
        <div className="w-full max-w-2xl lg:max-w-4xl px-2 sm:px-4">
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-900"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full mt-4 md:mt-6 mb-4 md:mb-8 flex justify-center">
        <div className="w-full max-w-2xl lg:max-w-4xl px-2 sm:px-4">
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Products</h3>
            <p className="text-sm text-gray-500 mb-4">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-2 sm:mt-4 md:mt-6 mb-2 sm:mb-4 md:mb-8 flex justify-center">
      <div className="w-full max-w-4xl lg:max-w-5xl px-1 sm:px-2 md:px-4">
        {/* Header */}
        <div className="mb-3 sm:mb-4 md:mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
            More Products from {manufacturer.name}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            {gridProducts.length > 0 
              ? `Showing ${gridProducts.length} more product${gridProducts.length !== 1 ? 's' : ''} (${products.length} total)` 
              : `All ${products.length} product${products.length !== 1 ? 's' : ''} shown above`}
          </p>
        </div>

        {/* Products Grid or Empty State */}
        {gridProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {gridProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1 h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] border border-stone-200"
              >
                <div className="relative w-full h-[55%] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src="/black-tshirt.png"
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  {/* Product Type Badge */}
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-white/90 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium text-gray-700">
                    {formatProductType(product.type)}
                  </div>

                  {/* Heart Icon */}
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-1 sm:p-1.5 md:p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="p-1.5 sm:p-2.5 md:p-3 lg:p-4 h-[45%] flex flex-col justify-between">
                  {/* Color Indicator */}
                  <div className="flex gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <button
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer"
                      style={{ backgroundColor: getColorBadge(product.color) }}
                      aria-label={`${product.color} color variant`}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xs sm:text-xs md:text-sm font-semibold text-gray-800 mb-0.5 sm:mb-1 line-clamp-1 group-hover:text-red-900 transition-colors duration-200">
                      {product.name}
                    </h3>
                    
                    {product.description && (
                      <p className="text-xs text-gray-500 mb-1 sm:mb-2 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900">
                      {formatPrice(Number(product.price))}
                    </p>
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
            ))}
          </div>
        ) : (
          <div className="text-center py-4 sm:py-6 md:py-8">
            <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1 sm:mb-2">All Products in New Arrivals</h3>
            <p className="text-xs sm:text-sm text-gray-500">
              {manufacturer.name || "This manufacturer"} has {products.length} product{products.length !== 1 ? 's' : ''}, all shown in the New Arrivals section above
            </p>
          </div>
        )}

        {/* View Full Profile Button - Always shown */}
        <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center">
          <button className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <Link href={`/profile/${manufacturer.username}`}>
            View Full Profile
            </Link>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

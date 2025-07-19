"use client";

import { Product } from "@redb/db";
import { useState, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import axios from "axios";

type Props = {
  userId: string;
  initialProducts: Product[];
};

// Loading skeleton component
const ProductCardSkeleton = () => (
  <div className="group rounded-lg sm:rounded-xl shadow-xl transition-all duration-300 overflow-hidden h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] border animate-pulse">
    <div className="relative w-full h-[55%] overflow-hidden bg-gray-200">
      <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-gray-300 w-12 h-5 rounded-full"></div>
    </div>
    <div className="p-1.5 sm:p-2.5 md:p-3 lg:p-4 h-[45%] flex flex-col justify-between">
      <div className="flex gap-1 sm:gap-2 mb-1 sm:mb-2">
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-300"></div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-300"></div>
      </div>
      <div className="flex-1">
        <div className="h-3 bg-gray-300 rounded mb-2"></div>
        <div className="h-2 bg-gray-200 rounded mb-1"></div>
        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <div className="h-4 bg-gray-300 rounded w-16"></div>
        <div className="h-6 bg-gray-200 rounded-full w-12"></div>
      </div>
    </div>
  </div>
);

// Loading component with spinner
const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center py-8">
    <div className="relative">
      <div className="w-8 h-8 border-4 border-gray-200 border-t-red-500 rounded-full animate-spin"></div>
    </div>
    <p className="text-center text-gray-600 mt-4 font-medium">Loading more products...</p>
  </div>
);

export default function ProfileProductGrid({ userId, initialProducts }: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const isLoadingRef = useRef(false);

  const fetchMoreProducts = async () => {
    console.log(`🔍 fetchMoreProducts called, isLoadingRef.current: ${isLoadingRef.current}`);
    
    // Prevent multiple simultaneous fetches using ref (synchronous)
    if (isLoadingRef.current) {
      console.log('❌ Already loading (ref check), skipping fetch');
      return;
    }
    
    console.log('✅ Setting isLoadingRef.current to true');
    isLoadingRef.current = true;
    
    try {
      const currentProductCount = products.length;
      console.log(`=== FETCH START ===`);
      console.log(`Current products in state: ${currentProductCount}`);
      console.log(`Current page: ${page}`);
      console.log(`Fetching more products, skipping first ${currentProductCount}`);
      console.log(`API URL: /api/getProductByUserId?userId=${userId}&skip=${currentProductCount}`);
      
      const res = await axios.get(`/api/getProductByUserId?userId=${userId}&skip=${currentProductCount}`);
      console.log('userId:', userId);
      console.log('API response status:', res.status);
      console.log('API response data:', res.data);
      
      if (res.status !== 200) {
        console.error('Failed to fetch products:', res.status);
        setHasMore(false);
        return;
      }
      
      const data = res.data;
      const newProducts: Product[] = Array.isArray(data.products) ? data.products : [];
      console.log(`Received ${newProducts.length} new products`);
      console.log('New product IDs:', newProducts.map(p => p.id));

      if (newProducts.length < 12) {
        console.log('Less than 12 products received, setting hasMore to false');
        setHasMore(false);
      }

      setProducts(prev => {
        console.log(`Before adding: ${prev.length} products`);
        console.log('Existing product IDs:', prev.map(p => p.id));
        console.log(`Adding ${newProducts.length} products to existing ${prev.length} products`);
        const result = [...prev, ...newProducts];
        console.log(`After adding: ${result.length} total products`);
        console.log(`=== FETCH END ===`);
        return result;
      });
      setPage(prev => prev + 1);
    } catch (error) {
      console.error('Error fetching products:', error);
      setHasMore(false);
    } finally {
      console.log('🔄 Setting isLoadingRef.current to false');
      isLoadingRef.current = false;
    }
  };

  const formatPrice = (price: string | number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number(price));
  };

  const formatProductType = (type: string) => {
    return type === "T-SHIRT" ? "T-Shirt" : "Hoodie";
  };

  const getColorBadge = (color: string) => {
    switch (color) {
      case "RED":
        return "bg-red-500";
      case "BLUE":
        return "bg-blue-500";
        
    }
}

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchMoreProducts}
      hasMore={hasMore}
      loader={<LoadingSpinner />}
    >
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 md:p-8 md:px-20">
            {products.map((product) => (
              <div
                key={product.id}
                className="group  rounded-lg sm:rounded-xl shadow-xl transition-all duration-300 overflow-hidden  transform hover:-translate-y-1 h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] border  "
              >
                <div className="relative w-full h-[55%] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <Image
                    src={product.image || "/black-tshirt.png"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  {/* Product Type Badge */}
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-white/90 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium text-gray-700">
                    {formatProductType(product.type)}
                  </div>

                  {/* Heart Icon */}
                  {/* <div className="absolute top-1 right-1 sm:top-2 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-1 sm:p-1.5 md:p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div> */}

                </div>
                
                <div className="p-1.5 sm:p-2.5 md:p-3 lg:p-4 h-[45%] flex flex-col justify-between">
                  {/* Color Indicator */}
                  <div className="flex gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <button
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer"
                      style={{ backgroundColor: getColorBadge(product.color) }}
                      aria-label={`${product.color} color variant`}
                    />
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
    </InfiniteScroll>
  );
}

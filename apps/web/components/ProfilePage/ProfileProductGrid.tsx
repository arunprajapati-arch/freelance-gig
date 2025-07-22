"use client";

import { Product } from "@redb/db";
import { useState, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import axios from "axios";
import ProductCard from "./ProductCard";
import ProductCard2 from "./ProductCard2";

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
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 gap-y-12  md:px-20">
            {products.map((product) => (
              <ProductCard2 key={product.id} product={product} />
            ))}
          </div>
    </InfiniteScroll>
  );
}

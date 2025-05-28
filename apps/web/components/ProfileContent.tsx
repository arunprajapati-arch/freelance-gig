"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import NewArrival from "@/components/NewArrival";
import ProfileInfo from "@/components/ProfileInfo";
import FilterBar from "@/components/FilterBar";
import ProductGrid from "@/components/ProductGrid";
import Appbar from "@/components/Appbar";

export default function ProfileContent() {
    const searchParams = useSearchParams();
    const username = searchParams.get("username") || "";
    const [showScrollTop, setShowScrollTop] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.scrollY > 300);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="w-full max-w-6xl pt-4 md:pt-8 pb-4 md:pb-12 px-4 md:px-6 lg:px-8 mx-auto flex flex-col items-center gap-4 md:gap-10">
          <Appbar />
          <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-6 md:gap-12">
            <ProfileInfo username={username} />
            <div className="w-full md:w-auto">
              <NewArrival />
            </div>
          </div>
          <FilterBar />
          <ProductGrid />
        </div>
        
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-4 md:right-1/4 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out z-50"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    );
  }
"use client";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Manufacturer } from "./types";
import { useRef, useState, useEffect } from "react";

interface ManufacturerStoriesProps {
  manufacturers: Manufacturer[];
}

export default function ManufacturerStories({ manufacturers }: ManufacturerStoriesProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      checkScroll();
      scrollContainer.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      }
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-4 relative">
      <div 
        ref={scrollContainerRef}
        className="flex items-center justify-start gap-5 overflow-x-auto scrollbar-hide rounded-lg"
      >
        {manufacturers.map((manufacturer) => (
          <div key={manufacturer.id} className="flex-shrink-0 text-center ml-2">
            <div className="relative mb-3">
              <div className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr ${manufacturer.gradient} p-0.5`}>
                <div className="w-full h-full rounded-full bg-white p-0.5">
                  <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <span className="text-lg sm:text-2xl font-semibold text-gray-600">
                      {manufacturer.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
              {manufacturer.verified && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current" />
                </div>
              )}
            </div>
            <div className="w-14 sm:w-20">
              <p className="text-xs sm:text-sm text-gray-900 font-medium truncate">{manufacturer.name}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons - only visible on larger screens */}
      <div className="hidden md:block">
        {showLeftButton && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}
        {showRightButton && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
} 
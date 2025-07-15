"use client";
import { User } from "@redb/db";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type ManufacturerStoriesProps = {
  setSelectedManufacturer: (manufacturer: User) => void;
  manufacturers: User[];
}

export default function ManufacturerStories({ setSelectedManufacturer, manufacturers }: ManufacturerStoriesProps) {
  const [currentSelectedManufacturer, setCurrentSelectedManufacturer] = useState<string | null>(null);

  // Set first manufacturer as default
  useEffect(() => {
    if (manufacturers.length > 0 && !currentSelectedManufacturer) {
      const firstManufacturer = manufacturers[0];
      if (firstManufacturer) {
        setCurrentSelectedManufacturer(firstManufacturer.id.toString());
        setSelectedManufacturer(firstManufacturer);
      }
    }
  }, [manufacturers, currentSelectedManufacturer, setSelectedManufacturer]);

  const handleManufacturerClick = (manufacturer: User) => {
    const manufacturerId = manufacturer.id.toString();
    setSelectedManufacturer(manufacturer);
    setCurrentSelectedManufacturer(manufacturerId);
  }

  return (
    <div className="w-full md:w-auto py-4">
      <div className="  px-4">
        <Carousel
          opts={{
            align: "center",
            loop: false,
          }}
          className="  "
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {manufacturers.map((manufacturer, index) => {
              const isSelected = currentSelectedManufacturer === manufacturer.id.toString();
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-auto">
                  <div 
                    onClick={() => handleManufacturerClick(manufacturer)} 
                    className="flex-none text-center cursor-pointer"
                  >
                    <div className="relative mb-1">
                      {/* Instagram-style gradient border */}
                      <div className={`w-16 h-16 rounded-full p-0.5 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500' 
                          : 'bg-gradient-to-tr from-gray-300 to-gray-400'
                      }`}>
                        <div className="w-full h-full rounded-full bg-white p-0.5">
                          <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                            <span className="text-lg font-bold text-gray-700">
                              {manufacturer.name?.charAt(0)?.toUpperCase() || 'M'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Name below */}
                    <div className="w-16">
                      <p className="text-xs text-gray-700 truncate font-medium">
                        {manufacturer.name || 'Unknown'}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
              {manufacturers.map((manufacturer, index) => {
              const isSelected = currentSelectedManufacturer === manufacturer.id.toString();
              return (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-auto">
                  <div 
                    onClick={() => handleManufacturerClick(manufacturer)} 
                    className="flex-none text-center cursor-pointer"
                  >
                    <div className="relative mb-1">
                      {/* Instagram-style gradient border */}
                      <div className={`w-16 h-16 rounded-full p-0.5 transition-all duration-300 ${
                        isSelected 
                          ? 'bg-gradient-to-tr from-purple-500 via-red-500 to-yellow-500' 
                          : 'bg-gradient-to-tr from-gray-300 to-gray-400'
                      }`}>
                        <div className="w-full h-full rounded-full bg-white p-0.5">
                          <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                            <span className="text-lg font-bold text-gray-700">
                              {manufacturer.name?.charAt(0)?.toUpperCase() || 'M'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Name below */}
                    <div className="w-16">
                      <p className="text-xs text-gray-700 truncate font-medium">
                        {manufacturer.name || 'Unknown'}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
} 
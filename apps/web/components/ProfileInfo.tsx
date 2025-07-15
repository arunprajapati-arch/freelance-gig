import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { User } from "@redb/db";

interface ProfileInfoProps {
  manufacturer: User | null;
}

export default function ProfileInfo({ manufacturer }: ProfileInfoProps) {
  if (!manufacturer) {
    return (
      <div className="w-full md:w-1/2 rounded-xl sm:rounded-2xl flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 lg:p-8 overflow-hidden">
        <div className="flex items-center gap-2">
          <div className="h-0.5 sm:h-1 w-6 sm:w-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
          <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-bold text-gray-400 truncate">Select a Manufacturer</h1>
        </div>
        <div className="flex flex-col gap-2 md:gap-3 sm:pl-2 md:pl-4">
          <div className="w-full flex items-center gap-2 sm:gap-3">
            <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24">
              <AvatarFallback className="text-xs sm:text-sm md:text-base bg-gray-200">?</AvatarFallback>
            </Avatar>
            <div className="flex flex-col min-w-0 flex-1">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-400 truncate">No manufacturer selected</h2>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 truncate">@---</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getAccountTypeDisplay = (type: string) => {
    return type === "MANUFACTURER" ? "Manufacturer" : "Client";
  };

  const getProductCategories = () => {
    // This could be enhanced to fetch actual product categories from the manufacturer's products
    // For now, showing common categories
    return ["Clothing", "Apparel", "Fashion"];
  };

  return (
    <div className="w-full md:w-1/2 rounded-xl sm:rounded-2xl flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 lg:p-8 overflow-hidden">
      <div className="flex items-center gap-2">
        <div className="h-0.5 sm:h-1 w-6 sm:w-8 bg-gradient-to-r from-red-500 to-red-900 rounded-full"></div>
        <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-bold text-gray-800 truncate">
          {getAccountTypeDisplay(manufacturer.type)}
        </h1>
        {manufacturer.emailVerified && (
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 md:gap-3 sm:pl-2 md:pl-4">
        <div className="w-full flex items-center gap-2 sm:gap-3">
          <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24">
            <AvatarImage src={manufacturer.image || undefined} />
            <AvatarFallback className="text-xs sm:text-sm md:text-base bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              {manufacturer.name?.charAt(0)?.toUpperCase() || manufacturer.email.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col min-w-0 flex-1">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 truncate">
              {manufacturer.name || "Name not set"}
            </h2>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 truncate">
              @{manufacturer.username || "username-not-set"}
            </span>
            <span className="text-xs sm:text-sm text-gray-400 truncate">
              {manufacturer.email}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-1.5 sm:gap-2 flex-wrap mt-1 sm:mt-2 pl-2 sm:pl-3 md:pl-4">
        {getProductCategories().map((category, index) => (
          <span 
            key={index}
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-red-900 bg-red-50 px-2 py-1 rounded-full"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}
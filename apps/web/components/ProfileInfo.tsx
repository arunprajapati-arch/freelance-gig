import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ProfileInfo({ username }: { username: string }) {
  return (
    <div className="w-full md:w-1/2 rounded-xl sm:rounded-2xl flex flex-col justify-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6 lg:p-8 overflow-hidden">
      <div className="flex items-center gap-2">
        <div className="h-0.5 sm:h-1 w-6 sm:w-8 bg-gradient-to-r from-red-500 to-red-900 rounded-full"></div>
        <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-bold text-gray-800 truncate">Manufacturer</h1>
      </div>
      <div className="flex flex-col gap-2 md:gap-3 sm:pl-2 md:pl-4">
        <div className="w-full flex items-center gap-2 sm:gap-3">
         <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="text-xs sm:text-sm md:text-base">CN</AvatarFallback>
         </Avatar>
          <div className="flex flex-col min-w-0 flex-1">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 truncate">Arun prajapti</h2>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 truncate">@{username}prajapati</span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-1.5 sm:gap-2 flex-wrap mt-1 sm:mt-2 pl-2 sm:pl-3 md:pl-4">
        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-red-900 rounded-full">TShirt</span>
        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-red-900 rounded-full">Shirt</span>
        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-red-900 rounded-full">Jeans</span>
      </div>
    </div>
  );
}
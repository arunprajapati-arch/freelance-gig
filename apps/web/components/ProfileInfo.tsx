
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
export default function ProfileInfo({ username }: { username: string }) {
  return (
    <div className="w-full md:w-1/2 rounded-2xl flex flex-col justify-center gap-3 md:gap-4 p-4 md:p-6 lg:p-8 overflow-hidden">
      <div className="flex items-center gap-2">
        <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-gray-800 truncate">Manufacturer</h1>
      </div>
      <div className="flex flex-col gap-2 md:gap-3 md:pl-4">
        <div className="w-full flex items-center gap-3">
         <Avatar className="w-16 h-16 md:w-24 md:h-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
         </Avatar>
          <div className="flex flex-col">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 truncate">Arun prajapti</h2>
            <span className="text-sm sm:text-base md:text-lg text-gray-500 truncate">@{username}prajapati</span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-2 flex-wrap mt-2">
        <span className="text-xs sm:text-sm md:text-base font-semibold text-blue-700 bg-blue-100 border border-blue-200 rounded-full px-3 py-1.5 md:px-4 md:py-2 hover:bg-blue-200 transition-colors duration-200">TSHIRT</span>
        <span className="text-xs sm:text-sm md:text-base font-semibold text-green-700 bg-green-100 border border-green-200 rounded-full px-3 py-1.5 md:px-4 md:py-2 hover:bg-green-200 transition-colors duration-200">SHIRT</span>
        <span className="text-xs sm:text-sm md:text-base font-semibold text-purple-700 bg-purple-100 border border-purple-200 rounded-full px-3 py-1.5 md:px-4 md:py-2 hover:bg-purple-200 transition-colors duration-200">JEANS</span>
      </div>
    </div>
  );
}
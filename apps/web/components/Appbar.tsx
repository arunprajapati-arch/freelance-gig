import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


export default function Appbar() {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <div className="relative w-full md:w-2/3">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full h-12 md:h-14 bg-white border-2 border-gray-200 rounded-full text-base md:text-lg pl-12 pr-6 shadow-sm hover:shadow-md focus:shadow-lg focus:border-gray-400 focus:outline-none transition-all duration-300" 
        />
        <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      <div className="flex items-center gap-2">
        <Avatar className="w-12 h-12 md:w-16 md:h-16">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
       
      </div>
    </div>
  );
}
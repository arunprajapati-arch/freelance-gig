"use client"
import AddProductDialog from "./product/AddProductDialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Store, Search } from "lucide-react";
import { useState } from "react";

interface Props {
    user: {
        name: string;
        email: string;
        avatar: string;
        type: string;
    };
}

export default function AppHeader({ user }: Props) {
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    return (
        <div className="w-full flex items-center justify-between gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-20">
            <div className="flex items-center gap-1.5 sm:gap-2">
                <Store className="w-5 h-5 sm:w-6 sm:h-6 text-stone-100" />
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-stone-100 truncate">
                    <span className="hidden sm:inline">WholesaleDukaan</span>
                    <span className="sm:hidden">WD</span>
                </h1>
            </div>
            
            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                {/* Responsive Search */}
                <div className="relative flex items-center">
                    {!isSearchExpanded ? (
                        <Search 
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-stone-100 cursor-pointer hover:text-stone-300 transition-colors duration-200"
                            onClick={() => setIsSearchExpanded(true)}
                        />
                    ) : (
                        <div className="relative flex items-center">
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="w-48 sm:w-56 md:w-64 lg:w-80 h-8 sm:h-9 md:h-10 lg:h-12 bg-white border border-stone-200 sm:border-2 rounded-full text-xs sm:text-sm md:text-base pl-8 sm:pl-9 md:pl-10 pr-3 sm:pr-4 shadow-sm hover:shadow-md focus:shadow-lg focus:border-stone-400 focus:outline-none transition-all duration-300" 
                                autoFocus
                                onBlur={() => setIsSearchExpanded(false)}
                            />
                            <Search className="absolute left-2 sm:left-2.5 md:left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-400" />
                        </div>
                    )}
                </div>

                {/* Add Product Dialog for manufacturers - now visible on all screen sizes */}
                {user.type === "manufacturer" && (
                    <div className="flex items-center">
                        <AddProductDialog />
                    </div>
                )}
           
                <div className="flex items-center">
                    <Avatar className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="text-xs sm:text-sm">CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    );
}
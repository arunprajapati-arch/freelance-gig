"use client"
import { authClient } from "@/lib/auth-client";
import AddProductDialog from "./product/AddProductDialog";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Store, Search } from "lucide-react";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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
    const [searchQuery, setSearchQuery] = useState("");
    const {data: session, isPending, error} = authClient.useSession();
    console.log(session);
    
    // Dummy search suggestions
    const searchSuggestions = [
        "Electronics",
        "Home & Garden",
        "Fashion & Clothing",
        "Beauty & Personal Care",
        "Sports & Outdoors",
        "Books & Stationery",
        "Kitchen & Dining",
        "Health & Wellness"
    ];

    const filteredSuggestions = searchSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchSelect = (suggestion: string) => {
        setSearchQuery(suggestion);
        setIsSearchExpanded(false);
        // Here you can add logic to actually perform the search
        console.log("Searching for:", suggestion);
    };

    return (
        <div className="w-full flex items-center justify-between gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-20">
            <div className="flex items-center gap-1.5 sm:gap-2">
                <Store className="w-5 h-5 sm:w-6 sm:h-6 text-stone-100" />
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-stone-100 truncate">
                    <span className=" sm:inline">WholesaleDukaan</span>
                    {/* <span className="sm:hidden">WD</span> */}
                </h1>
            </div>
            
            <div className="flex items-center justify-center gap-4 md:gap-4 lg:gap-6">
                {/* Responsive Search */}
                <div className="relative flex items-center">
                    {!isSearchExpanded ? (
                        <Search 
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-stone-100 cursor-pointer hover:text-stone-300 transition-colors duration-200"
                            onClick={() => setIsSearchExpanded(true)}
                        />
                    ) : (
                        <>
                            {/* Backdrop with blur - only on smaller screens */}
                            <div 
                                className="fixed inset-0 backdrop-blur-sm z-40"
                                onClick={() => setIsSearchExpanded(false)}
                            />
                            {/* Search Overlay */}
                            <div className="fixed top-4 left-4 right-4 z-50 flex items-center justify-center lg:relative lg:top-0 lg:left-0 lg:right-0">
                                <div className="relative w-full max-w-md">
                                    <input 
                                        type="text" 
                                        placeholder="Search..." 
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full h-10 sm:h-12 bg-white border-2 border-stone-200 rounded-full text-sm sm:text-base pl-10 sm:pl-12 pr-4 shadow-lg focus:shadow-xl focus:border-stone-400 focus:outline-none transition-all duration-300" 
                                        autoFocus
                                        onBlur={(e) => {
                                            // Delay closing to allow clicking on suggestions
                                            setTimeout(() => setIsSearchExpanded(false), 150);
                                        }}
                                    />
                                    <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    
                                    {/* Search Suggestions */}
                                    {filteredSuggestions.length > 0 && (
                                        <div className="absolute top-full mt-2 w-full bg-white border border-stone-200 rounded-lg shadow-lg max-h-48 overflow-y-auto z-10">
                                            {filteredSuggestions.map((suggestion, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleSearchSelect(suggestion)}
                                                    className="px-4 py-2 hover:bg-stone-50 cursor-pointer border-b border-stone-100 last:border-b-0 text-sm transition-colors duration-150"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <Search className="w-4 h-4 text-gray-400" />
                                                        <span className="text-stone-700">{suggestion}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Add Product Dialog for manufacturers - now visible on all screen sizes */}
                {user.type === "manufacturer" && (
                    <div className=" flex items-center ">
                        <AddProductDialog />
                    </div>
                )}
           
                <div className="flex items-center">
                    <Avatar className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12">
                        <AvatarImage src={session?.user?.image || "https://github.com/shadcn.png"} />
                        <AvatarFallback className="text-xs sm:text-sm">{session?.user?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                </div>
                
                
               
            </div>
        </div>
    );
}
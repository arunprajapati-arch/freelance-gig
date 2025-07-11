import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight, ChevronRight, Home, LinkIcon, Store } from "lucide-react";


export default function Navbar() {
    
    return (
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-8">
            <div className="flex items-center gap-1.5 sm:gap-2">
                <Store className="w-5 h-5 sm:w-6 sm:h-6 text-stone-100" />
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-stone-100 truncate">
                    <span className=" sm:inline">WholesaleDukaan</span>
                    {/* <span className="sm:hidden">WD</span> */}
                </h1>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              
                
              
                <Link href="/signin" className="flex items-center text-sm sm:text-base md:text-lg font-medium cursor-pointer hover:underline text-stone-200 hover:text-stone-100">
                    Login
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Button asChild className="hidden sm:flex text-sm sm:text-base md:text-lg px-4 md:px-8 py-1 font-semibold bg-gradient-to-b from-stone-50 to-stone-300 text-red-950 shadow-md shadow-stone-900/20 cursor-pointer hover:opacity-95 transition-all duration-300">
                    <Link href="/signup">
                        Join
                    </Link>
                </Button>
            </div>
        </div>
    );
}
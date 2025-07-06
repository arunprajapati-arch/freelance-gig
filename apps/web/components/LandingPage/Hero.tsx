import { ArrowUpRight, ShoppingCartIcon, StoreIcon, Users, TrendingUp, Shield, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import Testimonials from "./Testimonials";

export default function Hero() {
    return (
        <div className="flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-stone-50 min-h-screen rounded-lg sm:rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 pt-4 sm:pt-6 md:pt-8 lg:pt-12 border border-stone-200 shadow-sm sm:shadow-md lg:shadow-lg">
            {/* <h1>Hero</h1> */}

            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-center text-center px-2 sm:px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tighter leading-tight max-w-5xl">
                    The Best Place to Connect in
                    <span className="text-red-900 block font-semibold tracking-tight">Wholesale Clothing</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-4 sm:mb-6 md:mb-8 leading-relaxed text-center">
                    A Platform That Brings <span className="text-red-900 font-semibold">Wholesale Buyers</span> and <span className="text-red-900 font-semibold">Makers</span> Together
                </p>
                <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center">
                    <Button className="text-sm sm:text-base md:text-lg p-3 sm:p-4 md:p-5 lg:p-6 flex items-center gap-2 rounded-lg font-semibold bg-red-900 text-red-100 shadow-md shadow-red-900/20 cursor-pointer hover:bg-red-800 tracking-tighter">
                        <span className=" sm:inline">Join Wholesale Dukaan</span>
                        {/* <span className="sm:hidden">Join WD</span> */}
                        <ArrowUpRight className="w-4 h-4" />
                    </Button>
                    <span className="text-xs sm:text-sm text-gray-400">500+ Members joined in last 30 days</span>
                </div>
            </div>
            
            <div className="flex flex-col gap-8 sm:gap-12 md:gap-16  items-center w-full h-full">
                {/* Features Section */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-6 justify-center items-center max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-5xl px-2 sm:px-4">
                    <div className="flex items-center gap-3 sm:gap-4 rounded-lg p-3 sm:p-4 min-w-0">
                        <StoreIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-900 flex-shrink-0" />
                        <div className="min-w-0">
                            <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">Direct from Manufacturers</h3>
                            <p className="text-xs sm:text-sm text-gray-600">No middlemen, better prices</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 rounded-lg p-3 sm:p-4 min-w-0">
                        <ShoppingCartIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-900 flex-shrink-0" />
                        <div className="min-w-0">
                            <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">Connect with Sellers</h3>
                            <p className="text-xs sm:text-sm text-gray-600">Get direct access to sellers</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 rounded-lg p-3 sm:p-4 min-w-0">
                        <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-900 flex-shrink-0" />
                        <div className="min-w-0">
                            <h3 className="text-sm sm:text-base font-semibold text-gray-800 truncate">Quality Assured</h3>
                            <p className="text-xs sm:text-sm text-gray-600">Trusted and verified sellers</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial */}
                <div className="flex flex-col gap-3 sm:gap-4 p-0 justify-center items-center text-center px-2 sm:px-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-red-900">What Our Members Say</h2>
                    <Testimonials />
                </div>
            </div>
        </div>
    );
}
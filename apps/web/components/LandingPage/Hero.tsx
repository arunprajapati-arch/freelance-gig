import { ArrowUpRight, ShoppingCartIcon, StoreIcon, Users, TrendingUp, Shield, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import MovingTestimonials from "./MovingTestimonials";

export default function Hero() {
    return (
        <div className="flex flex-col gap-16 bg-white min-h-screen rounded-xl p-4  md:pt-12">
            {/* <h1>Hero</h1> */}

            <div className="flex flex-col gap-2 justify-center items-center">
                <h1 className="text-center text-7xl    tracking-tighter leading-tight">The Best Place to Connect in<span className="text-orange-500 block font-semibold tracking-tight ">Wholesale Clothing</span></h1>
                <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8 leading-relaxed  text-center">
                A Platform That Brings <span className="text-orange-500 font-semibold">Wholesale Buyers</span> and <span className="text-orange-500 font-semibold">Makers</span> Together
                </p>
                <div className="flex flex-col gap-4 justify-center items-center">
                <Button className="text-md p-6 flex items-center gap-2 rounded-lg font-semibold bg-orange-500 text-orange-100 shadow-md shadow-orange-200 cursor-pointer hover:bg-orange-600 tracking-tighter">
                    Join Wholesale Dukaan
                    <ArrowUpRight className="w-4 h-4" />
                </Button>
                <span className="text-sm text-gray-400">500+ Members joined in last 30 days</span>
                </div>
            </div>
            <div className="flex flex-col gap-12  items-center w-full h-full">
                {/* Statistics Section */}
                

                {/* Features Section */}
                <div className="flex flex-wrap gap-6 justify-center items-center max-w-4xl">
                    <div className="flex items-center gap-4  rounded-lg p-4 ">
                        <StoreIcon className="w-8 h-8 text-orange-500" />
                        <div>
                            <h3 className="font-semibold text-gray-800">Direct from Manufacturers</h3>
                            <p className="text-sm text-gray-600">No middlemen, better prices</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4  rounded-lg p-4 ">
                        <ShoppingCartIcon className="w-8 h-8 text-orange-500" />
                        <div>
                            <h3 className="font-semibold text-gray-800">Chat with Sellers</h3>
                            <p className="text-sm text-gray-600">Connect with sellers directly</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4  rounded-lg p-4 ">
                        <Shield className="w-8 h-8 text-orange-500" />
                        <div>
                            <h3 className="font-semibold text-gray-800">Quality Assured</h3>
                            <p className="text-sm text-gray-600">Trusted and verified sellers</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial */}
                <div className="flex flex-col gap-4 p-0 justify-center items-center">
                    <h2 className="text-2xl font-semibold text-gray-800">What Our Members Say</h2>
                    <MovingTestimonials />
                </div>
            </div>
        </div>
    );
}
"use client";
import { authClient } from "@/lib/auth-client";
import AppHeader from "@/components/Appheader";
import {Suspense, lazy} from "react";

import { 
  ManufacturerStories, 
  FeaturedProducts,
  subscribedManufacturers,
  featuredProducts
} from "@/components/home";

import ProfileInfo from "@/components/ProfileInfo";
import NewArrivals from "@/components/NewArrival";

const ProductGrid = lazy(() => import("@/components/ProductGrid"));

export default  function Home() {
    const {data: session, isPending, error} = authClient.useSession();
    // Mock user data - replace with actual session data
    const user = {
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        type: "buyer"
    };

    return (
        <div className="min-h-screen flex flex-col justify-center  gap-2 bg-rose-900  pt-4 pb-0">
            <AppHeader user={user} />
            <div className="flex flex-col gap-12 items-center justify-center bg-stone-50 min-h-screen rounded-xl p-4 md:pt-12 border border-stone-200 shadow-lg relative overflow-hidden">
                
                
                <div className="relative z-10 w-full">
                    <div className="w-full  flex flex-col gap-4 items-center justify-center border border-red-500">
                        <div className="w-full max-w-7xl flex items-center justify-evenly gap-4">
                            <ProfileInfo username={user.name} />
                            <NewArrivals />
                        </div>
                        
                        <ManufacturerStories manufacturers={subscribedManufacturers} />
                        {/* <FeaturedProducts products={featuredProducts} /> */}
                        <ProductGrid />
                    </div>
                </div>
            </div>
        </div>
    );
}
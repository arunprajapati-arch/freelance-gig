import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import AppHeader from "@/components/Appheader";

import { 
  ManufacturerStories, 
  FeaturedProducts,
  subscribedManufacturers,
  featuredProducts
} from "@/components/home";
import ProductGrid from "@/components/ProductGrid";

export default async function Home() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    // Mock user data - replace with actual session data
    const user = {
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        type: "buyer"
    };

    return (
        <div className="min-h-screen flex flex-col gap-4 bg-rose-900  py-8 pb-0">
            <AppHeader user={user} />
            <div className="flex flex-col gap-12 bg-stone-50 min-h-screen rounded-xl p-4 md:pt-12 border border-stone-200 shadow-lg relative overflow-hidden">
                {/* Background decorative elements */}
                {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
                    <div className="absolute top-1/3 -left-32 w-64 h-64 bg-rose-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
                    <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                    <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-red-50 rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-pulse"></div>
                </div> */}
                
                <div className="relative z-10">
                    <div className="max-w-4xl mx-auto">
                        {/* <ManufacturerStories manufacturers={subscribedManufacturers} /> */}
                        {/* <FeaturedProducts products={featuredProducts} /> */}
                        <ProductGrid />
                    </div>
                </div>
            </div>
        </div>
    );
}
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { AppHeader } from "@/components/common";
import { 
  ManufacturerStories, 
  FeaturedProducts,
  subscribedManufacturers,
  featuredProducts
} from "@/components/home";

export default async function Home() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    // Mock user data - replace with actual session data
    const user = {
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    };

    return (
        <div className="min-h-screen  bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute top-1/3 -left-32 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
                <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
                <AppHeader 
                    showSearch={true}
                    searchPlaceholder="Search manufacturers, accounts, "
                    user={user}
                />
                
                <div className="max-w-4xl mx-auto">
                    <ManufacturerStories manufacturers={subscribedManufacturers} />
                    <FeaturedProducts products={featuredProducts} />
                </div>
            </div>
        </div>
    );
}
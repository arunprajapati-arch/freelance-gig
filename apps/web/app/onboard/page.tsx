import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Onboard from "@/components/Onboard";
import { Store } from "lucide-react";
import Navbar from "@/components/LandingPage/Navbar";

export default async function Page() {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    // if(!session) {
    //     redirect("/login");
    // }

    // Check if user is already onboarded (has username)
    // const isOnboarded = session.user.username && session.user.username.length > 0;
    
    // if(isOnboarded) {
    //     // User is already onboarded, redirect to home
    //     redirect("/home");
    // }

    return(
        <div className="flex flex-col  md:gap-4  md:min-h-screen  bg-gradient-to-b from-rose-900 to-rose-950 md:p-4 md:px-8">
            {/* Header with Simple Navbar */}
            <div className="hidden md:block">
           <Navbar />
           </div>
            {/* Main Content */}
            <div className="">
                <Onboard
                    // initialData={{
                    //     displayName: session?.user.name || "",
                    //     profileImage: session?.user.image || "",
                    // }}
                />
            </div>
            
           
        </div>
    )
}
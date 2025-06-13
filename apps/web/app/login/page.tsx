"use client";
import SignIn from "@/components/sign-in";
import { Button } from "@/components/ui/button";
import { authClient, signOut } from "@/lib/auth-client";

export default  function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <SignIn />
            <Button onClick={signOutFunction}>Sign Out</Button>
        </div>
    );
}

async function signOutFunction() {
    console.log("signing out");
    
    await authClient.signOut();
}


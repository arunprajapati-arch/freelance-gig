import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
    try {
        const session = await auth.api.getSession({
            headers: await headers()
        });

        if (!session) {
            // No session, redirect to login
            return NextResponse.redirect(new URL('/login', req.url));
        }

        // Check if user is onboarded by verifying if they have a username
        // New users from GitHub login will have username as null/empty
        // Only after completing onboarding will they have a username (required field)
        const isOnboarded = session.user.username && session.user.username.length > 0;

        if (isOnboarded) {
            // User is already onboarded, redirect to home
            return NextResponse.redirect(new URL('/home', req.url));
        } else {
            // User needs to complete onboarding (set username, account type, etc.)
            return NextResponse.redirect(new URL('/onboard', req.url));
        }
    } catch (error) {
        console.error('Error in auth callback:', error);
        // Fallback to onboard in case of error
        return NextResponse.redirect(new URL('/onboard', req.url));
    }
} 
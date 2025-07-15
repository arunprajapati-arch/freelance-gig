import { prisma } from "@redb/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function GET(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }
    const userId = session.user.id;
    console.log("userId", userId);
    try {
    const followings = await prisma.follow.findMany({
        where: {
            followerId: userId,
          },
          select: {
            following: true
          }
    })
        console.log("followings", followings);
        return NextResponse.json(followings)
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "Internal server error"}, {status: 500})
    }
}
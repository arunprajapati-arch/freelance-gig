import { NextRequest, NextResponse } from "next/server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@redb/db";

export async function GET(req: NextRequest): Promise<NextResponse> {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    const {searchParams} = new URL(req.url)

    const userId = searchParams.get("userId");
    const skip = searchParams.get("skip");

    if(!userId) {
        return NextResponse.json({error: "Missing required field userId"}, {status: 400})
    }
    
    try {
        const products = await prisma.product.findMany({
            where: {
                userId
            },
            skip: skip ? parseInt(skip) : 0,    
            take: 12,
            orderBy: {
                createdAt: 'desc'
            }
        })
        console.log(products);

        return NextResponse.json({products:products}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: "Error getting products"}, {status: 500})
    }
}
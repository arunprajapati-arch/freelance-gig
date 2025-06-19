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

    const id = searchParams.get("id")

    if(!id) {
        return NextResponse.json({error: "Missing required field id"}, {status: 400})
    }

    try {
         const product = await prisma.product.findUnique({
            where: {id}
        })

        return NextResponse.json({product:product}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: "Error getting product"}, {status: 500})
    }

    
}
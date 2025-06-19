import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@redb/db";

export async function POST(req: NextRequest): Promise<NextResponse> {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    if(session.user.type !== "MANUFACTURER") {
        return NextResponse.json({error: "Need to be a manufacturer to create a product"}, {status: 401})
    }

    const body = await req.json()

    const {name, description, price, image, color, type} = body

    if(!name || !price || !image || !color || !type) {
        return NextResponse.json({error: "Missing required fields"}, {status: 400})
    }

    try {
        const product = await prisma.product.create({
            data: {
            name,
            description,
            price,
            image,
            userId: session.user.id,
            color,
            type,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        });

        return NextResponse.json({product:product}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: "Error creating product"}, {status: 500})
    }
}
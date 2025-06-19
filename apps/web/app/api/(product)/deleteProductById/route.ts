import { auth } from "@/lib/auth";
import { prisma } from "@redb/db";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest): Promise<NextResponse> {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    if(session.user.type !== "MANUFACTURER") {
        return NextResponse.json({error: "Need to be a manufacturer to delete a product"}, {status: 401})
    }

    const body = await req.json()

    const {id} = body

    if(!id) {
        return NextResponse.json({error: "Missing required field id"}, {status: 400})
    }

    try {
        const product = await prisma.product.delete({
            where: {id}
        })

        return NextResponse.json({product:product}, {status: 200})
    } catch (error) {
        return NextResponse.json({error: "Error deleting product"}, {status: 500})
    }
}   
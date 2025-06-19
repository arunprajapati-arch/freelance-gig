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
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    const body = await req.json()

    const {id, ...rest} = body

    if(!id ) {
        return NextResponse.json({error: "Missing required field"}, {status: 400})
    }

   
const allowedFields = ['name', 'description', 'price', 'image', 'color', 'type'];

const data = Object.fromEntries(
  Object.entries(rest).filter(
    ([key, value]) => allowedFields.includes(key) && value !== undefined
  )
);

try {
    const product = await prisma.product.update({
        where: {id},
        data: {
            ...data,
            updatedAt: new Date()
        }
    })

    return NextResponse.json({product:product}, {status: 200})
} catch (error) {
    return NextResponse.json({error: "Error updating product"}, {status: 500})
}

}
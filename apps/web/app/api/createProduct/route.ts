import { auth } from "@/lib/auth";
import { AccountType, Color, prisma } from "@redb/db";
import { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/headers";

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  const { name, description, price, image, productType, color } = await request.body;

  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    return response.status(401).json({ error: "Unauthorized" });
  }

//   if (session.user.accountType !== AccountType.MANUFACTURER) {
//     return response.status(403).json({ error: "Only manufacturers can create products" });
//   }

  if (!name || !price || !image) {
    return response.status(400).json({ error: "Missing required fields" });
  }


  const product = await prisma.product.create({
    data: {
      name,
      description,
      price,
      image,
      userId: session.user.id,
      type: productType,
      color: color,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  });

  return response.status(200).json(product);
}
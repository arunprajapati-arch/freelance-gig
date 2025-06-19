'use server'
import { auth } from "@/lib/auth";
import { Color, prisma, ProductType } from "@redb/db";
import { headers } from "next/headers";
import { z } from "zod";

export async function addProduct(
    currentState: {success: boolean, message: string},
    formData: FormData
):Promise<{success: boolean, message: string}> {

    const session = await auth.api.getSession({
        headers: await headers()
    })

   if(!session) {
    return {
        success: false,
        message: "Unauthorized",
    }
   }

   const addProductSchema = z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    price: z.number().min(1),
    type: z.string().min(1),
    color: z.string().min(1),
   })

   const rawFormData = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: Number(formData.get("price")),
    type: formData.get("type"),
    color: formData.get("color"),
   }

   console.log(rawFormData);
   

   const validatedFields = addProductSchema.safeParse(rawFormData);



   if (!validatedFields.success) {
    console.log(validatedFields.error);
    
    return {
        success: false,
        message: validatedFields.error.message,
    }
   }

   const { name, description, price, type, color } = validatedFields.data;

 

   console.log(name, description, price, type, color);



   try {
    const product = await prisma.product.create({
        data: {
            name,
            description,
            price,
            type: type as ProductType,
            color: color as Color,
            image: "random.jpg",
            createdAt: new Date(),
            updatedAt: new Date(),
            userId: session.user.id,
        },
    });

    console.log(product);

    return {
        success: true,
        message: "Product added successfully",
    }
   } catch (error) {
    console.error(error);
    return {
        success: false,
        message: "Failed to add product",
    }   
   }

   
}
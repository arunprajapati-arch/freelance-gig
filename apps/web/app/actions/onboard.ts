'use server'

import { auth } from "@/lib/auth"
import { AccountType, prisma } from "@redb/db"
import { headers } from "next/headers"
import { z } from "zod"


//handle profile image later

const onboardingSchema = z.object({
    displayName: z.string().min(4, {message: "Minimum 4 characters are required"}),
    username: z.string().min(4, {message: "Minimum 4 characters are required"}),
    accountType: z.enum(["MANUFACTURER", "CLIENT"], {message: "Account type is required"}),
    profileImage: z.string().optional().nullable(),
})

export async function completeOnboarding(
    currentState: {success: boolean, message: string},
    formData: FormData,
): Promise<{success: boolean, message: string}> {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    if(!session) {
        return {
            success: false,
            message: "Unauthorized",
        }
    }

    const rawFormData = {
        displayName: formData.get("displayName"),
        username: formData.get("username"),
        accountType: formData.get("accountType"),
        profileImage: null,
    }

    console.log(rawFormData);

    const result = onboardingSchema.safeParse(rawFormData);

   
    

    if(!result.success) {
        return {
            success: false,
            message: result.error.flatten().fieldErrors.username?.[0] || "Invalid form data",
        }
    }
    
    const data = result.data;

    // checck if username already exists
try {
    const existingUsername = await prisma.user.findUnique({ 
        where: {
            username: data.username,
        }
    })

    if(existingUsername) {
        return {
            success: false,
            message: "Username already exists",
        }
    }
    
} catch (error) {
    console.error(error);
    return {
        success: false,
        message: "Failed to check if username already exists",
    }
}
   

    // update user

    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: session.user.id,
            },
            data: {
                name: data.displayName,
                username: data.username,
                image: data.profileImage,
                type: data.accountType as AccountType,
            }
        })
        return {
            success: true,
            message: "User updated successfully",
        }
        
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "Failed to update user",
        }
    }
    
}
import type { Request, Response } from "express";
import { prisma } from "@redb/db";

export const getProducts = async (req: Request,res: Response) => {
    // implement security of confidential products -> maybe add product type field of confidential or non-confidential in schema
    try {
        const prodcuts = await prisma.product.findMany();
        console.log(prodcuts);
        
        res.json(prodcuts);
    } catch (error) {
        res.json("Problem getting products");
        console.error(error);
    }
}

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.query;
    if(!id) {
        res.json("unable to get product")
    }

    // implement security of confidential products
    try{
        const product = await prisma.product.findUnique({
            where: {
                id: id as string,
            },
           
        });
        res.json(product);
    }catch(error){
        console.error(error);
        res.json("unable to get product");
    }
}

export const createProduct = async (req: Request, res: Response) => {

    const { name, description, price, color, image, type } = req.body;
    console.log(req.body);


    if (!name || !price || !color || !image || !type) {
        res.json("missing required fields")
    }

    try {
        const product = await prisma.product.create({
            data: {
                name,
                description,
                price,
                color,
                image,
                type,
                userId: 'aZ36m49puveIX3hXiFf3Kw3f6mjJPnnZ',
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        })
        res.json(product)
    } catch (error) {
        res.json("unable to create product")
        console.error(error);
    }

}

export const saveList = async(req: Request, res:Response) => {

    const { productId } = req.body;
    const userId = req.userId;

    try{
        const savedItem = await prisma.savedProduct.create({
            data: {
                productId,
                userId
            }
        });

        res.json(savedItem);
    }catch(error){
        console.error(error);
        res.json(error)
    }
}
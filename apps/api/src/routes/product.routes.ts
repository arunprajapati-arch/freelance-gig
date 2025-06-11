import { Router } from "express";
import { createProduct, getProductById, getProducts } from "../controllers/product.controller";
import { authMiddleware } from "../middlewares/authMiddleware";

 const route = Router();

 //GET Routes
route.get("/",  getProducts);
route.get("/:id",  getProductById);

//POST Routes
route.post("/",  createProduct);
route.post("/save", )

export default route
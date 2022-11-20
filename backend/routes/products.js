import express from "express";
import { updateProduct, deleteProduct, selectProductsByCategory, selectAllProducts, createProduct } from "../controllers/productController.js";
import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


// create a new product
router.post("/", createProduct);

// select all products by shop
router.get("/:shopId", selectAllProducts);

// select all products by category
router.get("/:shopId/:cgrId", selectProductsByCategory);

// delete a product
router.delete("/:id", deleteProduct);

// update a product
router.patch("/:id", updateProduct);

export default router;
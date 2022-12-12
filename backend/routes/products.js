import express from "express";
import {
    getProductBySlug,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
    selectProductsByCategory,
    selectAllProducts,
    createProduct,
} from "../controllers/productController.js";
import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/", getAllProducts);

// create a new product
router.post("/", createProduct);

// select all products by shop
router.get("/shop/:shopId", selectAllProducts);

// select all products by category
router.get("/shop/:shopId/:cgrId", selectProductsByCategory);

router.get("/slug/:slug", getProductBySlug);

router.get("/:id", getProductById);

// delete a product
router.delete("/:id", deleteProduct);

// update a product
router.patch("/:id", updateProduct);

export default router;

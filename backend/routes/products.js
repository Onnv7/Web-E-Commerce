import express from "express";
import {
    getIDBySlug,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
    selectProductsByCategory,
    selectAllProductsByShopId,
    createProduct,
    getAllProductsAndSort,
    searchProduct,
    selectAllProductsByMainCategory,
} from "../controllers/productController.js";
import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// ! none
router.get("/", getAllProducts);

// ! none
router.get("/search", searchProduct);

// ! unknown
router.get("/mainCategory/:cgrId", selectAllProductsByMainCategory);

// asc tang, desc giam
router.get("/sort/:sort", getAllProductsAndSort);

// !seller
// create a new product
router.post("/", createProduct);

// ! none
// select all products by shop
router.get("/shop/:shopId", selectAllProductsByShopId);

// ! none
// select all products by category
router.get("/shop/:shopId/:cgrId", selectProductsByCategory);

// ! none
router.get("/slug/:slug", getIDBySlug);

// !none
router.get("/:id", getProductById);

// !seller
// delete a product
router.delete("/:id", deleteProduct);

// !seller
// update a product
router.patch("/:id", updateProduct);

export default router;

import express from "express";
import { createCategory, selectAllCategory, deleteCategory, updateCategoryName, updateCategoryQuantity } from "../controllers/categoryController.js";

import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create category for shop
router.post("/", createCategory);

// delete category
router.delete("/:shopId/:cgrId", deleteCategory);

// select all categories by shop id
router.get("/:shopId", selectAllCategory);

// update name category by shop id and category name
router.get("/:shopId/:cgrId", updateCategoryName);

// update quantity category by shop id and category name
router.get("/:shopId/:cgrId", updateCategoryQuantity);

export default router;
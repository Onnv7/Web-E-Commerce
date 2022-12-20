import express from "express";
import {
    createMainCategory,
    updateMainCategory,
    deleteMainCategory,
    selectAllMainCategory,
} from "../controllers/mainCategoryController.js";

import { verifyBuyer, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// !admin
// create category for shop
router.post("/", createMainCategory);

// !admin
// delete category
router.delete("/:id", deleteMainCategory);

// ! none
// select all categories
router.get("/", selectAllMainCategory);

// !admin
// update quantity category by shop id and category name
router.put("/:id", updateMainCategory);

export default router;

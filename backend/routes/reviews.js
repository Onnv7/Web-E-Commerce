import express from "express";
import { createReview, updateReview, deleteReview, selectAllReviewsByProduct, selectReview } from "../controllers/reviewController.js"
const router = express.Router();

// create a new review
router.post("/", createReview);

// update a review
router.patch("/:id", updateReview);

// delete a review
router.delete("/:id", deleteReview);

// select a reviews
router.get("/:id", selectReview);

// select all reviews by product
router.get("/all/:productId", selectAllReviewsByProduct);

export default router;

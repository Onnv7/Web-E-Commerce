import express from "express";
import {
    createReview,
    updateReview,
    deleteReview,
    selectAllReviewsByProduct,
    selectReview,
    selectReviewByUserID,
} from "../controllers/reviewController.js";
const router = express.Router();

// !user
// create a new review
router.post("/", createReview);

// !user
// update a review
router.patch("/:id", updateReview);

// !user
// delete a review
router.delete("/:id", deleteReview);

// ! unknown
// TODO: check using
// select a reviews
router.get("/:id", selectReview);

// ! unknown
// TODO: check using
// select a reviews
router.get("/user/:id", selectReviewByUserID);

// ! none
// select all reviews by product
router.get("/all/:productId", selectAllReviewsByProduct);

export default router;

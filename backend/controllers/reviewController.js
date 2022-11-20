import Review from "../models/reviewModel.js";


// select a reviews
export const selectReview = async (req, res, next) => {
    try {
        const result = await Review.find(
            { _id: req.params.id }
        )
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

// select all reviews by product
export const selectAllReviewsByProduct = async (req, res, next) => {
    try {
        const result = await Review.find(
            { product: req.params.productId }
        )
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

// delete a review
export const deleteReview = async (req, res, next) => {
    try {
        const result = await Review.deleteOne(
            { _id: req.params.id }
        )
        res.status(200).json("Review has been deleted");
    } catch (error) {
        next(error);
    }
}

// update a review
export const updateReview = async (req, res, next) => {
    try {
        const result = await Review.updateOne(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

// create a new review
export const createReview = async (req, res, next) => {
    try {
        const result = new Review(req.body);
        result.save();
        res.status(200).json("Review has been created.")
    } catch (error) {
        next(error);
    }
}
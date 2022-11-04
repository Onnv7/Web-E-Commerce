import Review from "../models/reviewModel.js";


export const getAllReview = async (req, res, next) => {
    try {
        const result = await Review.find(
            { product: req.params.idProduct }
        )
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
export const deleteReview = async (req, res, next) => {
    try {
        const result = await Review.deleteOne(
            { _id: req.params.idReview }
        )
        res.status(200).json("Review has been deleted");
    } catch (error) {
        next(error);
    }
}
export const updateReview = async (req, res, next) => {
    try {
        const result = await Review.updateOne(
            { _id: req.params.idReview },
            { $set: req.body },
            { new : true }
        )
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
export const createReview = async (req, res, next) => {
    try {
        const body = { ...req.body, user: req.params.idUser };
        const result = new Review(req.body);
        result.save();
        res.status(200).json("Review has been created.")
    } catch (error) {
        next(error);
    }
}
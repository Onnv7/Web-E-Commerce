import Review from "../models/reviewModel.js";
import { saveFileObj } from "../utils/saveFile.js";
import {
    getDataFromImage,
    saveSingleFile,
    saveMultipleFile,
} from "../utils/saveFile.js";
import { getImgPathFromImgData, getUrlImageArr } from "../utils/getUrlImage.js";
import Product from "../models/productModel.js";

// select a reviews
export const selectReview = async (req, res, next) => {
    try {
        const result = await Review.find({ _id: req.params.id });
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// select a reviews by user ID
export const selectReviewByUserID = async (req, res, next) => {
    try {
        const result = await Review.find({ user: req.params.id });
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// select all reviews by product
export const selectAllReviewsByProduct = async (req, res, next) => {
    try {
        const review = await Review.find({ product: req.params.productId })
            .sort({ createdAt: -1 })
            .populate({
                path: "user",
                select: "name img",
            });
        let rs = [];
        let i = 0;
        for (i; i < review.length; i++) {
            const { user, img, ...others } = review[i]._doc;
            let imgPathUser;
            if (user.img !== null)
                imgPathUser = getImgPathFromImgData(user.img);
            else imgPathUser = "/Img/default-user.png";
            let imgPathReview;
            if (img !== null) imgPathReview = review[i].coverImagePath;
            else imgPathReview = "";
            const result = {
                ...others,
                name: user.name,
                imgPathUser: imgPathUser,
                imgPathReview: imgPathReview,
            };
            rs.push(result);
        }
        res.status(200).json(rs);
    } catch (error) {
        next(error);
    }
};

// delete a review
export const deleteReview = async (req, res, next) => {
    try {
        const result = await Review.deleteOne({ _id: req.params.id });
        res.status(200).json("Review has been deleted");
    } catch (error) {
        next(error);
    }
};

// update a review
export const updateReview = async (req, res, next) => {
    try {
        let image = null;
        let body;
        // nếu có ảnh
        if (req.body.img !== null) {
            image = getDataFromImage(req.body.img);
            body = { ...req.body, img: image };
        } else {
            body = { ...req.body };
        }

        const result = await Review.updateOne(
            { _id: req.params.id },
            { $set: body },
            { new: true }
        );
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// create a new review
export const createReview = async (req, res, next) => {
    try {
        const image = req.body.img;
        const body = { ...req.body };
        const review = new Review(body);
        if (typeof req.body.img === "string") {
            saveSingleFile(review, image);
        } else saveMultipleFile(review, image);
        await review.save();
        const product = await Product.findById(review.product);
        product.ratingAverage =
            (product.ratingAverage * product.ratingQuantity + review.rating) /
            (product.ratingQuantity + 1);
        product.ratingQuantity += 1;
        await product.save();
        const shop = await Product.findById(product.shop);
        shop.ratingAverage =
            (shop.ratingAverage * shop.ratingAverage + review.rating) /
            (shop.ratingAverage + 1);
        shop.ratingAverage += 1;
        await shop.save();
        res.status(200).json("Review has been created.");
    } catch (error) {
        next(error);
    }
};

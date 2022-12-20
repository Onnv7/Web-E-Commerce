import Checkout from "../models/checkoutModel.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";

// delete a checkout
export const deleteCheckout = async (req, res, next) => {
    try {
        const result = await Checkout.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// update a checkout
export const updateCheckout = async (req, res, next) => {
    try {
        const result = await Checkout.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// select a checkout
export const selectCheckout = async (req, res, next) => {
    try {
        const checkout = await Checkout.findOne({
            _id: req.params.id,
        });
        res.status(200).json(checkout);
    } catch (error) {
        next(error);
    }
};

// select all checkouts by user
export const selectAllCheckoutByUser = async (req, res, next) => {
    try {
        const checkouts = await Checkout.find({ user: req.params.userId })
            .populate({
                path: "productItems",
                // select: "name",
                // transform: (doc) => {
                //     const { img, ...others } = doc._doc
                //     const data = { ...others, imgPath: doc.imgPath }
                //     return data
                // },
                populate: {
                    //TODO: Sửa thành product
                    path: "_id",
                    transform: (doc) => {
                        const { img, slug, _id, ...others } = doc._doc;
                        console.log(
                            "🚀 ~ file: checkoutController.js:57 ~ selectAllCheckoutByUser ~ others",
                            others
                        );
                        const data = {
                            _id,
                            slug,
                            imgPath: doc.coverImagePath,
                        };
                        return data;
                    },
                },
            })
            .populate({
                path: "shop",
                select: "name",
            });
        res.status(200).json(checkouts);
    } catch (error) {
        next(error);
    }
};

// create a new checkout
export const createCheckout = async (req, res, next) => {
    try {
        // TODO: chỉnh phần trăm ăn lời tại rate
        const rate = 0.25;
        const { shop, user, totalCost, shipCost, productItems } = req.body;
        const seller = await User.findById(shop.user);
        const buyer = await User.findById(user);
        // update quantity for product
        productItems.forEach((item) => {
            const product = Product.updateOne(
                { "classify.name": item.name },
                {
                    $set: {
                        "classify.$.quantity": {
                            $subtract: [
                                "classify.$.quantity",
                                item.quantityProduct,
                            ],
                        },
                    },
                }
            );
        });
        // update ruby for buyer and seller
        seller.ruby += totalCost * (1 - rate);
        buyer.ruby -= totalCost * rate + shipCost;
        await seller.save();
        await buyer.save();
        const checkout = new Checkout(req.body);
        await checkout.save();
        res.status(200).json({
            success: true,
            message: "Checkout has been created.",
        });
    } catch (error) {
        next(error);
    }
};

export const shopRevenue = async (req, res, next) => {
    try {
        let startDate = new Date(req.params.startDate);
        let endDate = new Date(req.params.endDate);
        const checkout = await Checkout.find({
            shop: req.params.shopId,
        }).aggregate([
            {
                $match: {
                    $and: [
                        { createdAt: { $gt: startDate } },
                        { createdAt: { $lt: endDate } },
                    ],
                },
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%d-%m-%Y",
                            date: "$createdAt",
                        },
                    },
                    total: {
                        $sum: {
                            $subtract: [
                                "$totalCost",
                                { $multiply: ["$totalCost", 0.25] },
                            ],
                        },
                    },
                },
            },
            { $sort: { _id: 1 } },
        ]);
        res.status(200).json(checkout);
    } catch (error) {
        next(error);
    }
};

export const adminRevenue = async (req, res, next) => {
    try {
        let startDate = new Date(req.params.startDate);
        let endDate = new Date(req.params.endDate);
        const checkout = await Checkout.aggregate([
            {
                $match: {
                    $and: [
                        { createdAt: { $gt: startDate } },
                        { createdAt: { $lt: endDate } },
                    ],
                },
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%d-%m-%Y",
                            date: "$createdAt",
                        },
                    },
                    total: {
                        $sum: {
                            $subtract: [
                                "$totalCost",
                                { $multiply: ["$totalCost", 0.75] },
                            ],
                        },
                    },
                },
            },
            { $sort: { _id: 1 } },
        ]);
        res.status(200).json(checkout);
    } catch (error) {
        next(error);
    }
};

import Checkout from "../models/checkoutModel.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";
import Shop from "../models/shopModel.js";
import { getImgPathFromImgData } from "../utils/getUrlImage.js";
import { getFormatDate } from "../utils/formatIO.js";
export const selectAllCheckouts = async (req, res, next) => {
    try {
        const checkouts = await Checkout.find();
        res.status(200).json(checkouts);
    } catch (error) {
        next(error);
    }
};

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
        console.log(error);
        next(error);
    }
};

// select checkout by shop and status
export const selectCheckoutByShopIdAndStatus = async (req, res, next) => {
    try {
        const checkouts = await Checkout.find({
            shop: req.params.shopId,
            status: req.params.status,
        })
            .populate("productItems._id")
            .populate("user")
            .sort({ createdAt: -1 });
        const result = [];
        for (const checkout of checkouts) {
            const {
                _id,
                totalCost,
                shipCost,
                productItems,
                user,
                status,
                createdAt,
                note,
                deliveryInfo,
            } = checkout._doc;
            const productList = [];
            for (const productItem of productItems) {
                const { img } = productItem._id._doc;

                const data = {
                    name: productItem.name,
                    classifyProduct: productItem.classifyProduct,
                    quantityProduct: productItem.quantityProduct,
                    imgPath: getImgPathFromImgData(img[0]),
                };
                productList.push(data);
            }
            const data = {
                _id,
                totalCost,
                status,
                shipCost,
                createdAt: getFormatDate(createdAt),
                productList,
                note,
                deliveryInfo,
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// select all checkouts by shop
export const selectCheckoutByShopId = async (req, res, next) => {
    try {
        const checkouts = await Checkout.find({
            shop: req.params.shopId,
        })
            .populate("productItems._id")
            .sort({ createdAt: -1 });
        const result = [];
        for (const checkout of checkouts) {
            const { _id, totalCost, productItems, status, createdAt, note } =
                checkout._doc;
            const productList = [];
            for (const productItem of productItems) {
                const { img } = productItem._id._doc;

                const data = {
                    name: productItem.name,
                    classifyProduct: productItem.classifyProduct,
                    quantityProduct: productItem.quantityProduct,
                    imgPath: getImgPathFromImgData(img[0]),
                };
                productList.push(data);
            }
            const data = {
                _id,
                totalCost,
                status,
                createdAt: getFormatDate(createdAt),
                productList,
                note,
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// select a checkout
export const selectCheckoutById = async (req, res, next) => {
    try {
        const checkout = await Checkout.findOne({
            _id: req.params.id,
        });
        res.status(200).json(checkout);
    } catch (error) {
        next(error);
    }
};
// FIXME: bi cham cai nay
// select all checkouts by user
export const selectAllCheckoutByUser = async (req, res, next) => {
    try {
        const checkouts = await Checkout.find({ user: req.params.userId })
            .populate({
                path: "productItems",
                populate: {
                    //TODO: Sửa thành product
                    path: "_id",
                    transform: (doc) => {
                        const { img, slug, _id, ...others } = doc._doc;
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
            })
            .sort({ createdAt: -1 });
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
        const buyer = await User.findById(user);
        if (buyer.ruby < totalCost + shipCost) {
            return res.status(200).json({
                success: true,
                message:
                    "you don't have enough money, please check your account again",
            });
        }
        const shopOfSeller = await Shop.findById(shop);
        const seller = await User.findById(shopOfSeller.user);

        // update quantity for product
        for (const item of productItems) {
            const product = await Product.updateOne(
                { _id: item._id, "classify.name": item.classifyProduct },
                {
                    $inc: {
                        "classify.$.quantity": -item.quantityProduct,
                        soldQuantity: +1,
                    },
                }
            );
        }
        // update ruby for buyer and seller
        seller.ruby += Number(totalCost) * (1 - rate);
        buyer.ruby -= Number(totalCost) + Number(shipCost);
        await seller.save();
        await buyer.save();
        const checkout = new Checkout(req.body);
        await checkout.save();
        res.status(200).json({
            success: true,
            message: "Checkout has been created.",
        });
    } catch (error) {
        console.log(error);
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
        // yyyy-MM-dd
        let startDate = new Date(req.query.startDate);
        let endDate = new Date(req.query.endDate);
        endDate.setDate(endDate.getDate() + 1);
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

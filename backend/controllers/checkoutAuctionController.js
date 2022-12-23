import CheckoutAuction from "../models/checkoutAuctionModel.js";
import { getImgPathFromImgData, getUrlImageArr } from "../utils/getUrlImage.js";
import { getFormatDate } from "../utils/formatIO.js";
import Shop from "../models/shopModel.js";
import User from "../models/userModel.js";

export const createCheckoutAuction = async (req, res, next) => {
    try {
        const checkoutAuction = new CheckoutAuction(req.body);
        await checkoutAuction.save();
        res.status(200).json({
            success: true,
            message: "Auction created successfully",
        });
    } catch (error) {
        next(error);
    }
};

export const selectAllCheckoutAuctionsByUserId = async (req, res, next) => {
    try {
        const checkoutAuctions = await CheckoutAuction.find({
            user: req.params.userId,
            status: "notpaid",
        })
            .populate("auction")
            .populate("shop");

        const result = [];
        for (const checkout of checkoutAuctions) {
            const product = checkout.auction.product;
            const { img, name, quantity, ...others } = product;

            const data = {
                _id: checkout._id,
                name,
                quantity,
                price: checkout.auction.currentPrice,
                totalCost: checkout.totalCost,
                shop: {
                    _id: checkout.shop._id,
                    name: checkout.shop.name,
                    addressInfo: checkout.shop.addressInfo,
                },
                imgPath: getImgPathFromImgData(img[0]),
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const selectAllCheckoutStatusAuctionsByUserId = async (
    req,
    res,
    next
) => {
    try {
        const checkoutAuctions = await CheckoutAuction.find({
            user: req.params.userId,
            status: { $ne: "notpaid" },
        })
            .populate("auction")
            .populate("shop");

        const result = [];
        for (const checkout of checkoutAuctions) {
            const product = checkout.auction.product;
            const { img, name, quantity, ...others } = product;

            const data = {
                _id: checkout._id,
                name,
                quantity,
                price: checkout.auction.currentPrice,
                totalCost: checkout.totalCost,
                status: checkout.status,
                shop: {
                    _id: checkout.shop._id,
                    name: checkout.shop.name,
                    addressInfo: checkout.shop.addressInfo,
                },
                imgPath: getImgPathFromImgData(img[0]),
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
};
// select checkout by shop and status
export const selectCheckoutAuctionByShopIdAndStatus = async (
    req,
    res,
    next
) => {
    try {
        const checkouts = await CheckoutAuction.find({
            shop: req.params.shopId,
            status: req.params.status,
        })
            .populate("auction")
            .populate("user")
            .sort({ createdAt: -1 });
        const result = [];
        for (const checkout of checkouts) {
            const {
                _id,
                totalCost,
                auction,
                user,
                status,
                createdAt,
                note,
                deliveryInfo,
            } = checkout;
            const { product } = auction;

            const data = {
                _id,
                totalCost,
                status,
                note,
                deliveryInfo,
                createdAt: getFormatDate(createdAt),
                product: {
                    name: product.name,
                    quantity: product.quantity,
                    img: getImgPathFromImgData(product.img[0]),
                },
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

export const selectAllCheckoutAuctionsByShopId = async (req, res, next) => {
    try {
        const checkoutAuctions = await CheckoutAuction.find({
            shop: req.params.shopId,
        })
            .populate("auction")
            .populate("shop");

        const result = [];
        for (const checkout of checkoutAuctions) {
            const product = checkout.auction.product;
            const { img, name, quantity, ...others } = product;

            const data = {
                _id: checkout._id,
                name,
                quantity,
                status: checkout.status,
                createdAt: getFormatDate(checkout.createdAt),
                note: checkout.note,
                price: checkout.auction.currentPrice,
                totalCost: checkout.totalCost,
                shop: {
                    _id: checkout.shop._id,
                    name: checkout.shop.name,
                    addressInfo: checkout.shop.addressInfo,
                },
                imgPath: getImgPathFromImgData(img[0]),
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const selectAuctionById = async (req, res, next) => {
    try {
        const checkoutAuction = await CheckoutAuction.findById(req.params.id);
        res.status(200).json(checkoutAuction);
    } catch (error) {
        next(error);
    }
};

export const updateCheckoutAuction = async (req, res, next) => {
    try {
        console.log(req.body);
        const rate = 0.25;
        const { totalCost, shipCost } = req.body;
        const update = await CheckoutAuction.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: req.body }
        );
        const auction = await CheckoutAuction.findOne({ _id: req.params.id });
        const shopOfSeller = await Shop.findById(auction.shop);
        const seller = await User.findById(shopOfSeller.user);
        const buyer = await User.findById(auction.user);
        seller.ruby += Number(totalCost) * (1 - rate);
        buyer.ruby -= Number(totalCost) + Number(shipCost);
        await seller.save();
        await buyer.save();
        res.status(200).json(update);
    } catch (error) {
        next(error);
    }
};

export const updateCheckoutStatusAuction = async (req, res, next) => {
    try {
        const update = await CheckoutAuction.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: req.body }
        );
        await update.save();
        res.status(200).json(update);
    } catch (error) {
        next(error);
    }
};

export const deleteAuction = async (req, res, next) => {
    try {
        const auctions = await CheckoutAuction.deleteOne({
            _id: req.params.id,
        });
        res.status(200).json(auctions);
    } catch (error) {
        next(error);
    }
};

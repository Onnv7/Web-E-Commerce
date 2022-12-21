import Auction from "../models/auctionModel.js";
import Shop from "../models/shopModel.js";
import User from "../models/userModel.js";
import { saveFileObj, saveMultipleFile } from "../utils/saveFile.js";
import { getImgPathFromImgData, getUrlImageArr } from "../utils/getUrlImage.js";
import { getFormatDate } from "../utils/formatIO.js";

export const reverseAuction = async (req, res, next) => {
    try {
        const auctionId = req.params.id;
        const { price, bidder } = req.body;

        const auction = await Auction.findById(auctionId);
        if (!auction) {
            return res
                .status(404)
                .json({ success: false, message: "Auction not found." });
        }

        if (auction.endTime < new Date()) {
            return res
                .status(404)
                .json({ success: false, message: "Auction time out" });
        }
        if (Number(price) >= auction.currentPrice) {
            return res
                .status(200)
                .json({ success: false, message: "Invalid price" });
        }

        const data = { bidder: bidder, price: price, time: new Date() };
        auction.auctionHistory.push(data);
        auction.currentPrice = price;
        await auction.save();
        res.status(200).json({ success: true, message: "Successful auction" });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const createAuction = async (req, res, next) => {
    try {
        const { product } = req.body;
        const image = product.img;
        const auction = new Auction(req.body);
        if (typeof req.body.img === "string") {
            saveSingleFile(product, image);
        } else saveMultipleFile(product, image);
        auction.product = product;
        await auction.save();
        res.status(200).json({
            success: true,
            message: "Auction created successfully",
        });
    } catch (error) {
        next(error);
    }
};

// select all auctions by bidder id
export const selectAllAuctionsByBidderId = async (req, res, next) => {
    try {
        const bidderId = req.params.bidderId;
        const auctions = await Auction.find(
            {
                auctionHistory: {
                    $elemMatch: { bidder: bidderId },
                },
            },
            { "auctionHistory.$.price": 1 }
        );
        const result = [];
        auctions.forEach((auction) => {
            const product = auction.product;
            const name = product.name;
            const image = product.img[0];
            const imgPath = getImgPathFromImgData(image);
            const quantity = product.quantity;
            // const startTime = getFormatDate(auction.createdAt);
            console.log(auction.auctionHistory);
            const endTime = getFormatDate(auction.endTime);
            const currentPrice = auction.currentPrice;
            const body = {
                _id: auction._id,
                name,
                quantity,
                endTime,
                startingPrice: auction.startingPrice,
                currentPrice,
                imgPath,
            };
            result.push(body);
        });
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

// select all auctions by user id
export const selectAllAuctionsByUserId = async (req, res, next) => {
    try {
        const auctions = await Auction.find({ buyer: req.params.userId });
        const result = [];
        auctions.forEach((auction) => {
            const product = auction.product;
            const name = product.name;
            const image = product.img[0];
            const imgPath = getImgPathFromImgData(image);
            const quantity = product.quantity;
            const startTime = getFormatDate(auction.createdAt);
            const endTime = getFormatDate(auction.endTime);
            const currentPrice = auction.currentPrice;
            const body = {
                _id: auction._id,
                name,
                imgPath,
                quantity,
                startTime,
                endTime,
                currentPrice,
            };
            result.push(body);
        });
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

export const selectAllAuctions = async (req, res, next) => {
    try {
        const result = [];
        const auctions = await Auction.find({});
        for (const auction of auctions) {
            const {
                product,
                startingPrice,
                currentPrice,
                auctionHistory,
                endTime,
            } = auction._doc;
            const imgPath = getImgPathFromImgData(product.img[0]);
            const data = {
                _id: auction._id,
                name: product.name,
                countAuction: auctionHistory.length,
                startingPrice,
                currentPrice,
                endTime: getFormatDate(endTime),
                imgPath,
            };
            result.push(data);
        }
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

export const selectAuctionById = async (req, res, next) => {
    try {
        const auction = await Auction.findById(req.params.id);
        const {
            product,
            startingPrice,
            endTime,
            currentPrice,
            auctionHistory,
        } = auction._doc;
        const imgPath = getUrlImageArr(auction.product.img);
        const shop = [];
        for (const auction of auctionHistory) {
            const rs = await Shop.findById(auction.bidder);
            const data = {
                name: rs.name,
                _id: rs._id,
                price: auction.price,
                time: getFormatDate(auction.time),
            };
            shop.push(data);
        }

        const buyer = await User.findById(auction.buyer);
        const imgPathUser = getImgPathFromImgData(buyer.img);
        const user = {
            name: buyer.name,
            imgPath: imgPathUser,
        };
        const data = {
            name: product.name,
            description: product.description,
            quantity: product.quantity,
            imgPath,
            currentPrice,
            startingPrice,
            startTime: getFormatDate(auction.createdAt),
            endTime: getFormatDate(endTime),
            start: auction.createdAt,
            end: endTime,
            countAuction: auctionHistory.length,
            shop,
            user,
        };
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const updateAuction = async (req, res, next) => {
    try {
        const auction = await Auction.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.status(200).json(auction);
    } catch (error) {
        next(error);
    }
};

export const deleteAuction = async (req, res, next) => {
    try {
        const auctions = await Auction.deleteOne({ _id: req.params.id });
        res.status(200).json(auctions);
    } catch (error) {
        next(error);
    }
};

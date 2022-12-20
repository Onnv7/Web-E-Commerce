import Auction from "../models/auctionModel.js";

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

        if (price <= auction.currentPrice) {
            return res
                .status(404)
                .json({ success: false, message: "Invalid price" });
        }
        const data = { bidder: bidder, price: price, time: new Date() };
        auction.auctionHistory.push(data);
        auction.currentPrice = price;
        await auction.save();
        res.status(200).json({ success: true, message: "Successful auction" });
    } catch (error) {
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
        auction.currentPrice = product.price;
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

export const selectAllAuctions = async (req, res, next) => {
    try {
        const auctions = await Auction.find({});
        res.status(200).json(auctions);
    } catch (error) {
        next(error);
    }
};

export const selectAuctionById = async (req, res, next) => {
    try {
        const auction = await Auction.findById(req.params.id);
        res.status(200).json(auction);
    } catch (error) {
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

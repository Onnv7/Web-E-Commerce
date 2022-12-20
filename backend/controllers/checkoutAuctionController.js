import CheckoutAuction from "../models/checkoutAuctionModel.js";

export const createAuction = async (req, res, next) => {
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

export const selectAllAuctionsByUserId = async (req, res, next) => {
    try {
        const checkoutAuctions = await CheckoutAuction.find({
            user: req.params.userId,
        });
        const result = [];
        checkoutAuctions.forEach((e) => {
            const product = e.auction.product;
            // TOTO: lỗi ở imgPath thì dùng img này chuyển sang url
            const { img, ...others } = product;
            const data = {
                _id: e._id,
                shop: e.shop,
                totalCost: e.totalCost,
                status: e.status,
                quantity: product.quantity,
                imgPath: product.coverImagePath,
            };
            result.push(data);
        });
        res.status(200).json(result);
    } catch (error) {
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

// export const deleteAuction = async (req, res, next) => {
//     try {
//         const auctions = await Auction.deleteOne({ _id: req.params.id });
//         res.status(200).json(auctions);
//     } catch (error) {
//         next(error);
//     }
// };

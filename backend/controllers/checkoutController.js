import Checkout from "../models/checkoutModel.js";

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
                        const { img, slug, ...others } = doc._doc;
                        const data = {
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
        const checkout = new Checkout(req.body);
        await checkout.save();
        res.status(200).json("Checkout has been created.");
    } catch (error) {
        console.log(error);
        next(error);
    }
};

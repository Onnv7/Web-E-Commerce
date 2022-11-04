import Checkout from "../models/checkoutModel.js";

export const getCheckoutByIdCheckout = async (req, res, next) => {
    try {
        const checkout = await Checkout.findById(req.params.idCheckout);
        res.status(200).json(checkout);
    } catch (error) {
        next(error);
    }
}

export const deleteCheckout = async (req, res, next) => {
    try {
        const result = await Checkout.findOneAndDelete(
            {_id: req.params.idCheckout}
        )
        res.status(200).json(result);
    } catch (error) {
        next(error9);
    }
}
export const updateCheckout = async (req, res, next) => {
    try {
        const result = await Checkout.updateOne(
            {_id: req.params.idCheckout},
            { $set: req.body}
        )
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}
export const getAllCheckoutByIdCheckoutAnd = async (req, res, next) => {
    try {
        const checkout = await Checkout.find(
            {
                user: req.params.idUser,
                'product.id': req.params.idProduct,
            });
        res.status(200).json(checkout);
    } catch (error) {
        next(error);
    }
}
export const getAllCheckoutByIdUser = async (req, res, next) => {
    try {
        const checkouts = await Checkout.find({user: req.params.idUser});
        res.status(200).json(checkouts);
    } catch (error) {
        next(error);
    }
}
export const createCheckout = async (req, res, next) => {
    try {
        const body = { ...req.body, user: req.params.idUser };
        const checkout = new Checkout(body);
        await checkout.save();
        res.status(200).json("Checkout has been created.");
    } catch (error) {
        next(error);
    }
}

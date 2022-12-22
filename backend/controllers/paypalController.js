import paypal from "paypal-rest-sdk";
import axios from "axios";
import User from "../models/userModel.js";
paypal.configure({
    mode: "sandbox", //sandbox or live
    client_id:
        "AXBW39Gom8uiojSjo_Oshj-Q1SNFhofvz6S-eJM-2k5OzCJgQzZovfebHZt1zWbF4RHHE_dGJ37Mhrir",
    client_secret:
        "EHy3dCmbXeCp9wh8WE3a0YJIzNNigx-ZYwTUYoCd5lYsdZA0ufDsGT3vrNuUzxXGvRegTGeczBv6FDBu",
});

export const pay = async (req, res, next) => {
    console.log("Pay");
    const money = req.body.money;
    const userID = req.params.id; //getIdUser(req, res, next);
    const create_payment_json = {
        intent: "sale",
        payer: {
            payment_method: "paypal",
        },
        redirect_urls: {
            return_url: `http://localhost:8800/backend/paypal/success/${userID}?money=${money}`,
            cancel_url: "http://localhost:8800/backend/paypal/cancel",
        },
        transactions: [
            {
                item_list: {
                    items: [
                        {
                            name: "Ruby",
                            sku: "001",
                            price: `${money}`,
                            currency: "USD",
                            quantity: 1,
                        },
                    ],
                },
                amount: {
                    currency: "USD",
                    total: `${money}`,
                },
                description: "Buy ruby",
            },
        ],
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === "approval_url") {
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });
};

export const success = async (req, res, next) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
    const userID = req.params.id;
    const user = await User.findById(userID);

    // FIXME should use try catch at here
    let money = Number(req.query.money) + user.ruby;
    const url = `${process.env.BACKEND}/users/${userID}`;
    const data = {
        ruby: money,
    };

    const execute_payment_json = {
        payer_id: payerId,
        transactions: [
            {
                amount: {
                    currency: "USD",
                    total: `${req.query.money}`,
                },
            },
        ],
    };
    paypal.payment.execute(
        paymentId,
        execute_payment_json,
        function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                //console.log(JSON.stringify(payment));
                axios.patch(url, data);
                // TODO: code redirect to frontend
                res.status(200).json({
                    success: true,
                    message: "Payment success",
                });
            }
        }
    );

    //if (paid) {
    // const response = await fetch(
    //   "http://localhost:8080/backend/users/636e50e30d18bab0b2ef6261",
    //   {
    //     "method": "patch",
    //     "body": {
    //       "ruby": 5,
    //     },
    //   }
    // );

    //}
};
// TODO: redirect to frontend cancel
export const cancel = async (req, res, next) =>
    res.send("Cancelled (Đơn hàng đã hủy)");

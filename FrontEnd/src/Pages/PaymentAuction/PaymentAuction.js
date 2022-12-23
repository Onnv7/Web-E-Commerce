import { Paypal } from "iconsax-react";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import PaymentAuctionProperty from "../../Components/PaymentAuctionProperty/PaymentAuctionProperty";
import "./paymentAuction.scss";

const PaymentAuction = () => {
    return (
        <div>
            <Navbar style="main" />
            <Header styles="hideNav" style="hideImg" />
            <div className="payment-container">
                <span>
                    <Paypal size={40} variant="Bold" />
                    Thanh toán sản phẩm bạn đã đấu giá
                </span>
                <PaymentAuctionProperty />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default PaymentAuction;

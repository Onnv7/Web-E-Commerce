import { ShoppingCart, BagTimer } from "iconsax-react";
import React from "react";
import CartAuctionProperty from "../../Components/CartAuctionProperty/CartAuctionProperty";
import "./cartAuctionList.scss";
import NavBar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const CartAuctionList = () => {
    return (
        <div>
            <NavBar style="main" />
            <Header styles="hideNav" style="hideImg" />
            <div className="cartList-container">
                <span>
                    <BagTimer size={40} variant="Bold" />
                    Sản phẩm bạn đã đấu giá
                </span>
                <CartAuctionProperty />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default CartAuctionList;

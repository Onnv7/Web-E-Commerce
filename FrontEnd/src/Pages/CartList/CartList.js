import { ShoppingCart } from "iconsax-react";
import React from "react";
import CartProperty from "../../Components/CartProperty/CartProperty";
import "./cartList.scss";
import NavBar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const CartList = () => {
    return (
        <div>
            <NavBar style="main" />
            <Header styles="hideNav" style="hideImg" />
            <div className="cartList-container">
                <span>
                    <ShoppingCart size={40} variant="Bold" />
                    Giỏ hàng
                </span>
                <CartProperty />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default CartList;

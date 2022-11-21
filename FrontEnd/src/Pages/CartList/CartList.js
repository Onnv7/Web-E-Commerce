import { ShoppingCart } from 'iconsax-react';
import React from 'react';
import './cartList.scss';

const CartList = () => {
    return (
        <div>
            <div className="cartList-container">
                <h1>
                    <ShoppingCart />
                    Giỏ hàng
                </h1>
            </div>
        </div>
    );
};

export default CartList;

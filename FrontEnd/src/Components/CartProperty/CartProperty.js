import React, { useContext, useEffect, useState } from 'react';
import './cartProperty.scss';
import { ArrowDown2, Crown, Heart, MessageText1, Shop } from 'iconsax-react';
import { AuthContext } from '../../context/AuthContext';
import { StoreContext } from '../../context/StoreContext';
import axios from './../../hooks/axios';
const CartProperty = () => {
    const { user } = useContext(AuthContext);
    const { state, contextDispatch } = useContext(StoreContext);
    const {
        cart: { cartItems, shopItems },
    } = state;
    const [products, setProducts] = useState([]);
    const [shops, setShops] = useState([]);

    useEffect(() => {
        cartItems.forEach(async (element) => {
            const { data } = await axios.get(`/products/${element._id}`);
            setProducts((preProducts) => [
                ...preProducts,
                {
                    ...data,
                    quantityProduct: element.quantityProduct,
                    sizeProduct: element.sizeProduct,
                    indexItem: element.indexItem,
                },
            ]);
        });
    }, [cartItems]);
    useEffect(() => {
        shopItems.forEach(async (element) => {
            const { data } = await axios.get(`/shops/shop/${element._id}`);
            setShops((pre) => [...pre, data]);
        });
    }, [shopItems]);
    console.log(products);
    console.log(shops);
    return (
        <div className="cartProperty">
            <div className="cart-container">
                <div className="cart-content">
                    {shops.map((shop) => (
                        <div className="cart-contentBox">
                            <div className="cart-title">
                                <span>{shop.name}</span>
                                <div className="cart-infoShop">
                                    <button>
                                        <Shop />
                                        Tham quan
                                    </button>
                                </div>
                            </div>
                            {products
                                .filter((product) => product.shop._id === shop._id)
                                .map((product) => (
                                    <div className="cart-product">
                                        <input type="checkbox" />
                                        <img src={product.imgPath[0]} alt="productImg" />
                                        <div className="cart-productProperty">
                                            <div className="cart-productItem">
                                                <span>{product.name}</span>
                                                <div className="cart-productBox">
                                                    <div className="cart-productCount">
                                                        <span>Số lượng</span>
                                                        <input type="text" value={product.quantityProduct} disabled />
                                                    </div>
                                                    <div className="cart-moneySum">
                                                        <span>Giá tiền</span>
                                                        <span>
                                                            {product.price}
                                                            <Crown variant="Bold" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart-productButton">
                                                <span>{product.sizeProduct}</span>
                                                <span>Xóa</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))}

                    {/* <div className="cart-contentBox">
                        <div className="cart-title">
                            <span>Thế giới di động</span>
                            <div className="cart-infoShop">
                                <button>
                                    <Shop />
                                    Tham quan
                                </button>
                                <button>
                                    <MessageText1 />
                                    Liên hệ
                                </button>
                                <span>Xóa</span>
                            </div>
                        </div>
                        <div className="cart-product">
                            <input type="checkbox" />
                            <img src="../Img/iphone14.png" alt="" />
                            <div className="cart-productProperty">
                                <div className="cart-productItem">
                                    <span>
                                        Iphone 14 Pro Max - Deep Purple (Tím) -
                                        Hàng chính hãng
                                    </span>
                                    <div className="cart-productBox">
                                        <div className="cart-productCount">
                                            <span>Số lượng</span>
                                            <input type="text" value={1} />
                                        </div>
                                        <div className="cart-moneySum">
                                            <span>Tổng tiền</span>
                                            <span>
                                                800 <Crown variant="Bold" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-productButton">
                                    <span>
                                        Tùy chọn{" "}
                                        <ArrowDown2
                                            variant="Bold"
                                            className="cart-icon"
                                        />
                                    </span>
                                    <span>Xóa</span>
                                </div>
                            </div>
                        </div>
                        <div className="cart-product">
                            <input type="checkbox" />
                            <img src="../Img/iphone14.png" alt="" />
                            <div className="cart-productProperty">
                                <div className="cart-productItem">
                                    <span>
                                        Iphone 14 Pro Max - Deep Purple (Tím) -
                                        Hàng chính hãng
                                    </span>
                                    <div className="cart-productBox">
                                        <div className="cart-productCount">
                                            <span>Số lượng</span>
                                            <input type="text" value={1} />
                                        </div>
                                        <div className="cart-moneySum">
                                            <span>Tổng tiền</span>
                                            <span>
                                                800 <Crown variant="Bold" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-productButton">
                                    <span>
                                        Tùy chọn{" "}
                                        <ArrowDown2
                                            variant="Bold"
                                            className="cart-icon"
                                        />
                                    </span>
                                    <span>Xóa</span>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="cart-confirm">
                    <div className="cart-comfirmList">
                        <div className="cart-confirmItem">
                            <span>Tổng số lượng</span>
                            <span>
                                {cartItems.reduce(
                                    (accumulate, currentValue) => accumulate + currentValue.quantityProduct,
                                    0,
                                )}
                            </span>
                        </div>
                        <div className="cart-confirmItem">
                            <span>Tổng thanh toán</span>
                            <span>
                                {cartItems.reduce(
                                    (accumulate, currentValue) =>
                                        accumulate + currentValue.price * currentValue.quantityProduct,
                                    0,
                                )}
                                <Crown variant="Bold" />
                            </span>
                        </div>
                        <button>Xác nhận</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProperty;

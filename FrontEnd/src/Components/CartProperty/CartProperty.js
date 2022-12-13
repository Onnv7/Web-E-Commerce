import React from 'react';
import './cartProperty.scss';
import { ArrowDown2, Crown, Heart, MessageText1, Shop } from 'iconsax-react';

const CartProperty = () => {
    return (
        <div className="cartProperty">
            <div className="cart-container">
                <div className="cart-content">
                    <div className="cart-contentBox">
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
                                    <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                                    <div className="cart-productBox">
                                        <div className="cart-productCount">
                                            <span>Số lượng</span>
                                            <input type="text" defaultValue={1} />
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
                                        Tùy chọn <ArrowDown2 variant="Bold" className="cart-icon" />
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
                                    <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                                    <div className="cart-productBox">
                                        <div className="cart-productCount">
                                            <span>Số lượng</span>
                                            <input type="text" defaultValue={1} />
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
                                        Tùy chọn <ArrowDown2 variant="Bold" className="cart-icon" />
                                    </span>
                                    <span>Xóa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-contentBox">
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
                                    <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
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
                                        Tùy chọn <ArrowDown2 variant="Bold" className="cart-icon" />
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
                                    <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
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
                                        Tùy chọn <ArrowDown2 variant="Bold" className="cart-icon" />
                                    </span>
                                    <span>Xóa</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-confirm">
                    <div className="cart-choose">
                        <div className="cart-chooseAll">
                            <input type="checkbox" />
                            <span>Chọn tất cả</span>
                        </div>
                        <span>Xóa</span>
                    </div>
                    <div className="cart-comfirmList">
                        <div className="cart-confirmItem">
                            <span>Tổng số lượng</span>
                            <span>2</span>
                        </div>
                        <div className="cart-confirmItem">
                            <span>Tổng thanh toán</span>
                            <span>
                                2000 <Crown variant="Bold" />
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

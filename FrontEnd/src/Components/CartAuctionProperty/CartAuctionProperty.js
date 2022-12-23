import React, { useContext, useEffect, useState } from "react";
import { ArrowDown2, Crown, Heart, MessageText1, Shop } from "iconsax-react";
import { AuthContext } from "../../context/AuthContext";
import { StoreContext } from "../../context/StoreContext";
import axios from "./../../hooks/axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const CartAuctionProperty = () => {
    const { user } = useContext(AuthContext);
    const [userDetail, setUserDetail] = useState();
    const [checkoutAuctions, setCheckoutAuctions] = useState([]);
    const [reload, setReload] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/users/${user._id}`);
            setUserDetail(data);
        };
        fetchData();
    }, [user]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/checkoutAuction/${user._id}`);
            console.log(data);
            setCheckoutAuctions(data);
        };
        fetchData();
    }, [user, reload]);

    const gotoShop = (id) => {
        navigate(`/shop/${id}`);
    };
    const deleteCheckoutHandler = async (id) => {
        try {
            await axios.delete(`/checkoutAuction/${id}`);
            toast.success("Thành công xóa sản phẩm bạn đã tạo đấu giá ");
            setReload(!reload);
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="cartProperty">
            <div className="cart-container">
                <div className="cart-content">
                    {checkoutAuctions.length > 0 ? (
                        checkoutAuctions.map((checkout) => (
                            <div className="cart-contentBox" key={checkout._id}>
                                <div className="cart-title">
                                    <span>Shop: {checkout.shop.name}</span>
                                    <div className="cart-infoShop">
                                        <button
                                            onClick={() =>
                                                gotoShop(checkout.shop._id)
                                            }
                                        >
                                            <Shop />
                                            Tham quan
                                        </button>
                                        <span
                                            onClick={() =>
                                                deleteCheckoutHandler(
                                                    checkout._id
                                                )
                                            }
                                        >
                                            Xóa
                                        </span>
                                    </div>
                                </div>
                                <div className="cart-product">
                                    <img src={checkout.imgPath} alt="" />
                                    <div className="cart-productProperty">
                                        <div className="cart-productContent">
                                            <span>{checkout.name}</span>
                                            <div className="cart-productQuantity">
                                                <div className="cart-productCount">
                                                    <span>Số lượng</span>
                                                    <input
                                                        type="text"
                                                        value={
                                                            checkout.quantity
                                                        }
                                                        disabled
                                                    />
                                                </div>
                                                <div className="cart-moneySum">
                                                    <span>Tổng tiền</span>
                                                    <span>
                                                        {checkout.price}{" "}
                                                        <Crown variant="Bold" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div class="cartImg-center">
                            <img src="/Img/empty_cart.png" alt="empty" />
                        </div>
                    )}

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
                                {checkoutAuctions.reduce(
                                    (accumulate, currentValue) => {
                                        return (
                                            accumulate + currentValue.quantity
                                        );
                                    },
                                    0
                                )}
                            </span>
                        </div>
                        <div className="cart-confirmItem">
                            <span>Tổng thanh toán</span>
                            <span>
                                {checkoutAuctions.reduce(
                                    (accumulate, currentValue) => {
                                        return accumulate + currentValue.price;
                                    },
                                    0
                                )}
                                <Crown variant="Bold" />
                            </span>
                        </div>

                        {checkoutAuctions.length > 0 ? (
                            userDetail &&
                            userDetail.name &&
                            userDetail.gender &&
                            userDetail.birthday &&
                            userDetail.email &&
                            userDetail.phoneNumber &&
                            userDetail.deliveryInfo.length > 0 ? (
                                <button>
                                    <Link
                                        to="/paymentauction"
                                        style={{
                                            textDecoration: "none",
                                            color: "#fff",
                                        }}
                                    >
                                        Xác nhận
                                    </Link>
                                </button>
                            ) : (
                                <button>
                                    <Link
                                        to="/profile"
                                        style={{
                                            textDecoration: "none",
                                            color: "#fff",
                                        }}
                                        onClick={() =>
                                            toast.warning(
                                                "Trước khi tiến thành thanh toán, phải cập nhật lại thông tin cá nhân và địa chỉ "
                                            )
                                        }
                                    >
                                        Xác nhận
                                    </Link>
                                </button>
                            )
                        ) : (
                            <button
                                style={{ opacity: 0.8, cursor: "not-allowed" }}
                                disabled
                            >
                                Xác nhận
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartAuctionProperty;

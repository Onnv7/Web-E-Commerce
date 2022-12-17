import { ArrowDown2, Back, Crown, MessageText1, Shop } from "iconsax-react";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { StoreContext } from "../../context/StoreContext";
import "./paymentProperty.scss";
import axios from "./../../hooks/axios";
import { toast } from "react-toastify";

const PaymentProperty = () => {
    const { user } = useContext(AuthContext);

    const { state, contextDispatch } = useContext(StoreContext);
    const {
        cart: { cartItems, shopItems },
    } = state;
    const [userDetail, setUserDetail] = useState();
    const [products, setProducts] = useState([]);
    const [shops, setShops] = useState([]);
    const [deliveryIndex, setDeliveryIndex] = useState(0);
    const [note, setNote] = useState("");
    const [shipCost, setShipCost] = useState(20);
    const totalCost = useMemo(
        () =>
            cartItems.reduce(
                (accumulate, currentValue) =>
                    accumulate +
                    currentValue.price * currentValue.quantityProduct,
                0
            ) + shipCost,
        [cartItems]
    );
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/cart");
    };
    useEffect(() => {
        setProducts([]);
        cartItems.forEach(async (element) => {
            const { data } = await axios.get(`/products/${element._id}`);
            setProducts((preProducts) => [
                ...preProducts,
                {
                    ...data,
                    classifyProduct: element.classifyProduct,
                    quantityProduct: element.quantityProduct,
                    price: element.price,
                    sizeProduct: element.sizeProduct,
                    indexItem: element.indexItem,
                },
            ]);
        });
    }, [cartItems]);
    useEffect(() => {
        setShops([]);
        shopItems.forEach(async (element) => {
            const { data } = await axios.get(`/shops/shop/${element._id}`);
            setShops((pre) => [...pre, data]);
        });
    }, [shopItems]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/users/${user._id}`);
            console.log(data);
            setUserDetail(data);
        };
        fetchData();
    }, [user]);

    const checkoutHandler = () => {
        try {
            shopItems.forEach(async (shopItem) => {
                const dataItems = cartItems.filter(
                    (item) => item.shopID === shopItem._id
                );

                const data = {
                    productItems: dataItems,
                    shop: shopItem._id,
                    user: user._id,
                    deliveryInfo: userDetail.deliveryInfo[deliveryIndex],
                    totalCost,
                    shipCost,
                    status: "waiting",
                    note,
                };
                await axios.post("/checkouts", data);
            });
            // contextDispatch({ type: "CART_CLEAR" });
            // contextDispatch({ type: "SHOP_CLEAR" });

            toast.success("Thanh toán thành công");
            // window.setTimeout(() => {
            //     navigate("/");
            // }, 3000);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        userDetail && (
            <div className="paymentProperty">
                <div className="paymentProperty-container">
                    <div className="PaymentProperty-content">
                        <div className="paymentProperty-address">
                            <div className="paymentProperty-addressTitle">
                                <span>
                                    Thông tin người nhận và địa chỉ nhận hàng
                                </span>
                                <span>Thay đổi</span>
                            </div>
                            <div className="paymentProperty-addressInfo">
                                <span>
                                    Họ và tên:{" "}
                                    {
                                        userDetail.deliveryInfo[deliveryIndex]
                                            .fullName
                                    }
                                </span>
                                <span>
                                    Số điện thoại:{" "}
                                    {
                                        userDetail.deliveryInfo[deliveryIndex]
                                            .phoneNumber
                                    }
                                </span>
                                <span>
                                    Địa chỉ:{" "}
                                    {
                                        userDetail.deliveryInfo[deliveryIndex]
                                            .address
                                    }
                                    ,{" "}
                                    {
                                        userDetail.deliveryInfo[deliveryIndex]
                                            .ward
                                    }
                                    ,{" "}
                                    {
                                        userDetail.deliveryInfo[deliveryIndex]
                                            .distinct
                                    }
                                    ,{" "}
                                    {
                                        userDetail.deliveryInfo[deliveryIndex]
                                            .province
                                    }
                                </span>
                            </div>
                        </div>
                        {shops.map((shop) => (
                            <div className="cart-contentBox" key={shop._id}>
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
                                    .filter(
                                        (product) =>
                                            product.shop._id === shop._id
                                    )
                                    .map((product) => (
                                        <div
                                            className="cart-product"
                                            key={product._id}
                                        >
                                            <input type="checkbox" />
                                            <img
                                                src={product.imgPath[0]}
                                                alt="productImg"
                                            />
                                            <div className="cart-productProperty">
                                                <div className="cart-productItem">
                                                    <span>{product.name}</span>
                                                    <div className="cart-productBox">
                                                        <div className="cart-productCount">
                                                            <span>
                                                                Số lượng
                                                            </span>
                                                            <input
                                                                type="text"
                                                                value={
                                                                    product.quantityProduct
                                                                }
                                                                disabled
                                                            />
                                                        </div>
                                                        <div className="cart-moneySum">
                                                            <span>
                                                                Giá tiền
                                                            </span>
                                                            <span>
                                                                {product.price}
                                                                <Crown variant="Bold" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-productButton">
                                                    <span>
                                                        Phân loại:{" "}
                                                        {
                                                            product.classifyProduct
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                <textarea
                                    placeholder="Lưu ý cho người mua hàng"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="paymentProperty-comfirm">
                        <div className="paymentProperty-confirmItem">
                            <span>Tổng tiền hàng</span>
                            <span>
                                {cartItems.reduce(
                                    (accumulate, currentValue) =>
                                        accumulate +
                                        currentValue.price *
                                            currentValue.quantityProduct,
                                    0
                                )}
                                <Crown variant="Bold" />
                            </span>
                        </div>
                        <div className="paymentProperty-confirmItem">
                            <span>Tổng số lượng</span>
                            <span>
                                {cartItems.reduce(
                                    (accumulate, currentValue) =>
                                        accumulate +
                                        currentValue.quantityProduct,
                                    0
                                )}
                            </span>
                        </div>
                        <div className="paymentProperty-confirmItem">
                            <span>Tổng phí vận chuyển</span>
                            <span>
                                {shipCost} <Crown variant="Bold" />
                            </span>
                        </div>
                        <div className="paymentProperty-confirmItem">
                            <span>Tổng thanh toán</span>
                            <span>
                                {totalCost} <Crown variant="Bold" />
                            </span>
                        </div>
                        <button onClick={checkoutHandler}>Xác nhận</button>
                        <button onClick={handleBack}>
                            <Back size={32} />
                            Quay lại
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default PaymentProperty;

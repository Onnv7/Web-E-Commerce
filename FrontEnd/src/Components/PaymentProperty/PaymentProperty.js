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
    const [deliveryTempIndex, setDeliveryTempIndex] = useState();
    const [note, setNote] = useState("");
    const [shipCost, setShipCost] = useState(20);
    const [open, setOpen] = useState(false);
    const totalCostItems = useMemo(
        () =>
            cartItems.reduce(
                (accumulate, currentValue) =>
                    accumulate +
                    currentValue.price * currentValue.quantityProduct,
                0
            ),
        [cartItems]
    );
    const totalCost = useMemo(
        () =>
            cartItems.reduce(
                (accumulate, currentValue) =>
                    accumulate +
                    currentValue.price * currentValue.quantityProduct,
                0
            ) + shipCost,
        [cartItems, shipCost]
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

    const gotoShop = (id) => {
        navigate(`/shop/${id}`);
    };
    const checkoutHandler = () => {
        try {
            shopItems.forEach(async (shopItem) => {
                const dataItems = cartItems.filter(
                    (item) => item.shopID === shopItem._id
                );
                const cost = dataItems.reduce(
                    (accumulate, currentValue) =>
                        accumulate +
                        currentValue.price * currentValue.quantityProduct,
                    0
                );
                const data = {
                    productItems: dataItems,
                    shop: shopItem._id,
                    user: user._id,
                    deliveryInfo: userDetail.deliveryInfo[deliveryIndex],
                    totalCost: cost,
                    shipCost,
                    status: "waiting",
                    note,
                };
                await axios.post("/checkouts", data);
            });
            contextDispatch({ type: "CART_CLEAR" });
            contextDispatch({ type: "SHOP_CLEAR" });

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
                                <span onClick={() => setOpen(true)}>
                                    Thay đổi
                                </span>
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
                            <div
                                className="paymentProperty-product"
                                key={shop._id}
                            >
                                <div className="paymentProperty-productBrand">
                                    <span>{shop.name}</span>
                                    <button onClick={() => gotoShop(shop._id)}>
                                        <Shop />
                                        Tham quan
                                    </button>
                                </div>
                                {products
                                    .filter(
                                        (product) =>
                                            product.shop._id === shop._id
                                    )
                                    .map((product) => (
                                        <div
                                            className="paymentProperty-productBox"
                                            key={product._id}
                                        >
                                            <input type="checkbox" />
                                            <img
                                                src={product.imgPath[0]}
                                                alt="productImg"
                                            />
                                            <div className="paymentProperty-productProperty">
                                                <div className="paymentProperty-productContent">
                                                    <span>{product.name}</span>
                                                    <div className="paymentProperty-productQuantity">
                                                        <div className="paymentProperty-productCount">
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
                                                        <div className="paymentProperty-moneySum">
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

                                                <span>
                                                    Phân loại:{" "}
                                                    {product.classifyProduct}
                                                </span>
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
                {open && (
                    <div className="waitProduct-modal">
                        <div className="waitProduct-modalChangeContainer">
                            <span>Thay đổi địa chỉ</span>
                            {userDetail.deliveryInfo.map((info, index) => (
                                <div
                                    className="waitProduct-modalChangeBox"
                                    onClick={() => setDeliveryTempIndex(index)}
                                    style={{
                                        color:
                                            index === deliveryTempIndex
                                                ? "var(--primary-color)"
                                                : null,
                                    }}
                                >
                                    <span>Địa chỉ giao hàng {index + 1}</span>
                                    <div className="waitProduct-modalContent">
                                        <span>Họ và tên: {info.fullName}</span>
                                        <span>
                                            Số điện thoại: {info.phoneNumber}
                                        </span>
                                        <span>
                                            Địa chỉ:{" "}
                                            {`${info.address}, ${info.ward}, ${info.distinct}, ${info.province}`}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            <div className="waitProduct-modalBtn">
                                <button onClick={() => setOpen(false)}>
                                    <Back size={32} />
                                    Quay lại
                                </button>
                                <button
                                    onClick={() => {
                                        setOpen(false);
                                        setDeliveryIndex(deliveryTempIndex);
                                    }}
                                >
                                    Hoàn Tất
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    );
};

export default PaymentProperty;

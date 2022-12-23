import { ArrowDown2, Back, Crown, MessageText1, Shop } from "iconsax-react";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { StoreContext } from "../../context/StoreContext";
import "./paymentAuctionProperty.scss";
import axios from "./../../hooks/axios";
import { toast } from "react-toastify";

const PaymentAuctionProperty = () => {
    const { user, dispatch } = useContext(AuthContext);

    const { state, contextDispatch } = useContext(StoreContext);
    const {
        cart: { cartItems, shopItems },
    } = state;
    const [userDetail, setUserDetail] = useState();
    const [deliveryIndex, setDeliveryIndex] = useState(0);
    const [deliveryTempIndex, setDeliveryTempIndex] = useState();
    const [open, setOpen] = useState(false);
    const [shippingShops, setShippingShops] = useState([]);
    const [reload, setReload] = useState(false);
    const [notes, setNotes] = useState([]);
    const [checkoutAuctions, setCheckoutAuctions] = useState([]);
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/cartauction");
    };
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

    useEffect(() => {
        console.log(userDetail);
        if (userDetail) {
            setShippingShops([]);
            checkoutAuctions.forEach(async (element) => {
                console.log(element.shop.addressInfo.distinct);
                console.log(userDetail.deliveryInfo[deliveryIndex].distinct);
                console.log(
                    `/shippingCost/cost?start=${element.shop.addressInfo.distinct}&end=${userDetail.deliveryInfo[deliveryIndex].distinct}`.trim()
                );
                const { data } = await axios.get(
                    `/shippingCost/cost?start=${element.shop.addressInfo.distinct}&end=${userDetail.deliveryInfo[deliveryIndex].distinct}`
                );
                console.log(data);
                setShippingShops((pre) => [
                    ...pre,
                    ...data.map((d) => {
                        return {
                            _id: element._id,
                            cost: d.cost,
                            addressInfo: element.shop.addressInfo,
                        };
                    }),
                ]);
            });
        }
    }, [checkoutAuctions, deliveryIndex, userDetail]);
    const gotoShop = (id) => {
        navigate(`/shop/${id}`);
    };
    const checkoutHandler = async () => {
        try {
            let successPayment = 1;
            let index = 0;
            for (const checkoutAuction of checkoutAuctions) {
                const data = {
                    deliveryInfo: userDetail.deliveryInfo[deliveryIndex],
                    shipCost: shippingShops[index].cost,
                    totalCost: checkoutAuction.totalCost,
                    status: "waiting",
                    note: notes[index],
                };
                if (
                    userDetail.ruby <
                    checkoutAuction.totalCost + shippingShops[index].cost
                ) {
                    successPayment = 0;
                } else {
                    await axios.patch(
                        `/checkoutAuction/${checkoutAuction._id}`,
                        data
                    );
                    user.ruby =
                        user.ruby -
                        (checkoutAuction.totalCost + shippingShops[index].cost);
                    dispatch({ type: "USER_RELOAD", payload: user });
                }
                ++index;
            }
            // checkoutAuctions.forEach(async (checkoutAuction, index) => {
            //     const data = {
            //         deliveryInfo: userDetail.deliveryInfo[deliveryIndex],
            //         shipCost: shippingShops[index].cost,
            //         totalCost: checkoutAuction.totalCost,
            //         status: "waiting",
            //         note: notes[index],
            //     };
            //     if (
            //         userDetail.ruby <
            //         checkoutAuction.totalCost + shippingShops[index].cost
            //     ) {
            //         successPayment = 0;
            //     } else {
            //         await axios.patch(
            //             `/checkoutAuction/${checkoutAuction._id}`,
            //             data
            //         );
            //         user.ruby =
            //             user.ruby -
            //             (checkoutAuction.totalCost + shippingShops[index].cost);
            //         dispatch({ type: "USER_RELOAD", payload: user });
            //     }
            // });
            if (successPayment) {
                toast.success(
                    "Thanh toán đơn hàng đấu giá thành công, chúng tôi sẽ chuyển bạn về trang chính sau vài giây"
                );
                window.setTimeout(() => {
                    navigate("/");
                }, 3000);
            } else {
                throw new Error(
                    "Bạn không đủ tiền để thanh toán! Vui lòng nạp thêm số dư để có thể tiếp tục mua sắm!"
                );
            }
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
                        {checkoutAuctions &&
                            checkoutAuctions.map((checkout, index) => (
                                <div className="cart-contentBox">
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
                                            <div>
                                                Vận chuyển từ:{" "}
                                                {
                                                    shippingShops[index]
                                                        ?.addressInfo.address
                                                }
                                                ,{" "}
                                                {
                                                    shippingShops[index]
                                                        ?.addressInfo.ward
                                                }
                                                ,{" "}
                                                {
                                                    shippingShops[index]
                                                        ?.addressInfo.distinct
                                                }
                                                ,{" "}
                                                {
                                                    shippingShops[index]
                                                        ?.addressInfo.province
                                                }{" "}
                                            </div>
                                            <div>
                                                Phí vận chuyển :{" "}
                                                {shippingShops[index]?.cost}
                                            </div>
                                            <textarea
                                                placeholder="Lưu ý cho người bán hàng"
                                                value={notes[index]}
                                                onChange={(e) =>
                                                    setNotes((pre) => {
                                                        notes[index] =
                                                            e.target.value;
                                                        return notes;
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="paymentProperty-comfirm">
                        <div className="paymentProperty-confirmItem">
                            <span>Tổng tiền hàng</span>
                            <span>
                                {checkoutAuctions.reduce(
                                    (accumulate, currentValue) =>
                                        accumulate + currentValue.price,
                                    0
                                )}
                                <Crown variant="Bold" />
                            </span>
                        </div>
                        <div className="paymentProperty-confirmItem">
                            <span>Tổng số lượng</span>
                            <span>
                                {checkoutAuctions.reduce(
                                    (accumulate, currentValue) =>
                                        accumulate + currentValue.quantity,
                                    0
                                )}
                            </span>
                        </div>
                        <div className="paymentProperty-confirmItem">
                            <span>Tổng phí vận chuyển</span>
                            <span>
                                {shippingShops.reduce(
                                    (accumulate, currentValue) =>
                                        accumulate + currentValue.cost,
                                    0
                                )}{" "}
                                <Crown variant="Bold" />
                            </span>
                        </div>
                        <div className="paymentProperty-confirmItem">
                            <span>Tổng thanh toán</span>
                            <span>
                                {checkoutAuctions.reduce(
                                    (accumulate, currentValue) =>
                                        accumulate + currentValue.price,
                                    0
                                ) +
                                    shippingShops.reduce(
                                        (accumulate, currentValue) =>
                                            accumulate + currentValue.cost,
                                        0
                                    )}{" "}
                                <Crown variant="Bold" />
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

export default PaymentAuctionProperty;

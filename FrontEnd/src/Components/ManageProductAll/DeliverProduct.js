import { Back, Crown } from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./deliverProduct.scss";
import axios from "./../../hooks/axios";

const DeliverProduct = () => {
    const [open, setOpen] = useState(false);

    const { user } = useContext(AuthContext);
    const [shop, setShop] = useState();
    const [checkouts, setCheckouts] = useState([]);
    const [checkoutsAuctions, setCheckoutsAuctions] = useState([]);
    const [buyer, setBuyer] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`shops/${user._id}`);
            console.log(user);
            console.log(data);
            setShop(data);
        };
        fetchData();
    }, [user]);

    useEffect(() => {
        if (shop) {
            const fetchData = async () => {
                const { data } = await axios.get(
                    `/checkouts/shop/delivering/${shop._id}`
                );
                console.log(data);
                setCheckouts(data);
            };
            fetchData();
        }
    }, [shop]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/shops/${user._id}`);
            const resProduct = await axios.get(
                `/checkoutAuction/shop/delivering/${data._id}`
            );
            setCheckoutsAuctions(resProduct.data);
            console.log(resProduct.data);
        };
        fetchData();
    }, [user]);
    const handleOpen = (addressInfo, note) => {
        setOpen(true);
        setBuyer({
            addressInfo,
            note,
        });
    };
    return (
        <>
            {checkouts &&
                checkouts.map((checkout) => (
                    <div className="manageProduct-List" key={checkout._id}>
                        <div className="manageProduct-user">
                            <span>Mã đơn: {checkout._id}</span>
                        </div>
                        <div className="manageProduct-item">
                            <div className="manageProduct-content">
                                {checkout.productList.map((product, index) => (
                                    <div
                                        className="manageProduct-box"
                                        key={index}
                                    >
                                        <div className="manageProduct-product">
                                            <img src={product.imgPath} alt="" />
                                            <div className="manageProduct-info">
                                                <span>{product.name}</span>
                                                <div className="manageProduct-infoType">
                                                    <span>
                                                        Phân loại:{" "}
                                                        {
                                                            product.classifyProduct
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <span>{product.quantityProduct}</span>
                                    </div>
                                ))}
                            </div>
                            <span>
                                {checkout.totalCost}{" "}
                                <Crown variant="Bold" size={20} />
                            </span>
                            <span>Đang giao hàng</span>
                            <div
                                className="manageProduct-comfirm"
                                onClick={() =>
                                    handleOpen(
                                        checkout.deliveryInfo,
                                        checkout.note
                                    )
                                }
                            >
                                <span>Chi tiết đơn hàng</span>
                            </div>
                        </div>
                        {open && (
                            <div className="deliverProduct-modal">
                                <div className="deliverProduct-modalContainer">
                                    <span>Chi tiết đơn hàng</span>
                                    <div className="deliverProduct-modalBox">
                                        <span>
                                            Thông tin người nhận và địa chỉ nhận
                                            hàng
                                        </span>
                                        <div className="waitProduct-modalContent">
                                            <span>
                                                Họ và tên:{" "}
                                                {buyer.addressInfo.fullName}
                                            </span>
                                            <span>
                                                Số điện thoại:{" "}
                                                {buyer.addressInfo.phoneNumber}
                                            </span>
                                            <span>
                                                Địa chỉ:{" "}
                                                {`${buyer.addressInfo.address}, ${buyer.addressInfo.ward}, ${buyer.addressInfo.distinct}, ${buyer.addressInfo.province}`}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="waitProduct-modalBox">
                                        <div className="waitProduct-modalTitle">
                                            <span>Lưu ý cho người bán</span>
                                        </div>
                                        <div className="waitProduct-modalContent">
                                            <span>{buyer?.note}</span>
                                        </div>
                                    </div>
                                    <div className="deliverProduct-modalFooter">
                                        <span>Đơn vị vận chuyển</span>
                                        <img src="../Img/logo.png" alt="" />
                                    </div>
                                    <button onClick={() => setOpen(false)}>
                                        <Back size={32} />
                                        Quay Lại
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            {checkoutsAuctions &&
                checkoutsAuctions.map((c) => (
                    <div className="manageProduct-List" key={c._id}>
                        <div className="manageProduct-user">
                            <span>Mã đơn: {c._id}</span>
                        </div>
                        <div className="manageProduct-item">
                            <div className="manageProduct-content">
                                <div className="manageProduct-box">
                                    <div className="manageProduct-product">
                                        <img src={c.product.img} alt="" />
                                        <div className="manageProduct-info">
                                            <span>{c.product.name}</span>
                                        </div>
                                    </div>
                                    <span>{c.product.quantity}</span>
                                </div>
                            </div>
                            <span>
                                {c.totalCost} <Crown variant="Bold" size={20} />
                            </span>
                            <span>Đang giao hàng</span>
                            <div className="manageProduct-comfirm">
                                <span></span>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default DeliverProduct;

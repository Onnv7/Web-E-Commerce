import { Crown } from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "./../../hooks/axios";

const AllProduct = () => {
    const { user } = useContext(AuthContext);
    const [shop, setShop] = useState();
    const [checkouts, setCheckouts] = useState([]);
    const [checkoutsAuctions, setCheckoutsAuctions] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`shops/${user._id}`);
            console.log(data);
            setShop(data);
        };
        fetchData();
    }, [user]);

    useEffect(() => {
        if (shop) {
            const fetchData = async () => {
                const { data } = await axios.get(`/checkouts/shop/${shop._id}`);
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
                `/checkoutAuction/shop/${data._id}`
            );
            setCheckoutsAuctions(resProduct.data);
            console.log(resProduct.data);
        };
        fetchData();
    }, [user]);

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
                            <span>
                                {checkout.status === "waiting"
                                    ? "Chờ lấy hàng"
                                    : checkout.status === "delivering"
                                    ? "Đang giao"
                                    : "Đã giao"}
                            </span>
                            <div className="manageProduct-comfirm">
                                <span>Ngày tạo: {checkout.createdAt}</span>
                            </div>
                        </div>
                    </div>
                ))}
            {checkoutsAuctions.map &&
                checkoutsAuctions.map((c) => (
                    <div className="manageProduct-List" key={c._id}>
                        <div className="manageProduct-user">
                            <span>Mã đơn: {c._id}</span>
                        </div>
                        <div className="manageProduct-item">
                            <div className="manageProduct-content">
                                <div className="manageProduct-box">
                                    <div className="manageProduct-product">
                                        <img src={c.imgPath} alt="" />
                                        <div className="manageProduct-info">
                                            <span>{c.name}</span>
                                        </div>
                                    </div>
                                    <span>{c.quantity}</span>
                                </div>
                            </div>
                            <span>
                                {c.totalCost} <Crown variant="Bold" size={20} />
                            </span>
                            <span>
                                {c.status === "notpaid"
                                    ? "Chưa xác nhận"
                                    : c.status === "waiting"
                                    ? "Chờ lấy hàng"
                                    : c.status === "delivering"
                                    ? "Đang giao"
                                    : "Đã giao"}
                            </span>
                            <div className="manageProduct-comfirm">
                                <span>Ngày tạo: {c.createdAt}</span>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default AllProduct;

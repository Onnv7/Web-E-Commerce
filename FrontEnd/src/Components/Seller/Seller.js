import React, { useEffect, useState } from "react";
import "./seller.scss";
import { MessageText1, Shop, Star1 } from "iconsax-react";
import axios from "./../../hooks/axios";
import formatter from "./../../hooks/formatter";
import { useNavigate } from "react-router-dom";

const Seller = ({ id }) => {
    const [shop, setShop] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/products/${id}`);
            setShop(data.shop);
        };
        fetchData();
    }, [id]);
    const navigate = useNavigate();
    const gotoshopHandler = () => {
        navigate(`/shop/${shop._id}`);
    };
    return (
        shop && (
            <div className="seller">
                <div className="seller-container">
                    <div className="seller-contact">
                        <img
                            src={shop.imgPath}
                            alt="shop"
                            className="seller-img"
                        />
                        <div className="seller-detail">
                            <span className="seller-name">{shop.name}</span>
                            <div className="seller-btn">
                                <button onClick={gotoshopHandler}>
                                    <Shop size={24} />
                                    Tham quan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="seller-review">
                        <div className="review-rate">
                            <div className="rate-text">
                                <span>Số lượt đánh giá: </span>
                                <span>{shop.ratingQuantity}</span>
                            </div>
                            <div className="rate-text">
                                <span>Số sao: </span>
                                <span>{shop.ratingAverage}⭐</span>
                            </div>
                        </div>
                        <div className="review-rate">
                            <div className="rate-text">
                                <span>Tham gia: </span>
                                <span>
                                    {formatter.format(new Date(shop.createdAt))}
                                </span>
                            </div>
                            <div className="rate-text">
                                <span>Địa chỉ: </span>
                                <span>{`${shop.addressInfo.address}, ${shop.addressInfo.ward}, ${shop.addressInfo.distinct}`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Seller;

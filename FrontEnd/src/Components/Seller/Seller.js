import React, { useEffect, useState } from "react";
import "./seller.scss";
import { MessageText1, Shop, Star1 } from "iconsax-react";
import axios from "./../../hooks/axios";

const Seller = ({ id }) => {
    const [shop, setShop] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/products/${id}`);
            setShop(data.shop);
        };
        fetchData();
    }, [id]);
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
                                <button>
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
                        {/* <div className="review-rate">
                        <div className="rate-text">
                            <span>Tỉ lệ phản hồi: </span>
                            <span>99.98%</span>
                        </div>
                        <div className="rate-text">
                            <span>Người theo dõi: </span>
                            <span>6.7k</span>
                        </div>
                    </div> */}
                    </div>
                </div>
                <div className="sellerAuc-container none">
                    <div className="seller-contact">
                        <img
                            src="../Img/1-tgdd.jpg"
                            alt=""
                            className="seller-img"
                        />
                        <div className="sellerAuc-detail">
                            <span className="seller-name">
                                Thế giới di động
                            </span>
                            <button>
                                <Shop size={24} />
                                Tham quan
                            </button>
                        </div>
                    </div>
                    <div className="sellerAuc-review">
                        <div className="reviewAuc-rate">
                            <div className="rate-text">
                                <span>Đánh giá: </span>
                                <span>3.4k</span>
                            </div>
                            <div className="rate-text">
                                <span>độ tin cậy: </span>
                                <div className="rate-star">
                                    <Star1 variant="Bold" size={16} />
                                    <Star1 variant="Bold" size={16} />
                                    <Star1 variant="Bold" size={16} />
                                    <Star1 variant="Bold" size={16} />
                                    <Star1 variant="Bold" size={16} />
                                </div>
                            </div>
                        </div>
                        <div className="rate-text">
                            <span>Đấu giá thành công: </span>
                            <span>345 sản phẩm</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Seller;

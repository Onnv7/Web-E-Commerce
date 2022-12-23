import { Add, MessageText1 } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./../../hooks/axios";
import formatter from "./../../hooks/formatter";
const ShopUser = () => {
    const [shop, setShop] = useState();
    const { id } = useParams();

    useEffect(() => {
        try {
            const fetchData = async () => {
                const { data } = await axios.get(`/shops/shop/${id}`);
                setShop(data);
            };
            fetchData();
        } catch (err) {
            console.error(err);
        }
    }, [id]);

    return (
        shop && (
            <div className="seller">
                <div className="seller-container">
                    <div className="seller-contact">
                        <img src={shop.imgPath} alt="" className="seller-img" />
                        <div className="seller-detail">
                            <span className="seller-name">{shop.name}</span>
                            <div className="seller-btn">
                                {/* <button>
                                <Add size={24} />
                                Theo dõi
                            </button> */}
                                <span>Chuyên: {shop.mainCategory.name}</span>
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

export default ShopUser;

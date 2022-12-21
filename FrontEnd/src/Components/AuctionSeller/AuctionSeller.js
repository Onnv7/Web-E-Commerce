import { Star1 } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./../../hooks/axios";

const AuctionSeller = () => {
    const { id } = useParams();
    const [auction, setAuction] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/auction/${id}`);
            setAuction(data);
        };
        fetchData();
    }, [id]);
    return (
        auction && (
            <div className="seller">
                <div className="sellerAuc-container">
                    <div className="seller-contact">
                        <img
                            src={auction.user.imgPath}
                            alt="img"
                            className="seller-img"
                        />
                        <div className="sellerAuc-detail">
                            <span className="seller-name">
                                {"Người mua: "}
                                {auction.user.name}
                            </span>
                        </div>
                    </div>
                    <div className="sellerAuc-review">
                        {/* <div className="reviewAuc-rate">
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
                        </div> */}
                    </div>
                </div>
            </div>
        )
    );
};

export default AuctionSeller;

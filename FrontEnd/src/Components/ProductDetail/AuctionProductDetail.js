import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./../../hooks/axios";

const AuctionProductDetail = () => {
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
            <div className="productDetail">
                <div className="productAucDetail-container">
                    <h1>Mô tả yêu cầu về sản phẩm</h1>
                    <div className="productDetail-list">
                        <div className="productDetail-title">
                            <span>{auction.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default AuctionProductDetail;

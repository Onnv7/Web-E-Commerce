import {
    ArrowLeft2,
    ArrowRight2,
    Heart,
    SearchNormal1,
    Star1,
} from "iconsax-react";
import React, { useEffect, useState } from "react";
import "./placeAuction.scss";
import axios from "./../../hooks/axios";
import { useNavigate } from "react-router-dom";

const PlaceAution = () => {
    const [auctions, setAuctions] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/auction");
            console.log(data);
            setAuctions(data);
        };
        fetchData();
    }, []);

    const gotoAuctionNow = (id) => {
        navigate(`/seller/auction/${id}`);
    };

    return (
        <div className="placeAution">
            <div className="grid wide">
                <div className="row sm-gutter ">
                    {auctions &&
                        auctions.map((auction) => (
                            <div className="col c-4" key={auction._id}>
                                <div className="placeAutionItem">
                                    <img
                                        src={auction.imgPath}
                                        className="placeAution-img"
                                    />
                                    <span className="auction-title">
                                        {auction.name}
                                    </span>
                                    <div className="auction-sell">
                                        <span>Số người đã tham gia:</span>
                                        <span>70 người</span>
                                    </div>
                                    <div className="auction-priceStart">
                                        <span>Giá khởi điểm:</span>
                                        <span>{auction.startingPrice}Đ</span>
                                    </div>
                                    <div className="auction-priceCurrent">
                                        <span>Giá hiện tại:</span>
                                        <span>{auction.currentPrice}Đ</span>
                                    </div>
                                    <div className="placeAution-rate">
                                        <span>Kết thúc</span>
                                        <span>{auction.endTime}</span>
                                    </div>
                                    <div className="auction-buy">
                                        <button
                                            className="auction-btn"
                                            onClick={() =>
                                                gotoAuctionNow(auction._id)
                                            }
                                        >
                                            Đấu giá ngay
                                        </button>
                                        <div className="auction-rating"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className="manageProduct-pagination">
                <div className="pagination-item">
                    <a href="" className="pagination-link">
                        <ArrowLeft2 />
                    </a>
                </div>
                <div className="pagination-item ">
                    <a
                        href=""
                        className="pagination-link pagination-link__active"
                    >
                        1
                    </a>
                </div>
                <div className="pagination-item">
                    <a href="" className="pagination-link">
                        2
                    </a>
                </div>
                <div className="pagination-item">
                    <a href="" className="pagination-link">
                        3
                    </a>
                </div>
                <div className="pagination-item">
                    <a href="" className="pagination-link">
                        ...
                    </a>
                </div>
                <div className="pagination-item">
                    <a href="" className="pagination-link">
                        <ArrowRight2 />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PlaceAution;

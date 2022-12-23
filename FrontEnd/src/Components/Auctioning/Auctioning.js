import { ArrowLeft2, ArrowRight2, Crown, SearchNormal1 } from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auctioning.scss";
import axios from "./../../hooks/axios";
import { AuthContext } from "../../context/AuthContext";

const Auctioning = () => {
    const { user } = useContext(AuthContext);
    const [auctions, setAuctions] = useState();
    const navigate = useNavigate();
    const [shop, setShop] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/shops/${user._id}`);
            setShop(data);
        };
        fetchData();
    }, [user]);

    useEffect(() => {
        if (shop) {
            const fetchData = async () => {
                const { data } = await axios.get(`/auction/bidder/${shop._id}`);
                setAuctions(data);
            };
            fetchData();
        }
    }, [shop]);

    const gotoAuctionNow = (id) => {
        navigate(`/seller/auction/${id}`);
    };

    return (
        <div className="auctioning">
            {auctions &&
                auctions.map((auction) => (
                    <div className="auctioning-item" key={auction._id}>
                        <div className="auctioning-itemBox">
                            <img src={auction.imgPath} alt="" />
                            <div className="auctioning-itemDesc">
                                <span>{auction.name}</span>
                                <div className="auctioning-itemDetail">
                                    <span>
                                        Thời gian kết thúc: {auction.endTime}
                                    </span>
                                    <span>Số lượng: {auction.quantity}</span>
                                </div>
                            </div>
                        </div>
                        <div className="auctioning-itemFooter">
                            {}
                            <button onClick={() => gotoAuctionNow(auction._id)}>
                                Tiếp tục đấu giá
                            </button>
                            <div className="auctioning-itemPrice">
                                <span>
                                    Giá khởi điểm: {auction.startingPrice}{" "}
                                    <Crown variant="Bold" size={34} />
                                </span>
                                <span>
                                    Giá hiện tại: {auction.currentPrice}{" "}
                                    <Crown variant="Bold" size={34} />
                                </span>
                                <span>
                                    Giá mới nhất bạn đưa ra: {auction.yourPrice}{" "}
                                    <Crown variant="Bold" size={34} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Auctioning;

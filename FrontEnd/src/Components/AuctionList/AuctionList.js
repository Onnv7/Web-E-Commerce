import { ArrowLeft2, ArrowRight2, Crown, SearchNormal1 } from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auctionList.scss";
import axios from "./../../hooks/axios";
import { AuthContext } from "../../context/AuthContext";

const AuctionList = () => {
    const navigate = useNavigate();
    const handleMove = () => {
        navigate("/history");
    };
    const { user } = useContext(AuthContext);
    const [auctions, setAuctions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/auction/all/${user._id}`);
            console.log(data);
            setAuctions(data);
        };
        fetchData();
    }, []);
    const gotoDetailHandler = (id) => {
        navigate(`/auction/${id}`);
    };
    return (
        <div className="auctionList">
            <div className="auctionList-container">
                <div className="auctionList-title">
                    <span>Thông tin sản phẩm</span>
                    <span>Số lượng</span>
                    <span>Mức giá hiện tại</span>
                    <span>Thời gian</span>
                    <span>Thao Tác</span>
                </div>
                {auctions.map((auction) => (
                    <div className="auctionList-item" key={auction._id}>
                        <div className="auctionList-product">
                            <img src={auction.imgPath} alt="" />
                            <span>{auction.name}</span>
                        </div>
                        <span>1</span>
                        <span>
                            {auction.currentPrice}{" "}
                            <Crown variant="Bold" size={20} />
                        </span>
                        <div className="auctionList-time">
                            <span>Bắt đầu: {auction.startTime}</span>
                            <span>Kết thúc: {auction.endTime}</span>
                        </div>
                        <div className="auctionList-action">
                            <span
                                onClick={() => gotoDetailHandler(auction._id)}
                            >
                                Chi tiết
                            </span>
                            <span onClick={handleMove}>Lịch sử</span>
                        </div>
                    </div>
                ))}

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
        </div>
    );
};

export default AuctionList;

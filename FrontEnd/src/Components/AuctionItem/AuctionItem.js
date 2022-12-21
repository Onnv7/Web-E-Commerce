import { Crown, Note1 } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "./../../hooks/axios";
import moment from "moment";
const AuctionItem = () => {
    const [current, setCurrent] = useState(0);
    const handleSlide = (index) => {
        setCurrent(index);
    };
    const [auction, setAuction] = useState();

    const [timeLeft, setTimeLeft] = useState();
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/auction/${id}`);
            console.log(data);
            setAuction(data);
            setTimeLeft(
                moment.duration(
                    moment(data.startTime).diff(moment(data.endTime))
                )
            );
        };
        fetchData();
    }, [id]);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimeLeft(
    //             moment.duration(
    //                 moment(auction.startTime).diff(moment(auction.endTime))
    //             )
    //         );
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        auction && (
            <div className="productSell">
                <div className="productAuction-container">
                    <div className="productImg">
                        <img
                            src={auction.imgPath[current]}
                            alt="img"
                            className="productImg-main"
                        />
                        <div className="productImg-sub">
                            {auction.imgPath.map((image, i) => {
                                return (
                                    <img
                                        src={image}
                                        alt="dt"
                                        key={i}
                                        onClick={() => handleSlide(i)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="productAuction-items">
                        <div className="productAuction-title">
                            <span className="productAuction-name">
                                {auction.name}
                            </span>
                        </div>
                        <div className="productAuction-timeList">
                            <div className="productAuction-timeItem">
                                <span>Bắt đầu:</span>
                                <span> {auction.startTime}</span>
                            </div>
                            <div className="productAuction-timeItem">
                                <span>Kết thúc: </span>
                                <span> {auction.endTime}</span>
                            </div>
                            <div className="productAuction-timeItem">
                                <span>Thời gian còn lại:</span>
                                <div>
                                    {Math.floor(timeLeft.asDays())} ngày{" "}
                                    {timeLeft.hours()} giờ {timeLeft.minutes()}{" "}
                                    phút {timeLeft.seconds()} giây
                                </div>
                            </div>
                        </div>

                        <div className="auctionPrice-list">
                            <div className="auctionPrice-title">
                                <span>Giá khởi điểm:</span>
                                <span>Giá hiện tại:</span>
                                <span>Số người đã tham gia:</span>
                            </div>
                            <div className="auctionPrice-item">
                                <span>50.000.000 VND</span>
                                <span>40.500.000 VND</span>
                                <span>4</span>
                            </div>
                        </div>
                        <div className="productAuction-auctionBox">
                            <div className="productAuction-inputBox">
                                <div className="productAuction-input">
                                    <input
                                        type="text"
                                        placeholder="Nhập số tiền định đấu giá"
                                    />
                                    <Crown
                                        variant="Bold"
                                        className="active"
                                        style={{ marginLeft: "22px" }}
                                    />
                                </div>
                                <span>
                                    Nhập số tiền đấu giá phải nhỏ hơn giá tiền
                                    hiện tại
                                </span>
                            </div>
                            <div className="productAuction-btn">
                                <button>Đấu giá</button>
                                {/* <button>
                                    <Note1 />
                                    Thêm vào danh sách lưu ý
                                </button> */}
                            </div>
                        </div>
                        <div className="productFee">
                            <span>Phí vận chuyển</span>
                            <span>Người bán chi chả</span>
                        </div>
                        <div className="productAuction-paymentsBox">
                            <div className="product-payments">
                                <span>Hỗ trợ thanh toán:</span>
                                <img src="../../Img/1-payment.png" alt="" />
                                <img
                                    src="../../Img/Visa_Inc._logo.svg.webp"
                                    alt=""
                                />
                                <img src="../../Img/mastercard.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default AuctionItem;

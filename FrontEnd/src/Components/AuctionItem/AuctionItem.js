import { Crown, Note1, DocumentForward } from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "./../../hooks/axios";
import moment from "moment";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "./style.scss";
const AuctionItem = () => {
    const { user } = useContext(AuthContext);
    const [current, setCurrent] = useState(0);
    const handleSlide = (index) => {
        setCurrent(index);
    };
    const [shop, setShop] = useState();
    const [auction, setAuction] = useState();

    const [timeLeft, setTimeLeft] = useState();
    const { id } = useParams();
    const [price, setPrice] = useState(0);
    const [reload, setReload] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/auction/${id}`);
            console.log(data);
            setAuction(data);
            setTimeLeft(moment.duration(moment(data.end).diff(moment())));
            const interval = setInterval(() => {
                // console.log(auction);
                setTimeLeft(moment.duration(moment(data.end).diff(moment())));
            }, 1000);
            return () => clearInterval(interval);
        };
        fetchData();
    }, [id, reload]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/shops/${user._id}`);
            setShop(data);
        };
        fetchData();
    }, [user]);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // console.log(auction);
    //         setTimeLeft(moment.duration(moment(auction.end).diff(moment())));
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);
    const doAuctionHandler = async () => {
        try {
            if (price >= auction.currentPrice) {
                toast.error("Số tiền đấu giá nhập phải nhỏ hơn Giá hiện tại");
                return;
            }
            console.log(shop);
            const data = {
                bidder: shop._id,
                price,
            };
            await axios.post(`/auction/auction/${id}`, data);
            setReload(!reload);
            setPrice(0);
            toast.success("Ra giá thành công");
        } catch (error) {
            toast.error(error.message);
        }
    };
    const gotoHistoryHandler = () => {
        navigate(`/seller/history/${id}`);
    };
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
                                <span>{auction.startingPrice}</span>
                                <span>{auction.currentPrice}</span>
                                <span>4</span>
                            </div>
                        </div>
                        <div className="productAuction-auctionBox">
                            <div className="productAuction-inputBox">
                                <div className="productAuction-input">
                                    <input
                                        type="number"
                                        placeholder="Nhập số tiền định đấu giá"
                                        min={0}
                                        onChange={(e) =>
                                            setPrice(e.target.value)
                                        }
                                    />
                                    <Crown
                                        variant="Bold"
                                        className="active"
                                        style={{ marginLeft: "22px" }}
                                    />
                                </div>
                            </div>
                            <div className="productAuction-btn">
                                <button
                                    onClick={doAuctionHandler}
                                    id="doAuction-Btn"
                                    style={{
                                        opacity:
                                            timeLeft._data.days === 0 &&
                                            timeLeft._data.hours === 0 &&
                                            timeLeft._data.milliseconds === 0 &&
                                            timeLeft._data.minutes === 0 &&
                                            timeLeft._data.months === 0 &&
                                            timeLeft._data.seconds === 0 &&
                                            timeLeft._data.years === 0
                                                ? 0.5
                                                : null,
                                        cursor:
                                            timeLeft._data.days === 0 &&
                                            timeLeft._data.hours === 0 &&
                                            timeLeft._data.milliseconds === 0 &&
                                            timeLeft._data.minutes === 0 &&
                                            timeLeft._data.months === 0 &&
                                            timeLeft._data.seconds === 0 &&
                                            timeLeft._data.years === 0
                                                ? "not-allowed"
                                                : null,
                                    }}
                                    disabled={
                                        timeLeft._data.days === 0 &&
                                        timeLeft._data.hours === 0 &&
                                        timeLeft._data.milliseconds === 0 &&
                                        timeLeft._data.minutes === 0 &&
                                        timeLeft._data.months === 0 &&
                                        timeLeft._data.seconds === 0 &&
                                        timeLeft._data.years === 0
                                            ? true
                                            : false
                                    }
                                >
                                    Đấu giá
                                </button>
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

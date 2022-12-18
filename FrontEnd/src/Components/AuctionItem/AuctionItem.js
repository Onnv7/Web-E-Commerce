import { Crown, Note1 } from 'iconsax-react';
import React, { useState } from 'react';

const AuctionItem = () => {
    const [current, setCurrent] = useState(0);
    const handleSlide = (index) => {
        setCurrent(index);
    };
    const img = [
        { src: '../Img/iphone14.png' },
        { src: '../Img/1-ip14.jpg' },
        { src: '../Img/3-ip14.jpg' },
        { src: '../Img/4-ip14.jpg' },
    ];
    return (
        <div className="productSell">
            <div className="productAuction-container">
                <div className="productImg">
                    <img src={img[current].src} alt="" className="productImg-main" />
                    <div className="productImg-sub">
                        {img.map((images, i) => {
                            return <img src={images.src} alt="dt" key={i} onClick={() => handleSlide(i)} />;
                        })}
                    </div>
                </div>
                <div className="productAuction-items">
                    <div className="productAuction-title">
                        <span className="productAuction-name">
                            Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng
                        </span>
                    </div>
                    <div className="productAuction-timeList">
                        <div className="productAuction-timeItem">
                            <span>Bắt đầu:</span>
                            <span>14h26, chủ nhật, ngày 6 - 11 - 2022</span>
                        </div>
                        <div className="productAuction-timeItem">
                            <span>Kết thúc:</span>
                            <span> 14h26, chủ nhật, ngày 13 - 11 - 2022</span>
                        </div>
                        <div className="productAuction-timeItem">
                            <span>Diễn ra trong:</span>
                            <span> 7 ngày</span>
                        </div>
                        <div className="productAuction-timeItem">
                            <span>Thời gian còn lại:</span>
                            <span>2 ngày 16 giờ 56 phút</span>
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
                                <input type="text" placeholder="Nhập số tiền định đấu giá" />
                                <Crown variant="Bold" className="active" style={{ marginLeft: '22px' }} />
                            </div>
                            <span>Nhập số tiền đấu giá phải nhỏ hơn giá tiền hiện tại</span>
                            <div className="productAuction-input">
                                <input type="text" placeholder="Đường dẫn tới sản phẩm" />
                            </div>
                        </div>
                        <div className="productAuction-btn">
                            <button>Đấu giá</button>
                            <button>
                                <Note1 />
                                Thêm vào danh sách lưu ý
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
                            <img src="../Img/1-payment.png" alt="" />
                            <img src="../Img/Visa_Inc._logo.svg.webp" alt="" />
                            <img src="../Img/mastercard.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionItem;

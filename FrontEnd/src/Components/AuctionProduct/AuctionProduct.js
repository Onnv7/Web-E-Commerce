import { Crown } from 'iconsax-react';
import React from 'react';
import './auctionProduct.scss';

const AuctionProduct = () => {
    return (
        <div className="auctionProduct">
            <div className="auctionProduct-box">
                <img src="../Img/iphone14.png" alt="" />
                <div className="auctionProduct-Name">
                    <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                    <span>Số lượng: 1</span>
                </div>
            </div>
            <div className="auctionProduct-work">
                <div className="auctionProduct-time">
                    <span>Thời gian còn lại: 2 ngày 8 giờ 21 phút</span>
                    <span>Diễn ra trong: 3 ngày</span>
                </div>
                <div className="auctionProduct-price">
                    <span>
                        Giá khởi điểm: 1000 <Crown variant="Bold" size={34} />
                    </span>
                    <span>
                        Giá hiện tại: 300 <Crown variant="Bold" size={34} />
                    </span>
                </div>
            </div>
            <div className="auctionProduct-auctionBox">
                <div className="auctionProduct-Input">
                    <input type="number" placeholder="Nhập số tiền định đấu giá" min={0} />
                    <Crown variant="Bold" className="auctionProduct-icon" />
                </div>
                <button>Đấu Giá</button>
            </div>
        </div>
    );
};

export default AuctionProduct;

import { Crown, GalleryAdd } from 'iconsax-react';
import React, { useState } from 'react';
import './newAuction.scss';

const NewAuction = () => {
    const [active, setActive] = useState(1);
    const setClick = (i) => {
        setActive(i);
    };
    return (
        <div className="newAuction">
            <span>Thông tin sản phẩm mong muốn đấu giá</span>
            <div className="newAuction-name">
                <span>Tên sản phẩm</span>
                <input type="text" />
            </div>
            <div className="newAuction-img">
                <span>Hình ảnh liên quan</span>
                <div className="newAuction-imgBox">
                    <img src="../Img/iphone14.png" alt="" />
                    <img src="../Img/iphone14.png" alt="" />
                    <img src="../Img/iphone14.png" alt="" />
                    <button>
                        <GalleryAdd />
                        Thêm hình ảnh
                    </button>
                </div>
            </div>
            <div className="newAuction-brand">
                <span>Ngành hàng/ Nhãn hiệu</span>
                <input type="text" />
            </div>
            <div className="newAuction-wish">
                <span>Size mong muốn</span>
                <div className="newAuction-wishInput">
                    <input type="text" />
                </div>
            </div>
            <div className="newAuction-wish">
                <span>Màu sắc mong muốn</span>
                <div className="newAuction-wishInput">
                    <input type="text" />
                </div>
            </div>
            <div className="newAuction-wish">
                <span>Số lượng mong muốn</span>
                <div className="newAuction-wishInput">
                    <input type="text" />
                </div>
            </div>
            <div className="newAuction-auctionPrice">
                <span>Mức đấu giá khởi điểm</span>
                <div className="newAuction-price">
                    <div className="newAuction-priceInput">
                        <input type="text" />
                        <Crown variant="Bold" className="active" />
                    </div>
                </div>
            </div>
            <span>Mô tả về sản phẩm mong muốn</span>
            <div className="newAuction-desc">
                <span>Mô tả sản phẩm</span>
                <textarea></textarea>
            </div>
            <span>Thời gian của cuộc đấu giá</span>
            <div className="newAuction-date">
                <span>Ngày bắt đầu</span>
                <div className="newAuction-dateInput">
                    <input type="date" />
                </div>
            </div>
            <div className="newAuction-time">
                <span>Thời gian bắt đầu</span>
                <div className="newAuction-timeBox">
                    <input type="number" />
                    <span>giờ</span>
                    <input type="number" />
                    <span>phút</span>
                </div>
            </div>
            <div className="newAuction-timeTake">
                <span>Khoảng thời gian đấu giá</span>
                <div className="newAuction-timeTakeBox">
                    <span className={active === 1 ? 'active active-border' : ''} onClick={() => setClick(1)}>
                        1 ngày
                    </span>
                    <span className={active === 2 ? 'active active-border' : ''} onClick={() => setClick(2)}>
                        3 ngày
                    </span>
                    <span className={active === 3 ? 'active active-border' : ''} onClick={() => setClick(3)}>
                        1 tuần
                    </span>
                </div>
            </div>
            <div className="newAuction-btn">
                <button>Hủy</button>
                <button>Lưu</button>
            </div>
        </div>
    );
};

export default NewAuction;

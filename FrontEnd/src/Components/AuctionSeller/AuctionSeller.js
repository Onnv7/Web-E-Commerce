import { Star1 } from 'iconsax-react';
import React from 'react';

const AuctionSeller = () => {
    return (
        <div className="seller">
            <div className="sellerAuc-container">
                <div className="seller-contact">
                    <img src="../Img/1-tgdd.jpg" alt="" className="seller-img" />
                    <div className="sellerAuc-detail">
                        <span className="seller-name">Thế giới di động</span>
                    </div>
                </div>
                <div className="sellerAuc-review">
                    <div className="reviewAuc-rate">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionSeller;

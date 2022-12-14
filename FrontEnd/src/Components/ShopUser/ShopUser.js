import { Add, MessageText1 } from 'iconsax-react';
import React from 'react';

const ShopUser = () => {
    return (
        <div className="seller">
            <div className="seller-container">
                <div className="seller-contact">
                    <img src="../Img/1-tgdd.jpg" alt="" className="seller-img" />
                    <div className="seller-detail">
                        <span className="seller-name">Thế giới di động</span>
                        <div className="seller-btn">
                            <button>
                                <Add size={24} />
                                Theo dõi
                            </button>
                        </div>
                    </div>
                </div>
                <div className="seller-review">
                    <div className="review-rate">
                        <div className="rate-text">
                            <span>Đánh giá: </span>
                            <span>3.4k</span>
                        </div>
                        <div className="rate-text">
                            <span>Sản phẩm đã bán: </span>
                            <span>345</span>
                        </div>
                    </div>
                    <div className="review-rate">
                        <div className="rate-text">
                            <span>Tỉ lệ phản hồi: </span>
                            <span>99.98%</span>
                        </div>
                        <div className="rate-text">
                            <span>Người theo dõi: </span>
                            <span>6.7k</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopUser;

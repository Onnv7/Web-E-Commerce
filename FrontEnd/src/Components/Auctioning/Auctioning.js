import { ArrowLeft2, ArrowRight2, Crown, SearchNormal1 } from 'iconsax-react';
import React from 'react';
import './auctioning.scss';

const Auctioning = () => {
    return (
        <div className="auctioning">
            <div className="auctioning-item">
                <div className="auctioning-itemTitle">
                    <span>Thế giới di động</span>
                    <span>Xóa</span>
                </div>
                <div className="auctioning-itemBox">
                    <img src="../Img/iphone14.png" alt="" />
                    <div className="auctioning-itemDesc">
                        <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                        <div className="auctioning-itemDetail">
                            <span>Thời gian còn lại: 2 ngày 8 giờ 21 phút</span>
                            <span>Số lượng: 1</span>
                        </div>
                    </div>
                </div>
                <div className="auctioning-itemFooter">
                    <button>Tiếp tục đấu giá</button>
                    <div className="auctioning-itemPrice">
                        <span>
                            Giá khởi điểm: 1000 <Crown variant="Bold" size={34} />
                        </span>
                        <span>
                            Giá hiện tại: 300 <Crown variant="Bold" size={34} />
                        </span>
                        <span>
                            Giá mới nhất bạn đưa ra: 400 <Crown variant="Bold" size={34} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="manageProduct-pagination">
                <div className="pagination-item">
                    <a href="" className="pagination-link">
                        <ArrowLeft2 />
                    </a>
                </div>
                <div className="pagination-item ">
                    <a href="" className="pagination-link pagination-link__active">
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

export default Auctioning;

import React from 'react';
import { ArrowLeft2, ArrowRight2, Crown, MessageText1, SearchNormal1, Shop } from 'iconsax-react';
import './productPay.scss';

const ProductPay = () => {
    return (
        <div className="productPay">
            <div className="productPay-container">
                <div className="productPay-title">
                    <button className="click">Mua hàng</button>
                    <button>Đấu giá</button>
                </div>
                <div className="productPay-searchBox">
                    <SearchNormal1 className="productPay-searchIcon" />
                    <input type="text" placeholder="Tìm kiếm đơn hàng theo tên shop, tên sản phẩm..." />
                    <button>
                        <SearchNormal1 className="productPay-searchIcon" />
                    </button>
                </div>
                <div className="productPay-list">
                    <div className="productPay-item">
                        <div className="productPay-header">
                            <div className="productPay-itemTitle">
                                <span>Thế giới di động</span>
                                <button>
                                    <Shop />
                                    Tham quan
                                </button>
                                <button>
                                    <MessageText1 variant="Bold" />
                                    Liên hệ
                                </button>
                            </div>
                            <span>Mã đơn: 123xyzbkl</span>
                        </div>
                        <div className="productPay-body">
                            <img src="../Img/iphone14.png" alt="" />
                            <div className="productPay-bodyText">
                                <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                                <div className="productPay-bodyType">
                                    <span>Tuỳ chọn: 512G</span>
                                    <span>Số lượng: 1</span>
                                </div>
                            </div>
                        </div>
                        <div className="productPay-footer">
                            <button>Mua lại</button>
                            <span>
                                Tổng tiền: 800 <Crown size={34} variant="Bold" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="productAuction-list">
                    <div className="productAuction-item">
                        <div className="productAuction-header">
                            <span>Thế giới di động</span>
                            <span>Mã đơn: 123xyzbkl</span>
                        </div>
                        <div className="productAuction-body">
                            <img src="../Img/iphone14.png" alt="" />
                            <div className="productAuction-bodyText">
                                <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                                <span>Số lượng: 1</span>
                            </div>
                        </div>
                        <div className="productAuction-footer">
                            <span className="active">Đấu giá thất bại</span>
                            <span>
                                Tổng tiền: 800 <Crown size={34} variant="Bold" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="pagination">
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
        </div>
    );
};

export default ProductPay;

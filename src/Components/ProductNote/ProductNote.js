import React from 'react';
import './productNote.scss';
import { ArrowLeft2, ArrowRight2, Crown, Messages2, MessageText1, SearchNormal1, Shop } from 'iconsax-react';
const ProductNote = () => {
    return (
        <div className="productNote">
            <div className="productNote-container">
                <div className="productNote-title">
                    <button className="click">Mua hàng</button>
                    <button>Đấu giá</button>
                </div>
                <div className="productNote-searchBox">
                    <SearchNormal1 className="productNote-searchIcon" />
                    <input type="text" placeholder="Tìm kiếm đơn hàng theo tên shop, tên sản phẩm..." />
                    <button>
                        <SearchNormal1 className="productNote-searchIcon" />
                    </button>
                </div>
                <div className="productNote-list">
                    <div className="productNote-item">
                        <div className="productNote-header">
                            <div className="productNote-itemTitle">
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
                            <span>Xóa</span>
                        </div>
                        <div className="productNote-body">
                            <img src="../Img/iphone14.png" alt="" />
                            <div className="productNote-bodyText">
                                <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                                <div className="productNote-bodyType">
                                    <span>Tuỳ chọn: 512G</span>
                                    <span>Số lượng: 1</span>
                                </div>
                            </div>
                        </div>
                        <div className="productNote-footer">
                            <button>Mua ngay</button>
                            <span>
                                Giá tiền: 800 <Crown size={34} variant="Bold" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="productNoteAuc-list">
                    <div className="productNote-item">
                        <div className="productNote-header">
                            <div className="productNoteAuc-itemTitle">
                                <span>Thế giới di động</span>
                                <button>
                                    <Messages2 />
                                    Trò chuyện với người mua
                                </button>
                            </div>
                            <span>Xóa</span>
                        </div>
                        <div className="productNote-body">
                            <img src="../Img/iphone14.png" alt="" />
                            <div className="productNote-bodyText">
                                <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                                <div className="productNote-bodyType">
                                    <span>Thời gian còn lại: 2 ngày 8 giờ 21 phút</span>
                                    <span>Số lượng: 1</span>
                                </div>
                            </div>
                        </div>
                        <div className="productNoteAuc-footer">
                            <button>Tiếp tục đấu giá</button>
                            <div className="productNoteAuc-footerInfo">
                                <span>
                                    Mức đấu giá mới nhất: 800 <Crown size={34} variant="Bold" />
                                </span>
                                <span>
                                    Mức đấu giá mới nhất của bạn: 400 <Crown size={34} variant="Bold" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductNote;

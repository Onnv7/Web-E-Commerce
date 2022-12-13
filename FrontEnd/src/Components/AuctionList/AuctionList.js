import { ArrowLeft2, ArrowRight2, Crown, SearchNormal1 } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './auctionList.scss';

const AuctionList = () => {
    const navigate = useNavigate();
    const handleMove = () => {
        navigate('/history');
    };
    return (
        <div className="auctionList">
            <div className="auctionList-container">
                <div className="manageProduct-search">
                    <span>Tên sản phẩm</span>
                    <input type="text" placeholder="Nhập tên sản phẩm cần tìm kiếm trong danh sách..." />
                    <button className="headerSearch-btn">
                        <SearchNormal1 className="headerSearch-icon" />
                    </button>
                </div>
                <div className="auctionList-title">
                    <span>Thông tin sản phẩm</span>
                    <span>Số lượng</span>
                    <span>Mức giá hiện tại</span>
                    <span>Thời gian</span>
                    <span>Thao Tác</span>
                </div>
                <div className="auctionList-item">
                    <div className="auctionList-product">
                        <img src="../Img/iphone14.png" alt="" />
                        <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                    </div>
                    <span>1</span>
                    <span>
                        800 <Crown variant="Bold" size={20} />
                    </span>
                    <div className="auctionList-time">
                        <span>Bắt đầu: 14h05, 26/12/2022</span>
                        <span>Kết thúc: 14h05, 29/12/2022</span>
                    </div>
                    <div className="auctionList-action">
                        <span>Chi tiết</span>
                        <span onClick={handleMove}>Lịch sử</span>
                    </div>
                </div>
                <div className="auctionList-item">
                    <div className="auctionList-product">
                        <img src="../Img/iphone14.png" alt="" />
                        <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                    </div>
                    <span>1</span>
                    <span>
                        800 <Crown variant="Bold" size={20} />
                    </span>
                    <div className="auctionList-time">
                        <span>Bắt đầu: 14h05, 26/12/2022</span>
                        <span>Kết thúc: 14h05, 29/12/2022</span>
                    </div>
                    <div className="auctionList-action">
                        <span>Chi tiết</span>
                        <span>Lịch sử</span>
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
        </div>
    );
};

export default AuctionList;

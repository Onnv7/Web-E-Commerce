import { ArrowLeft2, ArrowRight2, Heart, ShoppingCart, Star1 } from 'iconsax-react';
import React from 'react';
import './productChild.scss';

const ProductChild = () => {
    return (
        <div className="productChild">
            <div className="productChild-container">
                <div className="productAnother">
                    <h1>Các sản phẩm khác của cửa hàng</h1>
                    <span>Xem tất cả</span>
                </div>
                <div className="grid wide">
                    <div className="row sm-gutter">
                        <div className="col c-3">
                            <a href="" className="productItem">
                                <img src="../Img/Rolex.png" className="product-img" />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="product-sell">
                                    <span>Đã bán 4,5K</span>
                                    <span>500.000 VNĐ</span>
                                </div>
                                <div className="product-rate">
                                    <div className="product-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="product-buy">
                                    <button className="product-btn">Đấu giá ngay</button>
                                    <div className="product-shop">
                                        <Heart className="product-liked" variant="Bold" />
                                        <ShoppingCart />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col c-3">
                            <a href="" className="productItem">
                                <img src="../Img/Rolex.png" className="product-img" />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="product-sell">
                                    <span>Đã bán 4,5K</span>
                                    <span>500.000 VNĐ</span>
                                </div>
                                <div className="product-rate">
                                    <div className="product-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="product-buy">
                                    <button className="product-btn">Đấu giá ngay</button>
                                    <div className="product-shop">
                                        <Heart className="product-liked" variant="Bold" />
                                        <ShoppingCart />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col c-3">
                            <a href="" className="productItem">
                                <img src="../Img/Rolex.png" className="product-img" />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="product-sell">
                                    <span>Đã bán 4,5K</span>
                                    <span>500.000 VNĐ</span>
                                </div>
                                <div className="product-rate">
                                    <div className="product-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="product-buy">
                                    <button className="product-btn">Đấu giá ngay</button>
                                    <div className="product-shop">
                                        <Heart className="product-liked" variant="Bold" />
                                        <ShoppingCart />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col c-3">
                            <a href="" className="productItem">
                                <img src="../Img/Rolex.png" className="product-img" />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="product-sell">
                                    <span>Đã bán 4,5K</span>
                                    <span>500.000 VNĐ</span>
                                </div>
                                <div className="product-rate">
                                    <div className="product-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="product-buy">
                                    <button className="product-btn">Đấu giá ngay</button>
                                    <div className="product-shop">
                                        <Heart className="product-liked" variant="Bold" />
                                        <ShoppingCart />
                                    </div>
                                </div>
                            </a>
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
                <div className="productAnother">
                    <h1>Các sản phẩm liên quan</h1>
                    <span>Xem tất cả</span>
                </div>
                <div className="grid wide">
                    <div className="row sm-gutter">
                        <div className="col c-3">
                            <a href="" className="productItem">
                                <img src="../Img/Rolex.png" className="product-img" />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="product-sell">
                                    <span>Đã bán 4,5K</span>
                                    <span>500.000 VNĐ</span>
                                </div>
                                <div className="product-rate">
                                    <div className="product-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="product-buy">
                                    <button className="product-btn">Đấu giá ngay</button>
                                    <div className="product-shop">
                                        <Heart className="product-liked" variant="Bold" />
                                        <ShoppingCart />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col c-3">
                            <a href="" className="productItem">
                                <img src="../Img/Rolex.png" className="product-img" />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="product-sell">
                                    <span>Đã bán 4,5K</span>
                                    <span>500.000 VNĐ</span>
                                </div>
                                <div className="product-rate">
                                    <div className="product-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="product-buy">
                                    <button className="product-btn">Đấu giá ngay</button>
                                    <div className="product-shop">
                                        <Heart className="product-liked" variant="Bold" />
                                        <ShoppingCart />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col c-3">
                            <a href="" className="productItem">
                                <img src="../Img/Rolex.png" className="product-img" />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="product-sell">
                                    <span>Đã bán 4,5K</span>
                                    <span>500.000 VNĐ</span>
                                </div>
                                <div className="product-rate">
                                    <div className="product-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="product-buy">
                                    <button className="product-btn">Đấu giá ngay</button>
                                    <div className="product-shop">
                                        <Heart className="product-liked" variant="Bold" />
                                        <ShoppingCart />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col c-3">
                            <a href="" className="productItem">
                                <img src="../Img/Rolex.png" className="product-img" />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="product-sell">
                                    <span>Đã bán 4,5K</span>
                                    <span>500.000 VNĐ</span>
                                </div>
                                <div className="product-rate">
                                    <div className="product-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="product-buy">
                                    <button className="product-btn">Đấu giá ngay</button>
                                    <div className="product-shop">
                                        <Heart className="product-liked" variant="Bold" />
                                        <ShoppingCart />
                                    </div>
                                </div>
                            </a>
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
            </div>
            <div className="productAucChild-container none">
                <div className="productAnother">
                    <h1>Các sản phẩm liên quan khác</h1>
                    <span>Xem tất cả</span>
                </div>
                <div className="grid wide">
                    <div className="row sm-gutter ">
                        <div className="col c-3">
                            <a href="" className="auctionItem">
                                <img src="../Img/Rolex.png" className="auction-img" />
                                <span className="auction-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="auction-sell">
                                    <span>Số người đã tham gia:</span>
                                    <span>70 người</span>
                                </div>
                                <div className="auction-priceStart">
                                    <span>Giá khởi điểm:</span>
                                    <span>500.000Đ</span>
                                </div>
                                <div className="auction-priceCurrent">
                                    <span>Giá hiện tại:</span>
                                    <span>100.000Đ</span>
                                </div>
                                <div className="auction-rate">
                                    <div className="auction-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="auction-buy">
                                    <button className="auction-btn">Đấu giá ngay</button>
                                    <Heart className="auction-liked" variant="Bold" />
                                </div>
                            </a>
                        </div>
                        <div className="col c-3">
                            <a href="" className="auctionItem">
                                <img src="../Img/Rolex.png" className="auction-img" />
                                <span className="auction-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="auction-sell">
                                    <span>Số người đã tham gia:</span>
                                    <span>70 người</span>
                                </div>
                                <div className="auction-priceStart">
                                    <span>Giá khởi điểm:</span>
                                    <span>500.000Đ</span>
                                </div>
                                <div className="auction-priceCurrent">
                                    <span>Giá hiện tại:</span>
                                    <span>100.000Đ</span>
                                </div>
                                <div className="auction-rate">
                                    <div className="auction-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="auction-buy">
                                    <button className="auction-btn">Đấu giá ngay</button>
                                    <Heart className="auction-liked" variant="Bold" />
                                </div>
                            </a>
                        </div>
                        <div className="col c-3">
                            <a href="" className="auctionItem">
                                <img src="../Img/Rolex.png" className="auction-img" />
                                <span className="auction-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="auction-sell">
                                    <span>Số người đã tham gia:</span>
                                    <span>70 người</span>
                                </div>
                                <div className="auction-priceStart">
                                    <span>Giá khởi điểm:</span>
                                    <span>500.000Đ</span>
                                </div>
                                <div className="auction-priceCurrent">
                                    <span>Giá hiện tại:</span>
                                    <span>100.000Đ</span>
                                </div>
                                <div className="auction-rate">
                                    <div className="auction-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="auction-buy">
                                    <button className="auction-btn">Đấu giá ngay</button>
                                    <Heart className="auction-liked" variant="Bold" />
                                </div>
                            </a>
                        </div>
                        <div className="col c-3">
                            <a href="" className="auctionItem">
                                <img src="../Img/Rolex.png" className="auction-img" />
                                <span className="auction-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim xuất bản năm 2020
                                </span>
                                <div className="auction-sell">
                                    <span>Số người đã tham gia:</span>
                                    <span>70 người</span>
                                </div>
                                <div className="auction-priceStart">
                                    <span>Giá khởi điểm:</span>
                                    <span>500.000Đ</span>
                                </div>
                                <div className="auction-priceCurrent">
                                    <span>Giá hiện tại:</span>
                                    <span>100.000Đ</span>
                                </div>
                                <div className="auction-rate">
                                    <div className="auction-rating">
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                        <Star1 variant="Bold" />
                                    </div>
                                    <span>Hà Nội</span>
                                </div>
                                <div className="auction-buy">
                                    <button className="auction-btn">Đấu giá ngay</button>
                                    <Heart className="auction-liked" variant="Bold" />
                                </div>
                            </a>
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
            </div>
        </div>
    );
};

export default ProductChild;

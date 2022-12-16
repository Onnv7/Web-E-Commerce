import { Star1, Heart, SearchNormal1, ShoppingCart, ArrowDown2 } from 'iconsax-react';
import React, { useState } from 'react';
import './productShop.scss';

const ProductShop = () => {
    const [active, setActive] = useState(0);
    const setClick = (i) => {
        setActive(i);
    };
    return (
        <div className="productShop">
            <span>Sản phẩm của Shop</span>
            <div className="grid wide">
                <div class="row sm-gutter">
                    <div class="col l-2 m-0 c-0">
                        <nav className="detailCate">
                            <span>Danh mục</span>
                            <div className="detailCate-list">
                                <span className={active === 1 ? 'active' : ''} onClick={() => setClick(1)}>
                                    điện thoại
                                </span>
                                <span>điện thoại</span>
                                <span>điện thoại</span>
                            </div>
                        </nav>
                    </div>
                    <div class="col l-10 m-12 c-12">
                        <div className="detailCate-filter">
                            <span>Sắp xếp theo</span>
                            <div className="detailCate-filterSelect">
                                <span>
                                    Giá <ArrowDown2 />
                                </span>
                                <div className="detailCate-filterList">
                                    <span>Giá: Thấp đến cao</span>
                                    <span>Giá: Cao đến giấp</span>
                                </div>
                            </div>
                        </div>
                        <div className="detailCate-product">
                            <div className="row sm-gutter">
                                <div className="col c-4">
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
                                                <ShoppingCart className="product-liked" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col c-4">
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
                                                <ShoppingCart className="product-liked" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col c-4">
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
                                                <ShoppingCart className="product-liked" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col c-4">
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
                                                <ShoppingCart className="product-liked" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col c-4">
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
                                                <ShoppingCart className="product-liked" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col c-4">
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
                                                <ShoppingCart className="product-liked" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col c-4">
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
                                                <ShoppingCart className="product-liked" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col c-4">
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
                                                <ShoppingCart className="product-liked" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShop;

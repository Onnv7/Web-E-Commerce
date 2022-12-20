import {
    ArrowLeft2,
    ArrowRight2,
    Heart,
    ShoppingCart,
    Star1,
} from "iconsax-react";
import React, { useEffect, useState } from "react";
import "./product.scss";
import axios from "../../hooks/axios";
import ProductItem from "./ProductItem";

const Product = ({ cat, filters, sort, limit, col = "c-3", products }) => {
    return (
        products && (
            <div className="product">
                <div className="grid wide">
                    <div className="row sm-gutter">
                        {products && Array.isArray(products) ? (
                            //! Trường hợp getAllProducts
                            products
                                .slice(0, limit)
                                .map((product) => (
                                    <ProductItem
                                        product={product}
                                        key={product._id}
                                        col={col}
                                    ></ProductItem>
                                ))
                        ) : (
                            //! Trường hợp getProduct By id
                            <ProductItem
                                product={products}
                                key={products._id}
                            ></ProductItem>
                        )}
                        <div className={`col ${col}`}>
                            <a href="" className="productItem">
                                <img
                                    src="../Img/Rolex.png"
                                    className="product-img"
                                />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim
                                    xuất bản năm 2020
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
                                    <button className="product-btn">
                                        Đấu giá ngay
                                    </button>
                                    <div className="product-shop">
                                        <Heart
                                            className="product-liked"
                                            variant="Bold"
                                        />
                                        <ShoppingCart className="product-liked" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`col ${col}`}>
                            <a href="" className="productItem">
                                <img
                                    src="../Img/Rolex.png"
                                    className="product-img"
                                />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim
                                    xuất bản năm 2020
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
                                    <button className="product-btn">
                                        Đấu giá ngay
                                    </button>
                                    <div className="product-shop">
                                        <Heart
                                            className="product-liked"
                                            variant="Bold"
                                        />
                                        <ShoppingCart className="product-liked" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`col ${col}`}>
                            <a href="" className="productItem">
                                <img
                                    src="../Img/Rolex.png"
                                    className="product-img"
                                />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim
                                    xuất bản năm 2020
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
                                    <button className="product-btn">
                                        Đấu giá ngay
                                    </button>
                                    <div className="product-shop">
                                        <Heart
                                            className="product-liked"
                                            variant="Bold"
                                        />
                                        <ShoppingCart className="product-liked" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`col ${col}`}>
                            <a href="" className="productItem">
                                <img
                                    src="../Img/Rolex.png"
                                    className="product-img"
                                />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim
                                    xuất bản năm 2020
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
                                    <button className="product-btn">
                                        Đấu giá ngay
                                    </button>
                                    <div className="product-shop">
                                        <Heart
                                            className="product-liked"
                                            variant="Bold"
                                        />
                                        <ShoppingCart className="product-liked" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`col ${col}`}>
                            <a href="" className="productItem">
                                <img
                                    src="../Img/Rolex.png"
                                    className="product-img"
                                />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim
                                    xuất bản năm 2020
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
                                    <button className="product-btn">
                                        Đấu giá ngay
                                    </button>
                                    <div className="product-shop">
                                        <Heart
                                            className="product-liked"
                                            variant="Bold"
                                        />
                                        <ShoppingCart className="product-liked" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col c-3 c-4">
                            <a href="" className="productItem">
                                <img
                                    src="../Img/Rolex.png"
                                    className="product-img"
                                />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim
                                    xuất bản năm 2020
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
                                    <button className="product-btn">
                                        Đấu giá ngay
                                    </button>
                                    <div className="product-shop">
                                        <Heart
                                            className="product-liked"
                                            variant="Bold"
                                        />
                                        <ShoppingCart className="product-liked" />
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col c-3 c-4">
                            <a href="" className="productItem">
                                <img
                                    src="../Img/Rolex.png"
                                    className="product-img"
                                />
                                <span className="product-title">
                                    Đồng hò Rolex đính kim cương màu vàng kim
                                    xuất bản năm 2020
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
                                    <button className="product-btn">
                                        Đấu giá ngay
                                    </button>
                                    <div className="product-shop">
                                        <Heart
                                            className="product-liked"
                                            variant="Bold"
                                        />
                                        <ShoppingCart className="product-liked" />
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
                                <a
                                    href=""
                                    className="pagination-link pagination-link__active"
                                >
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
                                    98
                                </a>
                            </div>
                            <div className="pagination-item">
                                <a href="" className="pagination-link">
                                    99
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
        )
    );
};

export default Product;

import React, { useEffect, useState } from "react";
import "./productSell.scss";
import { Message2, Note1, ShoppingCart, Star1 } from "iconsax-react";
import axios from "./../../hooks/axios.js";
import Rating from "../Rating/Rating";

const ProductSell = ({ id }) => {
    const [product, setProduct] = useState();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/products/${id}`);
            setProduct(data);
        };
        fetchData();
    }, [id]);

    const handleSlide = (index) => {
        setCurrent(index);
    };
    const countUp = () => {
        setCount(count + 1);
    };
    const countDown = () => {
        setCount(count - 1);
    };
    return (
        product && (
            <div className="productSell">
                <div className="productSell-container">
                    <div className="productImg">
                        <img
                            src={product.imgPath[current]}
                            alt=""
                            className="productImg-main"
                        />
                        <div className="productImg-sub">
                            {product.imgPath.map((slide, index) => {
                                return (
                                    <img
                                        src={slide}
                                        alt="dt"
                                        key={index}
                                        onClick={() => handleSlide(index)}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="productSell-item">
                        <div className="productSell-title">
                            <span className="productSell-name">
                                {product.name}
                            </span>
                            <div className="productSell-rate">
                                <div className="product-review">
                                    <div className="productSell-star">
                                        <Rating
                                            rating={Math.round(
                                                product.ratingAverage
                                            )}
                                            numReviews={product.ratingQuantity}
                                        />
                                    </div>
                                </div>
                                <span>{product.soldQuantity} lượt bán</span>
                            </div>
                        </div>
                        <div className="productSell-price">
                            <div className="productPrice">
                                <span>Giá:</span>
                                <span></span>
                                <span>{product.price} VNĐ</span>
                            </div>
                            <div className="productFee">
                                <span>Phí vận chuyển:</span>
                                <span>
                                    Vận chuyển đến 435 abc xyz mnk, quan 9, ho
                                    chi minh 18.000 VND - 20.000 VND
                                </span>
                            </div>
                        </div>
                        <div className="productList">
                            <div className="product-capacity">
                                <span>Size: </span>
                                <div className="product-capacity__size">
                                    {product.sizes.map((s) => (
                                        <button key={s}>{s}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="product-quantity">
                                <div className="quantity-toBuy">
                                    <span>Số lượng</span>
                                    <div className="product-count">
                                        <button
                                            disabled={count <= 1}
                                            onClick={countDown}
                                        >
                                            -
                                        </button>
                                        <span>{count}</span>
                                        <button onClick={countUp}>+</button>
                                    </div>
                                </div>
                                <span>
                                    Hiện có: {product.quantity} sản phẩm trong
                                    kho
                                </span>
                            </div>
                            <div className="productSell-btn">
                                <button>
                                    <ShoppingCart size={32} /> Thêm vào giỏ hàng
                                </button>
                                <button>Mua ngay</button>
                            </div>
                            <div className="product-payments">
                                <span>Hỗ trợ thanh toán:</span>
                                <img src="../Img/1-payment.png" alt="" />
                                <img
                                    src="../Img/Visa_Inc._logo.svg.webp"
                                    alt=""
                                />
                                <img src="../Img/mastercard.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productAuction-container none">
                    <div className="productImg">
                        <img
                            src="../Img/iphone14.png"
                            alt=""
                            className="productImg-main"
                        />
                        <div className="productImg-sub">
                            <img src="../Img/iphone14.png" alt="" />
                            <img src="../Img/1-ip14.jpg" alt="" />
                            <img src="../Img/3-ip14.jpg" alt="" />
                            <img src="../Img/4-ip14.jpg" alt="" />
                        </div>
                    </div>
                    <div className="productAuction-item">
                        <div className="productAuction-title">
                            <span className="productAuction-name">
                                Iphone 14 Pro Max - Deep Purple (Tím) - Hàng
                                chính hãng
                            </span>
                        </div>
                        <div className="productAuction-timeList">
                            <div className="productAuction-timeItem">
                                <span>Bắt đầu:</span>
                                <span>14h26, chủ nhật, ngày 6 - 11 - 2022</span>
                            </div>
                            <div className="productAuction-timeItem">
                                <span>Kết thúc:</span>
                                <span>
                                    {" "}
                                    14h26, chủ nhật, ngày 13 - 11 - 2022
                                </span>
                            </div>
                            <div className="productAuction-timeItem">
                                <span>Diễn ra trong:</span>
                                <span> 7 ngày</span>
                            </div>
                            <div className="productAuction-timeItem">
                                <span>Thời gian còn lại:</span>
                                <span>2 ngày 16 giờ 56 phút</span>
                            </div>
                        </div>

                        <div className="auctionPrice-list">
                            <div className="auctionPrice-title">
                                <span>Giá khởi điểm:</span>
                                <span>Giá hiện tại:</span>
                                <span>Số người đã tham gia:</span>
                            </div>
                            <div className="auctionPrice-item">
                                <span>50.000.000 VND</span>
                                <span>40.500.000 VND</span>
                                <span>4</span>
                            </div>
                        </div>
                        <div className="productAuction-auctionBox">
                            <div className="productAuction-inputBox">
                                <div className="productAuction-input">
                                    <input
                                        type="text"
                                        placeholder="Nhập số tiền định đấu giá"
                                    />
                                    <span>VND</span>
                                </div>
                                <span>
                                    Nhập số tiền đấu giá phải nhỏ hơn giá tiền
                                    hiện tại
                                </span>
                            </div>
                            <div className="productAuction-btn">
                                <button>đấu giá</button>
                                <button>
                                    <Note1 />
                                    Thêm vào danh sách lưu ý
                                </button>
                            </div>
                        </div>
                        <div className="productFee">
                            <span>Phí vận chuyển</span>
                            <span>Người bán chi chả</span>
                        </div>
                        <div className="productAuction-paymentsBox">
                            <button>
                                <Message2 />
                                Trò chuyện với người mua
                            </button>
                            <div className="product-payments">
                                <span>Hỗ trợ thanh toán:</span>
                                <img src="../Img/1-payment.png" alt="" />
                                <img
                                    src="../Img/Visa_Inc._logo.svg.webp"
                                    alt=""
                                />
                                <img src="../Img/mastercard.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ProductSell;

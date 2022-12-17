import React, { useContext, useEffect, useState } from "react";
import {
    ArrowLeft2,
    ArrowRight2,
    Back,
    Crown,
    GalleryAdd,
    MessageText1,
    SearchNormal1,
    Shop,
    Star1,
} from "iconsax-react";
import "./productPay.scss";
import axios from "./../../hooks/axios";
import { AuthContext } from "../../context/AuthContext";

const ProductPay = () => {
    const { user } = useContext(AuthContext);
    const [active, setActive] = useState(1);
    const [open, setOpen] = useState(false);
    const setClick = (i) => {
        setActive(i);
    };
    const [checkouts, setCheckouts] = useState([]);
    // const [shops, setShops] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/checkouts/all/${user._id}`);
            setCheckouts(data);
        };
        fetchData();
    }, [user]);
    // useEffect(() => {});

    return (
        <div className="productPay">
            <div className="productPay-container">
                <div className="productPay-title">
                    <button
                        className={
                            active === 1 ? "active active__underline" : ""
                        }
                        onClick={() => setClick(1)}
                    >
                        Mua hàng
                    </button>
                    <button
                        className={
                            active === 2 ? "active active__underline" : ""
                        }
                        onClick={() => setClick(2)}
                    >
                        Đấu giá
                    </button>
                </div>

                <div className={active === 1 ? "productPay-list" : "tab-hide"}>
                    {checkouts &&
                        checkouts.map((checkout) => (
                            <div className="productPay-item" key={checkout._id}>
                                <div className="productPay-header">
                                    <div className="productPay-itemTitle">
                                        <span>Thế giới di động</span>
                                        <button>
                                            <Shop />
                                            Tham quan
                                        </button>
                                    </div>
                                    <span>Mã đơn: {checkout._id} </span>
                                </div>
                                {checkout.productItems.map((product) => (
                                    <div>
                                        <div className="productPay-body">
                                            <img
                                                src="../Img/iphone14.png"
                                                alt=""
                                            />
                                            <div className="productPay-bodyText">
                                                <span>{product.name}</span>
                                                <div className="productPay-bodyType">
                                                    <span>
                                                        Phân loại:{" "}
                                                        {
                                                            product.classifyProduct
                                                        }
                                                    </span>
                                                    <span>
                                                        Số lượng:{" "}
                                                        {
                                                            product.quantityProduct
                                                        }
                                                    </span>
                                                    <span>
                                                        Giá tiền:{" "}
                                                        {product.price}
                                                        <Crown
                                                            size={20}
                                                            variant="Bold"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="productPay-footer">
                                            <div className="productPay-footerBtn">
                                                <button>Mua lại</button>
                                                <button
                                                    onClick={() =>
                                                        setOpen(true)
                                                    }
                                                >
                                                    Đánh giá
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="productPay-footer">
                                    <span>
                                        Trạng thái:{" "}
                                        <span>{checkout.status}</span>
                                    </span>
                                    <span>
                                        Tổng tiền: {checkout.totalCost}{" "}
                                        <Crown size={34} variant="Bold" />
                                    </span>
                                </div>
                            </div>
                        ))}
                </div>
                <div
                    className={
                        active === 2 ? "productAuction-list" : "tab-hide"
                    }
                >
                    <div className="productAuction-item">
                        <div className="productAuction-header">
                            <span>Thế giới di động</span>
                            <span>Mã đơn: 123xyzbkl</span>
                        </div>
                        <div className="productAuction-body">
                            <img src="../Img/iphone14.png" alt="" />
                            <div className="productAuction-bodyText">
                                <span>
                                    Iphone 14 Pro Max - Deep Purple (Tím) - Hàng
                                    chính hãng
                                </span>
                                <span>Số lượng: 1</span>
                            </div>
                        </div>
                        <div className="productAuction-footer">
                            <span className="active">Đấu giá thất bại</span>
                            <span>
                                Tổng tiền: 800{" "}
                                <Crown size={34} variant="Bold" />
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
                            <ArrowRight2 />
                        </a>
                    </div>
                </div>
                {open && (
                    <div className="modalComment">
                        <div className="modalComment-container">
                            <span>Đánh giá sản phẩm</span>
                            <div className="modalComment-product">
                                <img src="../Img/iphone14.png" alt="" />
                                <div className="modalComment-productName">
                                    <span>
                                        Iphone 14 Pro Max - Deep Purple (Tím) -
                                        Hàng chính hãng
                                    </span>
                                    <div className="modalComment-productDetail">
                                        <span>Size: 512GB</span>
                                        <span>Màu sắc: Deep Purple</span>
                                    </div>
                                </div>
                            </div>
                            <div className="modalComment-rate">
                                <span>Chất lượng sản phẩm</span>
                                <div className="modalComent-rateBox">
                                    <Star1 variant="Bold" />
                                    <Star1 variant="Bold" />
                                    <Star1 variant="Bold" />
                                    <Star1 variant="Bold" />
                                    <Star1 variant="Bold" />
                                </div>
                            </div>

                            <textarea></textarea>
                            <div className="modalComment-imgBox">
                                <img src="../Img/iphone14.png" alt="" />
                                <img src="../Img/iphone14.png" alt="" />
                                <img src="../Img/iphone14.png" alt="" />
                                <img src="../Img/iphone14.png" alt="" />
                                <img src="../Img/iphone14.png" alt="" />
                                <button>
                                    <GalleryAdd />
                                    Thêm hình ảnh
                                </button>
                            </div>
                            <div className="modalComment-btn">
                                <button onClick={() => setOpen(false)}>
                                    <Back />
                                    Quay lại
                                </button>
                                <button>Hoàn tất</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPay;

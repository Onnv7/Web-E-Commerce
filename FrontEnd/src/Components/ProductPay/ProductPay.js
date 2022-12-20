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
import { useNavigate } from "react-router-dom";
import Star from "./../Star/Star";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageValidateSize from "filepond-plugin-image-validate-size";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
// Register the plugin
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(
    FilePondPluginFileValidateSize,
    FilePondPluginImageValidateSize,
    FilePondPluginFileEncode,
    FilePondPluginImagePreview,
    FilePondPluginImageResize
);

const ProductPay = () => {
    const { user } = useContext(AuthContext);
    const [active, setActive] = useState(1);
    const [open, setOpen] = useState(false);
    const setClick = (i) => {
        setActive(i);
    };
    const navigate = useNavigate();
    const [checkouts, setCheckouts] = useState([]);
    const [product, setProduct] = useState();
    const [rating, setRating] = useState(0);
    const [contentReview, setContentReview] = useState("");
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/checkouts/all/${user._id}`);
            setCheckouts(data);
        };
        fetchData();
    }, [user]);
    // useEffect(() => {});

    const rebuyHandler = (slug) => {
        navigate(`/products/${slug}`);
    };
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
                                TODO: Đổi _id thành product
                                {checkout.productItems.map((product) => (
                                    <div>
                                        <div className="productPay-body">
                                            <img
                                                src={product._id.imgPath[0]}
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
                                                <button
                                                    onClick={() =>
                                                        rebuyHandler(
                                                            product._id.slug
                                                        )
                                                    }
                                                >
                                                    Mua lại
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setProduct(product);
                                                        setOpen(true);
                                                    }}
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

                {open && (
                    <div className="modalComment">
                        <div className="modalComment-container">
                            <span>Đánh giá sản phẩm</span>
                            <div className="modalComment-product">
                                <img
                                    src={product._id.imgPath[0]}
                                    alt="product"
                                />
                                <div className="modalComment-productName">
                                    <span>{product.name}</span>
                                    <div className="modalComment-productDetail">
                                        <span>
                                            Phân loại: {product.classifyProduct}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="modalComment-rate">
                                <span>Chất lượng sản phẩm</span>
                                <div className="modalComent-rateBox">
                                    <Star setRating={setRating} />
                                </div>
                            </div>

                            <textarea
                                value={contentReview}
                                onChange={(e) =>
                                    setContentReview(e.target.value)
                                }
                            ></textarea>

                            <div className="modalComment-imgBox">
                                <button>
                                    <GalleryAdd />
                                </button>
                            </div>
                            <FilePond
                                files={files}
                                onupdatefiles={setFiles}
                                allowMultiple={false}
                                maxFiles={3}
                                maxFileSize="3MB"
                                //server="/api"
                                name="img"
                                labelIdle="Thêm ảnh để đánh giá"
                            />

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

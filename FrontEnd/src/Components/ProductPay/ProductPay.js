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
import { toast } from "react-toastify";

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
    const [checkoutAuctions, setCheckoutAuctions] = useState([]);
    const [product, setProduct] = useState();
    const [rating, setRating] = useState(0);
    const [contentReview, setContentReview] = useState("");
    const [reviews, setReviews] = useState([]);
    const [files, setFiles] = useState([]);
    const [reload, setReload] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/checkouts/all/${user._id}`);
            setCheckouts(data);
        };
        fetchData();
    }, [user, reload]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(
                `/checkoutAuction/all/${user._id}`
            );
            console.log(data);
            setCheckoutAuctions(data);
        };
        fetchData();
    }, [user, reload]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/reviews/user/${user._id}`);
            setReviews(data);
        };
        fetchData();
    }, [user, reload]);

    const rebuyHandler = (slug) => {
        navigate(`/products/${slug}`);
    };
    const getImageData = (files) => {
        let rs = [];
        files.forEach((item) => {
            var imgData = `{"type":"${
                item.fileType.split(";")[0]
            }","data":"${item.getFileEncodeBase64String()}"}`;

            rs.push(imgData);
        });
        return rs;
    };
    const img = getImageData(files);
    const addReviewHandler = async () => {
        if (rating === 0) {
            toast.warning("Bạn phải chọn số sao muốn đánh giá ");
            return;
        } else if (contentReview.trim() === "") {
            toast.warning("Bạn phải nhập nội dung đánh giá");
            return;
        }
        try {
            await axios.post("/reviews", {
                user: user._id,
                product: product._id._id,
                content: contentReview,
                rating,
                img,
            });
            toast.success("Đánh giá sản phẩm thành công");
        } catch (error) {
            toast.error(error.message);
        }
    };
    const gotoshopHandler = (id) => {
        navigate(`/shop/${id}`);
    };
    const receivedProductHandler = async (id) => {
        try {
            await axios.patch(`/checkouts/${id}`, {
                status: "delivered",
            });
            setReload(!reload);
            toast.success("Bạn đã nhận được hàng thành công");
        } catch (error) {
            toast.error(error.message);
        }
    };
    const receivedProductAuctionHandler = async (id) => {
        try {
            await axios.patch(`/checkoutAuction/status/${id}`, {
                status: "delivered",
            });
            setReload(!reload);
            toast.success("Bạn đã nhận được hàng thành công");
        } catch (error) {
            toast.error(error.message);
        }
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
                                        <span>{checkout.shop.name}</span>
                                        <button
                                            onClick={() =>
                                                gotoshopHandler(
                                                    checkout.shop._id
                                                )
                                            }
                                        >
                                            <Shop />
                                            Tham quan
                                        </button>
                                    </div>
                                    <span>Mã đơn: {checkout._id} </span>
                                </div>
                                {checkout.productItems.map((product, index) => (
                                    <div key={index}>
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
                                                {reviews.find(
                                                    (item) =>
                                                        item.product ===
                                                        product._id._id
                                                ) != null ? (
                                                    <button
                                                        disabled
                                                        style={{
                                                            cursor: "not-allowed",
                                                        }}
                                                    >
                                                        Đã Đánh giá
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => {
                                                            setProduct(product);
                                                            setOpen(true);
                                                        }}
                                                    >
                                                        Đánh giá
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="productPay-footer">
                                    <span>
                                        Trạng thái:{" "}
                                        <span>
                                            {checkout.status === "waiting"
                                                ? "Chờ giao hàng"
                                                : checkout.status ===
                                                  "delivering"
                                                ? "Đang giao hàng"
                                                : "Đã giao hàng"}
                                        </span>
                                    </span>
                                    <span>
                                        Tổng tiền: {checkout.totalCost}{" "}
                                        <Crown size={34} variant="Bold" />
                                    </span>
                                </div>
                                {checkout.status === "delivering" && (
                                    <button
                                        onClick={() =>
                                            receivedProductHandler(checkout._id)
                                        }
                                    >
                                        Đã nhận được hàng
                                    </button>
                                )}
                            </div>
                        ))}
                </div>
                <div
                    className={
                        active === 2 ? "productAuction-list" : "tab-hide"
                    }
                >
                    {checkoutAuctions.map((c) => (
                        <div className="productAuction-item">
                            <div className="productAuction-header">
                                <span>{c.shop.name}</span>
                                <span>Mã đơn: {c._id}</span>
                            </div>
                            <div className="productAuction-body">
                                <img src={c.imgPath} alt="" />
                                <div className="productAuction-bodyText">
                                    <span>{c.name}</span>
                                    <span>Số lượng: {c.quantity}</span>
                                </div>
                            </div>
                            <div className="productAuction-footer">
                                <span className="active">
                                    {c.status === "waiting"
                                        ? "Chờ giao hàng"
                                        : c.status === "delivering"
                                        ? "Đang giao hàng"
                                        : "Đã giao hàng"}
                                </span>
                                <span>
                                    Tổng tiền: {c.totalCost}{" "}
                                    <Crown size={34} variant="Bold" />
                                </span>
                            </div>
                            {c.status === "delivering" && (
                                <button
                                    onClick={() =>
                                        receivedProductAuctionHandler(c._id)
                                    }
                                    style={{
                                        padding: "10px",
                                        border: "none",
                                        borderRadius: "10px",
                                        backgroundColor: "var(--primary-color)",
                                        color: "#fff",
                                        fontSize: "2rem",
                                        cursor: "pointer",
                                    }}
                                >
                                    Đã nhận được hàng
                                </button>
                            )}
                        </div>
                    ))}
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
                                allowMultiple={true}
                                maxFiles={3}
                                maxFileSize="3MB"
                                //server="/api"
                                name="img"
                                labelIdle={"Thêm ảnh tối đa 3 ảnh"}
                            />
                            <div className="modalComment-btn">
                                <button onClick={() => setOpen(false)}>
                                    <Back />
                                    Quay lại
                                </button>
                                <button onClick={addReviewHandler}>
                                    Hoàn tất
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPay;

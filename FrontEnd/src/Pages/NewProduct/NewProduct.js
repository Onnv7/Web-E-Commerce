import { Crown, GalleryAdd } from "iconsax-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./newProduct.scss";
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
import { AuthContext } from "../../context/AuthContext";

// Register the plugins
registerPlugin(
    FilePondPluginFileValidateSize,
    FilePondPluginImageValidateSize,
    FilePondPluginFileEncode,
    FilePondPluginImagePreview,
    FilePondPluginImageResize
);

const NewProduct = () => {
    const [name, setName] = useState("");
    const [files, setFiles] = useState([]);
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [subCategories, setSubCategories] = useState("");

    const navigate = useNavigate();
    const handleCancle = () => {
        navigate("/seller");
    };

    const handleSubmit = () => {};
    return (
        <div>
            <Navbar style="seller" />
            <hr style={{ width: "100%", margin: 0 }} />
            <div className="newProduct">
                <span>Thêm sản phẩm</span>
                <div className="newProduct-box">
                    <span>Thông tin chi tiết</span>
                    <div className="newProduct-name">
                        <span>Tên sản phẩm</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="newProduct-img">
                        <span>Hình ảnh sản phẩm</span>
                        <div className="newProduct-imgBox">
                            <img src="../../Img/iphone14.png" alt="" />
                            <img src="../../Img/iphone14.png" alt="" />
                            <img src="../../Img/iphone14.png" alt="" />
                            <button>
                                <GalleryAdd />
                                Thêm hình ảnh
                            </button>
                        </div>
                    </div>
                    <div className="newProduct-brand">
                        <span>Ngành hàng / Nhãn hiệu</span>
                        <input
                            type="text"
                            value={brand}
                            onChange={(e) => e.target.value}
                        />
                    </div>
                    <div className="newProduct-size">
                        <span>Size</span>
                        <div className="newProduct-sizeBox">
                            <span>512GB</span>
                            <span>128GB</span>
                            <button>Thêm size</button>
                        </div>
                    </div>
                    <div className="newProduct-quantity">
                        <span>Số lượng sản phẩm trong kho hàng</span>
                        <div className="newProduct-quantityInput">
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="newProduct-price">
                        <span>Giá bán</span>
                        <div className="newProduct-priceBox">
                            <div className="newProduct-priceInput">
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <Crown variant="Bold" className="active" />
                            </div>
                        </div>
                    </div>
                    <span>Mô tả sản phẩm</span>
                    <div className="newProduct-desc">
                        <span>Mô tả sản phẩm</span>
                        <textarea
                            value={description}
                            onChang={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="newProduct-btn">
                        <button onClick={handleCancle}>Hủy</button>
                        <button onClick={handleSubmit}>Lưu</button>
                    </div>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default NewProduct;

import { Crown, GalleryAdd } from "iconsax-react";
import React, { useContext, useState } from "react";
import "./newAuction.scss";
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
import Classify from "../../Components/Classify/Classify";
import axios from "./../../hooks/axios";
import { toast } from "react-toastify";

// Register the plugins
registerPlugin(
    FilePondPluginFileValidateSize,
    FilePondPluginImageValidateSize,
    FilePondPluginFileEncode,
    FilePondPluginImagePreview,
    FilePondPluginImageResize
);

const NewAuction = () => {
    const [active, setActive] = useState(1);
    const { user } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [files, setFiles] = useState([]);
    const [startingPrice, setStartingPrice] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [time, setTime] = useState(1);
    const [auctionHistory, setAuctionHistory] = useState();

    const setClick = (i) => {
        setActive(i);
        setTime(i);
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

    const addAuctionHandler = async () => {
        try {
            const img = getImageData(files);
            var endTime = new Date();
            endTime.setDate(endTime.getDate() + time);
            const data = {
                buyer: user._id,
                product: {
                    name,
                    description,
                    img,
                    quantity: quantity,
                },
                startingPrice: startingPrice,
                currentPrice: startingPrice,
                endTime,
            };
            await axios.post("/auction/create", data);
            toast.success(
                "Sản phẩm phẩm đã được đưa lên sàn đấu giá thành công"
            );
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div className="newAuction">
            <span>Thông tin sản phẩm mong muốn đấu giá</span>
            <div className="newAuction-name">
                <span>Tên sản phẩm</span>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="">
                <span>Hình ảnh liên quan</span>
                <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    maxFiles={3}
                    maxFileSize="3MB"
                    //server="/api"
                    name="img"
                    labelIdle="Thêm tối đa 3 ảnh cho sản phẩm"
                />
                {/* <div className="newAuction-imgBox">
                    <img src="../Img/iphone14.png" alt="" />
                    <img src="../Img/iphone14.png" alt="" />
                    <img src="../Img/iphone14.png" alt="" />
                    <button>
                        <GalleryAdd />
                        Thêm hình ảnh
                    </button>
                </div> */}
            </div>
            {/* <div className="newAuction-brand">
                <span>Thương hiệu</span>
                <input type="text" />
            </div>
            <div className="newAuction-wish">
                <span>Size mong muốn</span>
                <div className="newAuction-wishInput">
                    <input type="text" />
                </div>
            </div>
            <div className="newAuction-wish">
                <span>Màu sắc mong muốn</span>
                <div className="newAuction-wishInput">
                    <input type="text" />
                </div>
            </div> */}
            <div className="newAuction-wish">
                <span>Số lượng mong muốn</span>
                <div className="newAuction-wishInput">
                    <input
                        type="number"
                        min={0}
                        required
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
            </div>
            <div className="newAuction-auctionPrice">
                <span>Mức đấu giá khởi điểm</span>
                <div className="newAuction-price">
                    <div className="newAuction-priceInput">
                        <input
                            type="number"
                            min={0}
                            value={startingPrice}
                            onChange={(e) => setStartingPrice(e.target.value)}
                            required
                        />
                        <Crown variant="Bold" className="active" />
                    </div>
                </div>
            </div>
            <span>Mô tả về sản phẩm mong muốn</span>
            <div className="newAuction-desc">
                <span>Mô tả sản phẩm</span>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <span>Thời gian của cuộc đấu giá</span>
            {/* <div className="newAuction-date">
                <span>Ngày bắt đầu</span>
                <div className="newAuction-dateInput">
                    <input type="date" value={new Date()} />
                </div>
            </div> */}
            {/* <div className="newAuction-time">
                <span>Thời gian bắt đầu</span>
                <div className="newAuction-timeBox">
                    <input type="number" />
                    <span>giờ</span>
                    <input type="number" />
                    <span>phút</span>
                </div>
            </div> */}
            <div className="newAuction-timeTake">
                <span>Khoảng thời gian đấu giá</span>
                <div className="newAuction-timeTakeBox">
                    <span
                        className={active === 1 ? "active active-border" : ""}
                        onClick={() => setClick(1)}
                    >
                        1 ngày
                    </span>
                    <span
                        className={active === 3 ? "active active-border" : ""}
                        onClick={() => setClick(3)}
                    >
                        3 ngày
                    </span>
                    <span
                        className={active === 7 ? "active active-border" : ""}
                        onClick={() => setClick(7)}
                    >
                        1 tuần
                    </span>
                </div>
            </div>
            <div className="newAuction-btn">
                <button>Hủy</button>
                <button onClick={addAuctionHandler}>Lưu</button>
            </div>
        </div>
    );
};

export default NewAuction;

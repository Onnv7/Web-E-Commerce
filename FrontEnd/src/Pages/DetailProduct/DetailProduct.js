import { Crown, GalleryAdd } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './detailProduct.scss';

const DetailProduct = () => {
    const navigate = useNavigate();
    const handleClose = () => {
        navigate('/seller');
    };
    return (
        <div>
            <Navbar style="seller" />
            <hr style={{ width: '100%', margin: 0 }} />
            <div className="detailProduct">
                <span>Chi tiết sản phẩm</span>
                <div className="detailProduct-box">
                    <span>Thông tin chi tiết</span>
                    <div className="detailProduct-name">
                        <span>Tên sản phẩm</span>
                        <input type="text" />
                    </div>
                    <div className="detailProduct-img">
                        <span>Hình ảnh sản phẩm</span>
                        <div className="detailProduct-imgBox">
                            <img src="../../Img/iphone14.png" alt="" />
                            <img src="../../Img/iphone14.png" alt="" />
                            <img src="../../Img/iphone14.png" alt="" />
                        </div>
                    </div>
                    <div className="detailProduct-brand">
                        <span>Ngành hàng / Nhãn hiệu</span>
                        <input type="text" />
                    </div>
                    <div className="detailProduct-size">
                        <span>Size</span>
                        <div className="detailProduct-sizeBox">
                            <span>512GB</span>
                            <span>128GB</span>
                        </div>
                    </div>
                    <div className="detailProduct-size">
                        <span>Màu sắc</span>
                        <div className="detailProduct-sizeBox">
                            <span>Vàng</span>
                            <span>Cam</span>
                        </div>
                    </div>
                    <div className="detailProduct-quantity">
                        <span>Kho hàng</span>
                        <div className="detailProduct-quantityInput">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="detailProduct-price">
                        <span>Giá bán</span>
                        <div className="detailProduct-priceBox">
                            <div className="detailProduct-priceInput">
                                <input type="text" />
                                <Crown variant="Bold" className="active" />
                            </div>
                        </div>
                    </div>
                    <span>Mô tả sản phẩm</span>
                    <div className="detailProduct-desc">
                        <span>Mô tả sản phẩm</span>
                        <textarea></textarea>
                    </div>
                    <div className="detailProduct-btn">
                        <button onClick={handleClose}>Đóng</button>
                    </div>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default DetailProduct;

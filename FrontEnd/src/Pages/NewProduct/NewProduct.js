import { Crown, GalleryAdd } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './newProduct.scss';

const NewProduct = () => {
    const navigate = useNavigate();
    const handleCancle = () => {
        navigate('/seller');
    };
    return (
        <div>
            <Navbar style="seller" />
            <hr style={{ width: '100%', margin: 0 }} />
            <div className="newProduct">
                <span>Thêm sản phẩm</span>
                <div className="newProduct-box">
                    <span>Thông tin chi tiết</span>
                    <div className="newProduct-name">
                        <span>Tên sản phẩm</span>
                        <input type="text" />
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
                        <input type="text" />
                    </div>
                    <div className="newProduct-size">
                        <span>Size</span>
                        <div className="newProduct-sizeBox">
                            <span>512GB</span>
                            <span>128GB</span>
                            <button>Thêm size</button>
                        </div>
                    </div>
                    <div className="newProduct-size">
                        <span>Màu sắc</span>
                        <div className="newProduct-sizeBox">
                            <span>Vàng</span>
                            <span>Cam</span>
                            <button>Thêm màu sắc</button>
                        </div>
                    </div>
                    <div className="newProduct-quantity">
                        <span>Kho hàng</span>
                        <div className="newProduct-quantityInput">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="newProduct-price">
                        <span>Giá bán</span>
                        <div className="newProduct-priceBox">
                            <div className="newProduct-priceInput">
                                <input type="text" />
                                <Crown variant="Bold" className="active" />
                            </div>
                        </div>
                    </div>
                    <span>Mô tả sản phẩm</span>
                    <div className="newProduct-desc">
                        <span>Mô tả sản phẩm</span>
                        <textarea></textarea>
                    </div>
                    <div className="newProduct-btn">
                        <button onClick={handleCancle}>Hủy</button>
                        <button>Lưu</button>
                    </div>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default NewProduct;

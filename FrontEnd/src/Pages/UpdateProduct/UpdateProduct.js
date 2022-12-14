import { Crown, GalleryAdd } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './updateProduct.scss';

const UpdateProduct = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/seller');
    };
    return (
        <div>
            <Navbar style="seller" />
            <hr style={{ width: '100%', margin: 0 }} />
            <div className="updateProduct">
                <span>Cập Nhật sản phẩm</span>
                <div className="updateProduct-box">
                    <span>Thông tin chi tiết</span>
                    <div className="updateProduct-name">
                        <span>Tên sản phẩm</span>
                        <input type="text" />
                    </div>
                    <div className="updateProduct-img">
                        <span>Hình ảnh sản phẩm</span>
                        <div className="updateProduct-imgBox">
                            <img src="../../Img/iphone14.png" alt="" />
                            <img src="../../Img/iphone14.png" alt="" />
                            <img src="../../Img/iphone14.png" alt="" />
                            <button>
                                <GalleryAdd />
                                Thêm hình ảnh
                            </button>
                        </div>
                    </div>
                    <div className="updateProduct-brand">
                        <span>Ngành hàng / Nhãn hiệu</span>
                        <input type="text" />
                    </div>
                    <div className="updateProduct-size">
                        <span>Size</span>
                        <div className="updateProduct-sizeBox">
                            <span>512GB</span>
                            <span>128GB</span>
                            <button>Thêm size</button>
                        </div>
                    </div>
                    <div className="updateProduct-size">
                        <span>Màu sắc</span>
                        <div className="updateProduct-sizeBox">
                            <span>Vàng</span>
                            <span>Cam</span>
                            <button>Thêm màu sắc</button>
                        </div>
                    </div>
                    <div className="updateProduct-quantity">
                        <span>Kho hàng</span>
                        <div className="updateProduct-quantityInput">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="updateProduct-price">
                        <span>Giá bán</span>
                        <div className="updateProduct-priceBox">
                            <div className="updateProduct-priceInput">
                                <input type="text" />
                                <Crown variant="Bold" className="active" />
                            </div>
                        </div>
                    </div>
                    <span>Mô tả sản phẩm</span>
                    <div className="updateProduct-desc">
                        <span>Mô tả sản phẩm</span>
                        <textarea></textarea>
                    </div>
                    <div className="updateProduct-btn">
                        <button onClick={handleBack}>Hủy</button>
                        <button>Xóa</button>
                        <button>Cập Nhật</button>
                    </div>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default UpdateProduct;

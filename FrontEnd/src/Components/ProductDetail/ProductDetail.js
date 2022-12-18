import React, { useEffect, useState } from 'react';
import './productDetail.scss';
import axios from './../../hooks/axios.js';
const ProductDetail = ({ id }) => {
    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/products/${id}`);
            setProduct(data);
        };
        fetchData();
    }, [id]);
    return (
        product && (
            <div className="productDetail">
                <div className="productDetail-container">
                    <h1>Chi tiết sản phẩm</h1>
                    <div className="productDetail-list">
                        <div className="productDetail-title">
                            <span>Nhãn hiệu: {product.brand}</span>
                            <span>Tên sản phẩm: {product.name}</span>
                            {/* <span>Dung lượng:</span>
                        <span>Màu Sắc:</span> */}
                            <span>Xuất xứ:</span>
                            {/* <span>Kho hàng:</span> */}
                        </div>
                        {/* <div className="productDetail-title">
                        <span>Nhãn hiệu</span>
                        <span>Tên sản phẩm</span>
                        <span>Dung lượng</span>
                        <span>Màu Sắc</span>
                        <span>Xuất xứ</span>
                        <span>Kho hàng</span>
                    </div> */}
                    </div>
                    <h1>Mô tả sản phẩm</h1>
                    <span>Đặc điểm mô tả:</span>
                    <p>{product.description}</p>
                    {/* <ul className="productDetail-decription">
                    <li className="decription-item">
                        iPhone 14 Pro Max sở hữu màn hình đục lỗ dạng "viên
                        thuốc" mới.
                    </li>
                    <li className="decription-item">
                        Sử dụng tấm nền Super Retina XDR OLED 6.7 inch, mật độ
                        điểm ảnh 460 ppi và hỗ trợ công nghệ ProMotion 120 Hz.
                    </li>
                    <li className="decription-item">
                        Máy được trang bị con chip Apple A16 dựa trên tiến trình
                        4 nm cùng với 6 GB RAM.
                    </li>
                    <li className="decription-item">
                        Sở hữu cụm 3 camera cải tiến gồm camera chính 48 MP,
                        camera góc siêu rộng 12 MP, camera tele 12 MP với khả
                        năng zoom quang 3x, cũng như cảm biến 3D LiDAR để đo
                        chiều sâu. Đồng thời, máy cũng đi kèm camera selfie 12
                        MP.
                    </li>
                    <li className="decription-item">Pin với 4.323 mAh.</li>
                </ul> */}
                    {/* <span>Tính năng:</span>
                    <ul className="productDetail-decription">
                        <li className="decription-item">
                            iPhone 14 Pro Max sở hữu màn hình đục lỗ dạng "viên
                            thuốc" mới.
                        </li>
                        <li className="decription-item">
                            Sử dụng tấm nền Super Retina XDR OLED 6.7 inch, mật
                            độ điểm ảnh 460 ppi và hỗ trợ công nghệ ProMotion
                            120 Hz.
                        </li>
                        <li className="decription-item">
                            Máy được trang bị con chip Apple A16 dựa trên tiến
                            trình 4 nm cùng với 6 GB RAM.
                        </li>
                        <li className="decription-item">
                            Sở hữu cụm 3 camera cải tiến gồm camera chính 48 MP,
                            camera góc siêu rộng 12 MP, camera tele 12 MP với
                            khả năng zoom quang 3x, cũng như cảm biến 3D LiDAR
                            để đo chiều sâu. Đồng thời, máy cũng đi kèm camera
                            selfie 12 MP.
                        </li>
                        <li className="decription-item">Pin với 4.323 mAh.</li>
                    </ul> */}
                </div>
            </div>
        )
    );
};

export default ProductDetail;

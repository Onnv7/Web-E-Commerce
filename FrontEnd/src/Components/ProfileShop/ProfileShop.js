import { GalleryEdit } from 'iconsax-react';
import React from 'react';
import './profileShop.scss';

const ProfileShop = () => {
    return (
        <div className="profileShop">
            <div className="profileShop-container">
                <span>Hồ Sơ Shop</span>
                <div className="profileShop-img">
                    <img src="../Img/1-tgdd.jpg" alt="" />
                    <GalleryEdit className="profileShop-icon" size={44} />
                </div>
                <div className="profileShop-name">
                    <span>Tên Shop</span>
                    <input type="text" />
                </div>
                <div className="profileShop-product">
                    <span>Ngành hàng</span>
                    <div className="profleShop-productList">
                        <span>Điện thoại</span>
                        <span>Trang sức</span>
                        <span>Thêm ngành hàng</span>
                    </div>
                </div>
                <div className="profileShop-product">
                    <span>Chuyên ngành</span>
                    <div className="profleShop-productList">
                        <span>Óp lưng</span>
                        <span>Nhẫn</span>
                        <span>Thêm chuyên ngành</span>
                    </div>
                </div>
                <button>Cập nhật thông tin Shop</button>
            </div>
        </div>
    );
};

export default ProfileShop;

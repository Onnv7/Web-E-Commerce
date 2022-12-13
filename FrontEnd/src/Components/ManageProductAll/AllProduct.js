import { Crown } from 'iconsax-react';
import React from 'react';

const AllProduct = () => {
    return (
        <div className="manageProduct-List">
            <div className="manageProduct-user">
                <span>nguoimua1</span>
                <span>Mã đơn: abcxyz123321</span>
            </div>
            <div className="manageProduct-item">
                <div className="manageProduct-content">
                    <div className="manageProduct-box">
                        <div className="manageProduct-product">
                            <img src="../Img/iphone14.png" alt="" />
                            <div className="manageProduct-info">
                                <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                                <div className="manageProduct-infoType">
                                    <span>Size: 512G</span>
                                    <span>Màu sắc: Deep Purple</span>
                                </div>
                            </div>
                        </div>
                        <span>1</span>
                    </div>
                    <div className="manageProduct-box">
                        <div className="manageProduct-product">
                            <img src="../Img/iphone14.png" alt="" />
                            <div className="manageProduct-info">
                                <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                                <div className="manageProduct-infoType">
                                    <span>Size: 512G</span>
                                    <span>Màu sắc: Deep Purple</span>
                                </div>
                            </div>
                        </div>
                        <span>1</span>
                    </div>
                </div>
                <span>
                    1600 <Crown variant="Bold" size={20} />
                </span>
                <span>Chờ xác nhận</span>
                <div className="manageProduct-comfirm">
                    <span>Xác nhận đơn hàng</span>
                    <span>Hủy đơn hàng</span>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;

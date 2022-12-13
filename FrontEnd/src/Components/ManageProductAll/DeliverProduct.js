import { Back, Crown } from 'iconsax-react';
import React, { useState } from 'react';
import './deliverProduct.scss';

const DeliverProduct = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
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
                        1600 <Crown variant="Bold" />
                    </span>
                    <span>Đang giao</span>
                    <div className="manageProduct-comfirm">
                        <span onClick={() => setOpen(true)}>Chi tiết đơn hàng</span>
                    </div>
                </div>
            </div>
            {open && (
                <div className="deliverProduct-modal">
                    <div className="deliverProduct-modalContainer">
                        <span>Chi tiết đơn hàng</span>
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
                                        <div className="deliverProduct-modalCount">
                                            <span>Số lượng</span>
                                            <input type="text" value={1} />
                                        </div>
                                    </div>
                                </div>
                                <span>
                                    1600 <Crown variant="Bold" />
                                </span>
                            </div>
                        </div>
                        <div className="deliverProduct-modalBox">
                            <span>Thông tin người nhận và địa chỉ nhận hàng</span>
                            <div className="waitProduct-modalContent">
                                <span>Họ và tên: Nguyễn Tiến Phát</span>
                                <span>Số điện thoại: Nguyễn Tiến Phát</span>
                                <span>Địa chỉ: Nguyễn Tiến Phát</span>
                            </div>
                        </div>
                        <div className="deliverProduct-modalFooter">
                            <span>Đơn vị vận chuyển</span>
                            <img src="../Img/logo.png" alt="" />
                        </div>
                        <button onClick={() => setOpen(false)}>
                            <Back size={32} />
                            Quay Lại
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeliverProduct;

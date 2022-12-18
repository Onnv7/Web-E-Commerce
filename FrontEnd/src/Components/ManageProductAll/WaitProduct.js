import { Back, Crown } from 'iconsax-react';
import React, { useState } from 'react';
import './waitProduct.scss';

const WaitProduct = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setOpen1(true);
    };
    const handleChange = () => {
        setOpen2(true);
        setOpen1(false);
    };
    const handleBack = () => {
        setOpen1(true);
        setOpen2(false);
    };
    const handleClose = () => {
        setOpen(false);
        setOpen1(false);
        setOpen2(false);
    };
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
                    <span>Chờ xác nhận</span>
                    <div className="manageProduct-comfirm">
                        <span onClick={handleOpen}>Chuẩn bị đơn hàng</span>
                    </div>
                </div>
            </div>
            {open && (
                <div className="waitProduct-modal">
                    {open1 && (
                        <div className="waitProduct-modalContainer">
                            <span>Chuẩn bị đơn hàng</span>
                            <div className="waitProduct-modalBox">
                                <div className="waitProduct-modalTitle">
                                    <span>Địa chỉ kho hàng / lấy hàng</span>
                                    <span onClick={handleChange}>Thay đổi</span>
                                </div>
                                <div className="waitProduct-modalContent">
                                    <span>Họ và tên: Nguyễn Tiến Phát</span>
                                    <span>Số điện thoại: Nguyễn Tiến Phát</span>
                                    <span>Địa chỉ: Nguyễn Tiến Phát</span>
                                </div>
                            </div>
                            <div className="waitProduct-modalBtn">
                                <button onClick={handleClose}>
                                    <Back size={32} />
                                    Quay lại
                                </button>
                                <button onClick={handleClose}>Hoàn Tất</button>
                            </div>
                            <span>
                                Xe vận chuyển sẽ đến lấy hàng trong ngày khi bạn hoàn tất quá trình chuẩn bị đơn hàng.
                            </span>
                        </div>
                    )}
                    {open2 && (
                        <div className="waitProduct-modalChangeContainer">
                            <span>Thay đổi địa chỉ kho hàng / lấy hàng</span>
                            <div className="waitProduct-modalChangeBox">
                                <span>Địa chỉ kho hàng / lấy hàng</span>

                                <div className="waitProduct-modalContent">
                                    <span>Họ và tên: Nguyễn Tiến Phát</span>
                                    <span>Số điện thoại: Nguyễn Tiến Phát</span>
                                    <span>Địa chỉ: Nguyễn Tiến Phát</span>
                                </div>
                            </div>
                            <div className="waitProduct-modalChangeBox">
                                <span>Địa chỉ kho hàng / lấy hàng</span>

                                <div className="waitProduct-modalContent">
                                    <span>Họ và tên: Nguyễn Tiến Phát</span>
                                    <span>Số điện thoại: Nguyễn Tiến Phát</span>
                                    <span>Địa chỉ: Nguyễn Tiến Phát</span>
                                </div>
                            </div>
                            <div className="waitProduct-modalChangeBox">
                                <span>Địa chỉ kho hàng / lấy hàng</span>

                                <div className="waitProduct-modalContent">
                                    <span>Họ và tên: Nguyễn Tiến Phát</span>
                                    <span>Số điện thoại: Nguyễn Tiến Phát</span>
                                    <span>Địa chỉ: Nguyễn Tiến Phát</span>
                                </div>
                            </div>
                            <div className="waitProduct-modalBtn">
                                <button onClick={handleBack}>
                                    <Back size={32} />
                                    Quay lại
                                </button>
                                <button onClick={handleClose}>Hoàn Tất</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default WaitProduct;

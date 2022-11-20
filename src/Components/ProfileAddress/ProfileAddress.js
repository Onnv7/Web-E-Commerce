import React from 'react';
import './profileAddress.scss';

const ProfileAddress = () => {
    return (
        <div className="profileAddress">
            <div className="profileAddress-container">
                <div className="profileAddress-title">
                    <span>Địa chỉ</span>
                    <button>Thêm địa chỉ mới</button>
                </div>
                <div className="profileAddress-content">
                    <span className="profileAddress-item">Địa chỉ 1</span>
                    <div className="profileAddress-name">
                        <span className="profileAddress-text">Họ và tên: Nguyễn Tiến Phát</span>
                        <span className="profileAddress-text">Số điện thoại: 0999999999</span>
                    </div>
                    <span className="profileAddress-text">
                        Chi tiết: 450/8 Tô Ngọc Vân, Phường Tam Phú, TP Thủ Đức, TP Hồ Chí Minh
                    </span>
                    <div className="profileAddress-btn">
                        <button>Cập nhật</button>
                        <button>Xóa</button>
                    </div>
                </div>
                <div className="profileAddress-content">
                    <span className="profileAddress-item">Địa chỉ 1</span>
                    <div className="profileAddress-name">
                        <span className="profileAddress-text">Họ và tên: Nguyễn Tiến Phát</span>
                        <span className="profileAddress-text">Số điện thoại: 0999999999</span>
                    </div>
                    <span className="profileAddress-text">
                        Chi tiết: 450/8 Tô Ngọc Vân, Phường Tam Phú, TP Thủ Đức, TP Hồ Chí Minh
                    </span>
                    <div className="profileAddress-btn">
                        <button>Cập nhật</button>
                        <button>Xóa</button>
                    </div>
                </div>
            </div>
            <div className="addressModal none">
                <div className="addressModal-container">
                    <span>Thêm địa chỉ mới</span>
                    <div className="addressModal-box">
                        <div className="addressModal-boxList">
                            <span>Họ và tên</span>
                            <input type="text" defaultValue="họ tên" />
                        </div>
                        <div className="addressModal-boxList">
                            <span>Số điện thoại</span>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="addressModal-boxList">
                        <span>Tỉnh / Thành phố, Quận / Huyệnh, Phường / Xã</span>
                        <input type="text" />
                    </div>
                    <div className="addressModal-boxList">
                        <span>Địa chỉ cụ thể</span>
                        <input type="text" />
                    </div>
                    <div className="addressModal-btn">
                        <button>Huỷ</button>
                        <button>Thêm địa chỉ</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAddress;

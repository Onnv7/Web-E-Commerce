import { CalendarEdit, Edit2 } from 'iconsax-react';
import React from 'react';
import './profileInfo.scss';
import DatePicker from 'react-datepicker';

const ProfileInfo = () => {
    return (
        <div className="profileInfo">
            <div className="profileInfo-container">
                <h1>Hồ sơ cá Nhân</h1>
                <div className="profileInfo-box">
                    <div className="profileInfo-user">
                        <div className="user-title">
                            <span>Tài khoản:</span>
                            <span>Họ và tên:</span>
                            <span>Ngày sinh:</span>
                            <span>Giới tính:</span>
                            <span>Email:</span>
                            <span>Số điện thoại:</span>
                        </div>
                        <div className="user-box">
                            <div className="user-input">
                                <input type="text" value="thegioididong2022" />
                                <Edit2 />
                            </div>
                            <div className="user-input">
                                <input type="text" value="Thế giới di động" />
                                <Edit2 />
                            </div>
                            <div className="user-birth">
                                <input type="date" value="2002-06-20" />
                                <CalendarEdit />
                            </div>
                            <div className="user-sex">
                                <div className="sex-list">
                                    <input type="radio" />
                                    <span>Nam</span>
                                </div>
                                <div className="sex-list">
                                    <input type="radio" />
                                    <span>Nữ</span>
                                </div>
                                <div className="sex-list">
                                    <input type="radio" />
                                    <span>Khác</span>
                                </div>
                            </div>
                            <div className="user-input">
                                <input type="email" value="thegioididong@gmail.com" />
                                <Edit2 />
                            </div>
                            <div className="user-input">
                                <input type="text" value="0909999999" />
                                <Edit2 />
                            </div>
                        </div>
                    </div>
                    <button>Lưu thay đổi</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;

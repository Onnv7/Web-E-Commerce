import { Facebook, Judge, Lock, Star1, User } from 'iconsax-react';
import React from 'react';
import './register.scss';

const Register = () => {
    return (
        <div className="regis">
            <div className="regis-header">
                <div className="regis-title">
                    <Judge variant="Bold" className="regis-title__icon" />
                    <span>Auction Page</span>
                </div>
                <span className="regis-help">Bạn cần hỗ trợ ?</span>
            </div>
            <div className="regis-body">
                <div className="regis-form">
                    <div className="regis-img">
                        <Judge variant="Bold" className="img-icon" />
                        <div className="list-star">
                            <Star1 variant="Bold" className="star" />
                            <Star1 variant="Bold" className="star" />
                            <Star1 variant="Bold" className="star" />
                            <Star1 variant="Bold" className="star" />
                            <Star1 variant="Bold" className="star" />
                        </div>
                    </div>
                    <div className="regis-formBody">
                        <div className="regis-formTitle">
                            <span className="regis-formTitle__log">Đăng Nhập</span>
                            <span className="regis-formTitle__regis">Đăng Ký</span>
                        </div>
                        <div className="formControl">
                            <div className="formControl-User">
                                <User variant="Bold" className="formControl-User__icon" />
                                <span>Tài khoản / Địa chỉ Email</span>
                            </div>
                            <input type="text" className="formControl-input" />
                        </div>
                        <div className="formControl">
                            <div className="formControl-User">
                                <Lock variant="Bold" className="formControl-User__icon" />
                                <span>Mật khẩu</span>
                            </div>
                            <input type="text" className="formControl-input" />
                        </div>
                        <div className="formControl">
                            <div className="formControl-User">
                                <Lock variant="Bold" className="formControl-User__icon" />
                                <span>Xác nhận mật khẩu</span>
                            </div>
                            <input type="text" className="formControl-input" />
                        </div>
                        <button className="regis-sumbitBtn">Đăng Nhập</button>
                        <div className="regis-formHelp">
                            <div className="regis-remember">
                                <input type="checkbox" />
                                <span>Nhớ mật khẩu</span>
                            </div>
                            <span className="regis-forgot">Quên mật khẩu ?</span>
                        </div>
                        <div className="regis-formRegis">
                            <span>Bạn đã có tài khoản ?</span>
                            <span>Đăng nhập ngay</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="regis-listDev">
                <div className="itemDev">
                    <Facebook variant="Bold" />
                    <span>Leader & BA</span>
                </div>
                <div className="itemDev">
                    <Facebook variant="Bold" />
                    <span>Front-end Developer</span>
                </div>
                <div className="itemDev">
                    <Facebook variant="Bold" />
                    <span>Back-end Developer</span>
                </div>
                <div className="itemDev">
                    <Facebook variant="Bold" />
                    <span>UI/UX Designer & QC</span>
                </div>
            </div>
        </div>
    );
};

export default Register;

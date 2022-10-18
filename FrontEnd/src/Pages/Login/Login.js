import { Facebook, Judge, Lock, Star1, User } from 'iconsax-react';
import React from 'react';
import './login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="login-header">
                <div className="login-title">
                    <Judge variant="Bold" className="login-title__icon" />
                    <span>Auction Page</span>
                </div>
                <span className="login-help">Bạn cần hỗ trợ ?</span>
            </div>
            <div className="login-body">
                <div className="login-form">
                    <div className="login-img">
                        <Judge variant="Bold" className="img-icon" />
                        <div className="list-star">
                            <Star1 variant="Bold" className="star" />
                            <Star1 variant="Bold" className="star" />
                            <Star1 variant="Bold" className="star" />
                            <Star1 variant="Bold" className="star" />
                            <Star1 variant="Bold" className="star" />
                        </div>
                    </div>
                    <div className="login-formBody">
                        <div className="login-formTitle">
                            <span className="login-formTitle__log">Đăng Nhập</span>
                            <span className="login-formTitle__regis">Đăng Ký</span>
                        </div>
                        <div className="formControl">
                            <div className="formControl-User">
                                <User variant="Bold" className="formControl-User__icon" />
                                <span>Tài Khoản / Địa chỉ Email</span>
                            </div>
                            <input type="text" className="formControl-input" />
                        </div>
                        <div className="formControl">
                            <div className="formControl-User">
                                <Lock variant="Bold" className="formControl-User__icon" />
                                <span>Mật Khẩu</span>
                            </div>
                            <input type="text" className="formControl-input" />
                        </div>
                        <button className="login-sumbitBtn">Đăng Nhập</button>
                        <div className="login-formHelp">
                            <div className="login-remember">
                                <input type="checkbox" />
                                <span>Nhớ mật khẩu</span>
                            </div>
                            <span className="login-forgot">Quên mật khẩu ?</span>
                        </div>
                        <div className="login-formRegis">
                            <span>Bạn mới biết đến Auction Page ?</span>
                            <span>Đăng ký ngay</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-listDev">
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

export default Login;

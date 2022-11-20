import { CloseSquare } from 'iconsax-react';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import './login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const gotoHome = () => {
        navigate('/');
    };
    const gotoRegister = () => {
        navigate('/register');
    };

    return (
        <div className="login">
            <div className="login-Container">
                <div className="login-Content">
                    <div className="login-header">
                        <div className="login-title">
                            <span className="login-title__name" onClick={gotoHome}>
                                Trang chủ
                            </span>
                            <span className="login-title__line">|</span>
                            <span className="login-title__name">Hỗ trợ</span>
                        </div>
                        <img src="../Img/logovip.png" alt="" className="login-logo" />
                        <div className="login-title">
                            <span className="login-title__name active">Đăng nhập</span>
                            <span className="login-title__line">|</span>
                            <span className="login-title__name" onClick={gotoRegister}>
                                Đăng Kí
                            </span>
                        </div>
                    </div>
                    <div className="login-body">
                        <div className="login-form">
                            <span className="login-formTitle">Đăng Nhập</span>
                            <div className="formControl-Container">
                                <div className="formControl">
                                    <input type="text" placeholder="Tài Khoản" />
                                    <input type="text" placeholder="Mật khẩu" />
                                    <div className="formControl-Remind wrongPass">
                                        <CloseSquare variant="Bold" className="Remind-icon" />
                                        <span>
                                            Tài khoản hoặc mật khẩu không chính xác. Nếu quên mật khẩu hãy nhấn quên mật
                                            khẩu để đặt lại mật khẩu mới.
                                        </span>
                                    </div>
                                    <button>Đăng Nhập</button>
                                </div>

                                <div className="login-formHelp">
                                    <div className="login-remember">
                                        <input type="checkbox" />
                                        <span>Nhớ mật khẩu</span>
                                    </div>
                                    <span className="login-forgot">Quên mật khẩu ?</span>
                                </div>
                                <div className="login-FormStyle">
                                    <span className="loginForm-line"></span>
                                    <span className="loginForm-name">4TL</span>
                                    <span className="loginForm-line"></span>
                                </div>
                            </div>
                            <div className="login-formRegis">
                                <span>Bạn chưa có tài khoản ?</span>
                                <span onClick={gotoRegister}>Đăng ký ngay tại đây</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;

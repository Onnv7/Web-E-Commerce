import { CloseSquare } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import './register.scss';

const Register = () => {
    const navigate = useNavigate();

    const gotoHome = () => {
        navigate('/');
    };
    const gotoLogin = () => {
        navigate('/login');
    };
    return (
        <div className="register">
            <div className="register-Container">
                <div className="register-Content">
                    <div className="register-header">
                        <div className="register-title">
                            <span className="register-title__name" onClick={gotoHome}>
                                Trang chủ
                            </span>
                            <span className="register-title__line">|</span>
                            <span className="register-title__name">Hỗ trợ</span>
                        </div>
                        <img src="../Img/logovip.png" alt="" className="register-logo" />
                        <div className="register-title">
                            <span className="register-title__name" onClick={gotoLogin}>
                                Đăng nhập
                            </span>
                            <span className="register-title__line">|</span>
                            <span className="register-title__name active">Đăng Kí</span>
                        </div>
                    </div>
                    <div className="register-body">
                        <div className="register-form">
                            <span className="register-formTitle">Đăng Ký</span>
                            <div className="formControl-Container">
                                <div className="formControl">
                                    <div className="formControl-account">
                                        <input type="text" placeholder="Tài Khoản" />
                                        <div className="formControl-Remind">
                                            <CloseSquare variant="Bold" />
                                            <span>Tài Khoản đã tồn tại</span>
                                        </div>
                                    </div>
                                    <div className="formControl-account">
                                        <input type="text" placeholder="Mật khẩu" />
                                        <div className="formControl-Remind">
                                            <CloseSquare variant="Bold" />
                                            <span>Mật khẩu phải có từ 8 kí tự trở lên</span>
                                        </div>
                                    </div>
                                    <div className="formControl-account">
                                        <input type="text" placeholder="Nhập lại mật khẩu" />
                                        <div className="formControl-Remind">
                                            <CloseSquare variant="Bold" />
                                            <span>Mật khẩu không trùng khớp</span>
                                        </div>
                                    </div>
                                    <div className="formControl-policy">
                                        <div className="register-check">
                                            <input type="checkbox" />
                                            <span>
                                                Để tiếp tục đăng ký bạn cần chấp nhận các điều khoản khi sử dụng dịch vụ
                                                của chúng tôi.
                                            </span>
                                        </div>
                                    </div>
                                    <button>Đăng kí</button>
                                </div>
                                <div className="register-FormStyle">
                                    <span className="registerForm-line"></span>
                                    <span className="registerForm-name">4TL</span>
                                    <span className="registerForm-line"></span>
                                </div>
                            </div>
                            <div className="register-formLog">
                                <span>Bạn đã có tài khoản ?</span>
                                <span onClick={gotoLogin}>Đăng nhập tại đây</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;

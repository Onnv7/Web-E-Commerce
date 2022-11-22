import { CloseSquare } from 'iconsax-react';
import React, { useEffect } from 'react';
import Footer from '../../Components/Footer/Footer';
import './login.scss';
import { AuthContext } from '../../context/AuthContext.js';
import axios from '../../hooks/axios.js';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });
    const [errorShow, setErrorShow] = useState('error');

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: 'LOGIN_START' });
        try {
            //console.log("POST LOGIN")
            const res = await axios.post('/auth/login', credentials, { withCredentials: true });
            //const res = await axios.get("/cookie");
            // console.log("🚀 ~ file: Login.js ~ line 29 ~ handleClick ~ res", res)

            dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details });
            navigate('/');
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
            setErrorShow('');
        }
    };
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
                                    <input type="text" placeholder="Tài Khoản" id="username" onChange={handleChange} />
                                    <input type="text" placeholder="Mật khẩu" id="password" onChange={handleChange} />
                                    <div className={`formControl-Remind ${errorShow}`}>
                                        <CloseSquare variant="Bold" className="Remind-icon" />
                                        <span>
                                            Tài khoản hoặc mật khẩu không chính xác. Nếu quên mật khẩu hãy nhấn quên mật
                                            khẩu để đặt lại mật khẩu mới.
                                        </span>
                                    </div>
                                    <button onClick={handleClick}>Đăng Nhập</button>
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

import { CloseSquare } from "iconsax-react";
import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import "./login.scss";
import { AuthContext } from "../../context/AuthContext";
import axios from "../../hooks/axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });
    const [errorShow, setErrorShow] = useState("error");

    const { dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const { data } = await axios.post("/auth/login", credentials, {
                withCredentials: true,
            });
            console.log(data);
            if (data.img === null) {
            }
            if (data.role === "admin") {
                Cookies.set("userInfo", JSON.stringify(data));
                dispatch({ type: "LOGIN_SUCCESS", payload: data });
                navigate("/");
            } else {
                alert("Bạn không có quyền admin");
            }
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
            setErrorShow("");
        }
    };
    return (
        <div className="login">
            <div className="login-Container">
                <div className="login-Content">
                    <div className="login-header">
                        <div className="login-title">
                            <img
                                src="../Img/logovip.png"
                                alt=""
                                className="login-logo"
                            />
                            <span className="login-title__name">Admin</span>
                        </div>
                    </div>
                    <div className="login-body">
                        <div className="login-form">
                            <span className="login-formTitle">Đăng Nhập</span>
                            <div className="formControl-Container">
                                <div className="formControl">
                                    <input
                                        type="text"
                                        placeholder="Tài Khoản"
                                        id="username"
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Mật khẩu"
                                        id="password"
                                        onChange={handleChange}
                                    />
                                    <div
                                        className={`formControl-Remind ${errorShow}`}
                                    >
                                        <CloseSquare
                                            variant="Bold"
                                            className="Remind-icon"
                                        />
                                        <span>
                                            Tài khoản hoặc mật khẩu không chính
                                            xác. Nếu quên mật khẩu hãy nhấn quên
                                            mật khẩu để đặt lại mật khẩu mới.
                                        </span>
                                    </div>
                                    <button onClick={handleClick}>
                                        Đăng Nhập
                                    </button>
                                </div>
                                <div className="login-FormStyle">
                                    <span className="loginForm-line"></span>
                                    <span className="loginForm-name">4TL</span>
                                    <span className="loginForm-line"></span>
                                </div>
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

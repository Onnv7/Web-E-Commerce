import { CloseSquare } from "iconsax-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { toast } from "react-toastify";
import axios from "../../hooks/axios.js";
import "./register.scss";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const navigate = useNavigate();

    const gotoHome = () => {
        navigate("/");
    };
    const gotoLogin = () => {
        navigate("/login");
    };
    function checkTextBox() {
        if (username && password && passwordConfirm) {
            return true;
        }
        return false;
    }
    async function isExistedUserName(username) {
        const user = await axios.get(`/users/username/${username}`);
        if (user.data === null) {
            return false;
        }
        return true;
    }
    async function registerNewUser(user) {
        try {
            const { data } = await axios.post("/auth/register", user);
        } catch (error) {
            console.error("Error:" + error.message);
        }
    }
    const handleSignUp = async () => {
        if (!checkTextBox()) {
            toast.warn("Please complete all information");
            return;
        } else if (await isExistedUserName(username)) {
            toast.warn(`Existed user ${username}`);
            return;
        } else if (password !== passwordConfirm) {
            toast.error("Wrong password confirm");
            return;
        }
        const user = {
            username,
            password,
        };
        const msg = registerNewUser(user);
        toast.success(msg);
        navigate("/login");
    };
    return (
        <div className="register">
            <div className="register-Container">
                <div className="register-Content">
                    <div className="register-header">
                        <div className="register-title">
                            <span
                                className="register-title__name"
                                onClick={gotoHome}
                            >
                                Trang chủ
                            </span>
                            <span className="register-title__line">|</span>
                            <span className="register-title__name">Hỗ trợ</span>
                        </div>
                        <img
                            src="../Img/logovip.png"
                            alt=""
                            className="register-logo"
                        />
                        <div className="register-title">
                            <span
                                className="register-title__name"
                                onClick={gotoLogin}
                            >
                                Đăng nhập
                            </span>
                            <span className="register-title__line">|</span>
                            <span className="register-title__name active">
                                Đăng Kí
                            </span>
                        </div>
                    </div>
                    <div className="register-body">
                        <div className="register-form">
                            <span className="register-formTitle">Đăng Ký</span>
                            <div className="formControl-Container">
                                <div className="formControl">
                                    <div className="formControl-account">
                                        <input
                                            type="text"
                                            placeholder="Tài Khoản"
                                            onChange={(e) =>
                                                setUsername(e.target.value)
                                            }
                                            value={username}
                                        />
                                        {/* <div className="formControl-Remind">
                                            <CloseSquare variant="Bold" />
                                            <span>Tài Khoản đã tồn tại</span>
                                        </div> */}
                                    </div>
                                    <div className="formControl-account">
                                        <input
                                            type="password"
                                            placeholder="Mật khẩu"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            value={password}
                                        />
                                        {/* <div className="formControl-Remind">
                                            <CloseSquare variant="Bold" />
                                            <span>
                                                Mật khẩu phải có từ 8 kí tự trở
                                                lên
                                            </span>
                                        </div> */}
                                    </div>
                                    <div className="formControl-account">
                                        <input
                                            type="password"
                                            placeholder="Nhập lại mật khẩu"
                                            onChange={(e) =>
                                                setPasswordConfirm(
                                                    e.target.value
                                                )
                                            }
                                            value={passwordConfirm}
                                        />
                                        {/* <div className="formControl-Remind">
                                            <CloseSquare variant="Bold" />
                                            <span>
                                                Mật khẩu không trùng khớp
                                            </span>
                                        </div> */}
                                    </div>
                                    <button onClick={handleSignUp}>
                                        Đăng ký
                                    </button>
                                </div>
                                <div className="register-FormStyle">
                                    <span className="registerForm-line"></span>
                                    <span className="registerForm-name">
                                        4TL
                                    </span>
                                    <span className="registerForm-line"></span>
                                </div>
                            </div>
                            <div className="register-formLog">
                                <span>Bạn đã có tài khoản ?</span>
                                <span onClick={gotoLogin}>
                                    Đăng nhập tại đây
                                </span>
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

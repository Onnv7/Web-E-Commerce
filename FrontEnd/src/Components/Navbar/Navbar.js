import React, { useContext, useState } from "react";
import "./navbar.scss";
import {
    Crown,
    Crown1,
    MessageQuestion,
    Note1,
    Notification,
    User,
} from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const gotoHome = () => {
        navigate("/");
    };
    const gotoLogin = () => {
        navigate("/login");
    };
    const gotoRegister = () => {
        navigate("/register");
    };
    const gotoNote = () => {
        navigate("/profile", { state: { destination: "note" } });
    };
    return (
        <div className="navbar">
            <div className="navContainer">
                <div className="navList">
                    <span
                        className="navItem active navItem--space"
                        onClick={gotoHome}
                    >
                        Trang chủ
                    </span>
                    <span className="navItem navItem--space">Đấu giá</span>
                    <span className="navItem navItem--space">
                        Kênh bán hàng
                    </span>
                    <span
                        className="navItem navItem--space"
                        onClick={gotoLogin}
                    >
                        Đăng Nhập
                    </span>
                    <span className="navItem" onClick={gotoRegister}>
                        Đăng ký
                    </span>
                </div>
                <div className="navList">
                    <div className="navList-money">
                        <span>Số dư: {user.ruby}</span>
                        <Crown variant="Bold" size={24} className="navIcon" />
                    </div>
                    <Note1
                        variant="Bold"
                        className="navIcon"
                        size={24}
                        onClick={gotoNote}
                    />
                    <MessageQuestion
                        variant="Bold"
                        className="navIcon"
                        size={24}
                    />
                    <Notification
                        variant="Bold"
                        className="navIcon"
                        size={24}
                    />
                    <User variant="Bold" className="navIcon" size={24} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

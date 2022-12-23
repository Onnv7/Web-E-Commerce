import React, { useContext, useState } from "react";
import "./navbar.scss";
import {
    Crown,
    Crown1,
    MessageQuestion,
    Note1,
    Notification,
    User,
    Heart,
} from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Cookies from "js-cookie";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";

const Navbar = ({ style }) => {
    const { user, dispatch } = useContext(AuthContext);
    const { contextDispatch } = useContext(StoreContext);
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
    const handleMove = () => {
        navigate("/profile", { state: { destination: "user" } });
    };
    const gotoSell = () => {
        navigate("/seller");
    };
    const logoutHandler = async () => {
        navigate("/login");
        await dispatch({ type: "LOGOUT" });
        await contextDispatch({ type: "LOGOUT" });
        Cookies.remove("userInfo");
    };
    const loginHandler = () => {
        gotoLogin();
    };
    const gotoSeller = () => {
        if (user.role === "seller") {
            navigate("/seller");
        } else {
            navigate("/seller/become");
        }
    };
    const gotoAuction = () => {
        if (user.role === "user") {
            navigate("/auction");
        } else {
            toast.error("Bạn không được vào khu của người dùng");
        }
    };
    return (
        <div className="navbar">
            <div
                className={
                    style === "main" ? "navContainer" : "navContainerFull"
                }
            >
                {style === "main" ? (
                    <div className="navList">
                        <span
                            className="navItem active navItem--space"
                            onClick={gotoHome}
                        >
                            Trang chủ
                        </span>
                        <span
                            className="navItem navItem--space"
                            onClick={gotoAuction}
                        >
                            Đấu giá
                        </span>
                        <span className="navItem" onClick={gotoSeller}>
                            Kênh bán hàng
                        </span>
                    </div>
                ) : (
                    <div className="navListSell">
                        <img src="../../Img/logovip.png" alt="" />
                        <span onClick={gotoSell}>Trang người bán</span>
                    </div>
                )}
                <div className="navList">
                    <div className="navList-money">
                        <span>Số dư: {user?.ruby}</span>
                        <Crown variant="Bold" size={24} className="navIcon" />
                    </div>

                    <Heart
                        variant="Bold"
                        className="navIcon"
                        size={24}
                        onClick={gotoNote}
                    />
                    <div className="navList-user">
                        <img
                            src={user?.imgPath || "/Img/default-user.png"}
                            alt="img"
                        />
                        <span>{user?.username || "Người dùng"}</span>
                        {user ? (
                            <div className="navList-userMenu">
                                <span onClick={handleMove}>
                                    Tài khoản của tôi
                                </span>
                                <span onClick={logoutHandler}>Đăng xuất</span>
                            </div>
                        ) : (
                            <div className="navList-userMenu">
                                <span onClick={loginHandler}>Đăng nhập</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

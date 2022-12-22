import React, { useContext, useEffect, useState } from "react";
import "./navbar.scss";
import { Crown } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Cookies from "js-cookie";
import axios from "./../../hooks/axios";
const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState({});

    const logoutHandler = async () => {
        navigate("/login");
        await dispatch({ type: "LOGOUT" });
        Cookies.remove("userInfo");
    };
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/users/${user._id}`);
            setData(data);
        };
        fetchData();
    }, [user]);

    return (
        <div className="navbar">
            <div className="navContainerFull">
                <div className="navListSell">
                    <img src="../../Img/logovip.png" alt="" />
                    <span>Admin</span>
                </div>

                <div className="navList">
                    <div className="navList-money">
                        <span>Số dư: {data.ruby}</span>
                        <Crown variant="Bold" size={24} className="navIcon" />
                    </div>
                    <div className="navList-user">
                        <img src={data.imgPath} alt="" />
                        <span>{data.username}</span>
                        <div className="navList-userMenu">
                            <span onClick={logoutHandler}>Đăng xuất</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

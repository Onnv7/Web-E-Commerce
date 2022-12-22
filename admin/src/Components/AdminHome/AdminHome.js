import { Box1, Home, Note, User, ArrowRight2, Category } from "iconsax-react";
import React, { useEffect, useState } from "react";
import ManageSeller from "../ManageSeller/ManageSeller";
import ManageBuyer from "../ManageBuyer/ManageBuyer";
import HomePage from "../HomePage/HomePage";
import ManageDeliver from "../ManageDeliver/ManageDeliver";
import ManageCategory from "../ManageCategory/ManageCategory";
import "./adminHome.scss";

const AdminHome = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [slide, setSlide] = useState(<HomePage />);
    const openHome = () => {
        setSlide(<HomePage setSlide={setSlide} />);
    };

    const openBuyer = () => {
        setSlide(<ManageBuyer />);
    };

    const openSeller = () => {
        setSlide(<ManageSeller />);
    };

    const openDeliver = () => {
        setSlide(<ManageDeliver />);
    };
    const openCategory = () => {
        setSlide(<ManageCategory />);
    };
    return (
        <div className="adminHome">
            <div className="adminHome-navbar">
                <span onClick={openHome}>
                    <Home variant="Bold" />
                    Trang chủ
                </span>
                <span onClick={() => setOpen(true)}>
                    <User variant="Bold" />
                    Quản lý tài khoản
                </span>
                {open && (
                    <div className="adminHome-subnav">
                        <span onClick={openBuyer}>
                            <ArrowRight2 size={16} />
                            Người Mua
                        </span>
                        <span onClick={openSeller}>
                            <ArrowRight2 size={16} />
                            Người Bán
                        </span>
                    </div>
                )}
                <span onClick={openDeliver}>
                    <Box1 variant="Bold" />
                    Quản lí vận chuyển
                </span>
                <span onClick={openCategory}>
                    <Category variant="Bold" />
                    Quản lí Danh Mục
                </span>
            </div>

            <div className="adminHome-content">{slide}</div>
        </div>
    );
};

export default AdminHome;

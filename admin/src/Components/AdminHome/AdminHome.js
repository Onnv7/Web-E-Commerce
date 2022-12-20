import { Box1, Home, Note, User, ArrowRight2 } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import HomePage from '../HomePage/HomePage';
import ManageBuyer from '../ManageBuyer/ManageBuyer';
import ManageDeliver from '../ManageDeliver/ManageDeliver';
import ManageRevenue from '../ManageRevenue/ManageRevenue';
import ManageSeller from '../ManageSeller/ManageSeller';
import './adminHome.scss';

const AdminHome = () => {
    const [open, setOpen] = useState(false);
    const [slide, setSlide] = useState(<HomePage />);
    const openHome = () => {
        setSlide(<HomePage />);
    };
    const openRevenue = () => {
        setSlide(<ManageRevenue />);
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

    return (
        <div className="adminHome">
            <div className="adminHome-navbar">
                <span onClick={openHome}>
                    <Home variant="Bold" />
                    Trang chủ
                </span>
                <span onClick={openRevenue}>
                    <Note variant="Bold" />
                    Quản lý Doanh Thu
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
            </div>

            <div className="adminHome-content">{slide}</div>
        </div>
    );
};

export default AdminHome;

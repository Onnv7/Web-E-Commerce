import React, { useState } from 'react';
import './navbar.scss';
import { Crown, Crown1, MessageQuestion, Note1, Notification, User } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <div className="navList">
                    <a href="#" className="navItem active navItem--space">
                        Trang chủ
                    </a>
                    <a href="#" className="navItem navItem--space">
                        Đấu giá
                    </a>
                    <a href="#" className="navItem navItem--space">
                        Kênh bán hàng
                    </a>
                    <a href="/login" className="navItem navItem--space">
                        Đăng Nhập
                    </a>
                    <a href="/register" className="navItem">
                        Đăng ký
                    </a>
                </div>
                <div className="navList">
                    <div className="navList-money">
                        <span>Số dư: 1.000.000</span>
                        <Crown variant="Bold" size={24} className="navIcon" />
                    </div>
                    <Note1 variant="Bold" className="navIcon" size={24} />
                    <MessageQuestion variant="Bold" className="navIcon" size={24} />
                    <Notification variant="Bold" className="navIcon" size={24} />
                    <User variant="Bold" className="navIcon" size={24} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

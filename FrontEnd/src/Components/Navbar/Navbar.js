import React from 'react';
import './navbar.scss';
import { MessageQuestion, Notification, User } from 'iconsax-react';

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
                    <a href="#" className="navItem navItem--space">
                        Đăng Nhập
                    </a>
                    <a href="#" className="navItem">
                        Đăng ký
                    </a>
                </div>
                <div className="navList">
                    <MessageQuestion variant="Bold" className="navIcon" />
                    <Notification variant="Bold" className="navIcon" />
                    <User variant="Bold" className="navIcon" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

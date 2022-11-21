import React, { useEffect, useState } from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import { Note1, Notification, ShoppingCart, User } from 'iconsax-react';
import './profileNav.scss';
import ProfileAddress from '../ProfileAddress/ProfileAddress';
import PasswordChange from '../PasswordChange/PasswordChange';
import WalletManage from '../WalletManage/WalletManage';
import ProductPay from '../ProductPay/ProductPay';
import ProductNote from '../ProductNote/ProductNote';
import { useLocation } from 'react-router-dom';
const ProfileNav = () => {
    // useEffect(() => {
    //     if (destination === 'note') return setPage(<ProductNote />);
    // }, []);
    return (
        <div className="profileNav">
            <div className="profileNav-container">
                <div className="profile-navBox">
                    <img src="../Img/1-tgdd.jpg" alt="" />
                    <span>Thế giới di động</span>
                    <button>Thay ảnh đại diện</button>
                    <ul className="profile-nav">
                        <li className="profile-navItem">
                            <a href="#">
                                <User variant="Bold" /> Tài khoản
                            </a>
                            <ul className="profile-subnav">
                                <li className="profile-subItem">
                                    <a href="#">{'>'} Hồ sơ cá nhân</a>
                                </li>
                                <li className="profile-subItem">
                                    <a href="#">{'>'} Địa chỉ</a>
                                </li>
                                <li className="profile-subItem">
                                    <a href="#">{'>'} Đổi mật khẩu</a>
                                </li>
                                <li className="profile-subItem">
                                    <a href="#">{'>'} Quản lí ví</a>
                                </li>
                            </ul>
                        </li>
                        <li className="profile-navItem">
                            <a href="#">
                                <ShoppingCart variant="Bold" />
                                Giỏ hàng
                            </a>
                        </li>
                        <li className="profile-navItem">
                            <a href="#">
                                <Note1 variant="Bold" />
                                Danh sách lưu ý
                            </a>
                        </li>
                        <li className="profile-navItem">
                            <a href="#">
                                <Notification variant="Bold" />
                                Thông báo
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="profile-userContainer">
                    <ProductNote />
                </div>
            </div>
        </div>
    );
};

export default ProfileNav;

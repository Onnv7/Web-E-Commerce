import React, { useContext, useEffect, useState } from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import { Note1, Notification, ShoppingCart, User } from 'iconsax-react';
import './profileNav.scss';
import ProfileAddress from '../ProfileAddress/ProfileAddress';
import PasswordChange from '../PasswordChange/PasswordChange';
import WalletManage from '../WalletManage/WalletManage';
import ProductPay from '../ProductPay/ProductPay';
import ProductNote from '../ProductNote/ProductNote';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import AvatarChange from '../AvatarChange/AvatarChange';
const ProfileNav = () => {
    const { user, loading, error, dispatch } = useContext(AuthContext);
    const location = useLocation();
    const [showNav, setShowNav] = useState('hide');
    const [slide, setSlide] = useState();
    const showSubNav = (e) => {
        if (showNav == 'hide') {
            setShowNav('');
            e.stopPropagation();
        } else setShowNav('hide');
    };
    const openAvatarChange = () => {
        setSlide(<AvatarChange />);
    };
    const openProfile = () => {
        setSlide(<ProfileInfo />);
    };
    const openAddress = () => {
        setSlide(<ProfileAddress />);
    };
    const openPass = () => {
        setSlide(<PasswordChange />);
    };
    const openWallet = () => {
        setSlide(<WalletManage />);
    };
    const openCart = () => {
        setSlide(<ProductPay />);
    };
    const openNote = () => {
        setSlide(<ProductNote />);
    };
    useEffect(() => {
        if (location.state.destination === 'note') setSlide(<ProductNote />);
        else setSlide(<ProfileInfo />);
    }, slide);
    return (
        <div className="profileNav">
            <div className="profileNav-container">
                <div className="profile-navBox">
                    <img src={user.imgPath} alt="" />
                    <span>{user.username}</span>
                    <button onClick={openAvatarChange} style={{ cursor: 'pointer' }}>
                        Thay ảnh đại diện
                    </button>
                    <ul className="profile-nav">
                        <li className="profile-navItem">
                            <span onClick={showSubNav}>
                                <User variant="Bold" /> Tài khoản
                            </span>
                            <ul className={`profile-subnav ${showNav}`}>
                                <li className="profile-subItem">
                                    <span onClick={openProfile}>{'>'} Hồ sơ cá nhân</span>
                                </li>
                                <li className="profile-subItem">
                                    <span onClick={openAddress}>{'>'} Địa chỉ</span>
                                </li>
                                <li className="profile-subItem">
                                    <span onClick={openPass}>{'>'} Đổi mật khẩu</span>
                                </li>
                                <li className="profile-subItem">
                                    <span onClick={openWallet}>{'>'} Quản lí ví</span>
                                </li>
                            </ul>
                        </li>
                        <li className="profile-navItem">
                            <span onClick={openCart}>
                                <ShoppingCart variant="Bold" />
                                Giỏ hàng
                            </span>
                        </li>
                        <li className="profile-navItem">
                            <span onClick={openNote}>
                                <Note1 variant="Bold" />
                                Danh sách lưu ý
                            </span>
                        </li>
                        <li className="profile-navItem">
                            <span>
                                <Notification variant="Bold" />
                                Thông báo
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="profile-userContainer">{slide}</div>
            </div>
        </div>
    );
};

export default ProfileNav;

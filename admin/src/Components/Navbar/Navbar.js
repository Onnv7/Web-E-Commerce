import React, { useContext } from 'react';
import './navbar.scss';
import { Crown } from 'iconsax-react';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="navContainerFull">
                <div className="navListSell">
                    <img src="../../Img/logovip.png" alt="" />
                    <span>Trang người bán</span>
                </div>

                <div className="navList">
                    <div className="navList-money">
                        <span>Số dư: 11</span>
                        <Crown variant="Bold" size={24} className="navIcon" />
                    </div>
                    <div className="navList-user">
                        <img src="../Img/1-tgdd.jpg" alt="" />
                        <span>fox306</span>
                        <div className="navList-userMenu">
                            <span>Đăng xuất</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

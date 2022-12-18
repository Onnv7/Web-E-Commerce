import React, { useContext, useState } from 'react';
import './navbar.scss';
import { Crown, Crown1, MessageQuestion, Note1, Notification, User } from 'iconsax-react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    return (
        <div className="navbar">
            <div className="navContainerFull">
                <div className="navListSell">
                    <img src="../../Img/logovip.png" alt="" />
                    <span>Admin</span>
                </div>

                <div className="navList">
                    <div className="navList-money">
                        <span>Số dư: 1000</span>
                        <Crown variant="Bold" size={24} className="navIcon" />
                    </div>

                    <Note1 variant="Bold" className="navIcon" size={24} onClick={gotoNote} />
                    <MessageQuestion variant="Bold" className="navIcon" size={24} />
                    <Notification variant="Bold" className="navIcon" size={24} />
                    <div className="navList-user">
                        <img src="../Img/1-tgdd.jpg" alt="" />
                        <span>fox</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

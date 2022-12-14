import React, { useState } from 'react';
import './pageSeller.scss';
import { ArrowRight2, Box1, Note1, User } from 'iconsax-react';
import ManageProduct from '../ManageProduct/ManageProduct';
import AllProductPage from '../AllProduct/AllProductPage';
import ProfileShop from '../ProfileShop/ProfileShop';
import ManageAuction from '../ManageAuction/ManageAuction';
import { useNavigate } from 'react-router-dom';

const PageSeller = () => {
    const [open, setOpen] = useState(false);
    const [slide, setSlide] = useState(<ManageProduct />);
    const navigate = useNavigate();
    const showSubNav = () => {
        if (!open) {
            setOpen(true);
        } else setOpen(false);
    };
    const openAll = () => {
        setSlide(<AllProductPage />);
    };
    const openManage = () => {
        setSlide(<ManageProduct />);
    };
    const openNew = () => {
        navigate('/seller/new/1');
    };
    const openProfile = () => {
        setSlide(<ProfileShop />);
    };
    const openList = () => {
        setSlide(<ManageAuction />);
    };
    return (
        <div className="pageSeller">
            <div className="pageSeller-navbar">
                <span onClick={openManage}>
                    <Note1 variant="Bold" />
                    Quản lý đơn hàng
                </span>
                <span onClick={showSubNav}>
                    <Box1 variant="Bold" />
                    Quản lý Sản phẩm
                </span>
                {open && (
                    <div className="pageSeller-subnav">
                        <span onClick={openAll}>
                            <ArrowRight2 size={16} />
                            Tất cả sản phẩm
                        </span>
                        <span onClick={openNew}>
                            <ArrowRight2 size={16} />
                            Thêm sản phẩm mới
                        </span>
                    </div>
                )}
                <span onClick={openProfile}>
                    <User variant="Bold" />
                    Hồ sơ Shop
                </span>
                <span onClick={openList}>
                    <Note1 variant="Bold" />
                    Danh sách đấu giá
                </span>
            </div>
            <div className="pageSeller-content">{slide}</div>
        </div>
    );
};

export default PageSeller;

import React, { useContext, useEffect, useState } from "react";
import "./pageSeller.scss";
import { ArrowRight2, Box1, Note1, User } from "iconsax-react";
import ManageProduct from "../ManageProduct/ManageProduct";
import AllProductPage from "../AllProduct/AllProductPage";
import ProfileShop from "../ProfileShop/ProfileShop";
import ManageAuction from "../ManageAuction/ManageAuction";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "./../../hooks/axios";
const PageSeller = () => {
    const { user } = useContext(AuthContext);
    const [shop, setShop] = useState();
    const [open, setOpen] = useState(false);
    const [slide, setSlide] = useState(<ProfileShop />);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/shops/${user._id}`);
            if (data) setShop(data);
        };
        fetchData();
    }, [user]);

    const showSubNav = () => {
        if (!open) {
            setOpen(true);
        } else setOpen(false);
    };
    const openAll = () => {
        if (shop) setSlide(<AllProductPage />);
        else setSlide(<ProfileShop />);
    };
    const openManage = () => {
        if (shop) setSlide(<ManageProduct />);
        else setSlide(<ProfileShop />);
    };
    const openNew = () => {
        if (shop) navigate("/seller/new/1");
        else setSlide(<ProfileShop />);
    };
    const openProfile = () => {
        setSlide(<ProfileShop />);
    };
    const openList = () => {
        if (shop) setSlide(<ManageAuction />);
        else setSlide(<ProfileShop />);
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

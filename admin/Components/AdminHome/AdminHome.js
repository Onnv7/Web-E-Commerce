import { Box1, Home, Note, User } from 'iconsax-react';
import React, { useState } from 'react';

const AdminHome = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="adminHome">
            <div className="adminHome-navbar">
                <span>
                    <Home variant="Bold" />
                    Trang chủ
                </span>
                <span>
                    <Note variant="Bold" />
                    Quản lý Doanh Thu
                </span>
                <span>
                    <User variant="Bold" />
                    Quản lý tài khoản
                </span>
                <div className="adminHome-subnav">
                    <span>
                        <ArrowRight2 size={16} />
                        Tất cả sản phẩm
                    </span>
                    <span onClick={openNew}>
                        <ArrowRight2 size={16} />
                        Thêm sản phẩm mới
                    </span>
                </div>
                <span>
                    <Box1 variant="Bold" />
                    Quản lí vận chuyển
                </span>
            </div>
            <div className="adminHome-content"></div>
        </div>
    );
};

export default AdminHome;

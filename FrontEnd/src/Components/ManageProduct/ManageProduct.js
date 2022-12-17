import { ArrowLeft2, ArrowRight2, Back, Crown, SearchNormal1 } from 'iconsax-react';
import React, { useState } from 'react';
import AllProduct from '../ManageProductAll/AllProduct';
import DeliverProduct from '../ManageProductAll/DeliverProduct';
import DelivieredProduct from '../ManageProductAll/DelivieredProduct';
import WaitProduct from '../ManageProductAll/WaitProduct';
import './manageProduct.scss';

const ManageProduct = () => {
    const [active, setActive] = useState(1);
    const [slide, setSlide] = useState(<AllProduct />);
    const setClick = (i) => {
        setActive(i);
        if (i == 1) setSlide(<AllProduct />);
        else if (i == 2) setSlide(<WaitProduct />);
        else if (i == 3) setSlide(<DeliverProduct />);
        else if (i == 4) setSlide(<DelivieredProduct />);
    };
    return (
        <div className="manageProduct">
            <div className="manageProduct-container">
                <div className="manageProduct-header">
                    <span className={active === 1 ? 'active active__underline' : ''} onClick={() => setClick(1)}>
                        Tất cả
                    </span>
                    <span className={active === 2 ? 'active active__underline' : ''} onClick={() => setClick(2)}>
                        Chờ lấy hàng
                    </span>
                    <span className={active === 3 ? 'active active__underline' : ''} onClick={() => setClick(3)}>
                        Đang giao
                    </span>
                    <span className={active === 4 ? 'active active__underline' : ''} onClick={() => setClick(4)}>
                        Đã giao
                    </span>
                </div>
                <div className="manageProduct-title">
                    <span>Thông tin sản phẩm</span>
                    <span>Số lượng</span>
                    <span>Tổng tiền</span>
                    <span>Trạng thái</span>
                    <span>Thao tác</span>
                </div>
                <div className="manageProduct-listBox">{slide}</div>
            </div>

            <div className="manageProduct-pagination">
                <div className="pagination-item">
                    <a href="" className="pagination-link">
                        <ArrowLeft2 />
                    </a>
                </div>
                <div className="pagination-item ">
                    <a href="" className="pagination-link pagination-link__active">
                        1
                    </a>
                </div>
                <div className="pagination-item">
                    <a href="" className="pagination-link">
                        2
                    </a>
                </div>
                <div className="pagination-item">
                    <a href="" className="pagination-link">
                        3
                    </a>
                </div>
                <div className="pagination-item">
                    <a href="" className="pagination-link">
                        ...
                    </a>
                </div>
                <div className="pagination-item">
                    <a href="" className="pagination-link">
                        <ArrowRight2 />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;

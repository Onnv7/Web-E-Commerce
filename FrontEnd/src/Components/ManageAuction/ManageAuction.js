import React, { useState } from 'react';
import Auctioning from '../Auctioning/Auctioning';
import PlaceAution from '../PlaceAuction/PlaceAution';
import './manageAuction.scss';

const ManageAuction = () => {
    const [active, setActive] = useState(1);
    const [slide, setSlide] = useState(<PlaceAution />);
    const setClick = (i) => {
        setActive(i);
        if (i == 1) setSlide(<PlaceAution />);
        else if (i == 2) setSlide(<Auctioning />);
    };
    return (
        <div className="manageAuction">
            <div className="manageAuction-container">
                <div className="manageAuction-title">
                    <span className={active === 1 ? 'active active__underline' : ''} onClick={() => setClick(1)}>
                        Khu đấu giá
                    </span>
                    <span className={active === 2 ? 'active active__underline' : ''} onClick={() => setClick(2)}>
                        Đang đấu giá
                    </span>
                </div>
                <div className="manageAuction-box">{slide}</div>
            </div>
        </div>
    );
};

export default ManageAuction;

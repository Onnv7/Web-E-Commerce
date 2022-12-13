import { Judge } from 'iconsax-react';
import React, { useState } from 'react';
import AuctionList from '../../Components/AuctionList/AuctionList';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import NewAuction from '../../Components/NewAuction/NewAuction';
import './auctionPage.scss';

const AuctionPage = () => {
    const [active, setActive] = useState(1);
    const setClick = (i) => {
        setActive(i);
    };
    return (
        <div>
            <Navbar style="main" />
            <Header styles="hideNav" style="hideImg" />
            <div className="auctionPage-container">
                <span>
                    <Judge variant="Bold" size={40} />
                    Khu đấu giá
                </span>
                <hr />
                <div className="auctionPage-nav">
                    <span className={active === 1 ? 'active active__underline' : ''} onClick={() => setClick(1)}>
                        Danh sách đấu giá
                    </span>
                    <span className={active === 2 ? 'active active__underline' : ''} onClick={() => setClick(2)}>
                        Tạo phiên bản đấu giá mới
                    </span>
                </div>
                <div className="auctionPage-box">{active === 1 ? <AuctionList /> : <NewAuction />}</div>
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default AuctionPage;

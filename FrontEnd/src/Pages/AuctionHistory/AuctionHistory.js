import React from 'react';
import './auctionHistory.scss';
import 'iconsax-react';
import { Back } from 'iconsax-react';
import AuctionProduct from '../../Components/AuctionProduct/AuctionProduct';
import ListBuyer from '../../Components/ListBuyer/ListBuyer';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const AuctionHistory = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/auction');
    };
    return (
        <div>
            <Navbar style="seller" />
            <hr style={{ width: '100%', margin: 0 }} />
            <div className="auctionHistory-container">
                <Back className="auctionHistory-icon" size={60} onClick={handleBack} />
                <span>Lịch sử đấu giá</span>
                <AuctionProduct />
                <ListBuyer />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default AuctionHistory;

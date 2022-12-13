import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import ProductShop from '../../Components/ProductShop/ProductShop';
import ShopUser from '../../Components/ShopUser/ShopUser';
import './viewShop.scss';

const ViewShop = () => {
    return (
        <div>
            <Navbar style="main" />
            <Header styles="hideNav" style="hideImg" />
            <div className="viewShop-container">
                <ShopUser />
                <ProductShop />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default ViewShop;

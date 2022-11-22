import React from 'react';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import ProductChild from '../../Components/ProductChild/ProductChild';
import ProductDetail from '../../Components/ProductDetail/ProductDetail';
import ProductEvulate from '../../Components/ProductEvulate/ProductEvulate';
import ProductSell from '../../Components/ProductSell/ProductSell';
import Seller from '../../Components/Seller/Seller';
import Footer from '../../Components/Footer/Footer';
import './sellPage.scss';

const SellPage = () => {
    return (
        <div>
            <Navbar />
            <Header style="hideImg" />
            <div className="sellContainer">
                <ProductSell />
                <Seller />
                <ProductDetail />
                <ProductEvulate />
                <ProductChild />
                <hr color="#EE9533" />
            </div>
            <Footer />
        </div>
    );
};

export default SellPage;

import React from 'react';
import Auction from '../../Components/Auction/Auction';
import Category from '../../Components/Category/Category';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Product from '../../Components/Product/Product';
import Footer from '../../Components/Footer/Footer';
import './home.scss';

const Home = () => {
    return (
        <div>
            <Navbar style="main" />
            <Header />
            <div className="homeContainer">
                <h1 className="homeTitle">Đấu giá</h1>
                <Auction />
                <h1 className="homeTitle">Danh mục nổi bật</h1>
                <Category />
                <h1 className="homeTitle">Sản phẩm nổi bật</h1>
                <Product />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default Home;

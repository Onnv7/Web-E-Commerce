import React, { useRef } from 'react';
import Auction from '../../Components/Auction/Auction';
import Category from '../../Components/Category/Category';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Product from '../../Components/Product/Product';
import Footer from '../../Components/Footer/Footer';
import './home.scss';

const Home = () => {
    const urlProduct = useRef('/products');
    return (
        <div>
            <Navbar style="main" />
            <Header />
            <div className="homeContainer">
                <h1 className="homeTitle">Danh mục nổi bật</h1>
                <Category />
                <h1 className="homeTitle">Sản phẩm nổi bật</h1>
                <Product limit={10} url={urlProduct.current} />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default Home;

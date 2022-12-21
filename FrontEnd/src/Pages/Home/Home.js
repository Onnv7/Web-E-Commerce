import React, { useEffect, useRef, useState } from "react";
import Auction from "../../Components/Auction/Auction";
import Category from "../../Components/Category/Category";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
import "./home.scss";
import axios from "./../../hooks/axios";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/products");
            setProducts(data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <Navbar style="main" />
            <Header />
            <div className="homeContainer">
                <h1 className="homeTitle">Danh mục nổi bật</h1>
                <Category />
                <h1 className="homeTitle">Sản phẩm nổi bật</h1>
                <Product limit={10} products={products} />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default Home;

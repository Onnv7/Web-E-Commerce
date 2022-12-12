import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import ProductChild from "../../Components/ProductChild/ProductChild";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import ProductEvulate from "../../Components/ProductEvulate/ProductEvulate";
import ProductSell from "../../Components/ProductSell/ProductSell";
import Seller from "../../Components/Seller/Seller";
import Footer from "../../Components/Footer/Footer";
import "./sellPage.scss";
import axios from "./../../hooks/axios";
import { useParams } from "react-router-dom";

const SellPage = () => {
    const { slug } = useParams();
    const [id, setID] = useState();
    const [product, setProduct] = useState();
    const url = useRef("/products/");

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/products/slug/${slug}`);
            setProduct(data);
            setID(data._id);
        };
        fetchData();
    }, [slug]);

    return (
        <div>
            <Navbar />
            <Header style="hideImg" />
            <div className="sellContainer">
                <ProductSell id={id} />
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

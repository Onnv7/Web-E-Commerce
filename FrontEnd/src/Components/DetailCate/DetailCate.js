import { ArrowDown2, Heart, ShoppingCart, Star1 } from "iconsax-react";
import React, { useState, useEffect, useRef } from "react";
import "./detailCate.scss";
import axios from "../../hooks/axios.js";
import { useParams } from "react-router-dom";
import Product from "../Product/Product";
const DetailCate = () => {
    const [sortBy, setSortBy] = useState("low-to-high");
    const [active, setActive] = useState(0);
    const { id } = useParams();
    const [url, setUrl] = useState(`/products/mainCategory/${id}`);
    const [products, setProducts] = useState([]);
    const productsData = useRef();
    const mainCategories = useRef([]);
    const setClick = (i) => {
        setActive(i);
    };
    useEffect(() => {
        const init = async () => {
            const { data } = await axios.get("/categories");
            mainCategories.current = data;
            const productList = await axios.get(url);
            setProducts(productList.data);
        };
        init();
    }, []);

    useEffect(() => {
        let list = products;
        if (sortBy === "low-to-high") {
            list.sort((a, b) => a.price - b.price);
        } else if (sortBy === "high-to-low") {
            console.log("high-to-low");
            list.sort((a, b) => b.price - a.price);
        } else {
            list = productsData.current;
        }
        setProducts(list);
    }, [sortBy]);
    useEffect(() => {
        const fetchData = async () => {
            const productList = await axios.get(url);
            productsData.current = productList.data;
            setProducts(productList.data);
        };
        fetchData();
    }, [url]);

    const handleChangeCategory = (cgrId) => {
        setUrl(`/products/mainCategory/${cgrId}`);
    };
    function handleChange(event) {
        setSortBy(event.target.value);
    }
    return (
        <div className="grid wide">
            {console.log("aaa")}
            <div class="row sm-gutter">
                <div class="col l-2 m-0 c-0">
                    <nav className="detailCate">
                        <span>Danh mục</span>
                        <div className="detailCate-list">
                            {mainCategories.current.map((item) => {
                                return (
                                    <span
                                        key={item._id}
                                        className={active === 1 ? "active" : ""}
                                        onClick={() =>
                                            handleChangeCategory(item._id)
                                        }
                                    >
                                        {item.name}
                                    </span>
                                );
                            })}
                        </div>
                    </nav>
                </div>
                <div class="col l-10 m-12 c-12">
                    <div className="detailCate-filter">
                        <label>Chọn cách sắp xếp:</label>
                        <select value={sortBy} onChange={handleChange}>
                            <option value="default">Mặc định</option>
                            <option value="low-to-high">
                                Giá thấp đến cao
                            </option>
                            <option value="high-to-low">
                                Giá cao đến thấp
                            </option>
                        </select>
                        {/* <span>Sắp xếp theo</span>
                        <div className="detailCate-filterSelect">
                            <span>
                                Giá <ArrowDown2 />
                            </span>
                            <div className="detailCate-filterList">
                                <span>Giá: Thấp đến cao</span>
                                <span>Giá: Cao đến giấp</span>
                            </div>
                        </div> */}
                    </div>
                    <div className="detailCate-product">
                        <div className="row sm-gutter">
                            <Product col={"c-4"} products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCate;

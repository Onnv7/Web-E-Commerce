import {
    Star1,
    Heart,
    SearchNormal1,
    ShoppingCart,
    ArrowDown2,
} from "iconsax-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PaginationContext } from "../../context/PaginationContext";
import Product from "../Product/Product";
import axios from "./../../hooks/axios";
import "./productShop.scss";

const ProductShop = () => {
    const [active, setActive] = useState(0);
    const setClick = (i) => {
        setActive(i);
    };
    const [shop, setShop] = useState();
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [subCategory, setSubCategory] = useState("");

    const location = useLocation();
    const productData = useRef([]);
    const idCategory = useRef("");
    const indexPage = useRef(1);
    const pageCount = 9;
    const navigate = useNavigate();
    // const { products, totalPages, dispatch } = useContext(PaginationContext);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const { data } = await axios.get(`/shops/shop/${id}`);

                setShop(data);
            };
            fetchData();
        } catch (err) {
            console.error(err);
        }
    }, [id]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/products/shop/${id}`);

            setProducts(data);
        };
        fetchData();
    }, [id]);

    const filterHandler = async (category) => {
        setSubCategory(category);
        navigate(`/shop/${id}?cate=${category}`);
        const { data } = await axios.get(
            `/products/shop/${id}?cate=${category}`
        );

        setProducts(data);
    };
    return (
        shop && (
            <div className="productShop">
                <span>Sản phẩm của Shop</span>
                <div className="grid wide">
                    <div class="row sm-gutter">
                        <div class="col l-2 m-0 c-0">
                            <nav className="detailCate">
                                <span>Danh mục</span>
                                <div className="detailCate-list">
                                    <span
                                        className={active === 0 ? "active" : ""}
                                        onClick={() => {
                                            setClick(0);
                                            filterHandler("");
                                        }}
                                    >
                                        Tất cả
                                    </span>
                                    {shop.subCategories.map(
                                        (category, index) => (
                                            <span
                                                className={
                                                    active === index + 1
                                                        ? "active"
                                                        : ""
                                                }
                                                onClick={() => {
                                                    setClick(index + 1);
                                                    filterHandler(category);
                                                }}
                                                key={index}
                                            >
                                                {category}
                                            </span>
                                        )
                                    )}
                                </div>
                            </nav>
                        </div>
                        <div class="col l-10 m-12 c-12">
                            <div className="detailCate-filter">
                                <span>Sắp xếp theo</span>
                                <div className="detailCate-filterSelect">
                                    <span>
                                        Giá <ArrowDown2 />
                                    </span>
                                    <div className="detailCate-filterList">
                                        <span>Giá: Thấp đến cao</span>
                                        <span>Giá: Cao đến giấp</span>
                                    </div>
                                </div>
                            </div>
                            <div className="detailCate-product">
                                <div className="row sm-gutter">
                                    <Product col={"c-4"} products={products} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ProductShop;

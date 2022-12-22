import {
    ArrowLeft2,
    ArrowRight2,
    Heart,
    ShoppingCart,
    Star1,
} from "iconsax-react";
import { Pagination } from "react-bootstrap";
import React, { useEffect, useState, useContext, useRef } from "react";
import "./product.scss";
import axios from "../../hooks/axios";
import ProductItem from "./ProductItem";
import { PaginationContext } from "../../context/PaginationContext.js";

const Product = ({ cat, filters, sort, limit, col = "c-3", products }) => {
    const { productsPage, totalPages, dispatch } =
        useContext(PaginationContext);
    const productData = useRef([]);
    productData.current = products;
    const [productList, setProductList] = useState([]);
    const indexPage = useRef(1);
    const pageCount = 2;
    let index = [];
    for (let number = 1; number <= totalPages; number++) {
        index.push(
            <Pagination.Item
                key={number}
                active={number === indexPage.current}
                onClick={(e) => {
                    handleChangePage(e);
                }}
            >
                {number}
            </Pagination.Item>
        );
    }
    const handleChangePage = async (e) => {
        if (!Number(e.target.innerHTML)) return;
        indexPage.current = Number(e.target.innerHTML);
        dispatch({
            type: "START",
            payload: {
                items: productData.current,
                currentPage: indexPage.current,
                pageCount: pageCount,
            },
        });
    };
    // const init = async () => {
    //     indexPage.current = 1;
    //     // const { data } = await axios.get();
    //     // productData.current = data;
    //     productData.current = products;
    //     const result = {
    //         items: productData.current,
    //         currentPage: indexPage.current,
    //         pageCount: pageCount,
    //     };
    //     dispatch({ type: "START", payload: result });
    // };
    // init();
    useEffect(() => {
        const init = async () => {
            indexPage.current = 1;
            // const { data } = await axios.get();
            // productData.current = data;
            productData.current = products;
            const result = {
                items: productData.current,
                currentPage: indexPage.current,
                pageCount: pageCount,
            };
            dispatch({ type: "START", payload: result });
        };
        init();
    }, [productData.current, products]);
    return (
        productsPage && (
            <div className="product">
                {console.log("REDNDER CONNN")}
                <div className="grid wide">
                    <div className="row sm-gutter">
                        {productsPage.map((product) => (
                            <ProductItem
                                product={product}
                                key={product._id}
                                col={col}
                            ></ProductItem>
                        ))}

                        <Pagination className="shop-pagination">
                            {index}
                        </Pagination>
                    </div>
                </div>
            </div>
        )
    );
};

export default Product;

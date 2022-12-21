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
    useEffect(() => {
        const init = async () => {
            indexPage.current = 1;
            // const { data } = await axios.get();
            // productData.current = data;
            const result = {
                items: productData.current,
                currentPage: indexPage.current,
                pageCount: pageCount,
            };
            dispatch({ type: "START", payload: result });
        };
        init();
    }, [products]);
    console.log(productsPage);
    return (
        productsPage && (
            <div className="product">
                <div className="grid wide">
                    <div className="row sm-gutter">
                        {productsPage.map((product) => (
                            <ProductItem
                                product={product}
                                key={product._id}
                                col={col}
                            ></ProductItem>
                        ))}

                        {/* //     <ProductItem
                        //         product={products}
                        //         key={products._id}
                        //     ></ProductItem>
                        // )} */}
                        <Pagination className="shop-pagination">
                            {index}
                        </Pagination>
                        {/* <div className="pagination">
                            <div className="pagination-item">
                                <a href="" className="pagination-link">
                                    <ArrowLeft2 />
                                </a>
                            </div>
                            <div className="pagination-item ">
                                <a
                                    href=""
                                    className="pagination-link pagination-link__active"
                                >
                                    1
                                </a>
                            </div>
                            <div className="pagination-item">
                                <a href="" className="pagination-link">
                                    2
                                </a>
                            </div>
                            <div className="pagination-item">
                                <a href="" className="pagination-link">
                                    3
                                </a>
                            </div>
                            <div className="pagination-item">
                                <a href="" className="pagination-link">
                                    ...
                                </a>
                            </div>
                            <div className="pagination-item">
                                <a href="" className="pagination-link">
                                    98
                                </a>
                            </div>
                            <div className="pagination-item">
                                <a href="" className="pagination-link">
                                    99
                                </a>
                            </div>
                            <div className="pagination-item">
                                <a href="" className="pagination-link">
                                    <ArrowRight2 />
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    );
};

export default Product;

import React, { useEffect, useState } from "react";
import "./productEvulate.scss";
import { Like1, Star1, Warning2 } from "iconsax-react";
import axios from "../../hooks/axios";
import Rating from "../Rating/Rating";
import Reviews from "./Reviews";

const ProductEvulate = ({ id }) => {
    const [product, setProduct] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/products/${id}`);
            setProduct(data);
        };
        fetchData();
    }, [id]);
    return (
        product && (
            <div className="productEvulate">
                <div className="productEvulate-container">
                    <h1>Đánh giá sản phẩm</h1>
                    <div className="productEvulate-rating">
                        <div className="rating-sum">
                            <span>{product.ratingAverage}</span>
                            <Rating
                                rating={Math.round(product.ratingAverage)}
                                numReviews={product.ratingQuantity}
                            />
                            {/* <div className="rating-star">
                            <Star1 variant="Bold" size={19} />
                            <Star1 variant="Bold" size={19} />
                            <Star1 variant="Bold" size={19} />
                            <Star1 variant="Bold" size={19} />
                            <Star1 variant="Bold" size={19} />
                        </div>
                        <span>18 người đánh giá</span> */}
                        </div>
                        {/* <div className="rating-count">
                            <div className="count-detail">
                                <Star1 variant="Bold" />
                                <span>5</span>
                                <span className="rating-process"></span>
                                <span>10</span>
                            </div>
                            <div className="count-detail">
                                <Star1 variant="Bold" />
                                <span>4</span>
                                <span className="rating-process"></span>
                                <span>4</span>
                            </div>
                            <div className="count-detail">
                                <Star1 variant="Bold" />
                                <span>3</span>
                                <span className="rating-process"></span>
                                <span>4</span>
                            </div>
                            <div className="count-detail">
                                <Star1 variant="Bold" />
                                <span>2</span>
                                <span className="rating-process"></span>
                                <span>0</span>
                            </div>
                            <div className="count-detail">
                                <Star1 variant="Bold" />
                                <span>1</span>
                                <span className="rating-process"></span>
                                <span>0</span>
                            </div>
                        </div> */}
                    </div>
                    <Reviews limit={4} id={product._id} />
                </div>
            </div>
        )
    );
};

export default ProductEvulate;

import {
    ArrowLeft2,
    ArrowRight2,
    Crown,
    SearchNormal1,
    Back,
} from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./allProductPage.scss";
import axios from "./../../hooks/axios";

const AllProductPage = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/shops/${user._id}`);
            const resProduct = await axios.get(`/products/shop/${data._id}`);
            setProducts(resProduct.data);
        };
        fetchData();
    }, [user]);

    const handleUpdate = (id) => {
        navigate(`/seller/update/${id}`);
    };
    const handleDetail = (id) => {
        navigate(`/seller/detail/${id}`);
    };
    return (
        <div className="allProduct">
            <div className="allProduct-container">
                <div className="allProduct-header">
                    <span>Thông tin sản phẩm</span>
                    <span>Số lượng đã bán</span>
                    <span>Danh mục</span>
                    <span>Thao Tác</span>
                </div>
                {products &&
                    products.map((product) => (
                        <div className="allProduct-list">
                            <div
                                className="allProduct-name"
                                onClick={() => handleDetail(product._id)}
                            >
                                <img src={product.imgPath} alt="" />
                                <span>{product.name}</span>
                            </div>
                            <span>{product.soldQuantity}</span>
                            <span>
                                {product.subCategory}
                                {/* <Crown variant="Bold" size={15} /> */}
                            </span>
                            <div className="allProduct-action">
                                <span onClick={() => handleUpdate(product._id)}>
                                    Cập nhật
                                </span>
                                <span onClick={() => setOpen(true)}>Xoá</span>
                            </div>
                        </div>
                    ))}
            </div>

            {open && (
                <div className="modal-deleteProduct none">
                    <div className="modal-deleteProductContainer">
                        <span>
                            Bạn chắc chắn muốn xoá sản phẩm này khỏi cửa hàng
                            của bạn?
                        </span>
                        <button>Chắc chắn</button>
                        <button onClick={() => setOpen(false)}>
                            <Back size={32} />
                            Quay Lại
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllProductPage;

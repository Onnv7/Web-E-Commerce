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

    // useEffect(() => {
    //     const fetchData = async () => {
    //         console.log(data);
    //         products(data);
    //     };
    //     fetchData();
    // }, [user]);
    const handleUpdate = (id) => {
        navigate(`/seller/update/${id}`);
    };
    const handleDetail = () => {
        navigate("/seller/detail/1");
    };
    return (
        <div className="allProduct">
            <div className="allProduct-container">
                <div className="allProduct-search">
                    <div className="allProduct-searchItem">
                        <span>Tên sản phẩm</span>
                        <input
                            type="text"
                            placeholder="Nhập tên sản phẩm để tìm kiếm..."
                        />
                        <button className="headerSearch-btn">
                            <SearchNormal1 className="headerSearch-icon" />
                        </button>
                    </div>
                    <button>Thêm sản phẩm</button>
                </div>
                <div className="allProduct-header">
                    <span>Thông tin sản phẩm</span>
                    <span>Số lượng trong kho</span>
                    <span>Giá</span>
                    <span>Thao Tác</span>
                </div>
                {products &&
                    products.map((product) => (
                        <div className="allProduct-list">
                            <div
                                className="allProduct-name"
                                onClick={handleDetail}
                            >
                                <img src={product.imgPath[0]} alt="" />
                                <span>{product.name}</span>
                            </div>
                            <span>{product.quantity}</span>
                            <span>
                                {product.price}
                                <Crown variant="Bold" size={15} />
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
            <div className="manageProduct-pagination">
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
                        <ArrowRight2 />
                    </a>
                </div>
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

import React, { useContext, useEffect, useState } from "react";
import "./header.scss";
import { Home, Judge, SearchNormal1, ShoppingCart } from "iconsax-react";
import ImageSilder from "../ImageSlider/ImageSilder";
import { SliderData } from "../ImageSlider/SliderData";
import axios from "../../hooks/axios";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Header = ({ style, styles }) => {
    const { user } = useContext(AuthContext);
    const { state } = useContext(StoreContext);
    const {
        cart: { cartItems },
    } = state;
    const [textSearch, setTextSearch] = useState("");
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    let { id } = useParams();
    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await axios.get("/categories");
                setCategories(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getCategories();
    }, []);
    const gotoCartHandler = () => {
        navigate("/cart");
    };
    const handleSearch = () => {
        let url;
        // if (id === undefined) {
        //     id = "all";
        // }
        if (textSearch.trim() === "") {
            url = `/products/mainCategory/${id}`;
        } else {
            url = `/products/search?text=${textSearch}&cgrId=${id}`;
        }
        navigate(`/categories/${id}`, { state: { url, id, textSearch } });
    };
    const gotoAuction = () => {
        if (user.role === "user") {
            navigate("/auction");
        } else {
            toast.error("Bạn không được vào khu của người dùng");
        }
    };
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerNav">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <img src="../Img/logovip.png" alt="" />
                        <span>4TL</span>
                        <span className="line3"></span>
                        <div className="headerSearch-item">
                            <SearchNormal1 className="headerSearch-icon" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm bất cứ thứ gì..."
                                className="headerSearch-input "
                                onChange={(e) => setTextSearch(e.target.value)}
                            />
                            <button
                                className="headerSearch-btn"
                                onClick={handleSearch}
                            >
                                <SearchNormal1 className="headerSearch-icon" />
                            </button>
                        </div>
                        <div className="headerNav-cart">
                            <ShoppingCart
                                variant="Bold"
                                className="headerNav-icon"
                                onClick={gotoCartHandler}
                            />
                            <span>
                                {cartItems.reduce(
                                    (accumulate, currentValue) =>
                                        accumulate +
                                        currentValue.quantityProduct,
                                    0
                                )}
                            </span>
                        </div>
                        <Judge
                            variant="Bold"
                            className="headerNav-icon"
                            onClick={gotoAuction}
                        />
                        <span className="line4"></span>
                    </div>
                </div>

                <div
                    className={styles === "hideNav" ? "tab-hide" : "headerList"}
                >
                    <div className="headerNav">
                        <div className="headerNav-item active">
                            <Home className="headerNav-item__icon" />
                            <a href="/">Trang chủ</a>
                        </div>
                        {categories &&
                            categories.map((c) => (
                                <div className="headerNav-item" key={c.name}>
                                    <a href="#">{c.name}</a>
                                </div>
                            ))}
                    </div>

                    <div
                        className={
                            style === "hideImg" ? "tab-hide" : "headerImg"
                        }
                    >
                        <ImageSilder slides={SliderData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

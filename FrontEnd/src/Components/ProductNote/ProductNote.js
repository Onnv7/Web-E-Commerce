import React, { useContext, useEffect, useState } from "react";
import "./productNote.scss";
import {
    ArrowLeft2,
    ArrowRight2,
    Crown,
    Heart,
    Messages2,
    MessageText1,
    SearchNormal1,
    Shop,
} from "iconsax-react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const ProductNote = () => {
    const { state, contextDispatch } = useContext(StoreContext);
    const {
        wishlist: { wishlistItems },
    } = state;
    console.log(wishlistItems);
    const [active, setActive] = useState(1);

    const handleChange = (i) => {
        setActive(i);
    };
    const wishlistHandler = (product) => {
        contextDispatch({
            type: "WISHLIST_CHANGE_ITEM",
            payload: product,
        });
        toast.success("Bỏ thích sản phẩm thành công");
    };
    return (
        <div className="productNote">
            <div className="productNote-container">
                <div className="productNote-title">
                    <button
                        className={active === 1 ? "click" : ""}
                        onClick={() => handleChange(1)}
                    >
                        Mua hàng
                    </button>
                </div>

                <div className={active === 1 ? "productNote-list" : "tab-hide"}>
                    {wishlistItems?.map((wishItem) => (
                        <div className="productNote-item" key={wishItem._id}>
                            <div className="productNote-body">
                                <img src={wishItem.imgPath} alt="" />
                                <div className="productNote-bodyText">
                                    <span>{wishItem.name}</span>
                                    <div className="productNote-bodyType">
                                        <span>
                                            Số lượng đã bán:{" "}
                                            {" " + wishItem.soldQuantity}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="productNote-footer">
                                <button>
                                    <Link
                                        to={`/products/${wishItem.slug}`}
                                        style={{
                                            textDecoration: "none",
                                            color: "#fff",
                                        }}
                                    >
                                        Mua ngay
                                    </Link>
                                </button>
                                <div>
                                    <span>Nhấn để bỏ thích</span>
                                    <Heart
                                        className="product-liked"
                                        variant="Bold"
                                        onClick={() =>
                                            wishlistHandler(wishItem)
                                        }
                                        style={{
                                            color: state.wishlist?.wishlistItems.find(
                                                (item) =>
                                                    item._id === wishItem._id
                                            )
                                                ? "#DC5B0E"
                                                : null,
                                        }}
                                    />
                                </div>
                                <span>
                                    Giá tiền: {wishItem.price}
                                    <Crown size={34} variant="Bold" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductNote;

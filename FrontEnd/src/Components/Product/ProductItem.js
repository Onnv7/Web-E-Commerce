import {
    ArrowLeft2,
    ArrowRight2,
    Crown,
    Heart,
    ShoppingCart,
    Star1,
} from "iconsax-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import Rating from "../Rating/Rating";

function ProductItem({ product, col }) {
    const { state, contextDispatch } = useContext(StoreContext);

    const wishlistHandler = () => {
        contextDispatch({
            type: "WISHLIST_CHANGE_ITEM",
            payload: product,
        });
    };
    return (
        <div className={`col ${col}`}>
            <div className="productItem">
                <img
                    src={product.imgPath}
                    className="product-img"
                    alt="product"
                />
                <span className="product-title">{product.name}</span>
                <div className="product-sell">
                    <span>Đã bán {product.soldQuantity}</span>
                    <span>
                        {product.price}
                        <Crown variant="Bold" size={24} className="navIcon" />
                    </span>
                </div>
                <div className="product-rate">
                    <Rating
                        rating={Math.round(product.ratingAverage)}
                        caption=" "
                    />
                    <span>{product.address}</span>
                </div>
                <div className="product-buy">
                    <Link to={`/products/${product.slug}`}>
                        <button className="product-btn">
                            Chi tiết sản phẩm
                        </button>
                    </Link>
                    <div className="product-shop">
                        <Heart
                            className="product-liked"
                            variant="Bold"
                            onClick={wishlistHandler}
                            style={{
                                color: state.wishlist?.wishlistItems.find(
                                    (item) => item._id === product._id
                                )
                                    ? "#DC5B0E"
                                    : null,
                            }}
                        />
                        {/* <ShoppingCart className="product-liked" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;

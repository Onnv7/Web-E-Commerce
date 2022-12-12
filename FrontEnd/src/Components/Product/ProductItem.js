import {
  ArrowLeft2,
  ArrowRight2,
  Crown,
  Heart,
  ShoppingCart,
  Star1,
} from "iconsax-react";
import { Link } from "react-router-dom";
function ProductItem({ product }) {
  return (
    <div className="col c-3">
      <Link to={`/product/${product.slug}`} className="productItem">
        <img src={product.imgPath[0]} className="product-img" alt="product" />
        <span className="product-title">{product.name}</span>
        <div className="product-sell">
          <span>Đã bán {product.soldQuantity}</span>
          <span>
            {product.price}
            <Crown variant="Bold" size={24} className="navIcon" />
          </span>
        </div>
        <div className="product-rate">
          <div className="product-rating">
            <Star1 variant="Bold" />
            <Star1 variant="Bold" />
            <Star1 variant="Bold" />
            <Star1 variant="Bold" />
            <Star1 variant="Bold" />
          </div>
          <span>Hà Nội</span>
        </div>
        <div className="product-buy">
          <button className="product-btn">Đấu giá ngay</button>
          <div className="product-shop">
            <Heart className="product-liked" variant="Bold" />
            <ShoppingCart className="product-liked" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;

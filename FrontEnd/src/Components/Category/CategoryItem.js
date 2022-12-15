import { Link } from "react-router-dom";

function CategoryItem({ category }) {
    return (
        <div className="col c-3">
            <Link to={`/category/${category._id}`} className="cateItem">
                <div className="cateItem-Content">
                    <img src={category.imgPath} alt="category" />
                    <span className="cateItem-title">{category.name}</span>
                </div>
            </Link>
        </div>
    );
}

export default CategoryItem;

import { Star1 } from "iconsax-react";
import "./Rating.scss";
function Rating({ rating, numReviews, caption }) {
    return (
        <div className="rating">
            <div>
                <span>
                    {rating >= 1 ? (
                        <Star1
                            variant="Bold"
                            size={18}
                            className="star-light"
                        />
                    ) : (
                        <Star1 variant="Bold" size={18} className="star-dark" />
                    )}
                </span>
                <span>
                    {rating >= 2 ? (
                        <Star1
                            variant="Bold"
                            size={18}
                            className="star-light"
                        />
                    ) : (
                        <Star1 variant="Bold" size={18} className="star-dark" />
                    )}
                </span>
                <span>
                    {rating >= 3 ? (
                        <Star1
                            variant="Bold"
                            size={18}
                            className="star-light"
                        />
                    ) : (
                        <Star1 variant="Bold" size={18} className="star-dark" />
                    )}
                </span>
                <span>
                    {rating >= 4 ? (
                        <Star1
                            variant="Bold"
                            size={18}
                            className="star-light"
                        />
                    ) : (
                        <Star1 variant="Bold" size={18} className="star-dark" />
                    )}
                </span>
                <span>
                    {rating >= 5 ? (
                        <Star1
                            variant="Bold"
                            size={18}
                            className="star-light"
                        />
                    ) : (
                        <Star1 variant="Bold" size={18} className="star-dark" />
                    )}
                </span>
            </div>
            {caption ? (
                <span>{caption}</span>
            ) : (
                <span>{numReviews + " lượt đánh giá"}</span>
            )}
        </div>
    );
}

export default Rating;

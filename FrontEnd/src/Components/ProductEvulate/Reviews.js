import { useEffect, useState } from "react";
import axios from "../../hooks/axios";
import formatter from "../../hooks/formatter";
import Rating from "../Rating/Rating";
import { User } from "iconsax-react";

function Reviews({ id, limit }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/reviews/all/${id}`);
            console.log(data);
            setReviews(data);
        };
        fetchData();
    }, [id]);

    return (
        <div className="product-review-container">
            {reviews &&
                reviews.slice(0, limit).map((review) => (
                    <div className="productEvulate-comment" key={review._id}>
                        <div className="comment-user">
                            <img src={review.imgPathUser} alt="user" />
                            <div className="user-info">
                                <span>{review.name}</span>
                                <Rating rating={review.rating} caption={" "} />
                                <span>
                                    {formatter.format(
                                        new Date(review.createdAt)
                                    )}
                                </span>
                                {/* <div className="comment-btn">
                                    <button>
                                        <Like1 />
                                        7.9k
                                    </button>
                                    <Warning2 className="comment-warn" />
                                </div> */}
                            </div>
                        </div>
                        <div className="comment-detail">
                            <span>{review.content}</span>
                            <div className="comment-img">
                                {review.imgPathReview.map((r, index) => (
                                    <img src={r} alt="" key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default Reviews;

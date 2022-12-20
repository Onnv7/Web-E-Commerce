import { useState } from "react";
import "./Star.css";
const STARS = [1, 2, 3, 4, 5];

const MESSAGES = {
    0: "Rating it",
    1: "We don't like you neither!",
    2: "Better than nothing...",
    3: "So are we just a regular company?",
    4: "I think we are better than this... but it's ok",
    5: "We're awesome!",
};

function Star({
    value = 0,
    messages = MESSAGES,
    onClickStar = () => {},
    setRating,
}) {
    const [selected, setSelected] = useState(value);
    const [starHovered, setStarHovered] = useState(0);

    const applyClasses = (star) => {
        if (selected >= star || starHovered >= star) {
            return "star fas fa-star active";
        }
        return "star far fa-star";
    };
    return (
        <div className="star-container">
            <p className="title">
                How was your experience with this product of us?
            </p>
            <div className="wrapper_star">
                {STARS.map((star) => {
                    return (
                        <i
                            onClick={() => {
                                onClickStar(star);
                                setSelected(star);
                                setRating(star);
                            }}
                            onMouseOver={() => setStarHovered(star)}
                            onMouseOut={() => setStarHovered(0)}
                            className={applyClasses(star)}
                            key={star}
                        ></i>
                    );
                })}
            </div>
            <p className="star_message">{messages[selected]}</p>
        </div>
    );
}

export default Star;

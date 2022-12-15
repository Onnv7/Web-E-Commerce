import { Star1 } from "iconsax-react";
import "./Rating.scss";
function Rating({ rating, numReviews, caption }) {
    const func = () => {
        const zoneOne = ["Quận 1", "Quận 2", "Quận 3"];
        const zoneTwo = ["Quận 4", "Quận 5", "Quận 6"];
        const zoneThree = ["Quận 7", "Quận 8", "Quận 9"];
        const address = "Quận 2";
        const destination = "Quận 5";

        const zoneNameOne = (address) => {
            return zoneOne.find((zone) => {
                if (zone === address) {
                    return true;
                }
            });
        };

        const zoneNameTwo = (address) => {
            return zoneTwo.find((zone) => {
                if (zone === address) {
                    return true;
                }
            });
        };

        const zoneNameThree = (address) => {
            return zoneThree.find((zone) => {
                if (zone === address) {
                    return true;
                }
            });
        };

        const zoneName = (address) => {
            if (zoneNameOne(address)) return 1;
            if (zoneNameTwo(address)) return 2;
            if (zoneNameThree(address)) return 3;
        };
        function price(address, destinantion) {
            if (address === destination) {
                return "Free Ship";
            }
            if (zoneName(address) === zoneName(destination)) {
                return "30 Ruby";
            }
            if (Math.abs(zoneName(address) - zoneName(destination)) === 1) {
                return "35 Ruby";
            } else {
                return "45 Ruby";
            }
        }

        console.log(zoneName(address));
        console.log(zoneName(destination));
        console.log(price(address, destination));
    };

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

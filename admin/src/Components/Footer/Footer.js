import { Facebook } from "iconsax-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
    const openDev = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    return (
        <div className="footer">
            <div className="listDev">
                <div className="listDev-Groups">
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <span
                            onClick={() =>
                                openDev("https://www.facebook.com/mingduc2k2")
                            }
                        >
                            Leader & BA
                        </span>
                    </div>
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <span
                            onClick={() =>
                                openDev(
                                    "https://www.facebook.com/000000000000000000dz/"
                                )
                            }
                        >
                            Front-end Developer
                        </span>
                    </div>
                </div>
                <div className="itemDev-logo">
                    <img src="../../Img/logovip.png" />
                    <span>4TL</span>
                </div>
                <div className="listDev-Groups">
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <span
                            onClick={() =>
                                openDev("https://www.facebook.com/ON.611.02")
                            }
                        >
                            Back-end Developer
                        </span>
                    </div>
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <span
                            onClick={() =>
                                openDev(
                                    "https://www.facebook.com/phatnguyen.2912"
                                )
                            }
                        >
                            UI/UX Designer & QC
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

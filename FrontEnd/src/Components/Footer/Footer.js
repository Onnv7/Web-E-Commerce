import { Facebook } from 'iconsax-react';
import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="listDev">
                <div className="listDev-Groups">
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <span>Leader & BA</span>
                    </div>
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <span>Front-end Developer</span>
                    </div>
                </div>
                <div className="itemDev-logo">
                    <img src="../Img/logovip.png" />
                    <span>4TL</span>
                </div>
                <div className="listDev-Groups">
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <span>Back-end Developer</span>
                    </div>
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <span>UI/UX Designer & QC</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

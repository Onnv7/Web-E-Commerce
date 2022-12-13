import { Facebook } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
    const navigate = useNavigate();
    const Leader = () => {
        navigate('https://www.facebook.com/mingduc2k2');
    };
    return (
        <div className="footer">
            <div className="listDev">
                <div className="listDev-Groups">
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <a href="https://www.facebook.com/mingduc2k2">Leader & BA</a>
                    </div>
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <a href="https://www.facebook.com/000000000000000000dz/">Front-end Developer</a>
                    </div>
                </div>
                <div className="itemDev-logo">
                    <img src="../../Img/logovip.png" />
                    <span>4TL</span>
                </div>
                <div className="listDev-Groups">
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <a href="https://www.facebook.com/ON.611.02">Back-end Developer</a>
                    </div>
                    <div className="itemDev">
                        <Facebook variant="Bold" />
                        <a href="https://www.facebook.com/phatnguyen.2912">UI/UX Designer & QC</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

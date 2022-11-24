import React from 'react';
import './header.scss';
import { Home, Judge, SearchNormal1, ShoppingCart } from 'iconsax-react';
import ImageSilder from '../ImageSlider/ImageSilder';
import { SliderData } from '../ImageSlider/SliderData';

const Header = ({ style, styles }) => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerNav">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <img src="../Img/logovip.png" alt="" />
                        <span>4TL</span>
                        <span className="line3"></span>
                        <div className="headerSearch-item">
                            <SearchNormal1 className="headerSearch-icon" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm bất cứ thứ gì..."
                                className="headerSearch-input "
                            />
                            <button className="headerSearch-btn">
                                <SearchNormal1 className="headerSearch-icon" />
                            </button>
                        </div>
                        <ShoppingCart variant="Bold" className="headerNav-icon" />
                        <Judge variant="Bold" className="headerNav-icon" />
                        <span className="line4"></span>
                    </div>
                </div>
                <div className={styles === 'hideNav' ? 'headerList none' : 'headerList'}>
                    <div className="headerNav">
                        <div className="headerNav-item active">
                            <Home className="headerNav-item__icon" />
                            <a href="#">Trang chủ</a>
                        </div>
                        <div className="headerNav-item">
                            <a href="#">Quần áo</a>
                        </div>
                        <div className="headerNav-item">
                            <a href="#">Công nghệ</a>
                        </div>
                        <div className="headerNav-item">
                            <a href="#">Gia đình</a>
                        </div>
                        <div className="headerNav-item">
                            <a href="#">Nghệ thuật</a>
                        </div>
                        <div className="headerNav-item">
                            <a href="#">Sức khỏe & sắc đẹp</a>
                        </div>
                        <div className="headerNav-item">
                            <a href="#">Thể thao</a>
                        </div>
                        <div className="headerNav-item">
                            <a href="#">Điện tử</a>
                        </div>
                    </div>
                    <div className={style === 'hideImg' ? 'headerImg none' : 'headerImg'}>
                        <ImageSilder slides={SliderData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

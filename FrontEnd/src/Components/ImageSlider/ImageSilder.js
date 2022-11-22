import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import React, { useEffect, useState } from 'react';
import { SliderData } from './SliderData';
import './imageSlider.scss';

const ImageSilder = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div className="slider">
            <span className="left-arrow">
                <ArrowLeft2 size={20} className="arrow" onClick={prevSlide} />
            </span>

            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide animation' : 'slide'} key={index}>
                        {index === current && <img src={slide.image} alt="pic1" className="slide-img" />}
                    </div>
                );
            })}
            <span className="right-arrow" onClick={nextSlide}>
                <ArrowRight2 size={20} className="arrow" />
            </span>
        </div>
    );
};

export default ImageSilder;

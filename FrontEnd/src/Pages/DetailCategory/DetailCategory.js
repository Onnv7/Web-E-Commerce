import React from 'react';
import DetailCate from '../../Components/DetailCate/DetailCate';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import './detailCategory.scss';

const DetailCategory = () => {
    return (
        <div>
            <Navbar style="main" />
            <Header styles="hideNav" style="hideImg" />
            <div className="detailCategory-container">
                <DetailCate />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default DetailCategory;

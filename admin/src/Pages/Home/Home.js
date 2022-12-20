import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import AdminHome from '../../Components/AdminHome/AdminHome';
import './home.scss';

const Home = () => {
    return (
        <div>
            <Navbar />
            <hr style={{ width: '100%', margin: 0 }} />
            <div className="home-container">
                <AdminHome />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default Home;

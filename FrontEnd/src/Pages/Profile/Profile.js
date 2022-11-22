import React, { useState } from 'react';
import './profile.scss';
import NavBar from '../../Components/Navbar/Navbar';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ProfileNav from '../../Components/ProfileNav/ProfileNav';
import { useLocation } from 'react-router-dom';
const Profile = () => {
    // const location = useLocation();
    // const [destination, setDestination] = useState(location.state.destination);
    // console.log(destination);

    return (
        <div>
            <NavBar />
            <Header styles="hideNav" />
            <div className="profile-container">
                <ProfileNav />
                <hr color="#EE9533" />
            </div>
            <Footer />
        </div>
    );
};

export default Profile;

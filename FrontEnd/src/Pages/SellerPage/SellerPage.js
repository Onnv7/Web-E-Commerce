import React from "react";
import PageSeller from "../../Components/PageSeller/PageSeller";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./sellerPage.scss";

const SellerPage = () => {
    return (
        <div>
            <Navbar style="seller" />
            <hr style={{ width: "100%", margin: 0 }} />
            <div className="sellerPage-container">
                <PageSeller />
            </div>
            <hr style={{ width: "100%", margin: 0 }} />
            <Footer />
        </div>
    );
};

export default SellerPage;

import React from "react";
import AuctionItem from "../../Components/AuctionItem/AuctionItem";
import AuctionSeller from "../../Components/AuctionSeller/AuctionSeller";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import AuctionProductChild from "../../Components/ProductChild/AuctionProductChild";
import AuctionProductDetail from "../../Components/ProductDetail/AuctionProductDetail";
import { useNavigate } from "react-router-dom";

const AuctionProductPage = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/seller");
    };
    return (
        <div>
            <Navbar style="seller" />
            <hr style={{ width: "100%", margin: 0 }} />
            <div className="sellContainer">
                <span onClick={handleBack}>Quay lại Khu đấu giá</span>
                <AuctionItem />
                <AuctionSeller />
                <AuctionProductDetail />
                <AuctionProductChild />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default AuctionProductPage;

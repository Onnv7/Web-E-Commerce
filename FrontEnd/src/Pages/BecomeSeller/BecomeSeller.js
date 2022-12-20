import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./becomeSeller.scss";

const BecomeSeller = () => {
    const navigate = useNavigate();
    const handleMove = () => {
        navigate("/seller");
    };
    return (
        <div>
            <Navbar style="seller" />
            <hr style={{ width: "100%", margin: 0 }} />
            <div className="becomeSeller">
                <div className="becomeSeller-container">
                    <img src="../../Img/becomeSeller.png" alt="" />
                    <span>Chào mừng đến với 4TL</span>
                    <span>
                        Để cần đăng ký bán hàng trên 4TL bạn cần cung cấp 1 số
                        thông tin cơ bản
                    </span>
                    <button onClick={handleMove}>Đăng kí</button>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default BecomeSeller;

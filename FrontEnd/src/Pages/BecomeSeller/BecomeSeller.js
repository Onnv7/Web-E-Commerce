import React from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./becomeSeller.scss";

const BecomeSeller = () => {
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/seller");
    };
    const handleBack = () => {
        navigate("/");
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
                    <div className="becomeSeller-btn">
                        <button onClick={handleBack}>Trở lại</button>
                        <button onClick={handleRegister}>Đăng kí</button>
                    </div>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default BecomeSeller;

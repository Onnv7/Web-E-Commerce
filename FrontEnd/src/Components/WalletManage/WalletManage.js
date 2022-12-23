import React, { useState, useContext } from "react";
import { Crown } from "iconsax-react";
import { AuthContext } from "../../context/AuthContext";
import "./walletManage.scss";
import { toast } from "react-toastify";
import axios from "../../hooks/axios";
import { useNavigate } from "react-router-dom";
const WalletManage = () => {
    const { user } = useContext(AuthContext);
    const [active, setActive] = useState(1);
    // const [cost, setCost] = useState();
    const setClick = (i) => {
        setActive(i);
    };
    const navigate = useNavigate();
    const [money, setMoney] = useState();
    // const handlePay = async () => {
    //     const ruby = cost;
    //     console.log(ruby);
    //     try {
    //         await axios.post(`paypal/pay/${user._id}`, user._id, {
    //             count: {
    //                 name: "money",
    //                 value: ruby,
    //             },
    //         });
    //         toast.success("Nạp tiền thành công");
    //     } catch (error) {
    //         toast.error(error);
    //     }
    // };
    console.log(money);
    const handleClick = (e) => {
        e.stopPropagation();
        navigate("/paypal", { state: { money } });
    };
    return (
        <div className="walletManage">
            <div className="walletManage-container">
                <span>Quản lý ví</span>
                <div className="walletManage-current">
                    <span>Số dư hiện tại</span>
                    <div className="walletManage-box">
                        <span>{user?.ruby}</span>
                        <Crown
                            className="walletManage-icon"
                            variant="Bold"
                            size={34}
                        />
                    </div>
                    <div className="walletManage-payBox">
                        <div className="walletManage-title">
                            <span>Nạp Ruby</span>
                        </div>
                        <div className="walletManage-payment">
                            <span>
                                Tỷ lệ quy đổi: 1{" "}
                                <Crown
                                    className="walletManage-icon"
                                    variant="Bold"
                                />{" "}
                                = 1$
                            </span>
                            <div className="walletManage-paymentBox">
                                <div className="walletManage-input">
                                    <input
                                        type="number"
                                        value={money}
                                        placeholder="Nhập số lượng Ruby muốn nạp"
                                        onChange={(e) =>
                                            setMoney(e.target.value)
                                        }
                                    />
                                    <Crown
                                        className="walletManage-icon"
                                        variant="Bold"
                                    />
                                </div>
                                <button onClick={handleClick}>Nạp</button>
                            </div>
                            <div className="walletManage-paymentForm">
                                <span>Hình thức thanh toán</span>
                                <img src="../Img/1-payment.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletManage;

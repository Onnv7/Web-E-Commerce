import React, { useState, useContext } from "react";
import { Crown } from "iconsax-react";
import { AuthContext } from "../../context/AuthContext";
import "./walletManage.scss";
import { toast } from "react-toastify";
import axios from "../../hooks/axios";
const WalletManage = () => {
    const { user } = useContext(AuthContext);
    const [active, setActive] = useState(1);
    const [cost, setCost] = useState();
    const setClick = (i) => {
        setActive(i);
    };
    console.log(cost);
    console.log(user._id);
    const handlePay = async () => {
        const ruby = cost;
        console.log(ruby);
        try {
            await axios.post(`paypal/pay/${user._id}`, user._id, {
                count: {
                    name: "money",
                    value: ruby,
                },
            });
            toast.success("Nạp tiền thành công");
        } catch (error) {
            toast.error(error);
        }
    };
    const url = `http://localhost:8800/backend/paypal/pay/${user._id}`;
    return (
        <div className="walletManage">
            <div className="walletManage-container">
                <span>Quản lý ví</span>
                <div className="walletManage-current">
                    <span>Số dư hiện tại</span>
                    <div className="walletManage-box">
                        <span>{user.ruby}</span>
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
                                    <form action={url} method="post">
                                        <input type="text" name="money" />
                                        <input type="submit" value="Buy" />
                                    </form>
                                </div>
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

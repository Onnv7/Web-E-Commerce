import { useContext, useEffect, useState } from "react";
import MyPaypalButton from "./an";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../hooks/axios.js";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./paypal.scss";
import { AuthContext } from "../../context/AuthContext";
import { Crown } from "iconsax-react";

const Paypal = () => {
    const location = useLocation();
    const [paid, setPaid] = useState(false);
    let money = 0;
    if (location.state !== null) {
        money = location.state.money;
    }
    const { user, dispatch } = useContext(AuthContext);
    const payment = async () => {
        try {
            const body = {
                ruby: money,
            };
            // const { _id } = JSON.parse(localStorage.getItem("user"));
            // const { data } = await axios.post(`/paypal/buy/${_id}`, body);
            const { data } = await axios.post(`/paypal/buy/${user._id}`, body);
            user.ruby = Number(user.ruby) + Number(money);
            dispatch({ type: "USER_RELOAD", payload: user });
        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        if (paid === true) {
            payment();
            console.log("LLLL");
            // setPaid(false);
        }
    }, [paid]);

    return (
        <div>
            <NavBar style="main" />
            <hr style={{ width: "100%", margin: 0 }} />
            <div className="paypal-container">
                <span>Thông tin giao dịch</span>
                <span>
                    Số lượng Ruby : {money} <Crown variant="Bold" size={30} />
                </span>
                <span>
                    Tỉ lệ Ruby: 1 <Crown variant="Bold" size={30} /> = 1${" "}
                </span>
                <div className="paypal-btn">
                    <PayPalScriptProvider
                        options={{
                            "client-id":
                                "AXBW39Gom8uiojSjo_Oshj-Q1SNFhofvz6S-eJM-2k5OzCJgQzZovfebHZt1zWbF4RHHE_dGJ37Mhrir",
                        }}
                    >
                        <PayPalButtons
                            fundingSource="paypal"
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: `${money}`,
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={async (data, actions) => {
                                return actions.order
                                    .capture()
                                    .then((details) => {
                                        setPaid(true);
                                        const name =
                                            details.payer.name.given_name;
                                        alert(
                                            `Transaction completed by ${name}`
                                        );
                                    });
                            }}
                            onError={(error) => {
                                setPaid(false);
                                alert(`Transaction failed`);
                            }}
                        />
                    </PayPalScriptProvider>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default Paypal;

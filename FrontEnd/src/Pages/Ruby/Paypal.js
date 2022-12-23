import { useEffect, useState } from "react";
import MyPaypalButton from "./an";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const initState = {
    amount: "2",
    msg: "",
};

const Paypal = () => {
    const location = useLocation();
    // const [money2, setMoney2] = useState();
    let money = 0;
    if (location.state !== null) {
        money = location.state.money;
    }
    return (
        <>
            <h1>ban nap{money}</h1>
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
                        return actions.order.capture().then((details) => {
                            // setPaid(true);
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        });
                    }}
                    onError={(error) => {
                        // Code xử lý lỗi
                    }}
                />
            </PayPalScriptProvider>
        </>
    );
};

export default Paypal;

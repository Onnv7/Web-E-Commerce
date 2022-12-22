import { useEffect, useState } from "react";
import MyPaypalButton from "./an";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const initState = {
    amount: "2",
    msg: "",
};
const Paypal = () => {
    const [money, setMoney] = useState();
    return (
        <>
            <PayPalScriptProvider
                options={{
                    "client-id":
                        "AXBW39Gom8uiojSjo_Oshj-Q1SNFhofvz6S-eJM-2k5OzCJgQzZovfebHZt1zWbF4RHHE_dGJ37Mhrir",
                    components: "buttons",
                }}
            >
                <PayPalButtons
                    createOrder={(data, actions) => {
                        // Code xử lý tạo đơn hàng
                        // Trả về ID đơn hàng tạo được
                        return "ORDER_ID";
                    }}
                    onApprove={(data, actions) => {
                        // Code xử lý khi người dùng chấp nhận thanh toán
                    }}
                    onError={(error) => {
                        // Code xử lý lỗi
                    }}
                />
            </PayPalScriptProvider>
            <input value={money} onChange={(e) => setMoney(e.target.value)} />
        </>
    );
};

export default Paypal;

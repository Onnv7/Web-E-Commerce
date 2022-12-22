import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const MyPaypalButton = () => {
    return (
        <PayPalScriptProvider
            options={{
                "client-id":
                    "AZJXkD3NTX9_mMJ1o9JObSSM9GCYQmbY3kBXEE4-t36AC-YrNqyM_6Oy5VKrTK7Ilf-8uUaxy00z7kQb",
                components: "buttons",
            }}
        >
            <PayPalButtons
                fundingSource="paypal"
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: `1`,
                                },
                            },
                        ],
                    });
                }}
                onApprove={async (data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
    );
};

export default MyPaypalButton;

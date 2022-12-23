import React from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useState } from "react";

const Money = () => {
    const navigate = useNavigate();
    const [money, setMoney] = useState();
    // const handleClick = () => {
    //     if (money == 0) {
    //         alert("NHap so lon hon 0")
    //     }
    //     else {
    //         navigate("/paypal");
    //     }
    // }
    const handleClick = (e) => {
        navigate("/paypal", { state: { money } });
    };
    return (
        <div>
            <form>
                <input
                    type="Number"
                    name="money"
                    value={money}
                    onChange={(e) => setMoney(e.target.value)}
                />
                <input onClick={handleClick} value="Buy" />
            </form>
        </div>
    );
};
export default Money;

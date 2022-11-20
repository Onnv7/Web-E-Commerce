import React from "react";
import { useNavigate, Link } from "react-router-dom";
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
    const handleChange = (e) => {
        setMoney(e.target.value);
    }
    return (
        <div>
            <form>
                <input type="Number" name="money" onChange={handleChange} />
                <Link to={`/paypal`}>
                    <input type="submit" value="Buy" />
                </Link>
            </form>
        </div>
    );

};
export default Money;

import React from "react";
import ListBuyer from "../ListBuyer/ListBuyer";

const AuctionProductChild = () => {
    return (
        <div className="productChild">
            <div className="productAucChild-container">
                <div className="productAnother">
                    <h1>Lịch sử đấu giá</h1>
                </div>
                <div className="grid wide">
                    <ListBuyer />
                </div>
            </div>
        </div>
    );
};

export default AuctionProductChild;

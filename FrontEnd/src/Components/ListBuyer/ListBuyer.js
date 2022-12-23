import { Crown } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./listBuyer.scss";
import axios from "./../../hooks/axios";

const ListBuyer = () => {
    const { id } = useParams();
    const [auction, setAuction] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/auction/${id}`);
            setAuction(data);
        };
        fetchData();
    }, [id]);
    return (
        auction && (
            <div className="listBuyer">
                <div className="listBuyer-header">
                    <span>Người bán</span>
                    <span>Mức đấu giá</span>
                    <span>Thời gian ra giá</span>
                </div>
                {auction.auctionHistory.map((a, index) => (
                    <div className="listBuyer-Item" key={index}>
                        <Link
                            to={`/shop/${a._id}`}
                            style={{ color: "#000", textDecoration: "none" }}
                        >
                            <span>{a.name}</span>
                        </Link>
                        <span>
                            {a.price}
                            <Crown variant="Bold" />
                        </span>
                        <span>{a.time}</span>
                    </div>
                ))}
            </div>
        )
    );
};

export default ListBuyer;

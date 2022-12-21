import { Crown } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Calender from "../Calender/Calender";
import { addDays } from "date-fns";
import axios from "./../../hooks/axios";

import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import "./manageRevenue.scss";

const ManageRevenue = () => {
    const data = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
    ];
    const [revenue, setRevenue] = useState([]);

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        },
    ]);
    const startDate = `${dates[0].startDate.getFullYear()}-${
        dates[0].startDate.getMonth() + 1
    }-${dates[0].startDate.getDate()}`;

    const endDate = `${dates[0].endDate.getFullYear()}-${
        dates[0].endDate.getMonth() + 1
    }-${dates[0].endDate.getDate()}`;
    const handleDateRange = (input) => {
        setDates(input);
    };
    useEffect(() => {
        try {
            const fetchData = async () => {
                const { data } = await axios.get(
                    `/checkouts/revenueAdmin?startDate=${startDate}&endDate=${endDate}`
                );
                setRevenue(data);
                console.log(data);
            };
            fetchData();
        } catch (err) {
            console.error(err);
        }
    }, [dates]);
    return (
        <div className="manageRevenue">
            <div className="manageRevenue-countBox">
                <div className="manageRevenue-count">
                    <span>DOANH THU - NGÀY</span>
                    <span>
                        100 <Crown variant="Bold" size={30} />
                    </span>
                </div>
                <div className="manageRevenue-count">
                    <span>DOANH THU - TUẦN</span>
                    <span>
                        100 <Crown variant="Bold" size={30} />
                    </span>
                </div>
                <div className="manageRevenue-count">
                    <span>DOANH THU - THÁNG</span>
                    <span>
                        100 <Crown variant="Bold" size={30} />
                    </span>
                </div>
            </div>
            <div className="manageRevenue-chart">
                <span>Biểu đồ doanh thu</span>
                <Calender getDateRange={handleDateRange} />
                <ResponsiveContainer width="100%" aspect="2">
                    <AreaChart
                        width={730}
                        height={250}
                        data={revenue}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient
                                id="total"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop
                                    offset="5%"
                                    stopColor="#8884d8"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#8884d8"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="_id" stroke="gray" />
                        <CartesianGrid
                            strokeDasharray="3 3"
                            className="chartGrid"
                        />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="total"
                            stroke="#8884d8"
                            fillOpacity={1}
                            fill="url(#total)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ManageRevenue;

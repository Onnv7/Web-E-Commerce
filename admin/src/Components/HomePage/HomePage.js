import React, { useEffect, useState } from "react";
import { addDays } from "date-fns";
import "./homePage.scss";
import { Profile2User, Shop, MoneyRecive, Bank, Crown } from "iconsax-react";
import axios from "./../../hooks/axios";
import Calender from "../Calender/Calender";
import {
    AreaChart,
    Area,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import ManageBuyer from "../ManageBuyer/ManageBuyer";
import ManageSeller from "../ManageSeller/ManageSeller";

const HomePage = ({ setSlide }) => {
    const [revenue, setRevenue] = useState([]);
    const data1 = [
        { name: "January", Total: 1200 },
        { name: "February", Total: 2100 },
        { name: "March", Total: 800 },
        { name: "April", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
    ];
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        },
    ]);
    const [count, setCount] = useState({});
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
            };
            fetchData();
        } catch (err) {
            console.error(err);
        }
    }, [dates]);
    useEffect(() => {
        try {
            const fetchData = async () => {
                const { data } = await axios.get("/users/statistics");
                setCount(data);
            };
            fetchData();
        } catch (err) {
            console.error(err);
        }
    }, [dates]);
    return (
        <div className="homePage">
            <div className="homePage-countBox">
                <div className="homePage-count">
                    <span>NGƯỜI MUA - KHÁCH HÀNG</span>
                    <span>{count.countBuyer}</span>

                    <Profile2User
                        variant="Bold"
                        size={40}
                        className="homePage-icon active"
                    />
                </div>
                <div className="homePage-count">
                    <span>NGƯỜI BÁN - CHỦ SHOP</span>
                    <span>{count.countSeller}</span>
                    <Shop
                        variant="Bold"
                        size={40}
                        className="homePage-icon active"
                    />
                </div>
                <div className="homePage-count">
                    <span>DOANH THU (THÁNG)</span>
                    <span>{count.revenueThisMonth}</span>
                    <MoneyRecive size={40} className="homePage-icon active" />
                </div>
            </div>
            <div className="homePage-manage">
                <div className="homePage-walletManage">
                    <span>
                        QUẢN LÝ DOANH THU{" "}
                        <MoneyRecive size={20} className="active" />
                    </span>
                    <div className="homePage-walletCount">
                        <Bank size={100} className="active" variant="Bold" />
                        <span>Doanh Thu Trong Hôm Nay</span>
                        <span>
                            800 <Crown variant="Bold" />
                        </span>
                    </div>
                    <div className="homePage-walletCountList">
                        <div className="homePage-walletCountItem">
                            <span>Trong tuần</span>
                            <span>
                                800 <Crown variant="Bold" />
                            </span>
                        </div>
                        <div className="homePage-walletCountItem">
                            <span>Trong Tháng</span>
                            <span>
                                800 <Crown variant="Bold" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="homePage-chart">
                    <span>Biểu đồ doanh thu</span>
                    <Calender getDateRange={handleDateRange} />
                    <ResponsiveContainer aspect="2">
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
        </div>
    );
};

export default HomePage;

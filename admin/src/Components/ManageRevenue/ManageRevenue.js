import { Crown } from 'iconsax-react';
import React from 'react';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './manageRevenue.scss';

const ManageRevenue = () => {
    const data = [
        { name: 'January', Total: 1200 },
        { name: 'February', Total: 2100 },
        { name: 'March', Total: 800 },
        { name: 'April', Total: 1600 },
        { name: 'May', Total: 900 },
        { name: 'June', Total: 1700 },
    ];
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
                <ResponsiveContainer width="80%" aspect="2">
                    <AreaChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="gray" />
                        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
                        <Tooltip />
                        <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ManageRevenue;

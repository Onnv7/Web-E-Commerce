import { Profile2User, Shop } from "iconsax-react";
import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./manageBuyer.scss";
import { ProfileDelete } from "iconsax-react";
import axios from "../../hooks/axios";

const ManageBuyer = () => {
    const rows = [
        {
            id: 1,
            name: "Nguyễn Văn Thịnh",
            nameS: "Thời trang mới",
            email: "thinh@gmail.com ",
            sdt: 900,
            username: "thinh12345",
            password: "***",
            actiton: <ProfileDelete color="#FF0000" variant="Bold" />,
        },
        {
            id: 2,
            name: "Nguyễn Văn Thịnh",
            nameS: "Thời trang mới",
            email: "thinh@gmail.com ",
            sdt: 900,
            username: "thinh12345",
            password: "***",
            actiton: <ProfileDelete color="#FF0000" variant="Bold" />,
        },
        {
            id: 3,
            name: "Nguyễn Văn Thịnh",
            nameS: "Thời trang mới",
            email: "thinh@gmail.com ",
            sdt: 900,
            username: "thinh12345",
            password: "***",
            actiton: <ProfileDelete color="#FF0000" variant="Bold" />,
        },
        {
            id: 4,
            name: "Nguyễn Văn Thịnh",
            nameS: "Thời trang mới",
            email: "thinh@gmail.com ",
            sdt: 900,
            username: "thinh12345",
            password: "***",
            actiton: <ProfileDelete color="#FF0000" variant="Bold" />,
        },
        {
            id: 5,
            name: "Nguyễn Văn Thịnh",
            nameS: "Thời trang mới",
            email: "thinh@gmail.com ",
            sdt: 900,
            username: "thinh12345",
            password: "***",
            actiton: <ProfileDelete color="#FF0000" variant="Bold" />,
        },
    ];
    const [count, setCount] = useState({});
    const [info, setInfo] = useState([]);
    useEffect(() => {
        try {
            const fetchCount = async () => {
                const { data } = await axios.get("/users/count/buyer");
                setCount(data);
            };
            fetchCount();
            const fetchData = async () => {
                const { data } = await axios.get("/users/");
                console.log(data);
                setInfo(data);
            };
            fetchData();
        } catch (err) {
            console.error(err);
        }
    }, []);
    return (
        <div className="manageBuyer">
            <div className="manageRevenue-countBox">
                <div className="manageRevenue-count">
                    <span>TỔNG ACCOUNT MỖI - NGÀY</span>
                    <span>
                        {count.day} <Profile2User variant="Bold" size={30} />
                    </span>
                </div>
                <div className="manageRevenue-count">
                    <span>TỔNG ACCOUNT MỖI - TUẦN</span>
                    <span>
                        {count.week} <Profile2User variant="Bold" size={30} />
                    </span>
                </div>
                <div className="manageRevenue-count">
                    <span>TỔNG ACCOUNT MỖI - THÁNG</span>
                    <span>
                        {count.month} <Profile2User variant="Bold" size={30} />
                    </span>
                </div>
            </div>
            <div className="manageSeller-table">
                <TableContainer component={Paper} className="table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="tableCell managerSeller-fz">
                                    ID
                                </TableCell>
                                <TableCell className="tableCell managerSeller-fz">
                                    Tên
                                </TableCell>
                                <TableCell className="tableCell managerSeller-fz">
                                    Email
                                </TableCell>
                                <TableCell className="tableCell managerSeller-fz">
                                    SĐT
                                </TableCell>
                                <TableCell className="tableCell managerSeller-fz">
                                    Username
                                </TableCell>
                                <TableCell className="tableCell managerSeller-fz">
                                    Giới tính
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {info.map((row) => (
                                <TableRow key={row._id}>
                                    <TableCell className="tableCell">
                                        {row._id}
                                    </TableCell>
                                    <TableCell className="tableCell">
                                        {row.name}
                                    </TableCell>
                                    <TableCell className="tableCell">
                                        {row.email}
                                    </TableCell>
                                    <TableCell className="tableCell">
                                        {row.phoneNumber}
                                    </TableCell>
                                    <TableCell className="tableCell">
                                        {row.username}
                                    </TableCell>
                                    <TableCell className="tableCell">
                                        {row.gender}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default ManageBuyer;

import { Shop } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./manageSeller.scss";
import { ProfileDelete } from "iconsax-react";
import axios from "../../hooks/axios";

const ManageSeller = () => {
    const [info, setInfo] = useState([]);
    const [count, setCount] = useState({});
    useEffect(() => {
        try {
            const fetchData = async () => {
                const { data } = await axios.get("/users/seller");
                setInfo(data);
            };
            fetchData();
            const fetchCount = async () => {
                const { data } = await axios.get("/users/count/seller");
                setCount(data);
            };
            fetchCount();
        } catch (err) {
            console.error(err);
        }
    }, []);
    return (
        <div className="manageSeller">
            <div className="manageRevenue-countBox">
                <div className="manageRevenue-count">
                    <span>TỔNG SHOP MỖI - NGÀY</span>
                    <span>
                        {count.day} <Shop variant="Bold" size={30} />
                    </span>
                </div>
                <div className="manageRevenue-count">
                    <span>TỔNG SHOP MỖI - TUẦN</span>
                    <span>
                        {count.week} <Shop variant="Bold" size={30} />
                    </span>
                </div>
                <div className="manageRevenue-count">
                    <span>TỔNG SHOP MỖI - THÁNG</span>
                    <span>
                        {count.month} <Shop variant="Bold" size={30} />
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
                                    Tên Khách Hàng
                                </TableCell>
                                <TableCell className="tableCell managerSeller-fz">
                                    Tên Shop
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
                                        {row.shopName}
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
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default ManageSeller;

import { Profile2User, Shop } from 'iconsax-react';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './manageBuyer.scss';
import { ProfileDelete } from 'iconsax-react';

const ManageBuyer = () => {
    const rows = [
        {
            id: 1,
            name: 'Nguyễn Văn Thịnh',
            nameS: 'Thời trang mới',
            email: 'thinh@gmail.com ',
            sdt: 900,
            username: 'thinh12345',
            password: '***',
            actiton: <ProfileDelete color="#FF0000" variant="Bold" />,
        },
        {
            id: 1,
            name: 'Nguyễn Văn Thịnh',
            nameS: 'Thời trang mới',
            email: 'thinh@gmail.com ',
            sdt: 900,
            username: 'thinh12345',
            password: '***',
            actiton: <ProfileDelete color="#FF0000" variant="Bold" />,
        },
        {
            id: 1,
            name: 'Nguyễn Văn Thịnh',
            nameS: 'Thời trang mới',
            email: 'thinh@gmail.com ',
            sdt: 900,
            username: 'thinh12345',
            password: '***',
            actiton: <ProfileDelete color="#FF0000" variant="Bold" />,
        },
        {
            id: 1,
            name: 'Nguyễn Văn Thịnh',
            nameS: 'Thời trang mới',
            email: 'thinh@gmail.com ',
            sdt: 900,
            username: 'thinh12345',
            password: '***',
            actiton: <ProfileDelete color="#FF0000" variant="Bold" />,
        },
        {
            id: 1,
            name: 'Nguyễn Văn Thịnh',
            nameS: 'Thời trang mới',
            email: 'thinh@gmail.com ',
            sdt: 900,
            username: 'thinh12345',
            password: '***',
            actiton: <ProfileDelete color="#FF0000" variant="Bold" />,
        },
    ];
    return (
        <div className="manageBuyer">
            <div className="manageRevenue-countBox">
                <div className="manageRevenue-count">
                    <span>TỔNG ACCOUNT MỖI - NGÀY</span>
                    <span>
                        100 <Profile2User variant="Bold" size={30} />
                    </span>
                </div>
                <div className="manageRevenue-count">
                    <span>TỔNG ACCOUNT MỖI - TUẦN</span>
                    <span>
                        100 <Profile2User variant="Bold" size={30} />
                    </span>
                </div>
                <div className="manageRevenue-count">
                    <span>TỔNG ACCOUNT MỖI - THÁNG</span>
                    <span>
                        100 <Profile2User variant="Bold" size={30} />
                    </span>
                </div>
            </div>
            <div className="manageSeller-table">
                <TableContainer component={Paper} className="table">
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className="tableCell managerSeller-fz">ID</TableCell>
                                <TableCell className="tableCell managerSeller-fz">Tên Khách Hàng</TableCell>
                                <TableCell className="tableCell managerSeller-fz">Tên Shop</TableCell>
                                <TableCell className="tableCell managerSeller-fz">Email</TableCell>
                                <TableCell className="tableCell managerSeller-fz">SĐT</TableCell>
                                <TableCell className="tableCell managerSeller-fz">Username</TableCell>
                                <TableCell className="tableCell managerSeller-fz">Password</TableCell>
                                <TableCell className="tableCell managerSeller-fz">Thao Tác</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell className="tableCell">{row.id}</TableCell>
                                    <TableCell className="tableCell">{row.name}</TableCell>
                                    <TableCell className="tableCell">{row.nameS}</TableCell>
                                    <TableCell className="tableCell">{row.email}</TableCell>
                                    <TableCell className="tableCell">{row.sdt}</TableCell>
                                    <TableCell className="tableCell">{row.username}</TableCell>
                                    <TableCell className="tableCell">{row.password}</TableCell>
                                    <TableCell className="tableCell">{row.actiton}</TableCell>
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

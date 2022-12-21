import { Back, Crown, TruckFast } from "iconsax-react";
import React, { useState, useEffect } from "react";
import "./manageDeliver.scss";
import axios from "./../../hooks/axios";

const ManageDeliver = () => {
    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState([]);
    useEffect(() => {
        try {
            const fetchData = async () => {
                const { data } = await axios.get("/shippingCost");
                console.log(data);
                setInfo(data);
            };
            fetchData();
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <div className="manageDeliver">
            <div className="manageDeliver-fee">
                <div className="manageDeliver-feeList">
                    <div className="manageDeliver-feeItem">
                        <div className="manageDeliver-feeTitle">
                            <span>PHÍ VẬN CHUYỂN - CÙNG QUẬN</span>
                            <span onClick={() => setOpen(true)}>THAY ĐỔI</span>
                        </div>
                        <span>
                            Free <Crown size={30} variant="Bold" />
                        </span>
                    </div>
                    <div className="manageDeliver-feeItem">
                        <div className="manageDeliver-feeTitle">
                            <span>PHÍ VẬN CHUYỂN</span>
                            <span onClick={() => setOpen(true)}>THAY ĐỔI</span>
                        </div>
                        <div className="manageDeliver-feePlace">
                            <span>
                                VÙNG 1 {"<"}--{">"} VÙNG 2
                            </span>
                            <span>
                                VÙNG 2 {"<"}--{">"} VÙNG 3
                            </span>
                        </div>
                        <span>
                            35 <Crown size={30} variant="Bold" />
                        </span>
                    </div>
                </div>
                <TruckFast size={100} variant="Bold" className="active" />
                <div className="manageDeliver-feeList">
                    <div className="manageDeliver-feeItem">
                        <div className="manageDeliver-feeTitle">
                            <span>PHÍ VẬN CHUYỂN - CÙNG VÙNG</span>
                            <span onClick={() => setOpen(true)}>THAY ĐỔI</span>
                        </div>
                        <span>
                            30 <Crown size={30} variant="Bold" />
                        </span>
                    </div>
                    <div className="manageDeliver-feeItem">
                        <div className="manageDeliver-feeTitle">
                            <span>PHÍ VẬN CHUYỂN</span>
                            <span onClick={() => setOpen(true)}>THAY ĐỔI</span>
                        </div>
                        <div className="manageDeliver-feePlace">
                            <span>
                                VÙNG 1 {"<"}--{">"} VÙNG 3
                            </span>
                        </div>
                        <span>
                            45 <Crown variant="Bold" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="manageDeliver-region">
                <span>Quy định vùng</span>
                <div className="manageDeliver-regionList">
                    <div className="manageDeliver-regionItem">
                        <span>Vùng 1</span>
                        <div className="manageDeliver-place">
                            <span>Quận Tân Bình</span>
                            <span>Quận Phú Nhuận</span>
                            <span>Quận Gò Vấp</span>
                            <span>Quận Tân Phú</span>
                            <span>Quận 1</span>
                            <span>Quận 3</span>
                            <span>Quận 5</span>
                            <span>Quận 10</span>
                            <span>Quận 11</span>
                        </div>
                    </div>
                    <div className="manageDeliver-regionItem">
                        <span>Vùng 2</span>
                        <div className="manageDeliver-place">
                            <span>Quận Bình Thạnh</span>
                            <span>Quận Bình Tân</span>
                            <span>Quận 2</span>
                            <span>Quận 4</span>
                            <span>Quận 6</span>
                            <span>Quận 8</span>
                            <span>Quận 9</span>
                            <span>Quận 12</span>
                            <span>Thành Phố Thủ Đức</span>
                        </div>
                    </div>
                    <div className="manageDeliver-regionItem">
                        <span>Vùng 3</span>
                        <div className="manageDeliver-place">
                            <span>Huyện Hóc Môn</span>
                            <span>Huyện Bình Chánh</span>
                            <span>Huyện Nhà Bè</span>
                            <span>Quận 7</span>
                            <span>Huyện Củ Chi</span>
                            <span>Huyện Cần Giờ</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && (
                <div className="modal-changeShip">
                    <div className="modal-changeShipContainer">
                        <span>Thay đổi Phí Ship</span>
                        <div className="modal-changeShipBox">
                            <span>Phí Ship</span>
                            <div className="modal-changeShipInput">
                                <input type="number" />
                                <Crown size={20} variant="Bold" />
                            </div>
                        </div>
                        <div className="modal-changeShipBtn">
                            <button onClick={() => setOpen(false)}>
                                <Back size={32} />
                                Quay Lại
                            </button>
                            <button>Xác Nhận</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageDeliver;

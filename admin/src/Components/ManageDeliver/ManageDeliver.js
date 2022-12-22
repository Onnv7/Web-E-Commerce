import { Back, Crown, TruckFast } from "iconsax-react";
import React, { useState, useEffect } from "react";
import "./manageDeliver.scss";
import axios from "./../../hooks/axios";

const ManageDeliver = () => {
    const [open, setOpen] = useState(false);
    const [zone1, setZone1] = useState({});
    const [zone2, setZone2] = useState({});
    const [zone3, setZone3] = useState({});
    const [zone4, setZone4] = useState({});
    const [zone5, setZone5] = useState({});
    const [info, setInfo] = useState({});
    const [info1, setInfo1] = useState({});
    const [cost, setCost] = useState();
    useEffect(() => {
        try {
            const fetchZone1 = async () => {
                const { data } = await axios.get(
                    "/shippingCost/zone?start=-1&end=-1"
                );
                console.log(data);
                setZone1(data);
            };
            fetchZone1();
            const fetchZone2 = async () => {
                const { data } = await axios.get(
                    "/shippingCost/zone?start=0&end=0"
                );
                console.log(data);
                setZone2(data);
            };
            fetchZone2();
            const fetchZone3 = async () => {
                const { data } = await axios.get(
                    "/shippingCost/zone?start=1&end=2"
                );
                setZone3(data);
            };
            fetchZone3();
            const fetchZone4 = async () => {
                const { data } = await axios.get(
                    "/shippingCost/zone?start=2&end=3"
                );
                setZone4(data);
            };
            fetchZone4();
            const fetchZone5 = async () => {
                const { data } = await axios.get(
                    "/shippingCost/zone?start=1&end=3"
                );
                setZone5(data);
            };
            fetchZone5();
        } catch (err) {
            console.error(err);
        }
    }, []);
    const handleOpen = (zone, sameZone) => {
        setOpen(true);
        setInfo(zone);
        setInfo1(sameZone);
    };
    const handleUpdate = async (e) => {
        e.stopPropagation();
        try {
            const deliverCost = cost;
            if (info1 === undefined) {
                await axios.patch("/shippingCost/update", {
                    starting: info.starting,
                    destination: info.destination,
                    cost: Number(deliverCost),
                });
                setOpen(false);
            } else {
                await axios.patch("/shippingCost/update", {
                    starting: info.starting,
                    destination: info.destination,
                    cost: deliverCost,
                });
                await axios.patch("/shippingCost/update", {
                    starting: info1.starting,
                    destination: info1.destination,
                    cost: deliverCost,
                });
                setOpen(false);
            }
            if (info.starting === -1 && info.destination === -1) {
                setZone1((prev) => {
                    zone1.cost = deliverCost;
                    return zone1;
                });
            }
            if (info.starting === 0 && info.destination === 0) {
                setZone2((prev) => {
                    zone2.cost = deliverCost;
                    return zone2;
                });
            }
            if (
                info.starting === 1 &&
                info.destination === 2 &&
                info1.starting === 2 &&
                info1.destination === 3
            ) {
                setZone3((prev) => {
                    zone3.cost = deliverCost;
                    return zone3;
                });
                setZone4((prev) => {
                    zone4.cost = deliverCost;
                    return zone4;
                });
            }
            if (info.starting === 1 && info.destination === 3) {
                setZone5((prev) => {
                    zone5.cost = deliverCost;
                    return zone5;
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="manageDeliver">
            <div className="manageDeliver-fee">
                <div className="manageDeliver-feeList">
                    <div className="manageDeliver-feeItem">
                        <div className="manageDeliver-feeTitle">
                            <span>PHÍ VẬN CHUYỂN - CÙNG QUẬN</span>
                            <span onClick={() => handleOpen(zone1)}>
                                THAY ĐỔI
                            </span>
                        </div>
                        <span>
                            {zone1.cost === 0 ? "Free" : zone1.cost}
                            <Crown size={30} variant="Bold" />
                        </span>
                    </div>
                    <div className="manageDeliver-feeItem">
                        <div className="manageDeliver-feeTitle">
                            <span>PHÍ VẬN CHUYỂN</span>
                            <span onClick={() => handleOpen(zone3, zone4)}>
                                THAY ĐỔI
                            </span>
                        </div>
                        <div className="manageDeliver-feePlace">
                            <span>
                                VÙNG {zone3.starting} {"<"}--{">"} VÙNG{" "}
                                {zone3.destination}
                            </span>
                            <span>
                                VÙNG {zone4.starting} {"<"}--{">"} VÙNG{" "}
                                {zone4.destination}
                            </span>
                        </div>
                        <span>
                            {zone3.cost && zone4.cost}
                            <Crown size={30} variant="Bold" />
                        </span>
                    </div>
                </div>
                <TruckFast size={100} variant="Bold" className="active" />
                <div className="manageDeliver-feeList">
                    <div className="manageDeliver-feeItem">
                        <div className="manageDeliver-feeTitle">
                            <span>PHÍ VẬN CHUYỂN - CÙNG VÙNG</span>
                            <span onClick={() => handleOpen(zone2)}>
                                THAY ĐỔI
                            </span>
                        </div>
                        <span>
                            {zone2.cost}
                            <Crown size={30} variant="Bold" />
                        </span>
                    </div>
                    <div className="manageDeliver-feeItem">
                        <div className="manageDeliver-feeTitle">
                            <span>PHÍ VẬN CHUYỂN</span>
                            <span onClick={() => handleOpen(zone5)}>
                                THAY ĐỔI
                            </span>
                        </div>
                        <div className="manageDeliver-feePlace">
                            <span>
                                VÙNG {zone5.starting} {"<"}--{">"} VÙNG{" "}
                                {zone5.destination}
                            </span>
                        </div>
                        <span>
                            {zone5.cost} <Crown size={30} variant="Bold" />
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
                                <input
                                    type="number"
                                    onChange={(e) => setCost(e.target.value)}
                                    defaultValue={info.cost}
                                />
                                <Crown size={20} variant="Bold" />
                            </div>
                        </div>
                        <div className="modal-changeShipBtn">
                            <button onClick={() => setOpen(false)}>
                                <Back size={32} />
                                Quay Lại
                            </button>
                            <button onClick={handleUpdate}>Xác Nhận</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageDeliver;

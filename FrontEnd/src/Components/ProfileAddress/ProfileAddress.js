import React, { useContext, useEffect, useState } from "react";
import "./profileAddress.scss";
import axios from "../../hooks/axios";
import { default as axiosOriginal } from "axios";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
const ProfileAddress = () => {
    const [show, setShow] = useState("none");

    const addAddress = () => {
        setShow("");
    };
    const cancel = () => {
        setShow("none");
    };

    const { user, loading, error, dispatch } = useContext(AuthContext);
    const [userDetals, setUserDetail] = useState();
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [provinceArray, setProvinceArray] = useState([]);
    const [distinctArray, setDistinctArray] = useState([]);
    const [wardArray, setWardArray] = useState([]);
    const [province, setProvince] = useState("");
    const [distinct, setDistinct] = useState("");
    const [ward, setWard] = useState("");
    const [provinceText, setProvinceText] = useState("");
    const [distinctText, setDistinctText] = useState("");
    const [wardText, setWardText] = useState("");
    const [address, setAddress] = useState("");
    const [reload, setReload] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/users/${user._id}`);

            setUserDetail(data);
        };
        fetchData();
    }, [user, reload]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosOriginal.get(
                    "https://provinces.open-api.vn/api/?depth=1"
                );
                setProvince(data[49].code);
                setProvinceText(data[49].name);
                setProvinceArray(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosOriginal.get(
                    `https://provinces.open-api.vn/api/p/${province}/?depth=2`
                );
                setDistinct(data.districts[0].code);
                setDistinctText(data.districts[0].name);
                setDistinctArray(data.districts);
            } catch (err) {
                console.log(err);
            }
        };
        if (province) {
            fetchData();
            setWardArray([]);
        }
    }, [province]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosOriginal.get(
                    `https://provinces.open-api.vn/api/d/${distinct}/?depth=2`
                );
                setWard(data.wards[0].code);
                setWardText(data.wards[0].name);
                setWardArray(data.wards);
            } catch (err) {
                console.log(err);
            }
        };
        if (distinct) {
            fetchData();
        }
    }, [distinct]);

    const submitHandler = async (e) => {
        e.preventDefault();
        const deliveryInfo = {
            fullName,
            phoneNumber,
            email,
            province: provinceText,
            distinct: distinctText,
            ward: wardText,
            address,
        };
        try {
            if (userDetals.deliveryInfo.length > 0) {
                await axios.patch(`/users/deliveryinfo/${user._id}`, [
                    ...userDetals.deliveryInfo,
                    deliveryInfo,
                ]);
                //TODO: Trường hợp nếu muốn set vô context
                // dispatch({
                //     type: "LOGIN_SUCCESS",
                //     payload: {
                //         ...user,
                //         deliveryInfo: [...user.deliveryInfo, deliveryInfo],
                //     },
                // });
            } else {
                await axios.patch(`/users/deliveryinfo/${user._id}`, [
                    deliveryInfo,
                ]);
                //TODO: Trường hợp nếu muốn set vô context
                // dispatch({
                //     type: "LOGIN_SUCCESS",
                //     payload: { ...user, deliveryInfo: [deliveryInfo] },
                // });
            }
            toast.success("Thông tin giao hàng được thêm thành công");
            cancel();
            setReload(!reload);
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    };
    const updateHandler = (id) => {};
    const deleteHandler = async (id) => {
        try {
            const newDeliveryInfo = userDetals.deliveryInfo.filter(
                (d) => d._id !== id
            );
            await axios.patch(
                `/users/deliveryinfo/${user._id}`,
                newDeliveryInfo
            );
            toast.success("Delete Delivery Information Successfully");
            setReload(!reload);
        } catch (err) {
            toast.error(err.message);
        }
    };
    return (
        <div className="profileAddress">
            <div className="profileAddress-container">
                <div className="profileAddress-title">
                    <span>Địa chỉ</span>
                    <button onClick={addAddress}>Thêm địa chỉ mới</button>
                </div>

                {userDetals &&
                    userDetals.deliveryInfo.map((d, index) => (
                        <div className="profileAddress-content" key={index}>
                            <span className="profileAddress-item">
                                Địa chỉ {index + 1}
                            </span>
                            <div className="profileAddress-name">
                                <span className="profileAddress-text">
                                    Họ và tên: {d.fullName}
                                </span>
                                <span className="profileAddress-text">
                                    Số điện thoại: {d.phoneNumber}
                                </span>
                            </div>
                            <span className="profileAddress-text">
                                Email: {d.email}
                            </span>
                            <span className="profileAddress-text">
                                Địa chỉ chi tiết: {d.address}, {d.ward},{" "}
                                {d.distinct}, {d.province}
                            </span>
                            <div className="profileAddress-btn">
                                <button onClick={() => deleteHandler(d._id)}>
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
            <div className={`addressModal ${show}`}>
                <form
                    className="addressModal-container"
                    onSubmit={submitHandler}
                >
                    <span>Thêm địa chỉ mới</span>
                    <div className="addressModal-box">
                        <div className="addressModal-boxList">
                            <span>Họ và tên</span>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                }}
                                required
                            />
                        </div>
                        <div className="addressModal-boxList">
                            <span>Số điện thoại</span>
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="addressModal-boxList">
                        <span>Email</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="addressModal-boxList">
                        <span>Thành phố</span>
                        <select
                            value={province}
                            onChange={(e) => {
                                const index =
                                    e.nativeEvent.target.selectedIndex;
                                setProvinceText(
                                    e.nativeEvent.target[index].text
                                );
                                setProvince(e.target.value);
                            }}
                            disabled
                        >
                            <option value="" key="default" disabled>
                                Chọn 1 Thành phố
                            </option>
                            {provinceArray.map((element) => (
                                <option value={element.code} key={element.code}>
                                    {element.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="addressModal-boxList">
                        <span>Quận</span>
                        <select
                            value={distinct}
                            onChange={(e) => {
                                const index =
                                    e.nativeEvent.target.selectedIndex;
                                setDistinctText(
                                    e.nativeEvent.target[index].text
                                );
                                setDistinct(e.target.value);
                            }}
                            required
                        >
                            <option value="" key="default" disabled>
                                Chọn 1 Quận
                            </option>
                            {distinctArray.map((element) => (
                                <option value={element.code} key={element.code}>
                                    {element.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="addressModal-boxList">
                        <span>Phường</span>
                        <select
                            value={ward}
                            onChange={(e) => {
                                const index =
                                    e.nativeEvent.target.selectedIndex;
                                setWardText(e.nativeEvent.target[index].text);
                                setWard(e.target.value);
                            }}
                            required
                        >
                            <option value="" key="default" disabled>
                                Chọn 1 Phường
                            </option>
                            {wardArray.map((element) => (
                                <option value={element.code} key={element.code}>
                                    {element.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="addressModal-boxList">
                        <span>Địa chỉ cụ thể</span>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>
                    <div className="addressModal-btn">
                        <button onClick={cancel}>Huỷ</button>
                        <button type="submit">Thêm địa chỉ</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileAddress;

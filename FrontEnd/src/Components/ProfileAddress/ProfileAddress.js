import React, { useEffect, useState } from 'react';
import './profileAddress.scss';
import { default as axiosOriginal } from 'axios';
const ProfileAddress = () => {
    const [show, setShow] = useState('none');

    const addAddress = () => {
        setShow('');
    };
    const cancel = () => {
        setShow('none');
    };

    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [provinceArray, setProvinceArray] = useState([]);
    const [distinctArray, setDistinctArray] = useState([]);
    const [wardArray, setWardArray] = useState([]);
    const [province, setProvince] = useState('');
    const [distinct, setDistinct] = useState('');
    const [ward, setWard] = useState('');
    const [provinceText, setProvinceText] = useState('');
    const [distinctText, setDistinctText] = useState('');
    const [wardText, setWardText] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosOriginal.get('https://provinces.open-api.vn/api/?depth=1');
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
                const { data } = await axiosOriginal.get(`https://provinces.open-api.vn/api/p/${province}/?depth=2`);
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
                const { data } = await axiosOriginal.get(`https://provinces.open-api.vn/api/d/${distinct}/?depth=2`);
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

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(fullName);
        console.log(phoneNumber);
        console.log(email);
        console.log(provinceText);
        console.log(distinctText);
        console.log(wardText);
        console.log(address);
    };

    return (
        <div className="profileAddress">
            <div className="profileAddress-container">
                <div className="profileAddress-title">
                    <span>Địa chỉ</span>
                    <button onClick={addAddress}>Thêm địa chỉ mới</button>
                </div>
                <div className="profileAddress-content">
                    <span className="profileAddress-item">Địa chỉ 1</span>
                    <div className="profileAddress-name">
                        <span className="profileAddress-text">Họ và tên: Nguyễn Tiến Phát</span>
                        <span className="profileAddress-text">Số điện thoại: 0999999999</span>
                    </div>
                    <span className="profileAddress-text">
                        Chi tiết: 450/8 Tô Ngọc Vân, Phường Tam Phú, TP Thủ Đức, TP Hồ Chí Minh
                    </span>
                    <div className="profileAddress-btn">
                        <button>Cập nhật</button>
                        <button>Xóa</button>
                    </div>
                </div>
                <div className="profileAddress-content">
                    <span className="profileAddress-item">Địa chỉ 1</span>
                    <div className="profileAddress-name">
                        <span className="profileAddress-text">Họ và tên: Nguyễn Tiến Phát</span>
                        <span className="profileAddress-text">Số điện thoại: 0999999999</span>
                    </div>
                    <span className="profileAddress-text">
                        Chi tiết: 450/8 Tô Ngọc Vân, Phường Tam Phú, TP Thủ Đức, TP Hồ Chí Minh
                    </span>
                    <div className="profileAddress-btn">
                        <button>Cập nhật</button>
                        <button>Xóa</button>
                    </div>
                </div>
            </div>
            <div className={`addressModal ${show}`}>
                <form className="addressModal-container" onSubmit={submitHandler}>
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
                            />
                        </div>
                        <div className="addressModal-boxList">
                            <span>Số điện thoại</span>
                            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                    </div>
                    <div className="addressModal-boxList">
                        <span>Email</span>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="addressModal-boxList">
                        <span>Thành phố</span>
                        <select
                            value={province}
                            onChange={(e) => {
                                const index = e.nativeEvent.target.selectedIndex;
                                setProvinceText(e.nativeEvent.target[index].text);
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
                                const index = e.nativeEvent.target.selectedIndex;
                                setDistinctText(e.nativeEvent.target[index].text);
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
                                const index = e.nativeEvent.target.selectedIndex;
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
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
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

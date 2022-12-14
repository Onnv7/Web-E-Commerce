import { CalendarEdit, Edit2 } from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import axios from "../../hooks/axios";
import { AuthContext } from "../../context/AuthContext";
import "./profileInfo.scss";
import { toast } from "react-toastify";

const ProfileInfo = () => {
    const { user, loading, error, dispatch } = useContext(AuthContext);
    const [username, setUserName] = useState("");
    const [name, setName] = useState("");
    const [birthday, setBirthday] = useState();
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        setUserName(user.username);
        setName(user.name);
        setBirthday(user.birthday);
        setGender(user.gender);
        setEmail(user.email);
        setPhoneNumber(user.phoneNumber);
    }, [user]);

    const saveHandler = async () => {
        if (
            username === "" ||
            name === "" ||
            birthday === "" ||
            gender === "" ||
            email === "" ||
            phoneNumber === ""
        ) {
            toast.warn("Please fill all forms");
            return;
        }
        const { data } = await axios.patch(`/users/${user._id}`, {
            username,
            name,
            birthday,
            gender,
            email,
            phoneNumber,
        });
        toast.success("User updated successfully");
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
    };

    return (
        <div className="profileInfo">
            <div className="profileInfo-container">
                <h1>Hồ sơ cá Nhân</h1>
                <div className="profileInfo-box">
                    <div className="profileInfo-user">
                        <div className="user-title">
                            <span>Tài khoản:</span>
                            <span>Họ và tên:</span>
                            <span>Ngày sinh:</span>
                            <span>Giới tính:</span>
                            <span>Email:</span>
                            <span>Số điện thoại:</span>
                        </div>
                        <div className="user-box">
                            <div className="user-input">
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    disabled
                                />
                                <Edit2 />
                            </div>
                            <div className="user-input">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Edit2 />
                            </div>
                            <div className="user-birth">
                                <input
                                    type="date"
                                    value={birthday}
                                    onChange={(e) =>
                                        setBirthday(e.target.value)
                                    }
                                />
                                <CalendarEdit />
                            </div>
                            <div
                                className="user-sex"
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <div className="sex-list">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        checked={gender === "male"}
                                    />
                                    <span>Nam</span>
                                </div>
                                <div className="sex-list">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        checked={gender === "female"}
                                    />
                                    <span>Nữ</span>
                                </div>
                            </div>
                            <div className="user-input">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Edit2 />
                            </div>
                            <div className="user-input">
                                <input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                    }
                                />
                                <Edit2 />
                            </div>
                        </div>
                    </div>
                    <button onClick={saveHandler}>Lưu thay đổi</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./passwordChange.scss";
import { CloseSquare, Eye, EyeSlash } from "iconsax-react";
import ResetPass from "../ResetPass/ResetPass";
import bcrypt from "bcryptjs";
import axios from "./../../hooks/axios";
import { toast } from "react-toastify";
const PasswordChange = () => {
    const [show, setShow] = useState(false);
    const { user, loading, error, dispatch } = useContext(AuthContext);
    const [userDetail, setUserDetail] = useState();
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("");
    const [reload, setReload] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/users/${user._id}`);
            setUserDetail(data);
        };
        fetchData();
    }, [user, reload]);
    const showReset = () => {
        setShow(true);
    };
    function checkTextBox() {
        if (currentPassword && newPassword && newPasswordConfirm) {
            return true;
        }
        return false;
    }
    async function isCorrectPassWord() {
        const isPasswordCorrect = await bcrypt.compare(
            currentPassword,
            userDetail.password
        );
        return isPasswordCorrect;
    }
    const changePasswordHandler = async () => {
        try {
            if (!checkTextBox()) {
                toast.warn("Please fill all forms");
                return;
            } else if ((await isCorrectPassWord()) === false) {
                toast.error("Current password is incorrect");
                return;
            } else if (newPassword !== newPasswordConfirm) {
                toast.error(
                    "New password and Confirm new password do not match"
                );
                return;
            }
            await axios.patch(`/users/password/${user._id}`, {
                id: user._id,
                password: newPassword,
            });
            toast.success("Password updated successfully");
            setCurrentPassword("");
            setNewPassword("");
            setNewPasswordConfirm("");
            setReload(!reload);
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <div className="passwordChange">
            <div className="passwordChange-container">
                <div className="passwordChange-title">
                    <span>Đổi mật khẩu</span>
                    <button onClick={showReset}>Quên mật khẩu</button>
                </div>
                <div className="passwordChange-content">
                    <div className="passwordChange-box">
                        <div className="passwordChange-titleList">
                            <span>Mật khẩu hiện tại:</span>
                            <span>Mật khẩu mới:</span>
                            <span>Mật khẩu cũ:</span>
                        </div>
                        <div className="passwordChange-inputList">
                            <div className="passwordChange-inputItem">
                                <input
                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) =>
                                        setCurrentPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="passwordChange-inputItem">
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) =>
                                        setNewPassword(e.target.value)
                                    }
                                />
                            </div>
                            <div className="passwordChange-inputItem">
                                <input
                                    type="password"
                                    value={newPasswordConfirm}
                                    onChange={(e) =>
                                        setNewPasswordConfirm(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <button onClick={changePasswordHandler}>
                        Đổi mật khẩu
                    </button>
                    {/* <div className="passwordChange-error">
                        <CloseSquare size={20} variant="Bold" color="#DC5B0E" />
                        <span>Mật khẩu hiện tại không chính xác</span>
                    </div> */}
                </div>
            </div>
            {show && <ResetPass setOpen={setShow} />}
        </div>
    );
};

export default PasswordChange;

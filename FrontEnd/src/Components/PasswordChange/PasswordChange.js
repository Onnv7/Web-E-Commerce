import React, { useState } from 'react';
import './passwordChange.scss';
import { CloseSquare, Eye, EyeSlash } from 'iconsax-react';
import ResetPass from '../ResetPass/ResetPass';

const PasswordChange = () => {
    const [show, setShow] = useState(false);
    const showReset = () => {
        setShow(true);
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
                                <input type="password" />
                                <EyeSlash />
                            </div>
                            <div className="passwordChange-inputItem">
                                <input type="password" />
                                <EyeSlash />
                            </div>
                            <div className="passwordChange-inputItem">
                                <input type="password" />
                                <EyeSlash />
                            </div>
                        </div>
                    </div>
                    <button>Đổi mật khẩu</button>
                    <div className="passwordChange-error">
                        <CloseSquare size={20} variant="Bold" color="#DC5B0E" />
                        <span>Mật khẩu hiện tại không chính xác</span>
                    </div>
                </div>
            </div>
            {show && <ResetPass setOpen={setShow} />}
        </div>
    );
};

export default PasswordChange;

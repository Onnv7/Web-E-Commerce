import React, { useEffect, useState } from 'react';
import './resetPass.scss';
import { Back, Call, CloseSquare, EyeSlash, Sms, TickCircle } from 'iconsax-react';

const ResetPass = ({ setOpen }) => {
    const [active, setActive] = useState(1);

    const setClick = (i) => {
        setActive(i);
    };
    const close = () => {
        setOpen(false);
    };

    return (
        <div className="resetPass">
            <div className={active === 1 ? 'resetPass-container' : 'tab-hide'}>
                <Back className="comfirmPass-icon" onClick={() => setOpen(false)} />
                <span>Đặt lại mật khẩu</span>
                <span>Chọn phương thức để đặt lại mật khẩu</span>
                <button>
                    <Sms variant="Bold" />
                    <span>Email (chưa cài đặt )</span>
                </button>
                <button onClick={() => setClick(2)}>
                    <Call variant="Bold" />
                    <span>Số điện thoại (09******70)</span>
                </button>
            </div>
            <div className={active === 2 ? 'comfirmPass-container' : 'tab-hide'}>
                <Back className="comfirmPass-icon" onClick={() => setClick(1)} />
                <span>Vui lòng nhập mã xác nhận</span>
                <span>Mã xác nhận sẽ được gửi đến số điện thoại 09******70</span>
                <div className="comfirmPass-input">
                    <input type="text" maxLength={1} />
                    <input type="text" maxLength={1} />
                    <input type="text" maxLength={1} />
                    <input type="text" maxLength={1} />
                    <input type="text" maxLength={1} />
                    <input type="text" maxLength={1} />
                </div>
                <span>Bạn chưa nhận được mã xác nhận ?</span>
                <div className="comfirmPass-resend">
                    <span>Gửi lại mã</span>
                    <span> hoặc </span>
                    <span>thử lại bằng phương pháp khác</span>
                </div>
                <button onClick={() => setClick(3)}>Tiếp theo</button>
                <div className="confirmPass-error">
                    <CloseSquare variant="Bold" size={20} />
                    <span>Mã xác nhận không chính xác</span>
                </div>
            </div>
            <div className={active === 3 ? 'rePass-container' : 'tab-hide'}>
                <Back className="comfirmPass-icon" />
                <span>Thiết lập mật khẩu mới</span>
                <div className="rePass-box">
                    <span>Mật khẩu mới</span>
                    <div className="rePass-input">
                        <input type="password" />
                        <EyeSlash />
                    </div>
                </div>
                <div className="rePass-box">
                    <span>Xác nhận mật khẩu</span>
                    <div className="rePass-input">
                        <input type="password" />
                        <EyeSlash />
                    </div>
                </div>
                <button onClick={() => setClick(4)}>Tiếp Theo</button>
                <div className="confirmPass-error">
                    <CloseSquare variant="Bold" size={20} />
                    <span>Xác nhận mật khẩu không chính xác</span>
                </div>
            </div>
            <div className={active === 4 ? 'completePass-container' : 'tab-hide'}>
                <span>Xin chúc mừng</span>
                <TickCircle className="completePass-icon" />
                <span>Quá trình thiết lặp lại mật khẩu đã hoàn tất</span>
                <button onClick={close}>Đóng</button>
            </div>
        </div>
    );
};

export default ResetPass;

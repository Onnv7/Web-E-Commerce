import React from 'react';
import './resetPass.scss';
import { Back, Call, CloseSquare, EyeSlash, Sms, TickCircle } from 'iconsax-react';

const ResetPass = () => {
    return (
        <div className="resetPass none">
            <div className="resetPass-container none">
                <span>Đặt lại mật khẩu</span>
                <span>Chọn phương thức để đặt lại mật khẩu</span>
                <button>
                    <Sms variant="Bold" />
                    <span>Email (chưa cài đặt )</span>
                </button>
                <button>
                    <Call variant="Bold" />
                    <span>Số điện thoại (09******70)</span>
                </button>
            </div>
            <div className="comfirmPass-container none">
                <Back className="comfirmPass-icon" />
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
                <button>Tiếp theo</button>
                <div className="confirmPass-error">
                    <CloseSquare variant="Bold" size={20} />
                    <span>Mã xác nhận không chính xác</span>
                </div>
            </div>
            <div className="rePass-container none">
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
                <button>Tiếp Theo</button>
                <div className="confirmPass-error">
                    <CloseSquare variant="Bold" size={20} />
                    <span>Xác nhận mật khẩu không chính xác</span>
                </div>
            </div>
            <div className="completePass-container none">
                <span>Xin chúc mừng</span>
                <TickCircle className="completePass-icon" />
                <span>Quá trình thiết lặp lại mật khẩu đã hoàn tất</span>
                <button>Đóng</button>
            </div>
        </div>
    );
};

export default ResetPass;

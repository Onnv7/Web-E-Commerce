import React, { useEffect, useState } from 'react';
import './resetPass.scss';
import { Back, Call, CloseSquare, EyeSlash, Sms, TickCircle } from 'iconsax-react';

const ResetPass = ({ style }) => {
    const [form1, setForm1] = useState('');
    const [form2, setForm2] = useState('none');
    const [form3, setForm3] = useState('none');
    const [form4, setForm4] = useState('none');
    const [closeForm, setCloseForm] = useState('');
    const resetByPhone = () => {
        setForm1('none');
        setForm2('');
    };
    const nextFrom3 = () => {
        setForm2('none');
        setForm3('');
    };
    const nextForm4 = () => {
        setForm3('none');
        setForm4('');
    };
    const close = () => {
        setForm4('none');
        setCloseForm('none');
        // need help
    };
    const backForm1 = () => {
        setForm1('');
        setForm2('none');
    };

    return (
        <div className={style === 'show' ? `resetPass` : 'resetPass none'}>
            <div className={`resetPass-container ${form1}`}>
                <span>Đặt lại mật khẩu</span>
                <span>Chọn phương thức để đặt lại mật khẩu</span>
                <button>
                    <Sms variant="Bold" />
                    <span>Email (chưa cài đặt )</span>
                </button>
                <button onClick={resetByPhone}>
                    <Call variant="Bold" />
                    <span>Số điện thoại (09******70)</span>
                </button>
            </div>
            <div className={`comfirmPass-container ${form2}`}>
                <Back className="comfirmPass-icon" onClick={backForm1} />
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
                <button onClick={nextFrom3}>Tiếp theo</button>
                <div className="confirmPass-error">
                    <CloseSquare variant="Bold" size={20} />
                    <span>Mã xác nhận không chính xác</span>
                </div>
            </div>
            <div className={`rePass-container ${form3}`}>
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
                <button onClick={nextForm4}>Tiếp Theo</button>
                <div className="confirmPass-error">
                    <CloseSquare variant="Bold" size={20} />
                    <span>Xác nhận mật khẩu không chính xác</span>
                </div>
            </div>
            <div className={`completePass-container ${form4}`}>
                <span>Xin chúc mừng</span>
                <TickCircle className="completePass-icon" />
                <span>Quá trình thiết lặp lại mật khẩu đã hoàn tất</span>
                <button onClick={close}>Đóng</button>
            </div>
        </div>
    );
};

export default ResetPass;

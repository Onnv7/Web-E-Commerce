import { ArrowDown2, Back, Crown, MessageText1 } from 'iconsax-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './paymentProperty.scss';

const PaymentProperty = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/cart');
    };
    return (
        <div className="paymentProperty">
            <div className="paymentProperty-container">
                <div className="PaymentProperty-content">
                    <div className="paymentProperty-address">
                        <div className="paymentProperty-addressTitle">
                            <span>Thông tin người nhận và địa chỉ nhận hàng</span>
                            <span>Thay đổi</span>
                        </div>
                        <div className="paymentProperty-addressInfo">
                            <span>Họ và tên: Nguyễn Tiến Phát</span>
                            <span>Số điện thoại: 0901905570</span>
                            <span>
                                Địa chỉ: 434, đường nguyễn văn a, phường phạm xyz, TP. không gian, TP Hồ Chí Minh.
                            </span>
                        </div>
                    </div>
                    <div className="paymentProperty-product">
                        <div className="paymentProperty-productBrand">
                            <span>Thế giới di động</span>
                            <button>
                                <MessageText1 variant="Bold" />
                                Liên hệ
                            </button>
                        </div>
                        <div className="paymentProperty-productBox">
                            <img src="../Img/iphone14.png" alt="" />
                            <div className="paymentProperty-productProperty">
                                <div className="paymentProperty-productContent">
                                    <span>Iphone 14 Pro Max - Deep Purple (Tím) - Hàng chính hãng</span>
                                    <div className="paymentProperty-productQuantity">
                                        <div className="paymentProperty-productCount">
                                            <span>Số lượng</span>
                                            <input type="text" value={1} />
                                        </div>
                                        <div className="paymentProperty-moneySum">
                                            <span>Tổng tiền</span>
                                            <span>
                                                800 <Crown variant="Bold" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <span>
                                    Tùy chọn <ArrowDown2 variant="Bold" className="paymentProperty-icon" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="paymentProperty-comfirm">
                    <div className="paymentProperty-confirmItem">
                        <span>Tổng số lượng</span>
                        <span>2</span>
                    </div>
                    <div className="paymentProperty-confirmItem">
                        <span>Tổng thanh toán</span>
                        <span>
                            2000 <Crown variant="Bold" />
                        </span>
                    </div>
                    <div className="paymentProperty-confirmItem">
                        <span>Tổng thanh toán</span>
                        <span>
                            2000 <Crown variant="Bold" />
                        </span>
                    </div>
                    <div className="paymentProperty-confirmItem">
                        <span>Tổng thanh toán</span>
                        <span>
                            2000 <Crown variant="Bold" />
                        </span>
                    </div>
                    <button>Xác nhận</button>
                    <button onClick={handleBack}>
                        <Back size={32} />
                        Quay lại
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentProperty;

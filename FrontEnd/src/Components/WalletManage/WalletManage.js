import React from 'react';
import { Crown } from 'iconsax-react';
import './walletManage.scss';
const WalletManage = () => {
    return (
        <div className="walletManage">
            <div className="walletManage-container">
                <span>Quản lý ví</span>
                <div className="walletManage-current">
                    <span>Số dư hiện tại</span>
                    <div className="walletManage-box">
                        <span>1.000.000</span>
                        <Crown className="walletManage-icon" variant="Bold" size={34} />
                    </div>
                    <div className="walletManage-payBox none">
                        <div className="walletManage-title">
                            <span>Nạp Ruby</span>
                            <span></span>
                            <span>Rút Ruby</span>
                        </div>
                        <div className="walletManage-payment">
                            <span>
                                Tỷ lệ quy đổi: 1 <Crown className="walletManage-icon" variant="Bold" /> = 1$
                            </span>
                            <div className="walletManage-paymentBox">
                                <div className="walletManage-input">
                                    <input type="number" placeholder="Nhập số lượng Ruby muốn nạp" />
                                    <Crown className="walletManage-icon" variant="Bold" />
                                </div>
                                <button>Nạp</button>
                            </div>
                            <div className="walletManage-paymentForm">
                                <span>Hình thức thanh toán</span>
                                <img src="../Img/1-payment.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="walletManage-payBox2">
                        <div className="walletManage-title2">
                            <span>Nạp Ruby</span>
                            <span></span>
                            <span>Rút Ruby</span>
                        </div>
                        <div className="walletManage-payment">
                            <span>
                                Tỷ lệ quy đổi: 1 <Crown className="walletManage-icon" variant="Bold" /> = 1$
                            </span>
                            <div className="walletManage-paymentBox">
                                <div className="walletManage-input">
                                    <input type="number" placeholder="Nhập số lượng Ruby muốn rút" min={1} />
                                    <Crown className="walletManage-icon" variant="Bold" />
                                </div>
                                <button>Rút</button>
                            </div>
                            <div className="walletManage-paymentForm">
                                <span>Hình thức thanh toán</span>
                                <img src="../Img/1-payment.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WalletManage;

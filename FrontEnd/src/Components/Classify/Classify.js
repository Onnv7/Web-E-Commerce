import { Back, CloseCircle, Crown } from 'iconsax-react';
import React from 'react';
import './classify.scss';

const Classify = ({ setOpen }) => {
    return (
        <div className="modal-classify">
            <div className="modal-classifyContainer">
                <span>Thêm phân loại</span>
                <div className="product-classifyBox">
                    <div className="product-classifyList">
                        <span>Tên Phân Loại</span>
                        <input type="text" />
                    </div>
                    <div className="product-classifyList">
                        <span>Số Lượng</span>
                        <input type="text" />
                    </div>
                    <div className="product-classifyList">
                        <span>Giá Bán</span>
                        <div className="product-classifyInput">
                            <input type="text" />
                            <Crown variant="Bold" size={20} />
                        </div>
                    </div>
                </div>
                <div className="modal-classifyBtn">
                    <button onClick={() => setOpen(false)}>
                        <Back /> Quay Lại
                    </button>
                    <button>Thêm</button>
                </div>
            </div>
        </div>
    );
};

export default Classify;

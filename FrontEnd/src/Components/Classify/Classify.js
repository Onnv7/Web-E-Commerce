import { Back, CloseCircle, Crown } from "iconsax-react";
import React, { useState } from "react";
import "./classify.scss";

const Classify = ({ setOpen, setClassifies }) => {
    const [name, setclassifyName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const addClassifyHandler = () => {
        setClassifies((pre) => [
            ...pre,
            {
                name,
                quantity,
                price,
            },
        ]);
    };
    return (
        <div className="modal-classify">
            <div className="modal-classifyContainer">
                <span>Thêm phân loại</span>
                <div className="modal-classifyBox">
                    <div className="product-classifyList">
                        <span>Tên Phân Loại</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setclassifyName(e.target.value)}
                        />
                    </div>
                    <div className="product-classifyList">
                        <span>Số Lượng</span>
                        <input
                            type="number"
                            value={quantity}
                            min={0}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>
                    <div className="product-classifyList">
                        <span>Giá Bán</span>
                        <div className="product-classifyInput">
                            <input
                                type="number"
                                value={price}
                                min={0}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <Crown variant="Bold" size={20} />
                        </div>
                    </div>
                </div>
                <div className="modal-classifyBtn">
                    <button onClick={() => setOpen(false)}>
                        <Back /> Quay Lại
                    </button>
                    <button onClick={addClassifyHandler}>Thêm</button>
                </div>
            </div>
        </div>
    );
};

export default Classify;

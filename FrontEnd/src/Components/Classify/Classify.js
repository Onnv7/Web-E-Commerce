import { Back, CloseCircle, Crown } from "iconsax-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "./classify.scss";

const Classify = ({ setOpen, classifies, setClassifies }) => {
    const [name, setclassifyName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const checkExist = () => {
        if (classifies.find((c) => c.name === name)) {
            return true;
        }
        return false;
    };
    const addClassifyHandler = () => {
        console.log(checkExist());
        if (checkExist()) {
            toast.error("Phân loại đã tồn tại trong sản phẩm");
            return;
        }
        setClassifies((pre) => [
            ...pre,
            {
                name,
                quantity,
                price,
            },
        ]);
        toast.success("Phân loại đã được thêm thành công");
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

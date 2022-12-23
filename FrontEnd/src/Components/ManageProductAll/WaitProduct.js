import { Back, Crown } from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./waitProduct.scss";
import axios from "./../../hooks/axios";
import { toast } from "react-toastify";

const WaitProduct = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const { user } = useContext(AuthContext);
    const [shop, setShop] = useState();
    const [checkouts, setCheckouts] = useState([]);
    const [checkoutsAuctions, setCheckoutsAuctions] = useState([]);

    const [reload, setReload] = useState(false);
    const [seller, setSeller] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`shops/${user._id}`);
            console.log(user);
            console.log(data);
            setShop(data);
        };
        fetchData();
    }, [user]);

    useEffect(() => {
        if (shop) {
            const fetchData = async () => {
                const { data } = await axios.get(
                    `/checkouts/shop/waiting/${shop._id}`
                );
                console.log(data);
                setCheckouts(data);
            };
            fetchData();
        }
    }, [shop, reload]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/shops/${user._id}`);
            const resProduct = await axios.get(
                `/checkoutAuction/shop/waiting/${data._id}`
            );
            setCheckoutsAuctions(resProduct.data);
            console.log(resProduct.data);
        };
        fetchData();
    }, [user, reload]);

    const prepareProductHandler = async (id) => {
        try {
            await axios.patch(`/checkouts/${id}`, {
                status: "delivering",
            });
            setReload(!reload);
            toast.success("Chuẩn bị hàng thành công");
        } catch (error) {
            toast.error(error.message);
        }
    };
    const prepareProductAuctionHandler = async (id) => {
        try {
            await axios.patch(`/checkoutAuction/status/${id}`, {
                status: "delivering",
            });
            setReload(!reload);
            toast.success("Chuẩn bị hàng thành công");
        } catch (error) {
            toast.error(error.message);
        }
    };
    const handleOpen = (id, note) => {
        setOpen(true);
        setOpen1(true);
        setSeller({
            _id: id,
            name: user?.name || user?.username,
            phoneNumber: user?.phoneNumber,
            addressInfo: shop.addressInfo,
            note,
        });
    };
    const handleClose = () => {
        setOpen(false);
        setOpen1(false);
        setOpen2(false);
    };
    const handleClosePro = () => {
        setOpen(false);
        setOpen1(false);
        setOpen2(false);
        prepareProductHandler(seller._id);
    };
    return (
        <>
            {checkouts &&
                checkouts.map((checkout) => (
                    <div className="manageProduct-List" key={checkout._id}>
                        <div className="manageProduct-user">
                            <span>Mã đơn: {checkout._id}</span>
                        </div>
                        <div className="manageProduct-item">
                            <div className="manageProduct-content">
                                {checkout.productList.map((product, index) => (
                                    <div
                                        className="manageProduct-box"
                                        key={index}
                                    >
                                        <div className="manageProduct-product">
                                            <img src={product.imgPath} alt="" />
                                            <div className="manageProduct-info">
                                                <span>{product.name}</span>
                                                <div className="manageProduct-infoType">
                                                    <span>
                                                        Phân loại:{" "}
                                                        {
                                                            product.classifyProduct
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <span>{product.quantityProduct}</span>
                                    </div>
                                ))}
                            </div>
                            <span>
                                {checkout.totalCost}{" "}
                                <Crown variant="Bold" size={20} />
                            </span>
                            <span>Chờ lấy hàng</span>
                            <div
                                className="manageProduct-comfirm"
                                onClick={() =>
                                    handleOpen(checkout._id, checkout.note)
                                }
                            >
                                <span>Chuẩn bị đơn hàng</span>
                            </div>
                        </div>
                        {open && (
                            <div className="waitProduct-modal">
                                {open1 && (
                                    <div className="waitProduct-modalContainer">
                                        <span>Chuẩn bị đơn hàng</span>
                                        <div className="waitProduct-modalBox">
                                            <div className="waitProduct-modalTitle">
                                                <span>
                                                    Địa chỉ kho hàng / lấy hàng
                                                </span>
                                            </div>
                                            <div className="waitProduct-modalContent">
                                                <span>
                                                    Họ và tên:{" "}
                                                    {seller?.name ||
                                                        seller?.username}
                                                </span>
                                                <span>
                                                    Số điện thoại:{" "}
                                                    {seller?.phoneNumber}
                                                </span>
                                                <span>
                                                    Địa chỉ:{" "}
                                                    {`${seller.addressInfo.address}, ${seller.addressInfo.ward}, ${seller.addressInfo.distinct}, ${seller.addressInfo.province}`}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="waitProduct-modalBox">
                                            <div className="waitProduct-modalTitle">
                                                <span>Lưu ý cho người bán</span>
                                            </div>
                                            <div className="waitProduct-modalContent">
                                                <span>{seller?.note}</span>
                                            </div>
                                        </div>
                                        <div className="waitProduct-modalBtn">
                                            <button onClick={handleClose}>
                                                <Back size={32} />
                                                Quay lại
                                            </button>
                                            <button
                                                onClick={() => {
                                                    handleClosePro();
                                                }}
                                            >
                                                Hoàn Tất
                                            </button>
                                        </div>
                                        <span>
                                            Xe vận chuyển sẽ đến lấy hàng trong
                                            ngày khi bạn hoàn tất quá trình
                                            chuẩn bị đơn hàng.
                                        </span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            {checkoutsAuctions &&
                checkoutsAuctions.map((c) => (
                    <div className="manageProduct-List" key={c._id}>
                        <div className="manageProduct-user">
                            <span>Mã đơn: {c._id}</span>
                        </div>
                        <div className="manageProduct-item">
                            <div className="manageProduct-content">
                                <div className="manageProduct-box">
                                    <div className="manageProduct-product">
                                        <img src={c.product.img} alt="" />
                                        <div className="manageProduct-info">
                                            <span>{c.product.name}</span>
                                        </div>
                                    </div>
                                    <span>{c.product.quantity}</span>
                                </div>
                            </div>
                            <span>
                                {c.totalCost} <Crown variant="Bold" size={20} />
                            </span>
                            <span>Chờ lấy hàng</span>
                            <div
                                className="manageProduct-comfirm"
                                onClick={() =>
                                    prepareProductAuctionHandler(c._id)
                                }
                            >
                                <span>Chuẩn bị đơn hàng</span>
                            </div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default WaitProduct;

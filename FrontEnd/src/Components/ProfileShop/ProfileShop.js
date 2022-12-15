import { GalleryEdit } from 'iconsax-react';
import React, { useContext, useEffect, useState } from 'react';
import './profileShop.scss';
import axios from './../../hooks/axios.js';
import { toast } from 'react-toastify';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
// Register the plugin
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { AuthContext } from '../../context/AuthContext';

// Register the plugins
registerPlugin(
    FilePondPluginFileValidateSize,
    FilePondPluginImageValidateSize,
    FilePondPluginFileEncode,
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
);
const ProfileShop = () => {
    const { user, dispatch } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [files, setFiles] = useState([]);
    const [mainCategory, setMainCategory] = useState('');
    const [mainCategories, setMainCategories] = useState([]);
    const [subCategory, setSubCategory] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [shop, setShop] = useState();
    const [shopImg, setShopImg] = useState();
    const [reload, setReload] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/shops/${user._id}`);
            if (data) {
                console.log(data);
                setShop(data);
                setName(data.name);
                setMainCategory(data.mainCategory);
                setSubCategories(data.subCategories);
                setShopImg(data.imgPath);
            }
        };
        fetchData();
    }, [user, reload]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/categories/');
            setMainCategories(data);
        };
        fetchData();
    }, []);

    const addCategoryHandler = () => {
        if (subCategories.find((s) => s === subCategory)) {
            toast.warning('Danh mục đã tồn tại trong shop');
            return;
        }
        setSubCategories((pre) => [...pre, subCategory]);
        setSubCategory('');
    };
    const getImageData = (item) => {
        return `{"type":"${item.fileType.split(';')[0]}","data":"${item.getFileEncodeBase64String()}"}`;
    };
    const createHandler = async () => {
        try {
            let img;
            if (files[0] === undefined) {
                toast.warn("You haven't added a photo yet");
                return;
            } else {
                img = getImageData(files[0]);
            }
            await axios.post('/shops', {
                name,
                user: user._id,
                mainCategory,
                subCategories,
                img,
            });
            toast.success('Tạo shop thành công');
            setReload(!reload);
            //TODO: Cần kiếm cách để trang seller reload loại
        } catch (err) {
            toast.error(err.message);
        }
    };

    const updateHandler = async () => {
        try {
            let img;
            if (files[0] === undefined) {
                //TODO: Nếu 0 tải ảnh
                // toast.warn("You haven't added a photo yet");
                // return;
            } else {
                img = getImageData(files[0]);
            }
            await axios.patch(`/shops/${user._id}`, {
                name,
                mainCategory,
                subCategories,
                img,
            });
            toast.success('Cập nhật shop thành công');
            setReload(!reload);
        } catch (err) {
            toast.error(err.message);
        }
    };
    return (
        <div className="profileShop">
            <div className="profileShop-container">
                <span>Hồ Sơ Shop</span>
                <div className="profileShop-img">
                    <img src={shopImg ? shopImg : '/Img/default-user.png'} alt="shop" />
                    {/* <GalleryEdit className="profileShop-icon" size={44} /> */}
                    <FilePond
                        files={files}
                        onupdatefiles={setFiles}
                        allowMultiple={false}
                        maxFiles={3}
                        maxFileSize="3MB"
                        //server="/api"
                        name="img"
                        labelIdle="Upload Shop Avatar"
                    />
                </div>
                <div className="profileShop-name">
                    <span>Tên Shop</span>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="profileShop-product">
                    <span>Ngành hàng</span>
                    <div className="profleShop-productList">
                        {mainCategories.map((category) => (
                            <span
                                key={category._id}
                                onClick={() => setMainCategory(category._id)}
                                style={{
                                    backgroundColor: category._id === mainCategory ? 'var(--sub-color)' : null,
                                    color: category._id === mainCategory ? '#fff' : null,
                                }}
                            >
                                {category.name}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="profileShop-product">
                    <span>Danh mục</span>
                    <div className="profileShop-productBox">
                        <input type="text" value={subCategory} onChange={(e) => setSubCategory(e.target.value)} />
                        <button onClick={addCategoryHandler}>Thêm</button>
                        <div className="profleShop-productList">
                            {subCategories.map((subCategory) => (
                                <span key={subCategory}>{subCategory}</span>
                            ))}
                        </div>
                    </div>
                </div>
                {shop ? (
                    <button onClick={updateHandler}>Cập nhật Shop</button>
                ) : (
                    <button onClick={createHandler}>Tạo Shop</button>
                )}
            </div>
        </div>
    );
};

export default ProfileShop;

import { CloseCircle } from "iconsax-react";
import React, { useState, useEffect } from "react";
import axios from "./../../hooks/axios";
import "./manageCategory.scss";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageValidateSize from "filepond-plugin-image-validate-size";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
// Register the plugin
// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(
    FilePondPluginFileValidateSize,
    FilePondPluginImageValidateSize,
    FilePondPluginFileEncode,
    FilePondPluginImagePreview,
    FilePondPluginImageResize
);

const ManageCategory = () => {
    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState([]);
    const [files, setFiles] = useState([]);
    const [name, setName] = useState("");
    const [reload, setReload] = useState(false);
    useEffect(() => {
        try {
            const fetchData = async () => {
                const { data } = await axios.get("/categories/");
                setInfo(data);
            };
            fetchData();
        } catch (error) {
            console.error(error);
        }
    }, [info.length, reload]);
    const getImageData = (item) => {
        return `{"type":"${
            item.fileType.split(";")[0]
        }","data":"${item.getFileEncodeBase64String()}"}`;
    };
    const createMainCategoryHandler = async () => {
        let img;
        if (files[0] === undefined) {
            alert("You haven't added a photo yet");
            return;
        } else {
            img = getImageData(files[0]);
        }
        try {
            await axios.post("/categories", {
                name,
                img,
            });
            setReload(!reload);
            alert("Thêm danh mục chính thành công");
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div className="manageCategory">
            {info.map((item) => (
                <div className="manageCategory-Item">
                    <img src={item.imgPath} alt="" />
                    <span>{item.name}</span>
                    <CloseCircle className="manageCategory-Icon" size={24} />
                </div>
            ))}
            <div className="manageCategory-Item">
                <img src="../../Img/iphone14.png" alt="" />

                <span>Loại 1</span>
                <CloseCircle className="manageCategory-Icon" size={24} />
            </div>
            <button onClick={() => setOpen(true)}>Tạo Danh Mục</button>
            <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                maxFiles={3}
                maxFileSize="3MB"
                //server="/api"
                name="img"
                labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {open && (
                <div className="modal-manageCategory">
                    <div className="modal-manageCategoryContainer">
                        <span>Tạo Danh Mục</span>
                        <FilePond
                            files={files}
                            onupdatefiles={setFiles}
                            allowMultiple={false}
                            maxFiles={3}
                            maxFileSize="3MB"
                            //server="/api"
                            name="img"
                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                        />
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <div className="modal-manageCategoryBtn">
                            <button onClick={() => setOpen(false)}>Hủy</button>
                            <button onClick={createMainCategoryHandler}>
                                Tạo
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageCategory;

import { CalendarEdit, Edit2 } from "iconsax-react";
import React, { useContext, useEffect, useState } from "react";
import axios from "../../hooks/axios";
import { AuthContext } from "../../context/AuthContext";
import "./avatarChange.scss";
import { toast } from "react-toastify";
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

const AvatarChange = () => {
    const { user, loading, error, dispatch } = useContext(AuthContext);
    const [files, setFiles] = useState([]);
    const submitHandler = async (e) => {
        e.preventDefault();
        let img;
        if (files[0] === undefined) {
            toast.warn("You haven't added a photo yet");
            return;
        } else {
            img = getImageData(files[0]);
        }
        const { data } = await axios.patch(`/users/image/${user._id}`, { img });
        const { password, ...others } = data;
        if (data.success === false) toast.error("Upload avatar fail");
        else {
            toast.success("Upload Avatar success");
            dispatch({ type: "LOGIN_SUCCESS", payload: others });
        }
    };
    const getImageData = (item) => {
        return `{"type":"${
            item.fileType.split(";")[0]
        }","data":"${item.getFileEncodeBase64String()}"}`;
    };
    return (
        <div className="profileInfo">
            <div className="profileInfo-container">
                <h1>Ảnh đại diện cá Nhân</h1>
                <form onSubmit={submitHandler}>
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
                    <div className="profileInfo-box">
                        <button type="submit">Lưu thay đổi</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AvatarChange;

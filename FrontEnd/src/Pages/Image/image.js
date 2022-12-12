import React, { useState } from "react";
import ReactDOM from "react-dom";

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

const Ruby = () => {
    const [files, setFiles] = useState([]);
    return (
        <div class="dienthoai">
            <form action="http://localhost:8800/backend/products" method="post">
                <input type="text" name="name" placeholder="name" />
                <input type="text" name="price" placeholder="price" />
                {/* <input type="text" name="shop" placeholder="shop" /> */}
                {/* <input type="text" name="quantity" placeholder="quantity" /> */}
                <input type="text" name="brand" placeholder="brand" />
                <input
                    type="text"
                    name="description"
                    placeholder="description"
                />
                <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    maxFiles={3}
                    maxFileSize="3MB"
                    //server="/api"
                    name="img"
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
                <input type="submit" value="Create product" />
            </form>
            <form
                action="http://localhost:8800/backend/categories"
                method="post"
            >
                <input type="text" name="name" placeholder="name" />
                <FilePond
                    files={files}
                    onupdatefiles={setFiles}
                    allowMultiple={true}
                    maxFiles={3}
                    maxFileSize="3MB"
                    //server="/api"
                    name="img"
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
                <input type="submit" value="Create main category" />
            </form>
        </div>
    );
};
export default Ruby;

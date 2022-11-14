


import React from "react";
import getUrlImage from "../../hooks/getImage.js";
import axios from "../../hooks/axios.js";
import { useState, useEffect } from "react";
const Show = () => {
    const [imgs, setImgs] = useState([]);
    var props = [1, 2, 3, 4, 5]
    // const res = axios.get("products/635fb1f7acee8d4442244077");
    // console.log("🚀 ~ file: show.js ~ line 11 ~ Show ~ res", res)
    // const img = res.data.img;
    // const rs = getUrlImage(img);

    // console.log("🚀 ~ file: showimage.js ~ line 21 ~ ShowImage ~ rs", rs)
    // console.log("🚀 ~ file: showimage.js ~ line 27 ~ ShowImage ~ img", img)
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('/products/635fb1f7acee8d4442244077');
                //console.log("🚀 ~ file: show.js ~ line 23 ~ fetchData ~ url", res.data.coverImagePath)
                const imgs = res.data;
                //const rs = getUrlImage(img);

                console.log("🚀 ~ file: show.js ~ line 25 ~ fetchData ~ url", res.data)

                setImgs(imgs);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])
    return (
        <div style={{ padding: 20 }}>
            {/* <ToDo /> */}
            {/* {props.map((prop) =>
                <h1 key={prop}>{prop}</h1>
            )} */}

            {imgs.map((img) =>
                <img src={img}></img>
            )}
        </div>
    );

};
export default Show;

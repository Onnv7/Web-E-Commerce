import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8800/backend",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
http.defaults.headers.common["Cookie"] = "access_token";
export default http;

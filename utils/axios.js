import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3014",
    withCredentials: true
});
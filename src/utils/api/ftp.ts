import axios from "axios";
import { getToken } from "./get-token";

const ftp = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_URI,
  timeout: 30000,
  headers: {
    Accept: "*/*",
    "Content-Type": "multipart/form-data",
  },
});

ftp.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (!!token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default ftp;

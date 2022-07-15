import axios from "axios";
import { getToken } from "./get-token";

const http = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_URI,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;

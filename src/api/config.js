import axios from "axios";
import { userAdminLocalStorage, userLocalStorage } from "./localService";
import { store } from "../main";
import { setLoadingOff, setLoadingOn } from "../redux/spinnerSlice";

export const TOKEN_CYBER = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgNDEiLCJIZXRIYW5TdHJpbmciOiIxNy8xMC8yMDI0IiwiSGV0SGFuVGltZSI6IjE3MjkxMjMyMDAwMDAiLCJuYmYiOjE3MTE2NDUyMDAsImV4cCI6MTcyOTI3MDgwMH0.eZHFmA2-LPiTU4hhprKRbSSPHBM77j9yic31O97Z0rc";

const token = userLocalStorage.get()?.token;

export const configHeaders = () => {
  return {
    // Authorization: `Bearer ${token}`,
    token,
    tokenCybersoft: TOKEN_CYBER,
  };
};

export const BASE_URL = "https://airbnbnew.cybersoft.edu.vn/api";
export const https = axios.create({
  baseURL: BASE_URL,
  headers: {
    ...configHeaders(),
  },
});

export const httpsNoLoading = axios.create({
  baseURL: BASE_URL,
  headers: {
    ...configHeaders(),
  },
});

https.interceptors.request.use(
  config => {
    store.dispatch(setLoadingOn());
    return config;
  },
  err => {
    store.dispatch(setLoadingOff());
    return Promise.reject(err);
  },
);

https.interceptors.response.use(
  res => {
    store.dispatch(setLoadingOff());
    return res;
  },
  err => {
    store.dispatch(setLoadingOff());
    return Promise.reject(err);
  },
);

// DUNG CHO ADMIN PAGE
const tokenAdmin = userAdminLocalStorage.get()?.token;
export const httpsAdmin = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `${tokenAdmin}`,
    tokenCybersoft: TOKEN_CYBER,
  },
});

httpsAdmin.interceptors.request.use(
  config => {
    store.dispatch(setLoadingOn());
    return config;
  },
  err => {
    store.dispatch(setLoadingOff());
    return Promise.reject(err);
  },
);

httpsAdmin.interceptors.response.use(
  res => {
    store.dispatch(setLoadingOff());
    return res;
  },
  err => {
    store.dispatch(setLoadingOff());
    return Promise.reject(err);
  },
);

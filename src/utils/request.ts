import axios from "axios";
import { cleanObject } from ".";
import { MAIN_URL } from "./vars";
import { message } from "antd";
import { getToken } from "./auth-provider";

const instance = axios.create({
  baseURL: MAIN_URL,
  timeout: 3000,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  if (getToken()) {
    config.headers!.Authorization = getToken();
  }
  return config;
});

instance.interceptors.response.use((response: any) => {
  // console.log(111, response);
  if (response.status === 200) {
    message.info("请求成功");
  } else {
    message.warning(response.message);
  }
  return response;
});

export const get = (url: string, params?: any) => {
  params = cleanObject(params);
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        message.warning(err.message);
        reject(err.message);
      });
  });
};

export const post = (url: string, body?: any) => {
  body = cleanObject(body);
  return new Promise((resolve, reject) => {
    instance
      .post(url, body)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        message.warning(err.message);
        reject(err.message);
      });
  });
};

import axios from "axios";
import { cleanObject } from ".";
import { MAIN_URL } from "./vars";

const instance = axios.create({
  baseURL: MAIN_URL,
  timeout: 3000,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((response) => {
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
        reject(err.data);
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
        reject(err.data);
      });
  });
};

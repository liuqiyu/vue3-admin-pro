import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const service = axios.create();

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error: unknown) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    console.log(response);
  },
  (error: unknown) => {
    return Promise.reject(error);
  }
);

export default service;

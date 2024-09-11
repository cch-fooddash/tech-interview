import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export const baseURL = 'https://user-api.dev.fooddash.co.kr';

export const api = axios.create({
  baseURL: `${baseURL}/api`,
  timeout: 1000 * 30,
});

api.interceptors.request.use(
  (config) => {
    console.groupCollapsed(`Request at ${new Date().toLocaleTimeString()} : ${config.url}`);
    console.log(`%c URL =>' ${config.url}`, 'color: pink');
    console.log(`%c BODY => ${JSON.stringify(config.data)}`, 'color: pink');
    console.groupEnd();

    config.headers['x-access-token'] = 'jack';
    return config;
  },
  (error) => {
    console.log(error.response.code);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.groupCollapsed(
      `Response[${response.status}] at ${new Date().toLocaleTimeString()} : ${response.config.url}`
    );
    console.log(`%c BODY => ${JSON.stringify(response.data)}`, 'color: orange');
    console.groupEnd();

    return response;
  },
  (error: AxiosError) => {
    console.log(error.response?.status);
    const data =
      (error.response?.data as {
        title: string;
        code: string;
        detail: string;
      }) || undefined;

    toast.error(data?.detail || '오류가 발생 하였습니다.\n잠시 후 다시 시도 해주세요', {
      duration: 5000,
    });
    return Promise.reject(error);
  }
);

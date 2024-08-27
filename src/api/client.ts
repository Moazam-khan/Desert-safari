import storage from '@/utils/storage';
import axiosClient, {AxiosInstance} from 'axios';

const TIMEOUT = 35000; //15sec
const SERVER_URL = import.meta?.env?.VITE_API_BASE_URL || '';

const axios: AxiosInstance = axiosClient.create({
  baseURL: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-api-key':
      import.meta?.env?.VITE_X_API_KEY ||
      '9KVvI9QM_98vtE__EYrhCgxFad-6do8fRB9050923uc',
  },
  timeout: TIMEOUT,
});

axios.interceptors.request.use(
  (config) => {
    const token = storage.get('accessToken');
    if (token && config?.headers) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    console.log('err response in intercept resp', err);
    // const originalConfig = err.config;
    // if (err.response && loginBaseUrl.includes(originalConfig.url)) {
    //     if (err.response.status === 401 && !originalConfig._retry) {
    //         originalConfig._retry = true;
    //         store.dispatch(reset)
    //     }
    // }
    return Promise.reject(err);
  },
);

export default axios;

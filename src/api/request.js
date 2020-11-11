import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { Notification } from 'element-ui';
import { apiBaseUrl, env } from '@/config';

const service = axios.create({
  baseURL: apiBaseUrl, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
});

// response interceptor
service.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    if (status === 200) return data;
    return Promise.reject(data.message || 'error');
  },
  (error) => {
    if (env !== 'development') console.log(`err${error}`);
    Notification({
      title: 'error',
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

function createAPI(conf) {
  // eslint-disable-next-line no-param-reassign
  conf = conf || {};
  return service(Object.assign(
    {},
    {
      url: conf.url,
      method: conf.method,
      data: conf.data
    },
    conf.opts
  ));
}

export default createAPI;

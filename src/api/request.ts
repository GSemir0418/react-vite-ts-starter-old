import { notification } from "antd";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

class MyAxios {
  instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    // 全局请求拦截
    this.instance.interceptors.request.use(
      (config) => config,
      (error) => error
    );
    // 全局响应拦截
    this.instance.interceptors.response.use(
      (res) => res.data,
      (error) => {
        // 在响应拦截器中添加统一的错误处理
        const { response, request } = error;
        if (response && response.status) {
          const errorText = codeMessage[response.status] || response.statusText;
          const { status } = response;
          const { responseURL: url } = request;
          notification.open({
            message: `请求错误 ${status}: ${url}`,
            description: errorText,
          });
        } else if (!response) {
          notification.open({
            message: "网络错误",
            description: "您的网络发生异常，无法连接服务器",
          });
        }
        return response;
      }
    );
  }

  // request作为原型方法继承给实例
  request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

const myAxios = new MyAxios({
  // 根据环境变量改变前缀
  baseURL: "/api",
  timeout: 0,
  headers: {
    Authorization: `Bearer c91c1c5a-ec59-490a-ac4a-49a5d6ee0f98`,
  },
});

export default myAxios;

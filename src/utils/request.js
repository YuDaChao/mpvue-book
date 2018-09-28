const Fly = require("flyio/dist/npm/wx");
const fly = new Fly();

const BASE_URL = ' https://www.easy-mock.com/mock/5badb260bc166a6e15e39bd4/shop'

const ERROR_MSG = {
  0: '网络错误',
  1: '请求超时'
}

const config = {
  headers: {},
  baseURL: BASE_URL,
  // 是否自动将Content-Type为“application/json”的响应数据转化为JSON对象，默认为true
  parseJson: true,
  withCredentials: true,
  // 超时时间
  timeout: 5000 // 0表示无超市限制
}

fly.config = config

// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  // request.headers["X-Tag"] = "flyio";
  // 打印出请求体
  // console.log(request.body);
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
});

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    // 只将请求结果的data字段返回
    return response.data;
  }, (err) => {
    console.log(err)
    // 发生网络错误后会走到这里
    wx.showToast({
      title: ERROR_MSG[err.status],
      image: '../static/images/error.png',
      duration: 3000
    })
    return Promise.resolve({
      code: 1,
      msg: err.message,
      data: {}
    })
  }
);

export default fly

/**
 * Created by bootdo.
 * 参考文章：https://blog.csdn.net/yin_you_yu/article/details/80402650
 */
import axios from 'axios'
import store from "../vuex/store";
import router from '../router'
import {
  bus
} from '../bus.js'

axios.defaults.withCredentials = true;
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置请求头


//添加一个请求拦截器
axios.interceptors.request.use(

  //在请求发出之前进行一些操作
  config => {
    if (window.localStorage.getItem('access-token')) {
      config.headers.Authorization = window.localStorage.getItem('access-token');
      //config.headers["token"] = window.localStorage.getItem('access-token');
    }
    store.state.loading = true
    return config
  },
  error => {
    //Do something with request error
    return Promise.reject(error)
  }
);
// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  console.log(222+response)
  store.state.loading = false
  if (response.data && response.data.code) {
    if (parseInt(response.data.code) == 401) {
      //未登录
      console.log("发送事件")
      router.replace({
        path: 'login',
        query: {redirect: router.currentRoute.fullPath}
      })
      //bus.$emit('goto', '/login')
    }
  }

  return response;
}, function (error) {
  console.log(111+error)
  //Do something with response error
  store.state.loading = false
  // Do something with response error
  return Promise.reject(error);
});

//基地址
//let base = process.env.API_ROOT
let base= "/apis"

//通用方法
export const POST = (url, params) => {
  return axios.post(`${base}${url}`, params).then(res => res.data)
}

export const GET = (url, params) => {
  return axios.get(`${base}${url}`, {
    params: params
  }).then(res => res.data)
}

export const PUT = (url, params) => {
  return axios.put(`${base}${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return axios.delete(`${base}${url}`, {
    params: params
  }).then(res => res.data)
}

export const PATCH = (url, params) => {
  return axios.patch(`${base}${url}`, params).then(res => res.data)
}

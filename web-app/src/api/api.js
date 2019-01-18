/**
 * Created by bootdo.
 * 用户相关api
 */
import * as API from './'

export default {
  //登录
  login: params => {
    return API.POST('/login', params)
  },
  register: params => {
    return API.POST('/register', params)
  },
  getHomeTask: params => {
    return API.POST('/getHomeTask', params)
  },
  applyTask: params => {
    return API.POST('/applyTask', params)
  },

  getUserTask: params => {
  return API.POST('/getUserTask', params)
  },
  checkAlipay: params => {
    return API.POST('/checkAlipay', params)
  },
  applyTixian: params => {
    return API.POST('/applyTixian', params)
  },
  logout: params => {
    return API.GET('/logout', params)
  },
  moneyHistory: params => {
    return API.POST('/moneyHistory', params)
  },
  getUserOverView: params => {
    return API.GET('/getUserOverView', params)
  }




  // //登出
  // logout: params => {
  //   return API.GET('/api-admin/logout', params)
  // },
  // tokenUser: params =>{
  //   return API.GET('/api-admin/user/currentUser',params)
  // },
  // //修改个人信息
  // changeProfile: params => {
  //   return API.PATCH('/api/v1/users/profile', params)
  // },
  //
  // //查询获取user列表(通过page分页)
  // findList: params => {
  //   return API.GET('/api-admin/user', params)
  // },
  //
  // //增加用户
  // addUser:params =>{
  //   return API.POST('/api-admin/user',params)
  // },
  // //修改用户
  // editUser:params =>{
  //   return API.PUT('/api-admin/user',params)
  // },
  // //删除用户
  // removeUser:params =>{
  //   return API.DELETE('/api-admin/user',params)
  // }
}

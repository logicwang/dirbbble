//index.js
import requests from './request'
//例如
//三级联动接口
//接口地址  请求方式  有无参数 ----注释
//——get 无参


export const reqCategoryList = () => requests({ url: '/api/user/list', method: 'GET' }) //中间路由

export const save = (params) => requests({ url: '/api/user/list/save', method: 'POST',data:{...params }}) 

export const details = (params) => requests({ url: '/api/user/list/details', method: 'POST', data:{...params}}) //右侧详情页

//——post 有参
//params至少是一个空对象

// export const reqGetSearchInfo = (params) => requests({ url: '不带/api', method: 'post', data: params })
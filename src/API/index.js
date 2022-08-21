//index.js
import requests from './request'
//例如
//三级联动接口
//接口地址  请求方式  有无参数 ----注释
//——get 无参


export const reqCategoryList = () => requests({ url: 'http://localhost:3721/api/user/list', method: 'GET' })

export const getUserInfo = () => requests({
    url: 'https://api.github.com/users/logicwang',
    method: 'GET',
    headers: {
        'content-type': 'application/json',
        // Accept: 'application/vnd.github+json',
        'Authorization': 'token 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'
    }
})

//——post 有参
//params至少是一个空对象
// export const reqGetSearchInfo = (params) => requests({ url: '不带/api', method: 'post', data: params })
const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const user = require('./detalis');

const proxy = {
    ...user,
    'GET /api/user/list': [
        {
            "name": "Adobe",
            "email": "thomas@gmail.com",
            "url": "/imgs/adobe.svg",
            "type": "login",
        },
        {
            "name": "Apple",
            "email": "thomas@gmail.com",
            "url": "/imgs/BSApple.svg"
        },
        {
            "name": "Dirbbble",
            "email": "thomas@gmail.com",
            "url": "/imgs/Dribbble.svg",
            "deleteAt": "2022/12/01"
        },
        {
            "name": "Etsy",
            "email": "thomas@gmail.com",
            "url": "/imgs/etsy.svg",
            "favorties": true,
        },
        {
            "name": "Facebook",
            "email": "thomas@gmail.com",
            "url": "/imgs/Facebook.svg",
            "Trash":"2022/12/01"
        },
        {
            "name": "GooGle",
            "email": "thomas@gmail.com",
            "url": "/imgs/Google.svg"
        },
        {
            "name": "IMDB",
            "email": "thomas@gmail.com",
            "url": "/imgs/IMDB.svg"
        },
        {
            "name": "InVison",
            "email": "thomas@gmail.com",
            "url": "/imgs/Invisionapp.svg"
        },
        {
            "name": "Telegram",
            "email": "thomas@gmail.com",
            "url": "/imgs/Telegram.svg"
        }
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));
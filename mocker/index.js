const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const user = require('./detalis');
const save = require('./save.js');


const proxy = {
    ...user,
    ...save,
    'GET /api/user/list': [
        {
            "name": "Adobe",
            "email": "thomas@gmail.com",
            "url": "/imgs/adobe.svg",
            "Trash": "2022/12/01",
        },
        {
            "name": "Apple",
            "email": "thomas@gmail.com",
            "url": "/imgs/BSApple.svg",
        },
        {
            "name": "Dirbbble",
            "email": "thomas@gmail.com",
            "url": "/imgs/Dribbble.svg",
            "deleteAt": "2022/12/01",
            "favorties": true,
            "Trash": "2022/12/01",
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
            "Trash": "2022/12/01",
            "favorties": true,
        },
        {
            "name": "GooGle",
            "email": "thomas@gmail.com",
            "url": "/imgs/Google.svg",
            "favorties": true,
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
            "email": "+1 202 555 0918",
            "url": "/imgs/Telegram.svg"
        }
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));
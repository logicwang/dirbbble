const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/user/list': [
        {
            "name": "Adobe",
            "email": "thomas@gmail.com",
            "url": "/imgs/adobe.svg",
            "favorties": true,
            // "deleteAt": "2022/12/01",
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
            "url": "/imgs/etsy.svg"
        },
        {
            "name": "Facebook",
            "email": "thomas@gmail.com",
            "url": "/imgs/Facebook.svg"
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
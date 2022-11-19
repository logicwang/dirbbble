const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const user = require('./data');
const save = require('./save');
const detalis = require('./detalis');


const proxy = {
    ...user,
    ...save,
    ...detalis,
    
    'GET /api/user/list': [
        {
            "name": "Adobe",
            "email": "thomas@gmail.com",
            "favorties": true,
        "deleteAt": "2022/12/01",
        "url": "/image/Adobe.svg",
            "Trash": "2022/12/01",
        },
        {
            "name": "Apple",
        "deleteAt": "2022/12/01",
        "email": "thomas@gmail.com",
            "url": "/image/Apple.svg",
            "Trash": "2022/12/01",
        },
        {
            "name": "Dirbbble",
            "email": "thomas@gmail.com",
            "url": "/image/Dribbble.svg",
            "favorties": true,
        },
        {
            "name": "Etsy",
            "email": "thomas@gmail.com",
            "url": "/image/Etsy.svg",
            "favorties": true,
        },
        {
            "name": "Facebook",
            "email": "thomas@gmail.com",
            "url": "/image/Facebook.svg",
        },
        {
            "name": "GooGle",
            "email": "thomas@gmail.com",
            "Trash": "2022/12/01",
            "url": "/image/Google.svg",
            "favorties": true,
        },
        {
            "name": "IMDB",
            "email": "thomas@gmail.com",
            "Trash": "2022/12/01",
            "url": "/image/IMDB.svg"
        },
        {
            "name": "InVison",
            "email": "thomas@gmail.com",
            "url": "/image/Invision.svg"
        },
        {
            "name": "Telegram",
            "email": "+1 202 555 0918",
            "url": "/image/Telegram.svg"
        }
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));
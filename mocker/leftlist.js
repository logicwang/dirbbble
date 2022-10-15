const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const user = require('./detalis');

const proxy = {
    ...user,
    'GET /api/user/menu': [
        {
            "name": "All Items",
            "url": "/imgs/items.svg",
        },
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));
const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/detalis': 
        {
        "name": "Adobe",
        "email": "thomas@gmail.com",
        "input":"1231231231",
        "url": "/imgs/adobe.svg",
        },
}
module.exports = proxy;
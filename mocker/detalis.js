const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'GET /api/detalis':
    {
        "name": "Adobe",
        "email": "thomas@gmail.com",
        "input": "123",
        "url": "/imgs/adobe.svg",
        "website": "Website",
        "iitem": "Adobe.com",
        "notes": "Notes",
        "duanluotwo":"Great experiences have the power to inspire, transform and movethe world forward.And every great experience starts withcreativity"
    },
}
module.exports = proxy,noProxy,delay;
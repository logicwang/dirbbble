const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy =(data)=>{
    console.log('--data---->',data)
    return {'GET /api/detalis':{
        "name": "Apple",
        "email": "1758555877@qq.com",
        "input": "123123123123",
        "url": "/imgs/Apple.svg",
        "website": "username",
        "iitem": "apple.com",
        "notes": "Notes",
        "web": "Website",
        "com": "apple.com",
        "duanluotwo": "Great experiences have the power to inspire, transform and movethe world forward.And every great experience starts withcreativity"
    },
}
}
module.exports = proxy, noProxy, delay;
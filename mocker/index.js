const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    // 'GET /api/user': {
    //     id: 1,
    //     username: 'x',
    //     sex: 123123
    // },
    // ...
    // 'GET /api/user/list': [{
    //     id: 3,
    //     username: 'kenny',
    //     sex: 2
    // }, {
    //     id: 2,
    //     username: 'kennyD',
    //     sex: 6
    // }],
    // 'DELETE /api/user/:id': (req, res) => {
    //     console.log('---->', req.body)
    //     console.log('---->', req.params.id)
    //     res.send({ status: 'ok', message: '删除成功！' });
    // }
    // 'GET /api/:owner/:repo/raw/:ref/(.*)': (req, res) => {
    //     const { owner, repo, ref } = req.params;
    //     // http://localhost:8081/api/admin/webpack-mock-api/raw/master/add/ddd.md
    //     // owner => admin
    //     // repo => webpack-mock-api
    //     // ref => master
    //     // req.params[0] => add/ddd.md
    //     return res.json({
    //         id: 1,
    //         owner,
    //         repo,
    //         ref,
    //         path: req.params[0]
    //     });
    // },
    'GET /api/user/list': [
        {
            "name": "Adobe",
            "email": "thomas@gmail.com",
            "url": "/imgs/adobe.svg"
        },
        {
            "name": "Apple",
            "email": "thomas@gmail.com",
            "url": "/imgs/Apple.svg"
        },
        {
            "name": "Dirbbble",
            "email": "thomas@gmail.com",
            "url": "/imgs/Dribbble.svg"
        },
        {
            "name": "Etsy",
            "email": "thomas@gmail.com",
            "url": "/imgs/Etsy.svg"
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
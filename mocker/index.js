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
            name: 'Adobe',
            login: 'login',
            username: 'username',
            website: 'Adobe.com',
            mes: '121231231'
        },
    ],
}
module.exports = (noProxy ? {} : delay(proxy, 10));
const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'POST /api/user/list/': (req, res) => {
        return res.json({
            "code":1,
            "data":{ },
            "message": '成功',   
        });
      },
}
module.exports = proxy, noProxy, delay;
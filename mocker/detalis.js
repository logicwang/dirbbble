const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';
const { list }= require('./data')

const proxy = {
  'POST /api/user/list/details': (req, res) => {
    const  name  = req.body.name;
    console.log('---name-->',name)
    const items = name && list.filter(item => (item.name === name));
    console.log('----items--->', items)
    const data = items && items.length > 0 ? items[0] : {}
    console.log('---data---->',data)
    return res.json(data);
  },

  // 'GET /api/details/:name': (req, res) => {
  //   // const { name } = req.params;
  //   // const items = name && list.filter(item => (item.name === name));
  //   // const data = items && items.length > 0 ? items[0] : {}
  //   return res.json({a :1 });
  // }
}

module.exports = proxy, noProxy, delay;
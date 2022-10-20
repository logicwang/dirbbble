const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';
const { list }= require('./data')

const proxy = {
  'POST /api/details': (req, res) => {
    const  name  = req.body.name;
    const items = name && list.filter(item => (item.name === name));
    const data = items && items.length > 0 ? items[0] : {}
    return res.json(data);
  },

  // 'GET /api/details/:name': (req, res) => {
  //   const { name } = req.params;
  //   const items = name && list.filter(item => (item.name === name));
  //   const data = items && items.length > 0 ? items[0] : {}
  //   return res.json(data);
  // }
}

module.exports = proxy, noProxy, delay;
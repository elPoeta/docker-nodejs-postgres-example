const Router = require('koa-router');
const home = require('./home');

const router = new Router();

router.use('/', home.routes());

module.exports = router;
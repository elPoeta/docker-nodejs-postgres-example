const Router = require('koa-router');
const home = require('./home');
const api = require('./api');

const router = new Router();

router.use('/', home.routes());
router.use('/api', api.routes());

module.exports = router;
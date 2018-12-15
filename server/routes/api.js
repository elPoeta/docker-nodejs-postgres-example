const Router = require('koa-router');
const apiController = require('../controllers/apicontroller');

const router = new Router();

router.get('/people', apiController.getData);

module.exports = router;
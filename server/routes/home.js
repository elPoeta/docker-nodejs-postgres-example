const Router = require('koa-router');
const homeController = require('../controllers/homecontroller');

const router = new Router();

router.get('/', homeController.getHome);

module.exports = router;
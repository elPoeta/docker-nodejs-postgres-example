const Router = require('koa-router');
const send = require('koa-send');
const DB = require('../db/db');
const router = new Router();

router.get('/', async (ctx, next) =>{
    await send(ctx, '/views/index.html');
 
});

router.get('api', async ctx =>{
    const data = await DB.view();
    ctx.body = data;
});

module.exports = router;
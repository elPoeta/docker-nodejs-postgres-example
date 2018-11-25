const Koa = require('koa');
const koaStatic = require('koa-static');
const bodyparser = require('koa-bodyparser');
const routes = require('./routes/index');

const port = process.env.PORT || 3000;

const app = new Koa();

app
    .use(koaStatic('.'))
    .use(bodyparser())
    .use(routes.routes())
    .use(routes.allowedMethods())
    .listen(port, err => {
        if (err) console.error(err);
        console.log(`App Listening on Port ${port}`);
      });    
const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./routes/index');


const port = process.env.PORT || 4000;

const app = new Koa();

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'localhost:8095');
    return next();
  });
  

app
.use(bodyparser())
.use(router.routes())
.use(router.allowedMethods())
.listen(port, async error =>{
    if(error)
    {
        console.error(error);
    }
    console.log(`App Listening on Port ${port}`);
});

process.on('SIGTERM', () => {
    server.close(() => {
    console.log('Process terminated')
    });
});
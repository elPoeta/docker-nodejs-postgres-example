const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const router = require('./routes/index');


const port = process.env.PORT || 4000;

const app = new Koa();

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
   // ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Accept-Language, Content-Language');
    //ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    //ctx.set('Access-Control-Allow-Credentials',true);
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
'use strict';
const koa = require('koa')
const path = require('path')
const koaRouter = require('koa-router')
const logger = require('koa-logger');

const app = new koa()

const router = new koaRouter({
    prefix: '/api'
})

// const dogRouter = new koaRouter({
//     prefix: '/dogs'
// });


app.use(logger());

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
});



require('./routes/index')({ router });
require('./routes/dogs')({ router });


app.use(router.routes());
app.use(router.allowedMethods());


app.listen(1234, () => console.log('running on port 1234'))
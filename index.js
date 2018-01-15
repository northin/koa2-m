const koa = require('koa')
const config = require("./config")
const router = require("./server/router/index")
const views = require('koa-views')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
// const session =  require("koa2-cookie-session")
const cors = require('koa2-cors');


const app = new koa()



// 具体参数我们在后面进行解释
app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return '*'; //这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 50,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE','OPTIONS', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// app.use(async function(ctx, next) {
//     // if (ctx.request.method == "OPTIONS") {
//     //     ctx.response.status = 200
//     // }
//     ctx.set("Access-Control-Allow-Origin", 'http://localhost:8080')
//     ctx.set("Access-Control-Allow-Credentials", true);
//     ctx.set("Access-Control-Max-Age", 86400000);
//     ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
//     ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
//     await next()
// })

// //Options 
// app.use(session({
// 	key: "SESSIONID",   //default "koa:sid" 
// 	expires:3, //default 7 
// 	path:"/" //default "/" 
// }));


// 配置ctx.body解析中间件
app.use(bodyParser())

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'

app.use(static(
  path.join( __dirname,  staticPath)
))

// 加载模板引擎
app.use(views(path.join(__dirname, './server/view'), {
  extension: 'ejs'
}))

// 初始化路由中间件
app.use(router.routes()).use(router.allowedMethods())


app.listen(config.port, () => {
	console.log(`the server is start at port ${config.port}`)
})
























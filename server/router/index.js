
const Router = require('koa-router');
const home = require('./home')
const error = require('./error')
const api = require('./api')
const test = require('./test')

//装载路由
let router = new Router();



router.use('/', home.routes(), home.allowedMethods())
router.use('/error', error.routes(), error.allowedMethods())
// router.use('/page', page.routes(), page.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())


router.use('/test', test.routes(), test.allowedMethods() )

module.exports = router








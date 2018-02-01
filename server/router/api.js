const router = require('koa-router')()
const userInfoController = require('./../controller/user_info')
const projectTopController = require('./../controller/project_top')
const projectTimeController = require('./../controller/project_time')
const checkToken = require('../token/checkToken.js');

const routers = router
	//如果要token验证加入checkToken
	.get('/user/getLoginUserInfo.json',checkToken ,userInfoController.getLoginUserInfo)
	.post('/user/signIn.json',userInfoController.signIn)
	.post('/user/reg.json', userInfoController.register)
	.post('/project/top10.json' ,checkToken ,projectTopController.getTop10)
	.post('/project/time.json' ,checkToken ,projectTimeController.getTime)
	// .get('/user/signOut.json',userInfoController.signOut)
//api/user/signIn.json


module.exports = routers





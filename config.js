let config = {}

config.port = 3000

config.mysql = {
	host     : '127.0.0.1',   // 数据库地址
 	user     : 'root',    // 数据库用户
    password : 'root',   // 数据库密码
    database : 'koa2-demo'  // 选中数据库
}



module.exports = config
const jwt = require('jsonwebtoken')


module.exports = function(email){
	const token = jwt.sign({
		email : email
	},"zhangchunxu", {
		expiresIn: '60s'
	});
	return token
}



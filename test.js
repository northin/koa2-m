var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test'; //如果没有，会自动创建
//插入
var insertData = function(db, callback) {
	var collection = db.collection('koa2Demo');  //如果没有，会自动创建
	var data = [{"name" : 'nioh','title': 'anjisama'}];

	collection.insert(data, function(err, result){
		if(err){
			console.log(err)
			return 
		}
		callback(result)
	})

}
// 查询
var selectData = function(db, callback){
	var collection = db.collection('koa2Demo');
	var whereStr = {"name":"nioh"}

	collection.find(whereStr).toArray(function(err, result){
		if(err){
			console.log(err)
			return 
		}
		callback(result)
	})
}


// 更新
var updateData = function(db, callback){
	var collection = db.collection('koa2Demo')

	var whereStr = {"name": 'nioh'}

	var updateStr = {$set: {"title": 'ssss'}}

	collection.update(whereStr, updateStr, function(err, result){
		if(err){
			console.log(err)
			return 
		}
		callback(result)
	})

}

//删除
var delData = function(db, callback) {  
  //连接到表  
  var collection = db.collection('koa2Demo');
  //删除数据
  var whereStr = {"name":'nioh'};
  collection.remove(whereStr, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}

MongoClient.connect(DB_CONN_STR, function(err,db){
	console.log('连接成功');
	// insertData(db,function(result){
	// 	console.log(result);
 //        db.close();
	// })
	// selectData(db,function(result){
	// 	console.log(result);
 //        db.close();
	// })
	delData(db,function(result){
		console.log(result);
        db.close();
	})
	// updateData(db,function(result){
	// 	console.log(result);
 //        db.close();
	// })


})


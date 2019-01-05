var mongo = require('mongodb');
var url = 'mongodb://localhost:27017';
var db = 'learnyoumongo';
var collection = 'parrots';
var age = process.argv[2];
mongo.connect(url, function(err, client){

	if (err)
		throw err

	client.db(db).collection(collection).find({age: {$gt: +age}}).project({name: 1, age: 1, _id: 0}).toArray(function(err, results){

		console.log(results);
	})

	client.close();

})
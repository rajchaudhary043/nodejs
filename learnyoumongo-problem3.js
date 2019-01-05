var MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const collection = 'parrots';
const db = 'learnyoumongo';
var age = process.argv[2];
MongoClient.connect(url, function(err, client){

	client.db(db).collection(collection).find({age: {$gt:+age}}).toArray(function(err, result){

		

		console.log(result);

		client.close();
	})
})
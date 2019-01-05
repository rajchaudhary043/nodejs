var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var db = process.argv[2];
var collection = '' + process.argv[3];
var _id = process.argv[4];

mongo.connect(url, function(err, client){

	if (err)
		throw err

	var collection = client.db(db).collection(collection);

	collection.remove(
					{ _id: _id }, function(err, result){
						console.log(result);
					}
					);
	/*parrot.find().toArray(function(err, results){

		if (err)
			throw err;
		console.log(results);
	});*/

	//console.log(JSON.stringify(record));


	client.close();

})
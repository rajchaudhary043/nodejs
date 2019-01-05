var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var db = process.argv[2];
var collection = 'users';
//var age = process.argv[2];
//var record = {'firstName': process.argv[2], 'lastName': process.argv[3]};



mongo.connect(url, function(err, client){

	if (err)
		throw err

	var parrot = client.db(db).collection(collection);

	parrot.update(
					{ name: 'Tina' }, 
					{
						$set: {age: 40}

					}, function(err, result){
						console.log('updated ' + result);
					});
	/*parrot.find().toArray(function(err, results){

		if (err)
			throw err;
		console.log(results);
	});*/

	//console.log(JSON.stringify(record));


	client.close();

})
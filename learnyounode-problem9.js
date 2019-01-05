var http = require('http');



http.get(process.argv[2], function(res){

	let str = '';
	
	res.setEncoding('utf8');

	res.on('data', function(data){

		str += data;

	})

	res.on('end', function(){

		console.log(str.length);
		console.log(str);
	})

	res.on('error', function(err){

		console.error(err);

	})
})
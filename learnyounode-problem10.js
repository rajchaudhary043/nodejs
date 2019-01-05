var http = require('http');
var bl = require('bl')


var i = 2;

while(i < process.argv.length){


http.get(process.argv[i], function(res){

	let str1 = '', str2 = '';

	res.pipe(bl(function(err, data){

		str1 += data;

	}))

	res.on('end', function(){

	//	console.log(str1.length);
		console.log(str1);


	})

	res.on('error', function(err){

		console.error(err);

	})
})

i++;
}
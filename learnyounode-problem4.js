var fs = require('fs');
var fileName = process.argv[2];
fs.readFile(fileName, 'utf8', function(err, data){
	if(err){

		return;
	}
	var length = data.split('\n').length - 1;
	console.log(length);
})
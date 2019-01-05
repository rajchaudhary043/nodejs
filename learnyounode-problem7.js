var helper = require('./helper');
var dir = process.argv[2],
	ext = process.argv[3];

helper(dir, ext, function(err, data){

if(err)
	
	return console.error(err);

data.forEach(function(file){

	console.log(file);

})

})
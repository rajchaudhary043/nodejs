var fs = require('fs');
var fileDir = process.argv[2];
var ext = '.' + process.argv[3];
var path = require('path');
fs.readdir(fileDir, function(err, data){
	
	if(err)
		return console.error(err);
	
	data.forEach(listFiles);

	function listFiles(value, index, array){
		
		//var fileName = fileDir + '/' + value;

		//console.log(path.extname(value));

		if(path.extname(value) === ext){
			console.log(value);
		}

		// fs.lstat(fileName, function(err, stats){

		// 	if (err)
		// 		console.log(err);

		// 	//console.log(stats.isFile());

		// 	if(stats.isFile){
		// 		if(value.split('.').pop() === ext || value === ext){
		// 		console.log(value);
		// 		}
		// }
		// })
		
		
		
	}
})
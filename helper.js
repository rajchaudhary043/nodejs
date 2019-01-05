var fs = require('fs');
var path = require('path');

module.exports =  function(dir, ext, callback){


fs.readdir(dir, function(err, files){

		if(err)
			
			return callback(err);

		fileExt = '.' + ext;
		var data = [];
		files.forEach(function(file){
			
			if(path.extname(file) === fileExt)
				data.push(file);
		})

		return callback(null, data);
	})


}

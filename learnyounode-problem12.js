var http = require('http');
var fs = require('fs');
var port = process.argv[2], path = process.argv[3];

http.createServer(function(req, res){

	var readStream = fs.createReadStream(path, {'encoding':'utf8'});
	var str = '';
	readStream.on('data', function(chunk){
		str += chunk;
	})

	readStream.on('end', function(chunk){
		res.writeHead(200,{'Content-Type':'text/plain'})
		res.write(str);
		res.end();
	})


	
}).listen(port, function(){
	console.log("server listening on " + port);
})
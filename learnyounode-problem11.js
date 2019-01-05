var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

net.createServer(function(socket){
	
	console.log('client connected');

	
		let strfDate = strftime('F');
		let date = new Date();
	    let dateStr = date.getFullYear() + '-' + ('0' + date.getMonth() + 1).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + " " + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + '\n';
	   socket.write(strfDate);
	   socket.end();
	

	
}).listen(parseInt(port,10), function(){
	console.log('listening on ' + port);
})
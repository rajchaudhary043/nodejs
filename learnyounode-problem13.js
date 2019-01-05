var http = require('http')
    
    
    var server = http.createServer(function (req, res) {
      
      if(req.method === 'POST'){

      	var str = '';
      	req.on('data', function(chunk){
      		str += chunk;
      	})

      	req.on('end', function(chunk){
      		//str += '/n';

      		console.log(str);
      		res.writeHead(200, { 'content-type': 'text/plain' });
      		res.write(str.toUpperCase());
      		res.end();
      	})


      	
      	
      	//res.writeHead(200, { 'content-type': 'text/plain' })
    
      	

      }
      
    })
    
    server.listen(Number(process.argv[2]))
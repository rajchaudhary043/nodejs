var http = require('http');
var url = require('url');
    
var server = http.createServer(function (req, res) {

      var path = url.parse(req.url).pathname;
      var query = url.parse(req.url).query;

      
      if(req.method === 'GET' && path === '/api/parsetime'){

      	 var d = new Date(query.split('=')[1]);
         //var d = Date.parse(isoDate);

         var isodate = {'hour':d.getHours(),
                        'minute':d.getMinutes(),
                        'second':d.getSeconds()};

         console.log(isodate);
         res.writeHead(200, { 'content-type': 'text/plain' });
         res.write(JSON.stringify(isodate));
         
      	

      }

      if(req.method === 'GET' && path === '/api/unixtime'){

        var d = new Date(query.split('=')[1]);
        var unixtime = d.getTime();
        var jsonunix = {'unixtime':unixtime}
        console.log(jsonunix);
        res.writeHead(200, { 'content-type': 'text/plain' });
         res.write(JSON.stringify(jsonunix));
        // res.end();

      }

      res.end();
      
    })
    
    server.listen(Number(process.argv[2]))
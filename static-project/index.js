//index.js

var http = require('http'),
  fs   =  require('fs'),
  url = require('url'),
  path =  require('path'),
  port = process.argv[2] || 3000;

http.createServer(function(req, res){
  var uri = url.parse(req.url).pathname;
  console.log('uri: ' + uri); 

  var fileName = path.join(process.cwd(),uri);

  fs.exists(fileName, function(exists){

    if(!exists){
      res.writeHead(404,{'Content-Type':'text/plain'});
      res.write('not found \n');
      res.end();
      return
      console.log("*****" + fileName)
    }

       console.log("Reading file now");

  fs.readFile(fileName,'binary',function(err,data){

    if(err){
      res.writeHead(500,{'Content-Type':'text/plain'});
      res.write('Internal Error ');
      res.end();


    }
    console.log("Writing file now");

    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data,'binary');
    res.end();
    return
    console.log("*****" + fileName)

  })


  })



 }).listen(parseInt(port,10), function(){
  console.log('server listening on port ' + port);
});
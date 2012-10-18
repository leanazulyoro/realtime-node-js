/*** Settings ***/
var nodejs_key = 'local'; // MUST MATCH WITH KEY PROVIDED BY INCOMING CONEXION TO DNODE

/*** Server to Nowjs ***/
var http = require('http');
httpServer = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end();
});
httpServer.listen(1337);

var nowjs = require('now');
var everyone = nowjs.initialize(httpServer);

everyone.now.nowPush = function(text) {
  everyone.now.nowPull(text);
}

/*** Server to host Dnode ***/
var dnode = require('dnode');
var server = dnode({
  nowPush: function (n, callback) {
    if(n['key'] == nodejs_key){
      console.log('Content pushed!');
      everyone.now.nowPull(n['text'], n['container'], n['portada']);
    } else {
      console.log('Client not authorized.');
    }
    callback(n);
  }
});
server.listen(7070);

/*** Server to Nowjs ***/
var http = require('http');
httpServer = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(clientCode);
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
    console.log(n);
    everyone.now.nowPull(n['text'], n['container']);
    callback(n);
  }
});
server.listen(7070);

/*** Server to Nowjs ***/
var http = require('http');
httpServer = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(clientCode);
});
httpServer.listen(1337, '127.0.0.1');

var nowjs = require('now');
var everyone = nowjs.initialize(httpServer);

everyone.now.sendText = function(text) {
  everyone.now.receiveText(text);
}


/*** Server to host Dnode ***/

var dnode = require('dnode');
var server = dnode({
  nowSendText: function (n, callback) { 
    console.log(n);
    everyone.now.receiveText(n['text'], n['container']);
    callback(n);
  }
});
server.listen(7070, '127.0.0.1');
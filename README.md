--------------------------------------------------------------------------------------------------------
Realtime for Node.js allows an stream of data to be shared in real-time from the server to all clients.
--------------------------------------------------------------------------------------------------------

Prerequisites:
For realtime-node-js to work, you need node.js (nodejs.org) and npm (comes with node.js) installed in the server

Download realtime-node-js from https://github.com/leanazulyoro/realtime-node-js
You can download the zipball, or use git to clone:
$ git clone https://github.com/leanazulyoro/realtime-node-js.git

Install dependencies:
$ cd /path/to/realtime-node-js
$ npm install

The "node_modules" directory is created with the following modules in it:
- dnode
- forever
- now

Now, edit the file server.js insite the lib directory, set a value for the nodejs_key variable.
A client that wishes to push content to the server must match this key.

Finally you need to start the service:
$ node lib/server.js

If you want to run it as a daemon, you may use provided "forever" module:
$ /path/to/realtime-node-js/node_modules/forever/bin/forever start /path/to/realtime-node-js/lib/server.js

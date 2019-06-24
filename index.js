var http = require('http');
//var https = required('https');

var app = require('./app');

var port = process.env.PORT || 3000; //set our port
var host = process.env.HOST || '127.0.0.1'; // for Herolu to run successfully

http.createServer(app).listen(port, host, () => {
    console.log("Server ready at http://" + host + ":" + port);
});

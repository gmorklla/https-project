var express = require('express');
var https = require('https');
var http = require('http');
var fs = require('fs');

var app = express();

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('certificado.cer')
};

app.get('/', function(req, res) {
	res.send('Certificado SSL');
});

http.createServer(app).listen(80);
https.createServer(options, app).listen(443, function () {
	console.log('Express con certificado SSL en puerto 443');
});
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8000;

app.get('/', function(req, res) {
    res.send('TODO API Root');
});

app.listen(PORT, function() {
    console.log('Express listening on port ' + PORT + '!');
}, function (e) {
    console.log(e);
});
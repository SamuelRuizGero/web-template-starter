'use strict';


var express = require('express');
var port = Number(process.env.PORT || 3000); //testing
var app = express();

app.use(express.static('dist'));

app.listen(port, function () {
    console.log('Listening on port: ' + port + '\n\n\n\n');
});


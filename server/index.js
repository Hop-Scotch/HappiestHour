var bodyParser = require('body-parser');
var http = require('http');
var express = require('express')
var app = express();
var path = require('path');
var browserify = require("browserify-middleware");

var assetFolder = path.join(__dirname, '..','client');
var port = process.env.PORT || 4000;

module.exports = app;

app.use(express.static(assetFolder))

app.get('/app-bundle.js',
	browserify('./client/components/app.js', {
		transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
	})
);

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());


// Wild card route for client side routing.
app.get('/*', function(req, res){
  res.sendFile( assetFolder + '/index.html' );
})

// Start server
app.listen(port);
console.log("listening on localhost:" + port);

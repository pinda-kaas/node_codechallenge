// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var port  	 = process.env.PORT || 8080; 				// set the port
var validator = require('validator');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({'extended':'false'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(methodOverride());
app.use(clientErrorHandler);

///app.use(bodyParser.json());

// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);

function clientErrorHandler(err, req, res, next) {
    if (!validator.isJSON(JSON.stringify(req.body.payload))) {
        res.status(500).send({ error: 'Something blew up!' });
    } else {
        next(err);
    }
}


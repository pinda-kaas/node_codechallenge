var _= require('underscore');
//var validator = require('./bower_components/validator-js/validator.js');
var validator = require('validator');

module.exports = function(app) {
    app.post('/api/filter', function(req, res) {

        console.log('inside service call');
        //valid
        if (validator.isJSON(req.body.payload)) {
            console.log(req.body);

            var resp = _.filter(_.where(req.body.payload, {drm: true}), function (item) {
                return item.episodeCount > 0
            });

            var newArray = [];
            resp.forEach(function (item) {
                var newItem = _.pick(item, 'image', 'slug', 'title');
                newItem.image = _.propertyOf(newItem.image)('showImage');
                newArray.push(newItem);
            })

            res.send(newArray);
        }
        else
        {
            //invalid json
            res.send('no good man');
        }
    });

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
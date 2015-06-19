var _= require('underscore');
//var validator = require('./bower_components/validator-js/validator.js');


module.exports = function(app) {
    app.post('/api/filter', function(req, res) {

        console.log('inside service call');

        res.setHeader('Content-Type', 'application/json')
        res.write('you posted:\n')
        res.end(JSON.stringify(req.body, null, 2))

        //valid
        //if (validator.isJSON(JSON.stringify(req.body.payload))) {
        //    console.log(req.body);
        //
        //    var resp = _.filter(_.where(req.body.payload, {drm: true}), function (item) {
        //        return item.episodeCount > 0
        //    });
        //
        //    var newArray = [];
        //    resp.forEach(function (item) {
        //        var newItem = _.pick(item, 'image', 'slug', 'title');
        //        newItem.image = _.propertyOf(newItem.image)('showImage');
        //        newArray.push(newItem);
        //    })
        //
        //    res.send(newArray);
        //}
        //else
        //{
        //    //invalid json
        //    res.send('{"error": "Could not decode request: JSON parsing failed"}');
        //}
    });

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
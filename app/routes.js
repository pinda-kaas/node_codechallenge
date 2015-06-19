var _ = require('underscore');
module.exports = function (app) {
    app.post('/api/filter', function (req, res) {
        // console.log('inside service call');
        //console.log(req.body);

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
    });
};
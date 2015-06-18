module.exports = function(app) {

    app.post('/api/postrequest', function(req, res) {

        console.log('inside postrequest');
        console.log(req.body);
        //// create a todo, information comes from AJAX request from Angular

        res.send({"name":"hahaha"});

    });


	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};
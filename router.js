var site = require('./routes/site');

module.exports = function(app){
	app.get('/', site.home);
	app.get('/showItems', site.showItems);
	app.get('/api/all/items', site.getAllItems)
}


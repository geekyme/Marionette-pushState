
var Item = require('../models/item');


exports.home = function(req, res, next){
	res.render('home')
}

exports.showItems = function(req, res, next){
	Item.getAll(5000, function(err, results){
		res.render('showItems', {items: results});	
	})
}


exports.getAllItems = function(req,res,next){
	Item.getAll(5000, function(err, result){
		if(err) return next(err);
		res.send(200, result);
	})
}

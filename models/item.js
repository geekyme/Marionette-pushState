// methods for the Item Class - or whatever class you have. Just change the names

var Item = {};
module.exports = Item;

var DB = require('./db.js');

// My API implements OrientDB. change this if you have a different API
Item.getAll = function (limit, callback){
  DB.command("select from Item order by label", function(err, results){
    if(err) return callback(err);
    var results = results.map(function(result){
    	result.incoming = result.in;
    	result.class = result['@class'];
    	delete result.in;
    	delete result['@class'];
    	return result;
    })
    callback(null, results);
  })
}

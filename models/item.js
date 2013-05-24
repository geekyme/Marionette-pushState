// methods for the Item Class - or whatever class you have. Just change the names

var Item = {};
module.exports = Item;

/*var DB = require('./db.js');*/

// My API implements OrientDB. change this if you have a different API
/*Item.getAll = function (limit, callback){
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
}*/

// method for memory database. lol.
Item.getAll = function (limit, callback){
  callback(null, DB);
}

var DB = [
  {"id": 1, "label": "Brainfruit", "desc": "Turning Creatvity into Cash from East to West"},
  {"id": 2, "label": "Beginning Java", "desc": "Java 7 Edition tutorial book to learn Java"},
  {"id": 3, "label": "The Startup Owner's Manual", "desc": "The Step by step guide for building a great company"},
  {"id": 4, "label": "Ghost in the wires", "desc":"A book on the world's most wanted hacker"},
  {"id": 5, "label": "Brother Odd", "desc": "A book by Dean Koontz"}
]
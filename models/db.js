// OrientDB setup
// for obvious reasons, i've removed the credentials to my db. implement your own db

var orientdb = require('orientdb');
var dbConfig = {
    user_name: "",
    user_password: ""
};
var serverConfig = {
    host: "",
    port: 8888
};

var server = new orientdb.Server(serverConfig);
var DB = new orientdb.GraphDb("testPushState", server, dbConfig);

DB.open(function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Successfully connected to OrientDB");
    ensureSchemaIsSetup(function(){
    	if(err){
    		return console.log(err);
    	}
    })
});

function ensureSchemaIsSetup(callback) {
    if (DB.getClassByName("Item") === null) {
        DB.createClass("Item", "OGraphVertex", callback);
    }
}

module.exports = DB;
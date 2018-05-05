//import { builtinModules } from 'module';

var mysql = require ('mysql')
var connection = mysql.createConnection
({
host: "localhost",
user: "root",
password: "root",
port: "8889",
database: "burgers_db"

})
connection.connect(function(err){
    if(err){
        console.log ('error connected'+err.stack)
        return;

    } 
    console.log ("connected as id "+ connection.threadId);

})
module.exports = connection;

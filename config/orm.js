

var connection = require("./connection.js");
// Node import var con = require("connection");
function printQuestionMarks(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push("?")

    }
    return arr
}

function objecttosql(ob) {
    var arr = []
    for (var key in ob) {
        arr.push(key + "=" + ob[key]);

    }
}

//name + (values)  

var orm = {
    selectAll: function (table, cb) {
        var query = "SELECT * FROM " + table + ";"
        connection.query(query, function (err, result) {
            if (err) {
                throw err
            }
            cb(result)
        })
    },
    insertOne: function (table, columns, values, cb) {
        var query = "INSERT INTO " + table
        query += " (";
        query += columns.toString()
        query += ")"
        query += " VALUES ( "
        query += printQuestionMarks(values.length)
        query += ")"

        connection.query(query, values, function (err, result) {
            if (err) {
                throw err
            }
            cb(result)
        })
    },


    updateOne: function (table, objectValues, condition, cb) {
        var query = "UPDATE " + table
        query += " SET "
        query += "devoured = true "
        query += " WHERE "
        query += condition
        console.log ("query",query)
        connection.query (query, function (err,results){
            if (err){
                throw err
            }
            cb (results)
        })
    }

}
module.exports = orm 
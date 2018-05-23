var express = require("express")
var bodyParser = require ("body-parser")
var port = 3001
var app = express()
app.use(express.static(__dirname + "/public"))
app.use (bodyParser.urlencoded({extended:false}))
var expressHandlebars = require("express-handlebars")
app.engine ("handlebars",expressHandlebars({defaultLayout:'main'}))
app.set ('view engine','handlebars')
//insert routes here//
var routes = require("./controllers/burgers_controllers")
app.use(routes)


app.listen(port, function(){
    console.log ('listening at port:' + port)
});